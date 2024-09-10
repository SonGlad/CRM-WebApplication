import { AssignDropContStyled } from "./tableExternalLeads.styled";
import { ReactComponent as Arrow } from "../../../images/svg-icons/arrow-down.svg";
import { useRef, useState, useCallback, useEffect } from "react";
import { leadAssign, leadReAssign } from "../../../redux/Lead/lead-operation";
import { ShowRules } from "../../../utils/showRules";



export const AssignedDropCont = ({lead, userSelectOffice, dispatch, isAdmin}) => {
    const { formatOfficeName } = ShowRules();
    const [openMenus, setOpenMenus] = useState(new Map());
    const leadRefs = useRef(new Map());
  

    const assignExternalLeadDetail = (lead, office) => {
        if (isAdmin && lead.newContact) {
            dispatch(leadAssign({
                leadId: lead._id,
                data: {
                    name: lead.name,
                    lastName: lead.lastName,
                    email: lead.email,
                    phone: lead.phone,
                    resource: lead.resource,
                    branch: office
                }
            }))
            toggleUserMenuDrop(lead._id);
        }
        if (isAdmin && !lead.newContact) {
            dispatch(leadReAssign({
                leadId: lead._id,
                data: {
                    branch: office
                }
            }));
            toggleUserMenuDrop(lead._id);
        }
    };


    const assignButtonValue = (lead) => {
        if (lead.newContact) {
          return'Assign'
        } 
        return "ReAssign"
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
        const newOpenMenus = new Map(openMenus);
        let shouldUpdate = false;

        leadRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openMenus.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenMenus(newOpenMenus);
        }
    }, [openMenus]);
    
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);



    return(
        <AssignDropContStyled ref={el => {
            if (el) {
                leadRefs.current.set(lead._id, el);
            }
        }}>
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

