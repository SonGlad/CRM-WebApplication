import { TableListStyled } from "./tableLeads.styled";
import { ClientTime } from "./TableComponents/clientTime.jsx";
import { NextCall } from "./TableComponents/nextCall.jsx";
import { Status } from "./TableComponents/Status.jsx";
import { TimeZone } from "./TableComponents/TimeZone.jsx";
import { Country } from "./TableComponents/Country.jsx";
import { Region } from "./TableComponents/Region.jsx";
import { City } from "./TableComponents/City.jsx";
import { ManagerAssignReAssignBlock } from "./TableComponents/ManagerAssignReassign.jsx";
import { AgentAssignReAssignBlock } from "./TableComponents/AgentAssignReAssignBlock.jsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLead } from "../../../hooks/useLead.js";
import { useUser } from "../../../hooks/useUser.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { openModalLeadDetail } from "../../../redux/Modal/modal-slice.js";
import { CustomAssignLeadCheckbox } from "./TableComponents/CustomAssignLeadCheckbox.jsx";
import { getLeadById } from "../../../redux/Lead/lead-operation.js";
import { setLeadDetailsModalTrue } from "../../../redux/Lead/lead-slice.js";
import { ShowRules } from "../../../utils/showRules.js";



export const TableLeads = () => {
  const { 
    isLeads, 
    selectedOfficeLeadsCheckedCheckbox, 
    leadOffice, 
    status, 
    timeZone,
  } = useLead();
  const { formatDateTime } = ShowRules();
  const {isAdmin, isConversion, isManager, isConversionManager, isLoggedIn} = useAuth();
  const { userLeads, userLeadsComponent, availableUsersForAssign } = useUser();
  const [leads, setLeads] = useState();
  const dispatch = useDispatch();

   
  useEffect(() => {
    if (userLeadsComponent && userLeads) {
      setLeads(userLeads)
    } else if(isLeads){
      setLeads(isLeads)
    }
  }, [isLeads, userLeads, userLeadsComponent]);
  
  
  const openOfficeLeadDetail = (_id) => {
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


  // For style 'small-table' - check styles on OfficeLeads.styled.js
  const chnageTableStyle = () => {
    if(leads){
      return leads.length < 16 ? 'small-table' : '';
    }
  };


  let filteredLeads;
  if (leads) {
    filteredLeads = [...isLeads].sort((a, b) => {
      if (a.status === "New" && b.status !== "New") {
        return -1;
      } 
      if (a.status !== "New" && b.status === "New") {
        return 1;
      }
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  }
  

  return (
    <TableListStyled className={chnageTableStyle()} $userLeadsComponent={userLeadsComponent}>
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
            {(isAdmin || isManager) && (
              isManager ? (
                <th className="TableHeaderItem">Assign / Reassign Manager</th>
              ) : (
                <th className="TableHeaderItem">Assigned Manager</th>
              )
            )}
            {(isAdmin || isManager || isConversionManager) && (
              isConversionManager ? (
                <th className="TableHeaderItem">Assign / Reassign Agent</th>
              ) : (
                <th className="TableHeaderItem">Assigned Agent</th>
              )
              )}
            <th className="TableHeaderItem">Next call</th>
            <th className="TableHeaderItem">Details</th>
            {isAdmin && (
              <th className="TableHeaderItem">Check</th>
            )}
          </tr>
        </thead>
        <tbody>
          {leads && filteredLeads.map((lead, index) => (
            <tr className={lead.status === 'New' ? 'back-color' : ''} key={lead._id}>
              <td className="TableHeaderItem">{lead.clientId}</td>
              <td className="TableHeaderItem">{lead.name}</td>
              <td className="TableHeaderItem">{lead.lastName}</td>
              <td className="TableHeaderItem">{lead.email}</td>
              <td className="TableHeaderItem">{lead.phone}</td>
              <td className="TableHeaderItem">
                <Status
                  leads={leads}
                  lead={lead}
                  index={index}
                  status={status}
                  isAdmin={isAdmin}
                  isConversion={isConversion}
                  isManager={isManager}
                />
              </td>
              <td className="TableHeaderItem">{lead.resource}</td>
              <td id="countryColumn" className="TableHeaderItem">
                <Country
                  leads={leads}
                  lead={lead}
                  index={index}
                  isAdmin={isAdmin}
                  isConversion={isConversion}
                  isManager={isManager}
                />
              </td>
              <td id="regionColumn" className="TableHeaderItem">
                <Region
                  leads={leads}
                  lead={lead}
                  index={index}
                  isAdmin={isAdmin}
                  isConversion={isConversion}
                  isManager={isManager}
                />
              </td>
              <td id="cityColumn" className="TableHeaderItem">
                <City
                  leads={leads}
                  lead={lead}
                  index={index}
                  isAdmin={isAdmin}
                  isConversion={isConversion}
                  isManager={isManager}
                />
              </td>
              <td className="TableHeaderItem">
                <TimeZone
                  leads={leads}
                  lead={lead}
                  index={index}
                  timeZone={timeZone}
                  isAdmin={isAdmin}
                  isConversion={isConversion}
                  isManager={isManager}
                />
              </td>
              <td className="TableHeaderItem" style={{ maxWidth: "60px", textWrap: "unset"}}>
                <ClientTime lead={lead} />
              </td>
              <td className="TableHeaderItem">
                {lead.selfCreated ? "Yes" : "No"}
              </td>
              <td className="TableHeaderItem">
                {lead.updatedAt && formatDateTime(lead.updatedAt)}
              </td>
              <td className="TableHeaderItem">
                {lead.createdAt && formatDateTime(lead.createdAt)}
              </td>
              {(isAdmin || isManager) &&
                <td id="mangerColumn" className="TableHeaderItem"
                  style={{ background: lead.selfCreated 
                    ? "transparent" 
                    : !lead.conManagerId 
                    && "#ff000082" 
                  }}
                >
                  {!isManager ? (
                    lead.selfCreated ? ("N/A") : (
                      lead.conManagerId ? (
                        lead.conManagerId.username
                      ) : (
                        'Not Assigned Yet'
                      )
                    )
                  ) : (
                    <ManagerAssignReAssignBlock
                      availableUsersForAssign={availableUsersForAssign}
                      leads={leads}
                      lead={lead}
                      index={index}
                      isManager={isManager}
                    />
                  )}
                </td>
              }
              {(isAdmin || isManager || isConversionManager) && (
                <td id="agentColumn" className="TableHeaderItem"
                  style={{ background: lead.selfCreated 
                    ? "transparent" 
                    : !lead.conAgentId 
                    && "#ff000082"
                  }}
                >
                  {!isConversionManager ? (
                    lead.selfCreated ? ('N/A') : (
                      lead.conAgentId ? (
                        lead.conAgentId.username
                      ) : (
                        'Not Assigned Yet'
                      )
                    )
                  ) : (
                    <AgentAssignReAssignBlock
                      availableUsersForAssign={availableUsersForAssign}
                      leads={leads}
                      lead={lead}
                      index={index}
                      isConversionManager={isConversionManager}
                    />
                  )}
                </td>
              )}
              <NextCall lead={lead} />
              <td className="TableHeaderItem">
                <button className="check-btn" type='button'
                  onClick={() => openOfficeLeadDetail(lead._id, lead.branch)}
                >Open
                </button>
              </td>
              {isAdmin && (
                <td className="TableHeaderItem">
                  <CustomAssignLeadCheckbox
                    lead={lead}
                    selectedOfficeLeadsCheckedCheckbox={selectedOfficeLeadsCheckedCheckbox}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>    
    </TableListStyled>
  );
};
