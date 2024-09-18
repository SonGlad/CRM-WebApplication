import { AssignReassignBlockStyled } from "./TableComponets.Styled";
import { ReactComponent as ArrowDown } from "../../../../images/svg-icons/arrow-down.svg";
import { useState, useEffect, useCallback, useRef } from "react";
import { leadAssign, leadReAssign } from "../../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";
import { UpdateLoading } from "../../../CustomLoaders/CustomLoaders";



export const ManagerAssignReAssignBlock = ({
    availableUsersForAssign,
    leads,
    lead,
    index,
    isManager
}) => {
    const [conManager, setConManager] = useState(false);
    const [isSelfCreated, setSelfCreated] = useState(false);
    const [openManager, setOpenManager] = useState(new Map());
    const [updatingLeadId, setUpdatingLeadId] = useState(null);
    const managerRefs = useRef(new Map());
    const dispatch = useDispatch();
        

    useEffect(() => {
        const conManager = lead.conManagerId;
        const selfCreated = lead.selfCreated;       
        if(conManager && (conManager.name || conManager.email)){
            setConManager(true);
        } else {
            setConManager(false);
        }
        if (selfCreated) {
            setSelfCreated(true);
        } else {
            setSelfCreated(false)
        }
    },[lead.conManagerId, lead.selfCreated]);


    const toggleManagerMenuDrop = (leadId) => {
        setOpenManager(prevState => {
          const newMap = new Map(prevState);
          newMap.set(leadId, !newMap.get(leadId));
          return newMap;
        });
    };


    const toggleManagerDropCont = (leadId, leads) => {
        const totalLeads = leads.length;
        if (index > 14) {
            if(index > totalLeads - 5){
                return openManager.get(leadId) ? 'users-list-visible-adjusted' : '';
            }
        } else {
            return openManager.get(leadId) ? 'users-list-visible' : '';
        }
    };


    const toggleManagerDropArrow = (leadId) => {
        return openManager.get(leadId) ? 'arrow-svg-open' : '';
    };
    
    
    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOpenManager(new Map());
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        const newOpenMenus = new Map(openManager);
        let shouldUpdate = false;

        managerRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openManager.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenManager(newOpenMenus);
        }
    }, [openManager]);
    
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);


    const renderUserList = (excludedId) => {
        return availableUsersForAssign
        .filter(user => user._id !== excludedId)
        .map((user, index) => (
            <li className="user-item" key={index}>
                <p className="drop-cont-text"
                    onClick={() => assignReAssignLead(user)}
                >To: {user.username}
                </p>
            </li>
        ))
    };


    const assignReAssignLead = (user) => {
        if(isManager){
            if (!isSelfCreated && !conManager) {
                setUpdatingLeadId(lead._id);
                dispatch(leadAssign({
                    leadId: lead._id,
                    data: {
                        conManagerId: user._id
                    }
                })).finally(() => {
                    setUpdatingLeadId(null);
                });
                setOpenManager(new Map());
            }
            if (!isSelfCreated && conManager) {
                setUpdatingLeadId(lead._id);
                dispatch(leadReAssign({
                    leadId: lead._id,
                    data: {
                        conManagerId: user._id
                    }
                })).finally(() => {
                    setUpdatingLeadId(null);
                });
                setOpenManager(new Map());
            }
        } 
    };


    return(
        <AssignReassignBlockStyled ref={el => {
            if (el) {
                managerRefs.current.set(lead._id, el);
            }
            }}
            $isSelfCreated={isSelfCreated}
        >
            {updatingLeadId === lead._id ? (
                <UpdateLoading/>
            ) : (
                <>
                    <button className="manager-btn" type='button'
                        onClick={() => toggleManagerMenuDrop(lead._id)}
                    >
                        {isSelfCreated ? "N/A" 
                            : !lead.conManagerId 
                            ? 'Not Assigned Yet' 
                            : lead.conManagerId.username
                        }
                    </button>
                    {!isSelfCreated && (
                        <ArrowDown className={`arrow-svg ${toggleManagerDropArrow(lead._id)}`}/>
                    )}
                    <ul className={`users-list ${toggleManagerDropCont(lead._id, leads)}`}>
                        <li className="initial-item">
                            <p className="initial-drop-cont-text">
                                {!lead.conManagerId ? "Assign" : "ReAssign"}
                            </p>
                        </li>
                        {!lead.conManagerId ? (
                                renderUserList()
                        ) : (
                                renderUserList(lead.conManagerId._id)
                            )
                        }
                    </ul>
                </>
            )}
        </AssignReassignBlockStyled>
    );
};