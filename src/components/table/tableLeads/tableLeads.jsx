import { TableListStyled } from "./tableLeads.styled";
import { ReactComponent as ArrowDown } from "../../../images/svg-icons/arrow-down.svg";
import { DropdownTimeZone } from "../tableComponents/dropdownTimeZone";
import { DropdownStatus } from "../tableComponents/dropdownStatus";
import { InputWindow } from "../tableComponents/inputWindow";
import { NextCall } from "../tableComponents/nextCall";
import { TimeZone } from "../tableComponents/timeZone";
import { City } from "../tableComponents/city";
import { Region } from "../tableComponents/region";
import { Country } from "../tableComponents/country";
import { Status } from "../tableComponents/status";
import { useTableHook } from "../tableHook.jsx/tableHook";
import { useLead } from "../../../hooks/useLead.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLeadById } from "../../../redux/Lead/lead-operation.js";
import { ClientTime } from "../tableComponents/clientTime.jsx";
import { useUser } from "../../../hooks/useUser.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { openModalLeadDetail } from "../../../redux/Modal/modal-slice.js";
import { CustomAssignLeadCheckbox } from "./CustomAssignLeadCheckbox.jsx";
import { setLeadDetailsModalTrue } from "../../../redux/Lead/lead-slice.js";

export const TableLeads = () => {
  const { isLeads, selectedAssignLeadsCheckedCheckbox, leadOffice } = useLead();
  const {
    userBranch,
    userRole,
    isAdmin,
    isConversion,
    isManager,
    isLoggedIn,
  } = useAuth();
  const { userLeads, userLeadsComponent } = useUser();
  const [leads, setLeads] = useState();
  const dispatch = useDispatch();   


  useEffect(() => {
    if (userLeads || isLeads) {
      setLeads(userLeadsComponent ? userLeads : isLeads);
    }
  }, [isLeads, userLeadsComponent, userLeads]);

  const {
    inputVisible,
    inputRef,
    dropdownRef,
    setInputVisible,
    handleTextareaChange,
    toggleUserMenuDropArrow,
    toggleInputVisibility,
  } = useTableHook();

  const openExternalLeadDetail = (_id) => {
    dispatch(openModalLeadDetail());
    dispatch(setLeadDetailsModalTrue("Office"));
    if (isLoggedIn && isAdmin) {
      dispatch(
        getLeadById({
          leadId: _id,
          branch: leadOffice,
        })
      );
    } else if (isLoggedIn && (isConversion || isManager)) {
      dispatch(getLeadById({ leadId: _id }));
    }
  };

  return (
   
    <TableListStyled>
       <div className="TableContainer">
      <table className="Table">
        <thead className="TableHeader">
          <tr className="TableHeaderList">
            <th className="TableHeaderItem">Client Id</th>
            <th className="TableHeaderItem">Name</th>
            <th className="TableHeaderItem">Last Name</th>
            <th className="TableHeaderItem">Email</th>
            <th className="TableHeaderItem">Phone</th>
            <th className="TableHeaderItem">Status</th>
            <th className="TableHeaderItem">Source</th>
            <th className="TableHeaderItem">Country</th>
            <th className="TableHeaderItem">Region</th>
            <th className="TableHeaderItem">City</th>
            <th className="TableHeaderItem">Time Zone</th>
            <th className="TableHeaderItem">Client Time</th>
            <th className="TableHeaderItem">Self created</th>
            <th className="TableHeaderItem">Last update</th>
            <th className="TableHeaderItem">Created At</th>
            {userRole !== "Conversion Agent" && (
              <th className="TableHeaderItem">Assign / Reassign Agent</th>
            )}
            {userRole !== "Conversion Manager" &&
              userRole !== "Conversion Agent" && (
                <th className="TableHeaderItem">Assign / Reassign Manager</th>
              )}
            <th className="TableHeaderItem">Next call</th>
            <th className="TableHeaderItem">Details</th>
            {userBranch === "Main" && (
              <th className="TableHeaderItem">Check</th>
            )}
          </tr>
        </thead>
        <tbody>
          {leads &&
            leads.map((lead, index) => (
              <tr className="WordList" key={lead._id}>
                <td className="TableHeaderItem">{lead.clientId}</td>
                <td className="TableHeaderItem">{lead.name}</td>
                <td className="TableHeaderItem">{lead.lastName}</td>
                <td className="TableHeaderItem">{lead.email}</td>
                <td className="TableHeaderItem">{lead.phone}</td>
                <Status
                  index={index}
                  lead={lead}
                  ArrowDown={ArrowDown}
                  toggleInputVisibility={toggleInputVisibility}
                  toggleUserMenuDropArrow={toggleUserMenuDropArrow}
                />
                <td className="TableHeaderItem">{lead.resource}</td>
                <Country
                  index={index}
                  lead={lead}
                  ArrowDown={ArrowDown}
                  toggleInputVisibility={toggleInputVisibility}
                  toggleUserMenuDropArrow={toggleUserMenuDropArrow}
                />
                <Region
                  index={index}
                  lead={lead}
                  ArrowDown={ArrowDown}
                  toggleInputVisibility={toggleInputVisibility}
                  toggleUserMenuDropArrow={toggleUserMenuDropArrow}
                />
                <City
                  index={index}
                  lead={lead}
                  ArrowDown={ArrowDown}
                  toggleInputVisibility={toggleInputVisibility}
                  toggleUserMenuDropArrow={toggleUserMenuDropArrow}
                />
                <TimeZone
                  lead={lead}
                  ArrowDown={ArrowDown}
                  toggleInputVisibility={toggleInputVisibility}
                  index={index}
                  toggleUserMenuDropArrow={toggleUserMenuDropArrow}
                />
                <ClientTime lead={lead} />
                <td className="TableHeaderItem">
                  {lead.selfCreated ? "Yes" : "No"}
                </td>
                <td className="TableHeaderItem">
                  {lead.updatedAt &&
                    lead.updatedAt.slice(0, 16).replace("T", " ")}
                </td>
                <td className="TableHeaderItem">
                  {lead.createdAt &&
                    lead.createdAt.slice(0, 16).replace("T", " ")}
                </td>
                {userRole !== "Conversion Agent" && 
                <td
                  className="TableHeaderItem"
                  style={{ background: !lead.conAgentId ? "#ff000082" : "" }}
                >
                  {!lead.conAgentId ? (
                    'Not Assigned'
                  ) : (
                    lead.conAgentId.username
                  )}
                </td>}
                {userRole !== "Conversion Manager" && userRole !== "Conversion Agent" && <td
                  className="TableHeaderItem"
                  style={{ background: !lead.conManagerId ? "#ff000082" : "" }}
                >
                  {!lead.conManagerId ? (
                    'Not Assigned'
                  ) : (
                    lead.conManagerId.username
                  )}
                <NextCall lead={lead} />
                <td className="TableHeaderItem">
                  <button className="check-btn" type='button'
                    onClick={() => openExternalLeadDetail(lead._id, lead.branch)}
                  >Open
                  </button>
                </td>
                {userBranch === "Main" && (
                  <td className="TableHeaderItem">
                    <CustomAssignLeadCheckbox
                      lead={lead}
                      selectedAssignLeadsCheckedCheckbox={
                        selectedAssignLeadsCheckedCheckbox
                      }
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>    
      <InputWindow
        leads={leads}
        inputVisible={inputVisible}
        inputRef={inputRef}
        setLeads={setLeads}
        handleTextareaChange={handleTextareaChange}
        setInputVisible={setInputVisible}
      />
      <DropdownStatus
        inputVisible={inputVisible}
        dropdownRef={dropdownRef}
        leads={leads}
        setLeads={setLeads}
        setInputVisible={setInputVisible}
      />
      <DropdownTimeZone
        inputVisible={inputVisible}
        dropdownRef={dropdownRef}
        leads={leads}
        setLeads={setLeads}
        setInputVisible={setInputVisible}
        />
        </div>
      </TableListStyled>
      
  );
};
