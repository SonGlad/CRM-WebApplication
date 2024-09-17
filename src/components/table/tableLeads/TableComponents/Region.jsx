import { CountryStyled } from "./TableComponets.Styled";
import { ReactComponent as ArrowDown } from "../../../../images/svg-icons/arrow-down.svg";
import { useState, useEffect, useRef, useCallback } from "react";
import { patchRegionLead } from "../../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";



export const Region = ({index, leads, lead, isAdmin, isManager, isConversion}) => {
    const [isRegion, setRegion] = useState(false);
    const [openRegion, setOpenRegion] = useState(new Map());
    const [regionValue, setRegionValue] = useState('');
    const [isRegionEnable, setRegionEnable] = useState(false);
    const regionRefs = useRef(new Map());
    const dispatch = useDispatch();


    useEffect(() => {
        if(lead.region && lead.region !== ''){
            setRegion(true);
        } else {
            setRegion(false);
        }
    },[lead.region]);


    const toggleRegionMenuDrop = (leadId) => {
        setOpenRegion(prevState => {
          const newMap = new Map(prevState);
          newMap.set(leadId, !newMap.get(leadId));
          return newMap;
        });
        setRegionValue('');
        setRegionEnable(false);
    };


    const toggleRegionDropCont = (leadId, leads) => {
        const totalLeads = leads.length;
        if ((index > 15) && (index > totalLeads - 3)) {
            return openRegion.get(leadId) ? 'input-form-visible-adjusted' : '';
        } else {
            return openRegion.get(leadId) ? 'input-form-visible' : '';
        }
    };


    const toggleRegionDropArrow = (leadId) => {
        return openRegion.get(leadId) ? 'arrow-icon-open' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOpenRegion(new Map());
            setRegionValue('');
            setRegionEnable(false);
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        const newOpenMenus = new Map(openRegion);
        let shouldUpdate = false;

        regionRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openRegion.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenRegion(newOpenMenus);
        }
    }, [openRegion]);
    
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);


    const onRegionValueChange = (e) => {
        setRegionValue(e.target.value);
        if((e.target.value.toLowerCase() !== lead.country.toLowerCase()) && (e.target.value !== '')){
            setRegionEnable(true);
        } else {
            setRegionEnable(false);
        }
    };


    const saveRegionValue = () => {
        if (isAdmin || isManager || isConversion) {
            const formattedRegionValue = regionValue
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

            const dataRegionLead = {
                id: lead._id,
                leadRegion: formattedRegionValue
            };
            dispatch(patchRegionLead(dataRegionLead));
            setRegionEnable(false);
            setRegionValue('');
            setOpenRegion(new Map());
        }
    };


    return(
        <CountryStyled ref={el => {
            if (el) {
                regionRefs.current.set(lead._id, el);
            }}}
            $isRegion={isRegion}
        >
        <button className="data-btn" type='button'
            onClick={() => toggleRegionMenuDrop(lead._id)}
        >
            {isRegion ? lead.region : 'Enter Region'}
        </button>
        <ArrowDown className={`arrow-icon ${toggleRegionDropArrow(lead._id, leads)}`}/>
        <form className={`input-form ${toggleRegionDropCont(lead._id, leads)}`} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="region">
                <input type="text"
                    value={regionValue}
                    onChange={onRegionValueChange}
                    id='region'
                    name="region"
                    placeholder="Enter Region"
                    required
                />
            </label>
            <button type="submit" 
                className="submit-button"
                disabled={!isRegionEnable}
                onClick={saveRegionValue}
                >Save
            </button>
        </form>
        </CountryStyled>
    );
};