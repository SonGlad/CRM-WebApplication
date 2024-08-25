import { ExternalLeadStyled } from "./ExternalLead.styled";
import {ReactComponent as ArrowIcon} from "../../../../images/svg-icons/arrow-down.svg";
import {ReactComponent as CheckedIcon} from "../../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../../images/svg-icons/rectangle.svg";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "styled-components";
import { LeadNameForm } from "../LeadNameForm";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { useUser } from "../../../../hooks/useUser";
import { useDispatch } from "react-redux";
import { leadAssign, leadReAssign } from "../../../../redux/Lead/lead-operation";


export const ExternalLeadComponent = ({leadDetailById, leadDetailByIdLocation, setDeleteComponentTrue}) => {
    const theme = useTheme();
    const [crmManager, setCRMManager] = useState(false);
    const [conManager, setConManager] = useState(false);
    const [conAgent, setConAgent] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const dropContRef = useRef();
    const { userSelectOffice } = useUser();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        const crmManager = leadDetailById.crmManager;
        const conManager = leadDetailById.conManager;
        const conAgent = leadDetailById.conAgent;

        if(conAgent && (conAgent.name || conAgent.email)){
            setConAgent(true);
        }
        if(conManager && (conManager.name || conManager.email)){
            setConManager(true);
        }
        if (crmManager && (crmManager.name || crmManager.email)) {
            setCRMManager(true);
        }
    },[leadDetailById.conAgent, leadDetailById.conManager, leadDetailById.crmManager]);


    const formatBranchName = (branch) => {
        if (branch) {
          return branch.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
        }
    };


    const capitalizeSource = (str) => {
        if (typeof str !== 'string' || str.length === 0) {
          return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };


    const formatDateTime = (dateString, timeZone = 'Europe/Kiev') => {
        const date = new Date(dateString);
        const zonedDate = toZonedTime(date, timeZone);
    
        const formattedDate = format(zonedDate, 'yyyy-MM-dd', { timeZone });
        const formattedTime = format(zonedDate, 'HH:mm', { timeZone });
    
        return `${formattedDate} ${formattedTime}`;
    };


    const assignButtonValue = (leadDetailById) => {
        if (leadDetailById.newContact) {
            return 'Assign'
        } 
        return "ReAssign";
    };


    const toggleLeadDropArrow = () => {
        return dropDown ? 'icon-active' : '';
    };
    const toggleLeadDropCont = () => {
        return dropDown ? 'office-list-visible' : '';
    };


    const toggleDropDown = () => {
        setDropDown(prevState => !prevState)
    };


    const formatOfficeName = (office) => {
        return office.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
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


    const assignExternalLeadDetail = (leadDetailById, office) => {
        if (leadDetailById.newContact) {
            dispatch(leadAssign({
                leadId: leadDetailById._id,
                data: {
                    name: leadDetailById.name,
                    lastName: leadDetailById.lastName,
                    email: leadDetailById.email,
                    phone: leadDetailById.phone,
                    resource: leadDetailById.resource,
                    branch: office
                }
            }));
            setDropDown(false);
        }
        if (!leadDetailById.newContact) {
            dispatch(leadReAssign({
                leadId: leadDetailById._id,
                data: {
                    branch: office
                }
            }));
            setDropDown(false);
        }
    };


    const toggleDeleteCheckbox = () => {
        setChecked(prevState => !prevState);
    };
    
       
    return(
        <ExternalLeadStyled>
            <LeadNameForm
                leadDetailById={leadDetailById}
                leadDetailByIdLocation={leadDetailByIdLocation}
            />
            <div className="info-cont">
                <div>
                    <p>Assigned Office</p>
                    {leadDetailById.assigned ? (
                        <p>{formatBranchName(leadDetailById.assignedOffice)}</p>
                    ) : (
                        <p style={{color: theme.color.error_color,}}>Not Assigned Yet</p>
                    )}
                </div>
                <div>
                    <p>Assigned CRM Manager</p>
                    {crmManager ? (
                        <>
                            <p><span>Name: </span>{leadDetailById.crmManager.name}</p>
                            <p><span>Email: </span>{leadDetailById.crmManager.email}</p>
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
                <div>
                    <p>Assigned Conversion Manager</p>
                    {conManager ? (
                        <>
                            <p><span>Name: </span>{leadDetailById.conManager.name}</p>
                            <p><span>Email: </span>{leadDetailById.conManager.email}</p>
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
                <div>
                    <p>Assigned Conversion Agent</p>
                    {conAgent ? (
                        <>
                            <p><span>Name: </span>{leadDetailById.conAgent.name}</p>
                            <p><span>Email: </span>{leadDetailById.conAgent.email}</p>
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
            </div>
            <div className="info-cont">
                <p><span>Created: </span>{formatDateTime(leadDetailById.createdAt)}</p>
                <p><span>Last Update: </span>{formatDateTime(leadDetailById.updatedAt)}</p>
            </div>
            <div className="info-cont">
                <p><span>Resource: </span>{capitalizeSource(leadDetailById.resource)}</p>
                <div className="drop-cont" ref={dropContRef}>
                    <button type="button" className="assign-button"
                        onClick={toggleDropDown}
                    >
                        {assignButtonValue(leadDetailById)}
                        <ArrowIcon className={`icon ${toggleLeadDropArrow()}`}/>
                    </button>
                    <ul className={`office-list ${toggleLeadDropCont()}`}>
                        {leadDetailById.assigned ? (userSelectOffice
                            .filter(({ office }) => office !== leadDetailById.assignedOffice)
                            .map(({office}, index) => (
                            <li className="office-item" key={index}>
                                <p className="drop-cont-text" 
                                    onClick={() => assignExternalLeadDetail(leadDetailById, office)}
                                >To {formatOfficeName(office)}
                                </p>
                            </li>
                            ))
                        ) : (
                            userSelectOffice.map(({office}, index) => (
                            <li className="office-item" key={index}>
                                <p className="drop-cont-text"
                                    onClick={() => assignExternalLeadDetail(leadDetailById, office)}
                                >To {formatOfficeName(office)}
                                </p>
                            </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
            <div className="info-cont delete-block">
                <button type="button" 
                    className="delete-button"
                    onClick={setDeleteComponentTrue}
                    disabled={!isChecked}
                >Delete Lead
                </button>
                <label htmlFor="deleteCheckbox" className="delete-label">
                    Check to Delete
                    <input className="delete-checkbox"
                        name="delete_lead" 
                        type="checkbox"
                        id="deleteCheckbox"
                        checked={isChecked}
                        onChange={toggleDeleteCheckbox}
                    />
                    <div className="custom-checkbox">
                        <CheckBoxIcon className="custom-checkbox-before" width="16" height="16"/>
                        <CheckedIcon className="custom-checkbox-after" width="16" height="16"/>
                    </div>
                </label>
            </div>
        </ExternalLeadStyled>
    );
};