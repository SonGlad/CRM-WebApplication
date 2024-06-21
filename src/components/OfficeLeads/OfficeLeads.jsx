import { StyledOfficeLeads } from "./OfficeLeads.styled";
import { NavLink } from "react-router-dom";
import { resetOfficeState } from "../../redux/Lead/lead-slice";
import { useDispatch } from "react-redux";
import { useLead } from "../../hooks/useLead";



export const OfficeLeads = () => {
    const { leadOffice } = useLead(); 
    const dispatch = useDispatch();
    console.log(leadOffice);


    const resetStateForOffice = () => {
        dispatch(resetOfficeState())
    };


    return(
        <StyledOfficeLeads>
            <div className="wraper">
                <NavLink to='/' onClick={resetStateForOffice}>
                    <h1>Back</h1>
                </NavLink>
                <h1>LEADS PAGE</h1>
            </div>
        </StyledOfficeLeads>
    );
};