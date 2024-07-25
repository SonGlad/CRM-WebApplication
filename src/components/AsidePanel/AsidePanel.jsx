import { StyledAsidePanel } from "./AsidePanel.styled";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef, useCallback } from "react";
import { getOfficeList, getRoleList } from "../../redux/User/user-operation";
import { toggleSelectAllCheckbox} from "../../redux/User/user-slice";
import { getAllLeads } from "../../redux/Lead/lead-operation";
import { useUser } from "../../hooks/useUser";
import { useAuth } from "../../hooks/useAuth";
import { UserItem } from "./MenuItem/UserItem";
import { LeadItem } from "./MenuItem/LeadItem";
import { StatisticItem } from "./MenuItem/StatisticItem";
import { DeleteItem } from "./MenuItem/DeleteItem";
import { openModalConfirm } from "../../redux/Modal/modal-slice"



export const AsidePanel = ({userLocation}) => {
    const dispatch = useDispatch();
    const { isAdmin } = useAuth();
    const { userSelectOffice, checkedCheckbox, filteredUsers} = useUser();
    const [ isUserBox, setUserBox ] = useState(false);
    const [ isLeadBox, setLeadBox ] = useState(false);
    const [ isDeleteBox, setDeleteBox ] = useState(false)
    const [ isStatisticBox, setStatisticBox ] = useState(false);
    const [ isLocation, setLocation ] = useState('');
    const userBlock = useRef(null);
    const leadBlock = useRef(null);
    const statisticBlock = useRef(null);
    const deleteBlock = useRef(null);

    
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
    const toggleDeleteMenuDrop = () => {
        setDeleteBox(prevState => !prevState)
    };


    useEffect(() => {
        if (checkedCheckbox.length > 0) {
            setDeleteBox(true)
        } else {
            setDeleteBox(false)
        }
    },[checkedCheckbox.length])


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
    const toggleDeleteDropCont = () => {
        return isDeleteBox ? 'delete-dropdown-list-visible' : '';
    };
    const toggleDeleteDropArrow = () => {
        return isDeleteBox ? 'arrow-svg-close' : '';
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
            if (isDeleteBox) {
                setDeleteBox(false);
            }
        }
    },[isDeleteBox, isLeadBox, isStatisticBox, isUserBox]);


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
                        getAllLeads={getAllLeads}
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
                        toggleDeleteMenuDrop={toggleDeleteMenuDrop}
                        toggleDeleteDropCont={toggleDeleteDropCont}
                        toggleDeleteDropArrow={toggleDeleteDropArrow}
                        checkedCheckbox={checkedCheckbox}
                        filteredUsers={filteredUsers}
                        toggleSelectAllCheckbox={toggleSelectAllCheckbox}
                        isAdmin={isAdmin}
                        openModalConfirm={openModalConfirm}
                    />
                </ul>
            </div>
        </StyledAsidePanel>
    )
};