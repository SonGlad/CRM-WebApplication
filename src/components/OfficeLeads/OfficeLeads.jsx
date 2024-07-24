import { StyledOfficeLeads } from "./OfficeLeads.styled";
import { NavLink } from "react-router-dom";
import { resetOfficeState } from "../../redux/Lead/lead-slice";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { TableLeads } from "../table/tableLeads/tableLeads";



export const OfficeLeads = () => {
    const { isAdmin } = useAuth();
    const dispatch = useDispatch();


    const resetStateForOffice = () => {
        dispatch(resetOfficeState())
    };


    return(
        <StyledOfficeLeads>
            <div className="wraper">
                {isAdmin && (
                    <NavLink to='/' onClick={resetStateForOffice}>
                        <h1>Back</h1>
                    </NavLink>
                )}
                <TableLeads/>
            </div>
        </StyledOfficeLeads>
    );
};