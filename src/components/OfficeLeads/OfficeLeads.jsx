import { StyledOfficeLeads } from "./OfficeLeads.styled";
import { NavLink } from "react-router-dom";
import { resetOfficeState } from "../../redux/Lead/lead-slice";
import { useDispatch } from "react-redux";
// import { useLead } from "../../hooks/useLead";
import { useAuth } from "../../hooks/useAuth";
import { Table } from "../table/table";



export const OfficeLeads = () => {
    const { isAdmin } = useAuth();
    // const { leadOffice } = useLead(); 
    const dispatch = useDispatch();
    // console.log(leadOffice);


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
                <Table/>
            </div>
        </StyledOfficeLeads>
    );
};