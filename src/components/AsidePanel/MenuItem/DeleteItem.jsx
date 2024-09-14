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
    selectedOfficeLeadsCheckedCheckbox,
    toggleOfficeLeadsSelectAllCheckbox,
    toggleOfficeLeadDeleteMenuDrop,
    toggleOfficeLeadDeleteDropCont,
    toggleOfficeLeadDeleteDropArrow,
}, ref) => {
    const dispatch = useDispatch();
    const [isUserDeleteButtonValue, setUserDeleteButtonValue] = useState(false);
    const [isExternalLeadDeleteButtonValue, setExternalLeadDeleteButtonValue] = useState(false);
    const [isOfficeLeadDeleteButtonValue, setOfficeLeadDeleteButtonValue] = useState(false);
    const [usersButtonValue, setUsersButtonValue] = useState('Delete');
    const [externalLeadButtonValue, setExternalLeadButtonValue] = useState('Delete');
    const [officeLeadButtonValue, setOfficeLeadButtonValue] = useState('Delete');
    const [isUsersChecked, setUsersChecked] = useState(false);
    const [isExternalLeadsChecked, setExternalLeadsChecked] = useState(false);
    const [isOfficeLeadsChecked, setOfficeLeadsChecked] = useState(false);
    

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
        if(selectedOfficeLeadsCheckedCheckbox.length === 0 || !isOfficeLeadsChecked){
            setOfficeLeadButtonValue('Delete');
        }
        if (selectedOfficeLeadsCheckedCheckbox.length >= 1) {
            setOfficeLeadButtonValue('Delete Selected');
        }
        if (isOfficeLeadsChecked) {
            setOfficeLeadButtonValue('Delete All');
        } 
    },[isOfficeLeadsChecked, selectedOfficeLeadsCheckedCheckbox.length]);


    useEffect(() => {
        if (isUsersChecked || usersCheckedCheckbox.length >= 1) {
            setUserDeleteButtonValue(true);
        } else {
            setUserDeleteButtonValue(false);
        }
    },[isUsersChecked, usersCheckedCheckbox.length]);


    useEffect(() => {
        if (isExternalLeadsChecked || selectedExternalLeadsCheckedCheckbox.length >= 1) {
            setExternalLeadDeleteButtonValue(true);
        } else {
            setExternalLeadDeleteButtonValue(false);
        }
    },[isExternalLeadsChecked, selectedExternalLeadsCheckedCheckbox.length]);


    useEffect(() => {
        if (isOfficeLeadsChecked || selectedOfficeLeadsCheckedCheckbox.length >= 1) {
            setOfficeLeadDeleteButtonValue(true);
        } else {
            setOfficeLeadDeleteButtonValue(false);
        }
    },[isOfficeLeadsChecked, selectedOfficeLeadsCheckedCheckbox.length]);



    const handleUsersSelectAllChange = () => {
        dispatch(toggleUsersSelectAllCheckbox());
    };

    const handleExternalLeadSelectAllChange = () => {
        dispatch(toggleExternalLeadsSelectAllCheckbox());
    };

    const handleOfficeLeadSelectAllChange = () => {
        dispatch(toggleOfficeLeadsSelectAllCheckbox());
    };
     

    useEffect(() => {
        if (filteredUsers) {
            const allSelectedInFiltered = filteredUsers.every(user => usersCheckedCheckbox.includes(user._id));
            setUsersChecked(allSelectedInFiltered);
        }
    }, [filteredUsers, usersCheckedCheckbox]);
 

    useEffect(() => {
        if (isLeads) {
            const allSelectedInExternalLeadsFiltered = isLeads.every(lead => selectedExternalLeadsCheckedCheckbox.includes(lead._id));
            setExternalLeadsChecked(allSelectedInExternalLeadsFiltered);
            const allSelectedInOfficeLeadsFiltered = isLeads.every(lead => selectedOfficeLeadsCheckedCheckbox.includes(lead._id));
            setOfficeLeadsChecked(allSelectedInOfficeLeadsFiltered);
        }
    }, [isLeads, selectedExternalLeadsCheckedCheckbox, selectedOfficeLeadsCheckedCheckbox]);

   
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
            if(isLocation === 'LeadsPage'){
                const data = {
                    idToDelete: selectedOfficeLeadsCheckedCheckbox,
                    component: 'Leads',
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
                            <label htmlFor="selectAllCheckbox" className="delete-label">
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
                            <label htmlFor="selectAllCheckbox" className="delete-label">
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
            {(isLocation === 'LeadsPage' && isAdmin) && (
                <>
                    <button type="button" className="side-panel-button"
                        onClick={toggleOfficeLeadDeleteMenuDrop}
                    >Delete Lead
                        <ArrowDown className={`arrow-svg ${toggleOfficeLeadDeleteDropArrow()}`}/>
                    </button>
                    <ul className={`delete-dropdown-list ${toggleOfficeLeadDeleteDropCont()}`}>
                        <li className="users-drop-item delete-item">
                            <label htmlFor="selectAllCheckbox" className="delete-label">
                                <input className="delete-checkbox"
                                    name="delete_all_users" 
                                    type="checkbox"
                                    id="selectAllCheckbox"
                                    checked={isOfficeLeadsChecked}
                                    onChange={handleOfficeLeadSelectAllChange}
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
                                disabled={!isOfficeLeadDeleteButtonValue}
                                onClick={openDeleteModal}
                            >
                                {officeLeadButtonValue}
                            </button>
                        </li>
                    </ul>
                </>
            )}
        </MenuItemStyled>
    );
});