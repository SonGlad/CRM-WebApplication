import { MenuItemStyled } from "./MenuItem.styled";
import { ReactComponent as ArrowDown } from '../../../images/svg-icons/arrow-down.svg';
import {ReactComponent as CheckedIcon} from "../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../images/svg-icons/rectangle.svg";
import { forwardRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";



export const DeleteItem = forwardRef(({
    deleteBlock, 
    isLocation, 
    toggleUserDeleteMenuDrop,
    toggleUserDeleteDropCont,
    toggleUserDeleteDropArrow,
    usersCheckedCheckbox,
    filteredUsers,
    toggleUsersSelectAllCheckbox,
    isAdmin,
    openModalConfirm,
    toggleExternalLeadsSelectAllCheckbox,
    isLeads,
    toggleExternalLeadDeleteMenuDrop,
    toggleExternalLeadDeleteDropCont,
    toggleExternalLeadDeleteDropArrow,
    selectedExternalLeadsCheckedCheckbox,
}, ref) => {
    const dispatch = useDispatch();
    const [isUserDeleteButtonValue, setUserDeleteButtonValue] = useState(false);
    const [isExternalLeadDeleteButtonValue, setExternalLeadDeleteButtonValue] = useState(false);
    const [usersButtonValue, setUsersButtonValue] = useState('Delete');
    const [externalLeadButtonValue, setExternalLeadButtonValue] = useState('Delete');
    const [isUsersChecked, setUsersChecked] = useState(false);
    const [isExternalLeadsChecked, setExternalLeadsChecked] = useState(false);



    useEffect(() => {
        if(usersCheckedCheckbox.length === 0 || !isUsersChecked){
            setUsersButtonValue('Delete');
        }
        if (usersCheckedCheckbox.length >= 1) {
            setUsersButtonValue('Delete Selected');
        }
        if (isUsersChecked) {
            setUsersButtonValue('Delete All');
        } 
    },[usersCheckedCheckbox.length, isUsersChecked]);


    useEffect(() => {
        if(selectedExternalLeadsCheckedCheckbox.length === 0 || !isExternalLeadsChecked){
            setExternalLeadButtonValue('Delete');
        }
        if (selectedExternalLeadsCheckedCheckbox.length >= 1) {
            setExternalLeadButtonValue('Delete Selected');
        }
        if (isExternalLeadsChecked) {
            setExternalLeadButtonValue('Delete All');
        } 
    },[isExternalLeadsChecked, selectedExternalLeadsCheckedCheckbox.length]);


    useEffect(() => {
        if (isUsersChecked || usersCheckedCheckbox.length >= 1) {
            setUserDeleteButtonValue(true)
        } else {
            setUserDeleteButtonValue(false)
        }
    },[isUsersChecked, usersCheckedCheckbox.length]);


    useEffect(() => {
        if (isExternalLeadsChecked || selectedExternalLeadsCheckedCheckbox.length >= 1) {
            setExternalLeadDeleteButtonValue(true)
        } else {
            setExternalLeadDeleteButtonValue(false)
        }
    },[isExternalLeadsChecked, selectedExternalLeadsCheckedCheckbox.length]);



    const handleUsersSelectAllChange = () => {
        dispatch(toggleUsersSelectAllCheckbox());
    };

    const handleExternalLeadSelectAllChange = () => {
        dispatch(toggleExternalLeadsSelectAllCheckbox());
    };
     

    useEffect(() => {
        const allSelectedInFiltered = filteredUsers.every(user => usersCheckedCheckbox.includes(user._id));
        setUsersChecked(allSelectedInFiltered);
    }, [filteredUsers, usersCheckedCheckbox]);
 


    useEffect(() => {
        const allSelectedInFiltered = isLeads.every(lead => selectedExternalLeadsCheckedCheckbox.includes(lead._id));
        setExternalLeadsChecked(allSelectedInFiltered);
    }, [isLeads, selectedExternalLeadsCheckedCheckbox]);



    const openDeleteModal = () => {
        if(isAdmin){
            if(isLocation === 'UsersPage'){
                const data = {
                    idToDelete: usersCheckedCheckbox,
                    component: 'Users',
                }
                dispatch(openModalConfirm(data))
            }
            if(isLocation === 'MainPage'){
                const data = {
                    idToDelete: selectedExternalLeadsCheckedCheckbox,
                    component: 'ExternalLeads',
                }
                dispatch(openModalConfirm(data))
            }
        }
    };
    

    return(
        <MenuItemStyled ref={deleteBlock}>
            {(isLocation === 'UsersPage' && isAdmin) && (
                <>
                    <button type="button" className="side-panel-button"
                        onClick={toggleUserDeleteMenuDrop}
                    >Delete User
                        <ArrowDown className={`arrow-svg ${toggleUserDeleteDropArrow()}`}/>
                    </button>
                    <ul className={`delete-dropdown-list ${toggleUserDeleteDropCont()}`}>
                        <li className="users-drop-item delete-item">
                            <label htmlFor="delete users" className="delete-label">
                                <input className="delete-checkbox"
                                    name="delete_all_users" 
                                    type="checkbox"
                                    id="selectAllCheckbox"
                                    checked={isUsersChecked}
                                    onChange={handleUsersSelectAllChange}
                                />
                                Select All
                                <div className="custom-checkbox">
                                    <CheckBoxIcon className="custom-checkbox-before" width="16" height="16"/>
                                    <CheckedIcon className="custom-checkbox-after" width="16" height="16"/>
                                </div>
                            </label>
                        </li>
                        <li className="users-drop-item delete-item">
                            <button type='button' 
                                className="delete-button"
                                disabled={!isUserDeleteButtonValue}
                                onClick={openDeleteModal}
                            >{usersButtonValue}
                            </button>
                        </li>
                    </ul>
                </>
            )}
            {(isLocation === 'MainPage' && isAdmin) && (
                <>
                    <button type="button" className="side-panel-button"
                        onClick={toggleExternalLeadDeleteMenuDrop}
                    >Delete Lead
                        <ArrowDown className={`arrow-svg ${toggleExternalLeadDeleteDropArrow()}`}/>
                    </button>
                    <ul className={`delete-dropdown-list ${toggleExternalLeadDeleteDropCont()}`}>
                        <li className="users-drop-item delete-item">
                            <label htmlFor="delete users" className="delete-label">
                                <input className="delete-checkbox"
                                    name="delete_all_users" 
                                    type="checkbox"
                                    id="selectAllCheckbox"
                                    checked={isExternalLeadsChecked}
                                    onChange={handleExternalLeadSelectAllChange}
                                />
                                Select All
                                <div className="custom-checkbox">
                                    <CheckBoxIcon className="custom-checkbox-before" width="16" height="16"/>
                                    <CheckedIcon className="custom-checkbox-after" width="16" height="16"/>
                                </div>
                            </label>
                        </li>
                        <li className="users-drop-item delete-item">
                            <button type='button' 
                                className="delete-button"
                                disabled={!isExternalLeadDeleteButtonValue}
                                onClick={openDeleteModal}
                            >
                                {externalLeadButtonValue}
                            </button>
                        </li>
                    </ul>
                </>
            )}
                {isLocation === 'LeadsPage' && (
                <p>Delete Selected Lead</p>
            )}
        </MenuItemStyled>
    );
});