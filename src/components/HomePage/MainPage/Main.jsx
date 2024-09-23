import { StyledMainPage } from "./Main.styled";
import {ReactComponent as NothingFoundIcon} from "../../../images/svg-icons/No_results_1.svg"
import { TableExternalLeads } from "../../table/tableExternalLeads/tableExternalLeads";
import { Pagination } from "../../Pagination/Pagination";
import { RotatingLoader } from "../../CustomLoaders/CustomLoaders";
import { useAuth } from "../../../hooks/useAuth";
import { useLead } from "../../../hooks/useLead";
import { useModal } from "../../../hooks/useModal";
import { useUser } from "../../../hooks/useUser";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetOfficeUserState, resetUserLeadsComponent } from "../../../redux/User/user-slice";
import { resetOfficeLeadState } from "../../../redux/Lead/lead-slice";
import { resetAllStates } from "../../../redux/Filter/filter-slice";
import { FilterBlock } from "../../FilterBlock/FilterBlock";



export const Main = () => {
  const { isAdmin } = useAuth();
  const { isLeadDetails } = useModal();
  const { isLeadLoading, leadOffice, isLeads, isLeadsError } = useLead();
  const { userOffice, userLeadsComponent } = useUser();
  const [ leadLength, setLeadLength ] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (isLeads.length > 0) {
      setLeadLength(true);
    } else {
      setLeadLength(false);
    }
},[isLeads.length, setLeadLength])


  useEffect(() => {
    if (userOffice) {
      dispatch(resetOfficeUserState());
    }
    if (leadOffice) {
      dispatch(resetOfficeLeadState());
      dispatch(resetAllStates());
    }
    if (userLeadsComponent) {
      dispatch(resetUserLeadsComponent())
    }
  },[dispatch, leadOffice, userLeadsComponent, userOffice]);

 
  
  return (
    <StyledMainPage>
      {isAdmin && (
        <div className="wraper">
          <h1 className="page-title">External Leads List & Management</h1>
          <FilterBlock/>
          <div className="content-container">
            {(isAdmin && isLeadLoading && !isLeadDetails) ? (
              <RotatingLoader/>
            ) : (
              (!isLeadsError && (isLeads || leadLength)) ? (
                <TableExternalLeads/>
            ) : (
              <NothingFoundIcon
                style={{margin: "0 auto"}} 
              />
            ) 
            )}
            <Pagination/>
          </div>
        </div>
      )}
    </StyledMainPage>
  );
};
