import { ReactComponent as ArrowDown } from "../../../../images/svg-icons/arrow-down.svg";
import { StatusesStyled } from "./TableComponets.Styled";
import { useState, useEffect, useRef, useCallback } from "react";
import { patchStatus } from "../../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";


export const Status = ({index, leads, lead, status, isAdmin, isManager, isConversion}) => {
    const [isStatus, setStatus] = useState(false);
    const [openStatus, setOpenStatus] = useState(new Map());
    const statusRefs = useRef(new Map());
    const dispatch = useDispatch();
    

    useEffect(() => {
        if(status && status !== ''){
            setStatus(true);
        } else {
            setStatus(false);
        }
    },[status]);


    const toggleStatusMenuDrop = (leadId) => {
        setOpenStatus(prevState => {
          const newMap = new Map(prevState);
          newMap.set(leadId, !newMap.get(leadId));
          return newMap;
        });
    };
    
    
    const toggleStatusDropCont = (leadId, leads) => {
        const totalLeads = leads.length;
        if (index > 14) {
            if(index > totalLeads - 5){
                return openStatus.get(leadId) ? 'status-list-visible-adjusted' : '';
            }
        } else {
            return openStatus.get(leadId) ? 'status-list-visible' : '';
        }
    };

    
    const toggleStatusDropArrow = (leadId) => {
        return openStatus.get(leadId) ? 'arrow-svg-open' : '';
    };
    
    
    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOpenStatus(new Map());
        }
    },[]);
    
    
    const handleBackgroundClick = useCallback(event => {
        const newOpenMenus = new Map(openStatus);
        let shouldUpdate = false;

        statusRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openStatus.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenStatus(newOpenMenus);
        }
    }, [openStatus]);
    
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);


    const submitStatus = (status) => {
        if (isAdmin || isManager || isConversion) {
            const dataStatus = {
                id: lead._id,
                leadStatus: status
            }
            dispatch(patchStatus(dataStatus));
            setOpenStatus(new Map());
        }
    };


    return (
        <StatusesStyled ref={el => {
            if (el) {
                statusRefs.current.set(lead._id, el);
            }
        }}>
            <button className="status-btn" type='button'
                onClick={() => toggleStatusMenuDrop(lead._id)}
            >
                {isStatus ? lead.status : 'N/A'}
            </button>
            <ArrowDown className={`arrow-svg ${toggleStatusDropArrow(lead._id)}`}/>
            <ul className={`status-list ${toggleStatusDropCont(lead._id, leads)}`}>
                {status.map((status, index) => (
                    <li className="status-item" key={index}>
                        <p className="drop-cont-text"
                            onClick={() => submitStatus(status)}
                        >{status}</p>
                    </li>
                ))}
            </ul>
        </StatusesStyled>
    );
};