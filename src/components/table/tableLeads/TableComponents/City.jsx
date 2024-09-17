import { CountryStyled } from "./TableComponets.Styled";
import { ReactComponent as ArrowDown } from "../../../../images/svg-icons/arrow-down.svg";
import { useState, useEffect, useRef, useCallback } from "react";
import { patchCityLead } from "../../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";



export const City = ({index, leads, lead, isAdmin, isManager, isConversion}) => {
    const [isCity, setCity] = useState(false);
    const [openCity, setOpenCity] = useState(new Map());
    const [cityValue, setCityValue] = useState('');
    const [isCityEnable, setCityEnable] = useState(false);
    const cityRefs = useRef(new Map());
    const dispatch = useDispatch();


    useEffect(() => {
        if(lead.city && lead.city !== ''){
            setCity(true);
        } else {
          setCity(false);
        }
    },[lead.city]);


    const toggleCityMenuDrop = (leadId) => {
        setOpenCity(prevState => {
          const newMap = new Map(prevState);
          newMap.set(leadId, !newMap.get(leadId));
          return newMap;
        });
        setCityValue('');
        setCityEnable(false);
    };


    const toggleCityDropCont = (leadId, leads) => {
        const totalLeads = leads.length;
        if ((index > 15) && (index > totalLeads - 3)) {
            return openCity.get(leadId) ? 'input-form-visible-adjusted' : '';
        } else {
            return openCity.get(leadId) ? 'input-form-visible' : '';
        }
    };


    const toggleCityDropArrow = (leadId) => {
        return openCity.get(leadId) ? 'arrow-icon-open' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOpenCity(new Map());
            setCityValue('');
            setCityEnable(false);
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        const newOpenMenus = new Map(openCity);
        let shouldUpdate = false;

        cityRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openCity.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenCity(newOpenMenus);
        }
    }, [openCity]);


    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);


    const onCityValueChange = (e) => {
        setCityValue(e.target.value);
        if((e.target.value.toLowerCase() !== lead.country.toLowerCase()) && (e.target.value !== '')){
            setCityEnable(true);
        } else {
            setCityEnable(false);
        }
    };


    const saveCityValue = () => {
        if (isAdmin || isManager || isConversion) {
            const formattedCityValue = cityValue
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

            const dataCityLead = {
                id: lead._id,
                leadCity: formattedCityValue
            }
            dispatch(patchCityLead(dataCityLead));
            setCityEnable(false);
            setCityValue('');
            setOpenCity(new Map());
        }
    };


    return(
        <CountryStyled ref={el => {
            if (el) {
                cityRefs.current.set(lead._id, el);
            }}}
            $isCity={isCity}
        >
        <button className="data-btn" type='button'
            onClick={() => toggleCityMenuDrop(lead._id)}
        >
            {isCity ? lead.city : 'Enter City'}
        </button>
        <ArrowDown className={`arrow-icon ${toggleCityDropArrow(lead._id, leads)}`}/>
        <form className={`input-form ${toggleCityDropCont(lead._id, leads)}`} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="city">
                <input type="text"
                    value={cityValue}
                    onChange={onCityValueChange}
                    id='city'
                    name="city"
                    placeholder="Enter City"
                    required
                />
            </label>
            <button type="submit" 
                className="submit-button"
                disabled={!isCityEnable}
                onClick={saveCityValue}
                >Save
            </button>
        </form>
        </CountryStyled>
    );
};