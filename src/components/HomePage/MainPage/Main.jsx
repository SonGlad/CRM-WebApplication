import { StyledMainPage } from "./Main.styled";
import { useAuth } from "../../../hooks/useAuth";
import { getAllLeads } from "../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";
import { TableExternalLeads } from "../../table/tableExternalLeads/tableExternalLeads";
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
        <h1>MAIN PAGE</h1>
        <TableExternalLeads />
      </div>
    </StyledMainPage>
  );
};
