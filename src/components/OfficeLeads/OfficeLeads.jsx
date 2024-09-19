import { StyledOfficeLeads } from "./OfficeLeads.styled";
import {ReactComponent as ArrowSVG} from "../../images/svg-icons/arrow-left.svg";
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
import { ShowRules } from "../../utils/showRules";
import { FilterBlock } from "../FilterBlock/FilterBlock";



export const OfficeLeads = () => {
    const { formatOfficeName } = ShowRules();
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
        <StyledOfficeLeads $isAdmin={isAdmin}>
            <div className="wraper">
                <div className="nav-block">
                    {isAdmin ? (
                        <>
                            <NavLink className="link" to='/' onClick={resetStateForLeads}>
                                <ArrowSVG className="svg"/>
                                <h1 className="titles">Back</h1>
                            </NavLink>
                            <h2 className="titles">{formatOfficeName(leadOffice)} Leads List & Management</h2>
                        </>
                    ) : (
                        <h2 className="titles">All Office Leads List & Management</h2>
                    )}
                </div>
                <FilterBlock/>
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