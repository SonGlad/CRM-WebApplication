import { AssignDropContStyled } from "./tableExternalLeads.styled";
import {ReactComponent as Arrow} from "../../../images/svg-icons/arrow-down.svg";
import { useRef, useState, useCallback, useEffect } from "react";



export const AssignedDropCont = ({lead, userSelectOffice}) => {
    const [openMenus, setOpenMenus] = useState(new Map());
    const leadRefs = useRef(new Map());


    const assignExternalLeadDetail = (lead, office) => {
        console.log(lead);
        console.log(office);
        toggleUserMenuDrop(lead._id);
    };


    const assignButtonValue = (lead) => {
        let text;
        if (!lead.assigned) {
          text = 'Assign'
        } else {
          text = "ReAssign"
        }
        return text;
    };


    const formatOfficeName = (office) => {
        return office.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };


    const toggleUserMenuDrop = (leadId) => {
        setOpenMenus(prevState => {
          const newMap = new Map(prevState);
          newMap.set(leadId, !newMap.get(leadId));
          return newMap;
        });
    };
    
    
    const toggleLeadDropCont = (leadId) => {
        return openMenus.get(leadId) ? 'office-list-visible' : '';
    };
    
    
    const toggleLeadDropArrow = (leadId) => {
        return openMenus.get(leadId) ? 'icon-active' : '';
    };
    
    
    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOpenMenus(new Map());
        }
    },[]);
    
    
    const handleBackgroundClick = useCallback(event => {
        leadRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target)) {
            setOpenMenus(prevState => {
                const newMap = new Map(prevState);
                newMap.set(leadId, false);
                return newMap;
            });
            }
        });
    }, []);
    
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);



    return(
        <AssignDropContStyled ref={el => leadRefs.current.set(lead._id, el)}>
            <button className="assign-btn" type='button'
                onClick={() => toggleUserMenuDrop(lead._id)}
            >
                {assignButtonValue(lead)}
                <Arrow className={`icon ${toggleLeadDropArrow(lead._id)}`}/>
            </button>
            <ul className={`office-list ${toggleLeadDropCont(lead._id)}`}>
                {lead.assigned ? (userSelectOffice
                    .filter(({ office }) => office !== lead.assignedOffice)
                    .map(({office}, index) => (
                    <li className="office-item" key={index}>
                        <p onClick={() => assignExternalLeadDetail(lead, office)}
                        >To {formatOfficeName(office)}
                        </p>
                    </li>
                    ))
                ) : (
                    userSelectOffice.map(({office}, index) => (
                    <li className="office-item" key={index}>
                        <p onClick={() => assignExternalLeadDetail(lead, office)}
                        >To {formatOfficeName(office)}
                        </p>
                    </li>
                    ))
                )}
            </ul>
        </AssignDropContStyled>
    );
};

