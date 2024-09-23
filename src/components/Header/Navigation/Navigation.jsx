import { StyledNavigation } from "./Navigation.styled";
import { NavLink } from 'react-router-dom';
import HeaderLogo from "../../../images/images/logo.png";
import { useAuth } from "../../../hooks/useAuth";
import { useUser } from "../../../hooks/useUser";
import { useLead } from "../../../hooks/useLead";
import { useDispatch } from "react-redux";
import { resetOfficeUserState, resetUserLeadsComponent } from "../../../redux/User/user-slice";
import { resetOfficeLeadState } from "../../../redux/Lead/lead-slice";
import { resetAllStates } from "../../../redux/Filter/filter-slice"
import { useEffect, useState } from "react";


export const Navigation = () => {
    const [isPointerEvents, setPointerEvents] = useState(true);
    const { isAdmin, isLoggedIn, userLocation, isManager, isConversion } = useAuth();
    const { userLeadsComponent, userOffice } = useUser();
    const { leadOffice } = useLead();
    const dispatch = useDispatch(); 
        

    const resetStateForOffice = () => {
        if (userOffice) {
            dispatch(resetOfficeUserState());
        }
        if (leadOffice) {
            dispatch(resetOfficeLeadState());
            dispatch(resetAllStates());
        }
        if (userLeadsComponent) {
            dispatch(resetUserLeadsComponent());
        }
    };   
    


    useEffect(() => {
        if (isAdmin && isLoggedIn && userLocation === '/') {
            setPointerEvents(false);
        } else if(isLoggedIn && ( isManager || isConversion) && !userLeadsComponent && userLocation === '/leads'){
            setPointerEvents(false);
        } else {
            setPointerEvents(true);
        }
    },[isAdmin, isConversion, isLoggedIn, isManager, userLeadsComponent, userLocation]);


    const pointerEventsStyle = () => {
        return !isPointerEvents ? 'pointer-events' : '';
    };

    
    return (
        <StyledNavigation>
            {isLoggedIn ? (
                <NavLink 
                    className={`link ${pointerEventsStyle()}`}
                    to={isAdmin ? '/' : '/leads'} 
                    onClick={resetStateForOffice}
                >
                    <img className="header-logo-img" src={HeaderLogo} alt="header logo" width="42" height="42"/>
                </NavLink>
            ) : (
                <NavLink className='link' to={'/'}>
                    <img className="header-logo-img" src={HeaderLogo} alt="header logo" width="42" height="42"/>
                </NavLink>
            )}
        </StyledNavigation>
    )
}; 