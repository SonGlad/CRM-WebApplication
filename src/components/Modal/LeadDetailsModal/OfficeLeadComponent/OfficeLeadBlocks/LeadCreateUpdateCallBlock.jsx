import { LeadCreateUpdateCallBlockStyled } from "./OfficeLeadBlocks.styled";
import { ShowRules } from "../../../../../utils/showRules";
import { ReactComponent as CalendarIcon } from "../../../../../images/svg-icons/calendar.svg";
import {ReactComponent as CheckedIcon} from "../../../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../../../images/svg-icons/rectangle.svg";
import { useState, useEffect ,useMemo, useRef } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import { useDispatch } from "react-redux";
import { patchNextCall } from "../../../../../redux/Lead/lead-operation";
import {useAuth} from "../../../../../hooks/useAuth";



export const LeadCreateUpdateCallBlock = ({leadDetailById, setDeleteComponentTrue}) => {
    const { formatDateTime } = ShowRules();
    const [date, setDate] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isChecked, setChecked] = useState(false);
    const dateNow = useRef(new Date());
    const [isOwner, setIsOwner] = useState(false);
    const { userEmail, isAdmin } = useAuth();
    const dispatch = useDispatch();
  

    const nextCallDate = useMemo(() => {
        return leadDetailById.nextCall ? new Date(leadDetailById.nextCall) : null;
    }, [leadDetailById.nextCall]);


    const isOverdue = date && date < dateNow.current;
    const timeLeft = date ? date - dateNow.current : 0;
    const isAlmostDue = !isOverdue && timeLeft <= 6 * 60 * 60 * 1000;
    const isToday = date && dateNow.current.toDateString() === date.toDateString();
    const minDateOption = date && date > dateNow.current ? "today" : null;
    const minTimeOption = isToday ? dateNow.current.toTimeString().slice(0, 5) : null;

    
    useEffect(() => {
        if (leadDetailById.nextCall) {
            setDate(nextCallDate);
        } else {
            setDate(null);
        }
    }, [leadDetailById.nextCall, nextCallDate]);


    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 60000);
    
        return () => clearInterval(intervalId);
    }, []);


    const calculateClientTime = (timeZoneOffset) => {
        const currentUTCTime  = new Date(
          currentTime.getTime() + currentTime.getTimezoneOffset() * 60000
        );     
  
        const clientTime = new Date(
          currentUTCTime.getTime() + timeZoneOffset * 60 * 60 * 1000
        );
        
        return clientTime.toLocaleString("ru-RU", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: undefined 
        });
    };


    const submitNextCallDate = () => {
        if ((date !== (nextCallDate || null)) && (date !== dateNow.current)) {
            if (isOverdue) {
                setDate(null);
            } else {
                const updatedDate = date.toISOString().slice(0, 16)
                dispatch(patchNextCall({
                    id: leadDetailById._id, 
                    leadNextcall: updatedDate 
                }))
            }
        }
    };
    

    const toggleDeleteCheckbox = () => {
        setChecked(prevState => !prevState);
    };


    useEffect(() => {
        if(leadDetailById.owner){
            if (userEmail === leadDetailById.owner.email) {
                setIsOwner(true)
            } else {
                setIsOwner(false)
            }
        }
    },[leadDetailById.owner, userEmail]);



    return(
        <LeadCreateUpdateCallBlockStyled 
            $isOverdue={isOverdue}
            $isAlmostDue={isAlmostDue}
        >
            <div className="content-block">
                <p className="title-text">Client Time:</p>
                <p className="value-text">{calculateClientTime(leadDetailById.timeZone)}</p>
            </div>
            <div className="content-block">
                <p className="title-text">Created:</p>
                <p className="value-text">{formatDateTime(leadDetailById.createdAt)}</p>
            </div>
            <div className="content-block">
                <p className="title-text">Last Update:</p>
                <p className="value-text">{formatDateTime(leadDetailById.updatedAt)}</p>
            </div>
            <div className="next-call-cont">
                <p className="title-text next-call">Next Call:</p>
                <div className="calendar-cont">
                    <Flatpickr
                        data-enable-time
                        value={date ? date : ''}
                        onChange={([date]) => setDate(date)}
                        options={{
                            dateFormat: "d.m.Y  H:i",
                            minDate: minDateOption,
                            minTime: minTimeOption,
                            weekNumbers: true,
                            "locale": {
                                "firstDayOfWeek": 1
                            },
                        }}
                        placeholder="Select Date & Time"
                        onClose={submitNextCallDate}
                    />    
                    <CalendarIcon className="calendar-icon" width={16} height={16}/>
                </div>
            </div>
            {(isAdmin || isOwner) && (
                <div className="delete-block">
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
            )}
        </LeadCreateUpdateCallBlockStyled>
    );
};