import {LeadAssignReAssignOwnerBlockStyled} from"./OfficeLeadBlocks.styled";
import {ReactComponent as ArrowIcon} from "../../../../../images/svg-icons/arrow-down.svg";
import { useTheme } from "styled-components";
import { useEffect, useState, useRef, useCallback } from "react";
import { useAuth } from "../../../../../hooks/useAuth";
import { useUser } from "../../../../../hooks/useUser";
import { useDispatch } from "react-redux";
import { leadAssign, leadReAssign } from "../../../../../redux/Lead/lead-operation";


export const LeadAssignReAssignOwnerBlock = ({leadDetailById}) => {
    const theme = useTheme();
    const { isAdmin, isManager, isConversionManager } = useAuth();
    const { availableUsersForAssign } = useUser();
    const [crmManager, setCRMManager] = useState(false);
    const [conManager, setConManager] = useState(false);
    const [conAgent, setConAgent] = useState(false);
    const [isSelfCreated, setSelfCreated] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const dropContRef = useRef();
    const dispatch = useDispatch();
    

    useEffect(() => {
        const crmManager = leadDetailById.managerId;
        const conManager = leadDetailById.conManagerId;
        const conAgent = leadDetailById.conAgentId;
        const selfCreated = leadDetailById.selfCreated;       

        if(conAgent && (conAgent.name || conAgent.email)){
            setConAgent(true);
        }
        if(conManager && (conManager.name || conManager.email)){
            setConManager(true);
        }
        if (crmManager && (crmManager.name || crmManager.email)) {
            setCRMManager(true);
        }
        if (selfCreated) {
            setSelfCreated(true)
        }
    },[leadDetailById.conAgentId, leadDetailById.conManagerId, leadDetailById.managerId, leadDetailById.selfCreated]);


    const statusValue = () => {
        if (isSelfCreated) {
            return "Self Created"
        }
        return "Assigned"
    };


    const capitalizeSource = (str) => {
        if (typeof str !== 'string' || str.length === 0) {
          return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };


    const toggleDropDown = () => {
        setDropDown(prevState => !prevState)
    };


    const toggleLeadDropArrow = () => {
        return dropDown ? 'icon-active' : '';
    };

    const toggleLeadDropCont = () => {
        return dropDown ? 'office-list-visible' : '';
    };


    const handleBackgroundClick = useCallback(event => {
        if (dropContRef.current && !dropContRef.current.contains(event.target)) {
            setDropDown(false);
        }
    },[]);


    useEffect(() => {
        document.addEventListener('click', handleBackgroundClick);
    
        return () => {
          document.removeEventListener('click', handleBackgroundClick);
        };
    },[handleBackgroundClick]);



    const assignButtonValue = () => {
        if(isManager){
            if (conManager) {
                return "ReAssign";            
            }
            return "Assign";
        } else if(isConversionManager){
            if (conAgent) {
                return "ReAssign";            
            }
            return "Assign";
        }       
    };


    const renderUserList = (excludedId) => {
        return availableUsersForAssign
        .filter(user => user._id !== excludedId)
        .map((user, index) => (
            <li className="office-item" key={index}>
                <p className="drop-cont-text"
                    onClick={() => assignExternalLeadDetail(user)}
                >To: {user.username}
                </p>
            </li>
        ));
    };


    const assignExternalLeadDetail = (user) => {
        if(isManager){
            if (!isSelfCreated && !conManager) {
                dispatch(leadAssign({
                    leadId: leadDetailById._id,
                    data: {
                        conManagerId: user._id
                    }
                }));
                setDropDown(false);
            }
            if (!isSelfCreated && conManager) {
                dispatch(leadReAssign({
                    leadId: leadDetailById._id,
                    data: {
                        conManagerId: user._id
                    }
                }));
                setDropDown(false);
            }
        } else if (isConversionManager){
            if (!isSelfCreated && !conAgent) {
                dispatch(leadAssign({
                    leadId: leadDetailById._id,
                    data: {
                        conAgentId: user._id
                    }
                }));
                setDropDown(false);
            }
            if (!isSelfCreated && conAgent) {
                dispatch(leadReAssign({
                    leadId: leadDetailById._id,
                    data: {
                        conAgentId: user._id
                    }
                }));
                setDropDown(false);
            }
        }
    };


    return (
        <LeadAssignReAssignOwnerBlockStyled>
            <p>Status: <span>{statusValue()}</span></p>
            <p>Resource: <span>{capitalizeSource(leadDetailById.resource)}</span></p>
            {!isSelfCreated ? (
                <>
                    {isAdmin && (
                        <div>
                            <p>Assigned CRM Manager</p>
                            {crmManager ? (
                                <>
                                    <p><span>Name: </span>{leadDetailById.managerId.username}</p>
                                    <p><span>Email: </span>{leadDetailById.managerId.email}</p>
                                </>
                            ) : (
                                <p style={{
                                    color: theme.color.error_color,
                                    marginBottom: '1.65rem'
                                }}
                                >Not Assigned Yet
                                </p>
                            )}
                        </div>
                    )}
                    { (isAdmin || isManager ) && (
                        <div>
                            <p>Assigned Conversion Manager</p>
                            {conManager ? (
                                <>
                                    <p><span>Name: </span>{leadDetailById.conManagerId.username}</p>
                                    <p><span>Email: </span>{leadDetailById.conManagerId.email}</p>
                                </>
                            ) : (
                                <p style={{
                                    color: theme.color.error_color,
                                    marginBottom: '1.65rem'
                                }}
                                >Not Assigned Yet
                                </p>
                            )}
                        </div>
                    )}
                    {(isAdmin || isManager || isConversionManager) && (
                        <div>
                            <p>Assigned Conversion Agent</p>
                            {conAgent ? (
                                <>
                                    <p><span>Name: </span>{leadDetailById.conAgentId.username}</p>
                                    <p><span>Email: </span>{leadDetailById.conAgentId.email}</p>
                                </>
                            ) : (
                                <p style={{
                                    color: theme.color.error_color,
                                    marginBottom: '1.65rem'
                                }}
                                >Not Assigned Yet
                                </p>
                            )}
                        </div>
                    )}
                    {(!isSelfCreated && (isManager || isConversionManager)) && (
                        <div className="drop-cont" ref={dropContRef}>
                            <button type="button" className="assign-button"
                                onClick={toggleDropDown}
                            >
                                {assignButtonValue()}
                                <ArrowIcon className={`icon ${toggleLeadDropArrow()}`}/>
                            </button>
                            <ul className={`office-list ${toggleLeadDropCont()}`}>
                                {isManager && (
                                    conManager ? (
                                        renderUserList(leadDetailById.conManagerId._id)
                                    ) : (
                                        renderUserList()
                                    )
                                )}
                                {isConversionManager && (
                                    conAgent ? (
                                        renderUserList(leadDetailById.conAgentId._id)
                                    ) : (
                                        renderUserList()
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </>
            ) : (
                <div>
                    <p><span>Name: </span>{leadDetailById.owner.username}</p>
                    <p><span>Email: </span>{leadDetailById.owner.email}</p>
                    <p><span>Role: </span>{leadDetailById.owner.role}</p>
                </div>
            )}
        </LeadAssignReAssignOwnerBlockStyled>
    );
};