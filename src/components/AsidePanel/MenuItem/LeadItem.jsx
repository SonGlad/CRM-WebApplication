import { MenuItemStyled } from "./MenuItem.styled";
import { ReactComponent as ArrowDown } from '../../../images/svg-icons/arrow-down.svg';
import { forwardRef,useRef, useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { openModalNewLead } from "../../../redux/Modal/modal-slice";
import { isOfficeState } from "../../../redux/Lead/lead-slice";
import { resetUserLeadsComponent } from "../../../redux/User/user-slice";
import { useAuth } from "../../../hooks/useAuth";
import { useUser } from "../../../hooks/useUser";


export const LeadItem = forwardRef(({
    leadBlock, 
    toggleLeadMenuDrop, 
    toggleLeadDropArrow, 
    toggleLeadDropCont, 
    userSelectOffice,
    getAllLeads,
    }, ref) => {
    const dispatch = useDispatch();
    const [isVisible, setVisible] = useState(false);
    const officeBlock = useRef(null);
    const { isAdmin } = useAuth();
    const { userLeadsComponent } = useUser();


    const openNewLeadModal = () => {
        toggleLeadMenuDrop();
        dispatch(openModalNewLead());
    };


    const formatOfficeName = (office) => {
        return office.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };


    const openOfficeMenu = () => {
        setVisible(prevState => !prevState)
    };


    const toggleOfficeDropCont = () => {
        return isVisible ? 'office-list-visible' : '';
    };
    const toggleOfficeSideArrow = () => {
        return isVisible ? 'side-arrow-svg-active' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setVisible(false);
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        if (officeBlock.current && !officeBlock.current.contains(event.target)) {
            setVisible(false);
        }
    },[]);


    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
          document.removeEventListener('click', handleBackgroundClick);
        };
    },[handleBackgroundClick, handleKeyPress]);


    const linkCloseMenu = (office) => {
        toggleLeadMenuDrop();
        openOfficeMenu();
        if (isAdmin) {
            dispatch(isOfficeState(office));
        }
        if (userLeadsComponent) {
            dispatch(resetUserLeadsComponent());
        }
    };
   

    
    return(
        <MenuItemStyled ref={leadBlock}>
            <button type='button' className="side-panel-button" onClick={toggleLeadMenuDrop}>
                Leads
                <ArrowDown className={`arrow-svg ${toggleLeadDropArrow()}`}/>
            </button>
            <ul className={`users-dropdown-list ${toggleLeadDropCont()}`}>
                <li className="users-drop-item">
                    <button type='button' className="users-dropdowm-button"
                        onClick={openNewLeadModal}>Create Lead
                    </button>
                </li>
                {isAdmin ? (
                    <li className="users-drop-item" ref={officeBlock}>
                        <button type='button' className="users-dropdowm-button button-two"
                            onClick={openOfficeMenu}    
                            >Check Leads
                            <ArrowDown className={`side-arrow-svg ${toggleOfficeSideArrow()}`}/>
                            </button>
                        <ul className={`office-list ${toggleOfficeDropCont()}`}>
                            {userSelectOffice.map(({office}, index) => (
                                <li className="office-item" key={index} onClick={() => linkCloseMenu(office)}>
                                    <NavLink className='nav-link' to='/leads'>
                                        <p>{formatOfficeName(office)}</p>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ) : (
                    <li className="users-drop-item none-admin-drop-item" onClick={() => linkCloseMenu()}>
                        <NavLink className='nav-link' to='/leads'>
                            <p>Check Leads</p>
                        </NavLink>
                    </li>
                )}
            </ul>
        </MenuItemStyled>
    );
});