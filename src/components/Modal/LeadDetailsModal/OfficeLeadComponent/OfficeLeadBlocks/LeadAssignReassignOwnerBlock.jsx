import {LeadAssignReAssignOwnerBlockStyled} from"./OfficeLeadBlocks.styled";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../../hooks/useAuth";



export const LeadAssignReAssignOwnerBlock = ({leadDetailById}) => {
    const theme = useTheme();
    const { isAdmin, isManager, isConversionManager } = useAuth();
    const [crmManager, setCRMManager] = useState(false);
    const [conManager, setConManager] = useState(false);
    const [conAgent, setConAgent] = useState(false);
    const [isSelfCreated, setSelfCreated] = useState(false);
    // const [dropDown, setDropDown] = useState(false);
    console.log(leadDetailById);
    

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