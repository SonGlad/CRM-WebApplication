import { StyledOfficeLeads } from "./OfficeLeads.styled";
import { NavLink } from "react-router-dom";
import { resetOfficeLeadState } from "../../redux/Lead/lead-slice";
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
    const { isLeadLoading } = useLead();
    const { isLeadDetails } = useModal();
    const {availableUsersForAssign} = useUser()
    const dispatch = useDispatch();
    console.log("Users for Assign:", availableUsersForAssign);

    const resetStateForOffice = () => {
        dispatch(resetOfficeLeadState());
    };


    return(
        <StyledOfficeLeads>
            <div className="wraper">
                {isAdmin && (
                    <NavLink to='/' onClick={resetStateForOffice}>
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