import { CountryStyled } from "./TableComponets.Styled";
import { ReactComponent as ArrowDown } from "../../../../images/svg-icons/arrow-down.svg";
import { useState, useEffect, useRef, useCallback } from "react";
import { patchCountryLead } from "../../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";



export const Country = ({index, leads, lead, isAdmin, isManager, isConversion}) => {
    const [isCountry, setCountry] = useState(false);
    const [openCountry, setOpenCountry] = useState(new Map());
    const [countryValue, setCountryValue] = useState('');
    const [isCountryEnable, setCountryEnable] = useState(false);
    const countryRefs = useRef(new Map());
    const dispatch = useDispatch();


    useEffect(() => {
        if(lead.country && lead.country !== ''){
            setCountry(true);
        } else {
            setCountry(false);
        }
    },[lead.country]);


    const toggleCountryMenuDrop = (leadId) => {
        setOpenCountry(prevState => {
          const newMap = new Map(prevState);
          newMap.set(leadId, !newMap.get(leadId));
          return newMap;
        });
        setCountryValue('');
        setCountryEnable(false);
    };


    const toggleCountryDropCont = (leadId, leads) => {
        const totalLeads = leads.length;
        if ((index > 15) && (index > totalLeads - 3)) {
            return openCountry.get(leadId) ? 'input-form-visible-adjusted' : '';
        } else {
            return openCountry.get(leadId) ? 'input-form-visible' : '';
        }
    };


    const toggleCountryDropArrow = (leadId) => {
        return openCountry.get(leadId) ? 'arrow-icon-open' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOpenCountry(new Map());
            setCountryValue('');
            setCountryEnable(false);
        }
    },[]);
    
    
    const handleBackgroundClick = useCallback(event => {
        const newOpenMenus = new Map(openCountry);
        let shouldUpdate = false;

        countryRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openCountry.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenCountry(newOpenMenus);
        }
    }, [openCountry]);
    
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);


    const onCountryValueChange = (e) => {
        setCountryValue(e.target.value);
        if((e.target.value.toLowerCase() !== lead.country.toLowerCase()) && (e.target.value !== '')){
            setCountryEnable(true);
        } else {
            setCountryEnable(false);
        }
    };


    const saveCountryValue = () => {
        if (isAdmin || isManager || isConversion) {
            const formattedCountryValue = countryValue
            .split(' ')
            .map(word => {
                if (word === word.toUpperCase()) {
                    return word;
                }
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join(' ');

            const dataCountryLead = {
                id: lead._id,
                leadCountry: formattedCountryValue
            }
            dispatch(patchCountryLead(dataCountryLead));
            setCountryEnable(false);
            setCountryValue('');
            setOpenCountry(new Map());
        }
    };


    return (
      <CountryStyled ref={el => {
        if (el) {
            countryRefs.current.set(lead._id, el);
        }}}
        $isCountry={isCountry}
      >
        <button className="data-btn" type='button'
            onClick={() => toggleCountryMenuDrop(lead._id)}
        >
            {isCountry ? lead.country : 'Enter Country'}
        </button>
        <ArrowDown className={`arrow-icon ${toggleCountryDropArrow(lead._id, leads)}`}/>
        <form className={`input-form ${toggleCountryDropCont(lead._id, leads)}`} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="country">
                <input type="text"
                    value={countryValue}
                    onChange={onCountryValueChange}
                    id='country'
                    name="country"
                    placeholder="Enter Country"
                    required
                />
            </label>
            <button type="submit" 
                className="submit-button"
                disabled={!isCountryEnable}
                onClick={saveCountryValue}
                >Save
            </button>
        </form>
      </CountryStyled>
    );
};