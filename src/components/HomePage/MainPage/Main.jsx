import { StyledMainPage } from "./Main.styled";
import { TableExternalLeads } from "../../table/tableExternalLeads/tableExternalLeads";
import { Pagination } from "../../Pagination/Pagination";
import { RotatingLoader } from "../../CustomLoaders/CustomLoaders";
import { useAuth } from "../../../hooks/useAuth";
import { useLead } from "../../../hooks/useLead";
import { useModal } from "../../../hooks/useModal";



export const Main = () => {
  const { isAdmin } = useAuth();
  const { isLeadDetails } = useModal();
  const { isLeadLoading } = useLead();


  
  return (
    <StyledMainPage>
      <div className="wraper">
        <h1 className="page-title">External Leads List & Management</h1>
        <div className="filter-block">
          <ul className="filter-list">
            <li className="filter-item">
              <p>FILTER BLOCK</p>
            </li>
          </ul>
        </div>
          <div className="content-container">
            {(isAdmin && isLeadLoading && !isLeadDetails) ? (
              <RotatingLoader/>
            ) : (
              <TableExternalLeads/>
            )}
            <Pagination/>
          </div>
      </div>
    </StyledMainPage>
  );
};
