import { AssignReassignBlockStyled } from "./TableComponets.Styled";
import { ReactComponent as ArrowDown } from "../../../../images/svg-icons/arrow-down.svg";
import { useState, useEffect, useCallback, useRef } from "react";
import { leadAssign, leadReAssign } from "../../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";
import { UpdateLoading } from "../../../CustomLoaders/CustomLoaders";



export const AgentAssignReAssignBlock = ({
    availableUsersForAssign,
    leads,
    lead,
    index,
    isConversionManager
}) => {
    const [conAgent, setConAgent] = useState(false);
    const [isSelfCreated, setSelfCreated] = useState(false);
    const [openAgent, setOpenAgent] = useState(new Map());
    const [updatingLeadId, setUpdatingLeadId] = useState(null);
    const agentRefs = useRef(new Map());
    const dispatch = useDispatch();
        

    useEffect(() => {
        const conAgent = lead.conAgentId;
        const selfCreated = lead.selfCreated;       
        if(conAgent && (conAgent.name || conAgent.email)){
            setConAgent(true);
        } else {
            setConAgent(false);
        }
        if (selfCreated) {
            setSelfCreated(true);
        } else {
            setSelfCreated(false)
        }
    },[lead.conAgentId, lead.selfCreated]);


    const toggleAgentMenuDrop = (leadId) => {
        setOpenAgent(prevState => {
          const newMap = new Map(prevState);
          newMap.set(leadId, !newMap.get(leadId));
          return newMap;
        });
    };


    const toggleAgentDropCont = (leadId, leads) => {
        const totalLeads = leads.length;
        if (index > 14) {
            if(index > totalLeads - 5){
                return openAgent.get(leadId) ? 'users-list-visible-adjusted' : '';
            }
        } else {
            return openAgent.get(leadId) ? 'users-list-visible' : '';
        }
    };


    const toggleAgentDropArrow = (leadId) => {
        return openAgent.get(leadId) ? 'arrow-svg-open' : '';
    };
    
    
    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOpenAgent(new Map());
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        const newOpenMenus = new Map(openAgent);
        let shouldUpdate = false;

        agentRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openAgent.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenAgent(newOpenMenus);
        }
    }, [openAgent]);
    
    
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
        if (isConversionManager){
            if (!isSelfCreated && !conAgent) {
                setUpdatingLeadId(lead._id);
                dispatch(leadAssign({
                    leadId: lead._id,
                    data: {
                        conAgentId: user._id
                    }
                })).finally(() => {
                    setUpdatingLeadId(null);
                });
                setOpenAgent(new Map());
            }
            if (!isSelfCreated && conAgent) {
                setUpdatingLeadId(lead._id);
                dispatch(leadReAssign({
                    leadId: lead._id,
                    data: {
                        conAgentId: user._id
                    }
                })).finally(() => {
                    setUpdatingLeadId(null);
                });
                setOpenAgent(new Map());
            }
        }
    };


    return(
        <AssignReassignBlockStyled ref={el => {
            if (el) {
                agentRefs.current.set(lead._id, el);
            }
            }}
            $isSelfCreated={isSelfCreated}
            $isConversionManager={isConversionManager}
        >
            {updatingLeadId === lead._id ? (
                <UpdateLoading/>
            ) : (
                <>
                    <button className="manager-btn" type='button'
                        onClick={() => toggleAgentMenuDrop(lead._id)}
                    >
                        {isSelfCreated ? "N/A" 
                            : !lead.conAgentId 
                            ? 'Not Assigned Yet' 
                            : lead.conAgentId.username
                        }
                    </button>
                    {!isSelfCreated && (
                        <ArrowDown className={`arrow-svg ${toggleAgentDropArrow(lead._id)}`}/>
                    )}
                    <ul className={`users-list ${toggleAgentDropCont(lead._id, leads)}`}>
                        <li className="initial-item">
                            <p className="initial-drop-cont-text">
                                {!lead.conAgentId ? "Assign" : "ReAssign"}
                            </p>
                        </li>
                        {!lead.conAgentId ? (
                                renderUserList()
                        ) : (
                                renderUserList(lead.conAgentId._id)
                            )
                        }
                    </ul>
                </>
            )}
        </AssignReassignBlockStyled>
    );
};