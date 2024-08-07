import { StyledMainPage } from "./Main.styled";
import { useAuth } from "../../../hooks/useAuth";
import { getAllLeads } from "../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";
import { TableExternalLeads } from "../../table/tableExternalLeads/tableExternalLeads";
import { Pagination } from "../../Pagination/Pagination";
import { useEffect } from "react";



export const Main = () => {
  const { isAdmin } = useAuth();
  const dispatch = useDispatch();


  useEffect(() => {
    if (isAdmin) {
      dispatch(getAllLeads())
    }    
  },[dispatch, isAdmin]);


  
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
          <TableExternalLeads />
          <Pagination/>
      </div>
    </StyledMainPage>
  );
};
