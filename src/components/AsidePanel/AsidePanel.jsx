import { StyledAsidePanel } from "./AsidePanel.styled";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef, useCallback } from "react";
import { getOfficeList, getRoleList } from "../../redux/User/user-operation";
import { useUser } from "../../hooks/useUser";
import { UserItem } from "./MenuItem/UserItem";
import { LeadItem } from "./MenuItem/LeadItem";
import { StatisticItem } from "./MenuItem/StatisticItem";


export const AsidePanel = () => {
    const dispatch = useDispatch();
    const {userSelectOffice} = useUser();
    const [isUserBox, setUserBox] = useState(false);
    const [isLeadBox, setLeadBox] = useState(false);
    const [isStatisticBox, setStatisticBox] = useState(false);
    const userBlock = useRef(null);
    const leadBlock = useRef(null);
    const statisticBlock = useRef(null);


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


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setUserBox(false);
            setLeadBox(false);
            setStatisticBox(false);
        }
    },[]);


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
                    />
                    <StatisticItem
                        statisticBlock={statisticBlock}
                        toggleStatisticMenuDrop={toggleStatisticMenuDrop}
                        toggleStatisticDropCont={toggleStatisticDropCont}
                        toggleStatisticDropArrow={toggleStatisticDropArrow}
                        userSelectOffice={userSelectOffice}
                    />
                </ul>
            </div>
        </StyledAsidePanel>
    )
};