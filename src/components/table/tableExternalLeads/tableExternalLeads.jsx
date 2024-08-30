import { TableExternalList } from "./tableExternalLeads.styled";
import { useAuth } from "../../../hooks/useAuth";
import { useLead } from "../../../hooks/useLead";
import { useUser } from "../../../hooks/useUser";
import { useDispatch } from "react-redux";
import { openModalLeadDetail } from "../../../redux/Modal/modal-slice";
import { setLeadDetailsModalTrue } from "../../../redux/Lead/lead-slice";
import { getLeadById } from "../../../redux/Lead/lead-operation";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { AssignedDropCont } from "./AssignDropCont";
import { CustomCheckbox } from "./CustomCheckbox";



export function TableExternalLeads() {
  const dispatch = useDispatch();
  const { isAdmin } = useAuth();
  const { userSelectOffice } = useUser();
  const { isLeads, selectedExternalLeadsCheckedCheckbox } = useLead();
  

  let filteredLeads;
  if (isLeads) {
    filteredLeads = [...isLeads].sort((a, b) => {
      if (a.newContact === b.newContact) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return a.newContact ? -1 : 1;
    });
  }


  const openExternalLeadDetail = (_id) => {  
    dispatch(openModalLeadDetail());
    dispatch(setLeadDetailsModalTrue('External'));
    dispatch(getLeadById({leadId: _id}));
  };


  const formatDateTime = (dateString, timeZone = 'Europe/Kiev') => {
    const date = new Date(dateString);
    const zonedDate = toZonedTime(date, timeZone);

    const formattedDate = format(zonedDate, 'yyyy-MM-dd', { timeZone });
    const formattedTime = format(zonedDate, 'HH:mm', { timeZone });

    return `${formattedDate} ${formattedTime}`;
  };


  const formatBranchName = (branch) => {
    if (branch) {
      return branch.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    }
  };


  const capitalizeSource = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  // For style 'small-table' - check styles on Main.styled.js
  const chnageTableStyle = () => {
    return isLeads.length < 13 ? 'small-table' : '';
  };

  
  return (
    <TableExternalList className={chnageTableStyle()}>
      <table className="Table">
        <thead className="TableHeader">
          <tr className="TableHeaderList">
            <th id="nameColumn" className="TableHeaderName">Name:</th>
            <th id="lastNameColumn" className="TableHeaderName">Last Name:</th>
            <th id="emailColumn" className="TableHeaderName">Email:</th>
            <th id="phoneColumn" className="TableHeaderName">Phone:</th>
            <th id="sourceColumn" className="TableHeaderName">Source:</th>
            <th id="createdColumn" className="TableHeaderName">Created:</th>
            <th id="officeColumn" className="TableHeaderName">Office:</th>
            <th id="crmManagerColumn" className="TableHeaderName">CRM Manager:</th>
            <th id="conversionManagerColumn" className="TableHeaderName">Conversion Manager:</th>
            <th id="conversionAgentColumn" className="TableHeaderName">Conversion Agent:</th>
            <th id="assignColumn" className="TableHeaderName">Assign / ReAssign</th>
            <th id="detailsColumn" className="TableHeaderName">Details</th>
            <th id="checkColumn" className="TableHeaderName">Check</th>
          </tr>
        </thead>
        <tbody>
          {isLeads &&
            filteredLeads.map((lead, index) => (
              <tr className={lead.newContact ? 'back-color' : ''} key={lead._id}>
                <td className="TableHeaderItem">{lead.name}</td>
                <td className="TableHeaderItem">{lead.lastName}</td>
                <td className="TableHeaderItem">{lead.email}</td>
                <td className="TableHeaderItem">{lead.phone}</td>
                <td className="TableHeaderItem">{capitalizeSource(lead.resource)}</td>
                <td className="TableHeaderItem">{formatDateTime(lead.createdAt)}</td>
                <td className="TableHeaderItem">{formatBranchName(lead.assignedOffice)}</td>
                <td className="TableHeaderItem">
                  {lead.crmManager.name || lead.crmManager.email ? (
                  <ul>
                    <li>
                      <p>{lead.crmManager.name}</p>
                    </li>
                    <li>
                      <p>{lead.crmManager.email}</p>
                    </li>
                  </ul>
                  ) : (
                    <p>Not Assigned Yet</p>
                  )}
                </td>
                <td className="TableHeaderItem">
                  {lead.conManager.name || lead.conManager.email ? (
                    <ul>
                      <li>
                        <p>{lead.conManager.name}</p>
                      </li>
                      <li>
                        <p>{lead.conManager.email}</p>
                      </li>
                    </ul>
                  ) : (
                    <p>Not Assigned Yet</p>
                  )}
                </td>
                <td className="TableHeaderItem">
                  {lead.conAgent.name || lead.conAgent.email ? (
                    <ul>
                      <li>
                        <p>{lead.conAgent.name}</p>
                      </li>
                      <li>
                        <p>{lead.conAgent.email}</p>
                      </li>
                    </ul>
                  ) : (
                    <p>Not Assigned Yet</p>
                  )}
                </td>
                <td className="TableHeaderItem">
                  <AssignedDropCont
                    isAdmin={isAdmin}
                    lead={lead}
                    userSelectOffice={userSelectOffice}
                    dispatch={dispatch}
                  />
                </td>
                <td className="TableHeaderItem">
                  <button className="check-btn" type='button'
                    onClick={() => openExternalLeadDetail(lead._id)}
                  >Open
                  </button>
                </td>
                <td className="TableHeaderItem">
                  <CustomCheckbox
                    lead={lead}
                    selectedExternalLeadsCheckedCheckbox={selectedExternalLeadsCheckedCheckbox}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableExternalList>
  ) 
}
