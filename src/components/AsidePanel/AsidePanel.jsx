import { StyledAsidePanel } from "./AsidePanel.styled";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef, useCallback } from "react";
import { getOfficeList, getRoleList } from "../../redux/User/user-operation";
import { toggleUsersSelectAllCheckbox} from "../../redux/User/user-slice";
import { toggleExternalLeadsSelectAllCheckbox, toggleOfficeLeadsSelectAllCheckbox } from "../../redux/Lead/lead-slice";
import { useUser } from "../../hooks/useUser";
import { useAuth } from "../../hooks/useAuth";
import { useLead } from "../../hooks/useLead";
import { UserItem } from "./MenuItem/UserItem";
import { LeadItem } from "./MenuItem/LeadItem";
import { StatisticItem } from "./MenuItem/StatisticItem";
import { DeleteItem } from "./MenuItem/DeleteItem";
import { openModalConfirm } from "../../redux/Modal/modal-slice";
import { AmountPerPage } from "./MenuItem/AmountPerPage";



export const AsidePanel = ({userLocation}) => {
    const dispatch = useDispatch();
    const { isAdmin, isManager, isConversionManager } = useAuth();
    const { userSelectOffice, usersCheckedCheckbox, filteredUsers, userLeadsComponent} = useUser();
    const { selectedExternalLeadsCheckedCheckbox, selectedOfficeLeadsCheckedCheckbox, isLeads } = useLead();
    const [ isAmountPerPageBox, setAmountPerPageBox] = useState(false);
    const [ isUserBox, setUserBox ] = useState(false);
    const [ isLeadBox, setLeadBox ] = useState(false);
    const [ isStatisticBox, setStatisticBox ] = useState(false);
    const [ isExternalLeadDeleteBox, setExternalLeadDeleteBox ] = useState(false);
    const [ isUserDeleteBox, setUserDeleteBox ] = useState(false);
    const [ isOfficeLeadDeleteBox, setOfficeLeadDeleteBox ] = useState(false);
    const [ isLocation, setLocation ] = useState('');
    const userBlock = useRef(null);
    const leadBlock = useRef(null);
    const statisticBlock = useRef(null);
    const deleteBlock = useRef(null);
    const amountPerPageBlock = useRef();

    
    useEffect(() => {
        let location;
        switch(userLocation){
            case '/':
                location = 'MainPage'
                break;
            case '/users':
                location = 'UsersPage'
                break;
            case '/leads':
                location ='LeadsPage'
                break;
            default:
                location = ''
        }
        if(isLocation !== location){
            setLocation(location)
        }
    },[isLocation, userLocation]);



    useEffect(() => {
        dispatch(getOfficeList());
        dispatch(getRoleList());
    },[dispatch]);



    const toggleUserMenuDrop = () => {
        setUserBox(prevState => !prevState);
    };
    const toggleLeadMenuDrop = () => {
        setLeadBox(prevState => !prevState)
    };
    const toggleStatisticMenuDrop = () => {
        setStatisticBox(prevState => !prevState)
    };
    const toggleAmountPerPageBlock = () => {
        setAmountPerPageBox(prevState => !prevState)
    };
    const toggleUserDeleteMenuDrop = () => {
        setUserDeleteBox(prevState => !prevState)
    };
    const toggleExternalLeadDeleteMenuDrop = () => {
        setExternalLeadDeleteBox(prevState => !prevState)
    };
    const toggleOfficeLeadDeleteMenuDrop = () => {
        setOfficeLeadDeleteBox(prevState => !prevState)
    };


    useEffect(() => {
        if (usersCheckedCheckbox.length > 0) {
            setUserDeleteBox(true);
        } else {
            setUserDeleteBox(false);
        };

        if (selectedExternalLeadsCheckedCheckbox.length > 0){
            setExternalLeadDeleteBox(true);
        } else {
            setExternalLeadDeleteBox(false);
        }

        if (selectedOfficeLeadsCheckedCheckbox.length > 0){
            setOfficeLeadDeleteBox(true);
        } else {
            setOfficeLeadDeleteBox(false);
        }
    },[selectedExternalLeadsCheckedCheckbox.length, selectedOfficeLeadsCheckedCheckbox.length, usersCheckedCheckbox.length]);



    const toggleUserDropCont = () => {
        return isUserBox ? 'users-dropdown-list-visible' : '';
    };
    const toggleUserDropArrow = () => {
        return isUserBox ? 'arrow-svg-close' : '';
    };
    const toggleLeadDropCont = () => {
        return isLeadBox ? 'users-dropdown-list-visible' : '';
    };
    const toggleLeadDropArrow = () => {
        return isLeadBox ? 'arrow-svg-close' : '';
    };
    const toggleStatisticDropCont = () => {
        return isStatisticBox ? 'users-dropdown-list-visible' : '';
    };
    const toggleStatisticDropArrow = () => {
        return isStatisticBox ? 'arrow-svg-close' : '';
    };
    const toggleAmountPerPageDropCont = () => {
        return isAmountPerPageBox ? 'amount-dropdown-list-visible' : '';
    };
    const toggleAmountPerPageDropArrow = () => {
        return isAmountPerPageBox ? 'arrow-svg-close' : '';
    };
    const toggleUserDeleteDropCont = () => {
        return isUserDeleteBox ? 'delete-dropdown-list-visible' : '';
    };
    const toggleUserDeleteDropArrow = () => {
        return isUserDeleteBox ? 'arrow-svg-close' : '';
    };
    const toggleExternalLeadDeleteDropCont = () => {
        return isExternalLeadDeleteBox ? 'delete-dropdown-list-visible' : '';
    };
    const toggleExternalLeadDeleteDropArrow = () => {
        return isExternalLeadDeleteBox ? 'arrow-svg-close' : '';
    };
    const toggleOfficeLeadDeleteDropCont = () => {
        return isOfficeLeadDeleteBox ? 'delete-office-dropdown-list-visible' : '';
    };
    const toggleOfficeLeadDeleteDropArrow = () => {
        return isOfficeLeadDeleteBox ? 'arrow-svg-close' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            if (isUserBox) {
                setUserBox(false);
            }
            if (isLeadBox) {
                setLeadBox(false);
            }
            if (isStatisticBox) {
                setStatisticBox(false);
            }
            if (isAmountPerPageBox) {
                setAmountPerPageBox(false);
            }
            if (isUserDeleteBox) {
                setUserDeleteBox(false);
            }
            if (isExternalLeadDeleteBox) {
                setExternalLeadDeleteBox(false);
            }
            if (isOfficeLeadDeleteBox) {
                setOfficeLeadDeleteBox(false);
            }
        }
    },[
        isUserBox, 
        isLeadBox, 
        isStatisticBox, 
        isAmountPerPageBox, 
        isUserDeleteBox, 
        isExternalLeadDeleteBox, 
        isOfficeLeadDeleteBox
    ]);


    const handleBackgroundClick = useCallback(event => {
        if (userBlock.current && !userBlock.current.contains(event.target)) {
          setUserBox(false);
        }
        if (leadBlock.current && !leadBlock.current.contains(event.target)) {
            setLeadBox(false);
        }
        if (statisticBlock.current && !statisticBlock.current.contains(event.target)) {
            setStatisticBox(false);
        }
        if (amountPerPageBlock.current && !amountPerPageBlock.current.contains(event.target)) {
            setAmountPerPageBox(false);
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


    
    return(
        <StyledAsidePanel>
            <div className="side-panel-cont">
                <ul className="side-panel-list">
                    {((isLocation === 'MainPage' || isLocation === 'LeadsPage') && !userLeadsComponent) && (
                        <AmountPerPage
                            amountPerPageBlock={amountPerPageBlock}
                            toggleAmountPerPageBlock={toggleAmountPerPageBlock}
                            toggleAmountPerPageDropCont={toggleAmountPerPageDropCont}
                            toggleAmountPerPageDropArrow={toggleAmountPerPageDropArrow}
                        />
                    )}
                    {(isAdmin || isManager || isConversionManager) && (
                        <UserItem
                            userBlock={userBlock}
                            toggleUserMenuDrop={toggleUserMenuDrop}
                            toggleUserDropCont={toggleUserDropCont}
                            toggleUserDropArrow={toggleUserDropArrow}
                            userSelectOffice={userSelectOffice}
                        />
                    )}
                    <LeadItem
                        leadBlock={leadBlock}
                        toggleLeadMenuDrop={toggleLeadMenuDrop}
                        toggleLeadDropCont={toggleLeadDropCont}
                        toggleLeadDropArrow={toggleLeadDropArrow}
                        userSelectOffice={userSelectOffice}
                    />
                    {(isAdmin || isManager) && (
                        <StatisticItem
                            statisticBlock={statisticBlock}
                            toggleStatisticMenuDrop={toggleStatisticMenuDrop}
                            toggleStatisticDropCont={toggleStatisticDropCont}
                            toggleStatisticDropArrow={toggleStatisticDropArrow}
                            userSelectOffice={userSelectOffice}
                        />
                    )}
                </ul>
                <ul className="side-panel-list delete-list">
                    <DeleteItem
                        deleteBlock={deleteBlock}
                        isLocation={isLocation}
                        toggleUserDeleteMenuDrop={toggleUserDeleteMenuDrop}
                        toggleUserDeleteDropCont={toggleUserDeleteDropCont}
                        toggleUserDeleteDropArrow={toggleUserDeleteDropArrow}
                        usersCheckedCheckbox={usersCheckedCheckbox}
                        filteredUsers={filteredUsers}
                        toggleUsersSelectAllCheckbox={toggleUsersSelectAllCheckbox}
                        isAdmin={isAdmin}
                        openModalConfirm={openModalConfirm}
                        isLeads={isLeads}
                        selectedExternalLeadsCheckedCheckbox={selectedExternalLeadsCheckedCheckbox}
                        toggleExternalLeadsSelectAllCheckbox={toggleExternalLeadsSelectAllCheckbox}
                        toggleExternalLeadDeleteMenuDrop={toggleExternalLeadDeleteMenuDrop}
                        toggleExternalLeadDeleteDropCont={toggleExternalLeadDeleteDropCont}
                        toggleExternalLeadDeleteDropArrow={toggleExternalLeadDeleteDropArrow}
                        selectedOfficeLeadsCheckedCheckbox={selectedOfficeLeadsCheckedCheckbox}
                        toggleOfficeLeadsSelectAllCheckbox={toggleOfficeLeadsSelectAllCheckbox}
                        toggleOfficeLeadDeleteMenuDrop={toggleOfficeLeadDeleteMenuDrop}
                        toggleOfficeLeadDeleteDropCont={toggleOfficeLeadDeleteDropCont}
                        toggleOfficeLeadDeleteDropArrow={toggleOfficeLeadDeleteDropArrow}
                    />
                </ul>
            </div>
        </StyledAsidePanel>
    )
};