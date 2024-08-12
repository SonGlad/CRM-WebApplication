import { StyledAsidePanel } from "./AsidePanel.styled";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef, useCallback } from "react";
import { getOfficeList, getRoleList } from "../../redux/User/user-operation";
import { toggleUsersSelectAllCheckbox} from "../../redux/User/user-slice";
import { toggleExternalLeadsSelectAllCheckbox } from "../../redux/Lead/lead-slice";
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
    const { isAdmin } = useAuth();
    const { userSelectOffice, usersCheckedCheckbox, filteredUsers, userLeadsComponent} = useUser();
    const { selectedExternalLeadsCheckedCheckbox, isLeads } = useLead();
    const [ isAmountPerPageBox, setAmountPerPageBox] = useState(false);
    const [ isUserBox, setUserBox ] = useState(false);
    const [ isLeadBox, setLeadBox ] = useState(false);
    const [ isUserDeleteBox, setUserDeleteBox ] = useState(false);
    const [ isExternalLeadDeleteBox, setExternalLeadDeleteBox ] = useState(false);
    const [ isStatisticBox, setStatisticBox ] = useState(false);
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
    const toggleUserDeleteMenuDrop = () => {
        setUserDeleteBox(prevState => !prevState)
    };
    const toggleExternalLeadDeleteMenuDrop = () => {
        setExternalLeadDeleteBox(prevState => !prevState)
    };
    const toggleAmountPerPageBlock = () => {
        setAmountPerPageBox(prevState => !prevState)
    };


    useEffect(() => {
        if (usersCheckedCheckbox.length > 0) {
            setUserDeleteBox(true)
        } else {
            setUserDeleteBox(false)
        };

        if (selectedExternalLeadsCheckedCheckbox.length > 0){
            setExternalLeadDeleteBox(true)
        } else {
            setExternalLeadDeleteBox(false)
        }
    },[selectedExternalLeadsCheckedCheckbox.length, usersCheckedCheckbox.length]);



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
    const toggleAmountPerPageDropCont = () => {
        return isAmountPerPageBox ? 'amount-dropdown-list-visible' : '';
    };
    const toggleAmountPerPageDropArrow = () => {
        return isAmountPerPageBox ? 'arrow-svg-close' : '';
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
            if (isUserDeleteBox) {
                setUserDeleteBox(false);
            }
            if (isExternalLeadDeleteBox) {
                setExternalLeadDeleteBox(false);
            }
            if (isAmountPerPageBox) {
                setAmountPerPageBox(false);
            }
        }
    },[isUserBox, isLeadBox, isStatisticBox, isUserDeleteBox, isExternalLeadDeleteBox, isAmountPerPageBox]);


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
        // if (deleteBlock.current && !deleteBlock.current.contains(event.target)) {
        //     setDeleteBox(false);
        // }
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
                    <UserItem
                        userBlock={userBlock}
                        toggleUserMenuDrop={toggleUserMenuDrop}
                        toggleUserDropCont={toggleUserDropCont}
                        toggleUserDropArrow={toggleUserDropArrow}
                        userSelectOffice={userSelectOffice}
                    />
                    <LeadItem
                        leadBlock={leadBlock}
                        toggleLeadMenuDrop={toggleLeadMenuDrop}
                        toggleLeadDropCont={toggleLeadDropCont}
                        toggleLeadDropArrow={toggleLeadDropArrow}
                        userSelectOffice={userSelectOffice}
                    />
                    <StatisticItem
                        statisticBlock={statisticBlock}
                        toggleStatisticMenuDrop={toggleStatisticMenuDrop}
                        toggleStatisticDropCont={toggleStatisticDropCont}
                        toggleStatisticDropArrow={toggleStatisticDropArrow}
                        userSelectOffice={userSelectOffice}
                    />
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
                        toggleExternalLeadsSelectAllCheckbox={toggleExternalLeadsSelectAllCheckbox}
                        isLeads={isLeads}
                        toggleExternalLeadDeleteMenuDrop={toggleExternalLeadDeleteMenuDrop}
                        toggleExternalLeadDeleteDropCont={toggleExternalLeadDeleteDropCont}
                        toggleExternalLeadDeleteDropArrow={toggleExternalLeadDeleteDropArrow}
                        selectedExternalLeadsCheckedCheckbox={selectedExternalLeadsCheckedCheckbox}
                    />
                </ul>
            </div>
        </StyledAsidePanel>
    )
};