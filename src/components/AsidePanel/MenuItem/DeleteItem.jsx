import { MenuItemStyled } from "./MenuItem.styled";
import { ReactComponent as ArrowDown } from '../../../images/svg-icons/arrow-down.svg';
import {ReactComponent as CheckedIcon} from "../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../images/svg-icons/rectangle.svg";
import { forwardRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";



export const DeleteItem = forwardRef(({
    deleteBlock, 
    isLocation, 
    toggleDeleteMenuDrop,
    toggleDeleteDropCont,
    toggleDeleteDropArrow,
    checkedCheckbox,
    filteredUsers,
    toggleSelectAllCheckbox,
    isAdmin,
    openModalConfirm,
}, ref) => {
    const dispatch = useDispatch();
    const [isDeleteButtonValue, setDeleteButtonValue] = useState(false);
    const [buttonValue, setButtonValue] = useState('Delete');
    const [isChecked, setChecked] = useState(false);


    useEffect(() => {
        if(checkedCheckbox.length === 0 || !isChecked){
            setButtonValue('Delete');
        }
        if (checkedCheckbox.length >= 1) {
            setButtonValue('Delete Selected');
        }
        if (isChecked) {
            setButtonValue('Delete All');
        } 
    },[checkedCheckbox.length, isChecked]);


    useEffect(() => {
        if (isChecked || checkedCheckbox.length >= 1) {
            setDeleteButtonValue(true)
        } else {
            setDeleteButtonValue(false)
        }
    },[checkedCheckbox.length, isChecked]);



    const handleSelectAllChange = () => {
        dispatch(toggleSelectAllCheckbox());
    };
     

    useEffect(() => {
        const allSelectedInFiltered = filteredUsers.every(lead => checkedCheckbox.includes(lead._id));
        setChecked(allSelectedInFiltered);
    }, [checkedCheckbox, filteredUsers]);


    const deleteUsers = () => {
        if(isAdmin){
            dispatch(openModalConfirm(checkedCheckbox))
        }
    }
    

    return(
        <MenuItemStyled ref={deleteBlock}>
            {(isLocation === 'UsersPage' && isAdmin) && (
                <>
                    <button type="button" className="side-panel-button"
                        onClick={toggleDeleteMenuDrop}
                    >Delete User
                        <ArrowDown className={`arrow-svg ${toggleDeleteDropArrow()}`}/>
                    </button>
                    <ul className={`delete-dropdown-list ${toggleDeleteDropCont()}`}>
                        <li className="users-drop-item delete-item">
                            <label htmlFor="delete users" className="delete-label">
                                <input className="delete-checkbox"
                                    name="delete_all_users" 
                                    type="checkbox"
                                    id="selectAllCheckbox"
                                    checked={isChecked}
                                    onChange={handleSelectAllChange}
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
                                disabled={!isDeleteButtonValue}
                                onClick={deleteUsers}
                            >{buttonValue}
                            </button>
                        </li>
                    </ul>
                </>
            )}
                {isLocation === 'MainPage' && (
                    <p>Delete External Lead</p>
            )}
                {isLocation === 'LeadsPage' && (
                <p>Delete Selected Lead</p>
            )}
        </MenuItemStyled>
    );
});