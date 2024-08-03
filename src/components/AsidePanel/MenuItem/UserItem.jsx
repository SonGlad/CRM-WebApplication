import { MenuItemStyled } from "./MenuItem.styled";
import { ReactComponent as ArrowDown } from '../../../images/svg-icons/arrow-down.svg';
import { openModalNewUser } from "../../../redux/Modal/modal-slice";
import { forwardRef, useRef, useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { isOfficeState } from "../../../redux/User/user-slice";
import { useAuth } from "../../../hooks/useAuth";


export const UserItem = forwardRef(({
    userBlock, 
    toggleUserMenuDrop, 
    toggleUserDropArrow, 
    toggleUserDropCont, 
    userSelectOffice,
    }, ref) => {
    const dispatch = useDispatch();
    const [isVisible, setVisible] = useState(false);
    const officeBlock = useRef(null);
    const { isAdmin } = useAuth();


    const openNewUserModal = () => {
        toggleUserMenuDrop();
        dispatch(openModalNewUser());
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
        toggleUserMenuDrop();
        openOfficeMenu();
        if (isAdmin) {
            dispatch(isOfficeState(office));
        }
    };


    return(
        <MenuItemStyled ref={userBlock}>
            <button type='button' className="side-panel-button" onClick={toggleUserMenuDrop}>
                Users
                <ArrowDown className={`arrow-svg ${toggleUserDropArrow()}`}/>
            </button>
            <ul className={`users-dropdown-list ${toggleUserDropCont()}`}>
                <li className="users-drop-item">
                    <button type='button' className="users-dropdowm-button" 
                        onClick={openNewUserModal}>Create User
                    </button>
                </li>
                {isAdmin ? (
                    <li className="users-drop-item" ref={officeBlock}>
                        <button type='button' className="users-dropdowm-button button-two"
                            onClick={openOfficeMenu}    
                            >Check Users
                            <ArrowDown className={`side-arrow-svg ${toggleOfficeSideArrow()}`}/>
                            </button>
                        <ul className={`office-list ${toggleOfficeDropCont()}`}>
                            {userSelectOffice.map(({office}, index) => (
                                <li className="office-item" key={index} onClick={() => linkCloseMenu(office)}>
                                    <NavLink className='nav-link' to='/users'>
                                        <p>{formatOfficeName(office)}</p>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ) : (
                    <li className="users-drop-item none-admin-drop-item" onClick={() => linkCloseMenu()}>
                        <NavLink className='nav-link' to='/users'>
                            <p>Check Users</p>
                        </NavLink>
                    </li>
                )}
            </ul>
        </MenuItemStyled>
    );
});