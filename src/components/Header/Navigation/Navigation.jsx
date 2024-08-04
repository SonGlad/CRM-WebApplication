import { StyledNavigation } from "./Navigation.styled";
import { NavLink } from 'react-router-dom';
import HeaderLogo from "../../../images/images/logo.png";
import { useAuth } from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { resetOfficeUserState } from "../../../redux/User/user-slice";
import { resetOfficeLeadState } from "../../../redux/Lead/lead-slice";


export const Navigation = () => {
    const {isAdmin} = useAuth();
    const dispatch = useDispatch();
    

    const resetStateForOffice = () => {
        dispatch(resetOfficeUserState());
        dispatch(resetOfficeLeadState());
    };

    
    return (
        <StyledNavigation>
            <NavLink className="link" to={isAdmin ? '/' : '/leads'} onClick={resetStateForOffice}>
                <img className="header-logo-img" src={HeaderLogo} alt="header logo" width="42" height="42"/>
            </NavLink>
        </StyledNavigation>
    )
}; 