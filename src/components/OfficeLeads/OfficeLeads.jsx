import { StyledOfficeLeads } from "./OfficeLeads.styled";
import { NavLink } from "react-router-dom";
import { resetOfficeLeadState } from "../../redux/Lead/lead-slice";
import { resetUserLeadsComponent } from "../../redux/User/user-slice";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";
import { useLead } from "../../hooks/useLead";
import { TableLeads } from "../table/tableLeads/tableLeads";
import { Pagination } from "../Pagination/Pagination";
import { RotatingLoader } from "../CustomLoaders/CustomLoaders";
import { useModal } from "../../hooks/useModal";




export const OfficeLeads = () => {
    const { isAdmin } = useAuth();
    const { isLeadLoading, leadOffice } = useLead();
    const { isLeadDetails } = useModal();
    const { userLeadsComponent } = useUser()
    const dispatch = useDispatch();
    

    const resetStateForLeads = () => {
        if (leadOffice) {
            dispatch(resetOfficeLeadState());
        }
        if (userLeadsComponent) {
            dispatch(resetUserLeadsComponent());
        }
    };


    return(
        <StyledOfficeLeads>
            <div className="wraper">
                {isAdmin && (
                    <NavLink to='/' onClick={resetStateForLeads}>
                        <h1>Back</h1>
                    </NavLink>
                )}
                <div className="content-container">
                    {(isLeadLoading && !isLeadDetails) ? (
                        <RotatingLoader/>
                    ):(
                        <TableLeads/>
                    )}
                    <Pagination/>
                </div>
            </div>
        </StyledOfficeLeads>
    );
};