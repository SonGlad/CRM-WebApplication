import { useDispatch, useSelector } from "react-redux";
import { TableExternalList } from "./tableExternalLeads.styled";
import { useEffect } from "react";
import { getAllLeads } from "../../../redux/Lead/lead-operation";
import { ReactComponent as CheckedIcon } from "../../../images/svg-icons/check.svg";
import { ReactComponent as CheckBoxIcon } from "../../../images/svg-icons/rectangle.svg";

export function TableExternalLeads() {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  useEffect(() => {
    dispatch(getAllLeads());
  }, [dispatch]);
  const leads = useSelector((state) => state.lead.leads);
  const isLeadLoading = useSelector((state) => state.lead.isLeadLoading);
  const isLeadError = useSelector((state) => state.lead.isLeadError);
  console.log(leads, isLeadError);
  return (
    isAdmin &&
    !isLeadLoading ? (
      <TableExternalList>
        <table className="Table">
          <thead className="TableHeader">
            <tr className="TableHeaderList">
              <th className="TableHeaderItem">Name</th>
              <th className="TableHeaderItem">Last Name</th>
              <th className="TableHeaderItem">Email</th>
              <th className="TableHeaderItem">Phone</th>
              <th className="TableHeaderItem">New Contact</th>
              <th className="TableHeaderItem">Source</th>
              <th className="TableHeaderItem">Updated</th>
              <th className="TableHeaderItem">CRM Manager</th>
              <th className="TableHeaderItem">Conversion Manager</th>
              <th className="TableHeaderItem">Conversion Agent</th>
              <th className="TableHeaderItem">Check</th>
            </tr>
          </thead>
          <tbody>
            {leads &&
              leads.map((lead, index) => (
                <tr className="WordList" key={lead._id}>
                  <td className="TableHeaderItem">{lead.name}</td>
                  <td className="TableHeaderItem">{lead.lastName}</td>
                  <td className="TableHeaderItem">{lead.email}</td>
                  <td className="TableHeaderItem">{lead.phone}</td>
                  <td className="TableHeaderItem">
                    {lead.newContact ? "Yes" : "No"}
                  </td>
                  <td className="TableHeaderItem">{lead.resource}</td>
                  <td className="TableHeaderItem">{lead.updatedAt}</td>
                  <td className="TableHeaderItem">
                    <ul>
                      <li>{lead.crmManager.name}</li>
                      <li>{lead.crmManager.email}</li>
                    </ul>
                  </td>
                  <td className="TableHeaderItem">
                    <ul>
                      <li>{lead.conManager.name}</li>
                      <li>{lead.conManager.email}</li>
                    </ul>
                  </td>
                  <td className="TableHeaderItem">
                    <ul>
                      <li>{lead.conAgent.name}</li>
                      <li>{lead.conAgent.email}</li>
                    </ul>
                  </td>
                  <td className="TableHeaderItem">
                    <div className="custom-checkbox">
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="user_agreement"
                        id={lead._id}
                        // checked={isCheckbox.includes(_id)}
                        // onChange={() => handleCheckboxChange(_id)}
                      />
                      <div className="custom-checkbox">
                        <CheckBoxIcon
                          className="custom-checkbox-before"
                          width="16"
                          height="16"
                        />
                        <CheckedIcon
                          className="custom-checkbox-after"
                          width="16"
                          height="16"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </TableExternalList>
    ) : <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Loading...</div>
  );
}
