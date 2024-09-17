import { ReactComponent as ArrowDown } from "../../../../images/svg-icons/arrow-down.svg";
import { StatusesStyled } from "./TableComponets.Styled";
import { useState, useEffect, useRef, useCallback } from "react";
import { patchTimeZone } from "../../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";


export const TimeZone = ({index, leads, lead, timeZone, isAdmin, isManager, isConversion}) => {
    const [isTimeZone, setTimeZone] = useState(false);
    const [openTimeZone, setOpenTimeZone] = useState(new Map());
    const timeZoneRefs = useRef(new Map());
    const dispatch = useDispatch();


    useEffect(() => {
        if(timeZone && timeZone !== ''){
            setTimeZone(true);
        } else {
            setTimeZone(false);
        }
    },[timeZone]);


    const toggleTimeZoneMenuDrop = (leadId) => {
        setOpenTimeZone(prevState => {
          const newMap = new Map(prevState);
          newMap.set(leadId, !newMap.get(leadId));
          return newMap;
        });
    };
    

    const toggleTimeZoneDropCont = (leadId, leads) => {
        const totalLeads = leads.length;
        if (index > 14) {
            if(index > totalLeads - 5){
                return openTimeZone.get(leadId) ? 'status-list-visible-adjusted' : '';
            }
        } else {
            return openTimeZone.get(leadId) ? 'status-list-visible' : '';
        }
    };

    
    const toggleTimeZoneDropArrow = (leadId) => {
        return openTimeZone.get(leadId) ? 'arrow-svg-open' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOpenTimeZone(new Map());
        }
    },[]);
    
    
    const handleBackgroundClick = useCallback(event => {
        const newOpenMenus = new Map(openTimeZone);
        let shouldUpdate = false;

        timeZoneRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openTimeZone.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenTimeZone(newOpenMenus);
        }
    }, [openTimeZone]);


    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);


    const submitTimeZone = (timeZone) => {
        if (isAdmin || isManager || isConversion) {
            const dataTimeZone = {
                id: lead._id,
                leadTimeZone: timeZone
            }
            dispatch(patchTimeZone(dataTimeZone));
            setOpenTimeZone(new Map());
        }
    };


    return(
        <StatusesStyled ref={el => {
            if (el) {
                timeZoneRefs.current.set(lead._id, el);
            }}}
            $isTimeZone={isTimeZone}
        >
            <button className="status-btn" type='button'
                onClick={() => toggleTimeZoneMenuDrop(lead._id)}
            >
                {isTimeZone ? lead.timeZone : 'N/A'}
            </button>
            <ArrowDown className={`arrow-svg ${toggleTimeZoneDropArrow(lead._id)}`}/>
            <ul className={`status-list ${toggleTimeZoneDropCont(lead._id, leads)}`}>
                {timeZone.map((zone, index) => (
                    <li className="status-item" key={index}>
                        <p className="drop-cont-text"
                            onClick={() => submitTimeZone(zone)}
                        >{zone}</p>
                    </li>
                ))}
            </ul>
        </StatusesStyled>
    );
};