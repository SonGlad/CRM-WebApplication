import { LeadChangeInfoBlockStyled } from "./OfficeLeadBlocks.styled";
import {ReactComponent as ArrowIcon} from "../../../../../images/svg-icons/arrow-down.svg";
import { useState, useEffect, useCallback, useRef } from "react";
import { useLead } from "../../../../../hooks/useLead";
import { useAuth } from "../../../../../hooks/useAuth";
import { 
    patchStatus, 
    patchTimeZone, 
    patchCountryLead, 
    patchRegionLead, 
    patchCityLead 
} from "../../../../../redux/Lead/lead-operation";
import {setSuccessToFalse} from "../../../../../redux/Lead/lead-slice";
import { useDispatch } from "react-redux";



export const LeadChangeInfoBlock = ({leadDetailById}) => {
    const [isStatus, setStatus] = useState(false);
    const [isTimeZone, setTimeZone] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [statusDropDown, setStatusDropDown] = useState(false);
    const [timeZoneDropDown, setTimeZoneDropDown] = useState(false);
    const [countryValue, setCountryValue] = useState(leadDetailById.country);
    const [isCountryEnable, setCountryEnable] = useState(false);
    const [regionValue, setRegionValue] = useState(leadDetailById.region);
    const [isRegionEnable, setRegionEnable] = useState(false);
    const [cityValue, setCityValue] = useState(leadDetailById.city);
    const [isCityEnable, setCityEnable] = useState(false);
    const statusDropContRef = useRef();    
    const timeZoneDropContRef = useRef();
    const {timeZone, status, isSuccess} = useLead();
    const {isAdmin, isManager, isConversion} = useAuth();
    const dispatch = useDispatch();
       

    useEffect(() => {
        const { status, timeZone} = leadDetailById;      

        if(status && status !== ''){
            setStatus(true);
        }
        if (timeZone && timeZone !== '') {
            setTimeZone(true)
        }
    },[leadDetailById]);


    useEffect(() => {
        const {city, country, region } = leadDetailById; 

        if (isSuccess) {
            if (cityValue !== city) {
                setCityValue(city)
            }
            if (countryValue !== country) {
                setCountryValue(country)
            }
            if (regionValue !== region) {
                setRegionValue(region)
            }
            setTimeout(() => {
                dispatch(setSuccessToFalse())
            },250)
        }
    },[cityValue, countryValue, dispatch, isSuccess, leadDetailById, regionValue])


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


    const resetFormsValue = () => {
        if (isCountryEnable) {
            setCountryValue(leadDetailById.country);
            setCountryEnable(false);
        }
        if (isRegionEnable) {
            setRegionValue(leadDetailById.region);
            setRegionEnable(false);
        }
        if (isCityEnable) {
            setCityValue(leadDetailById.city);
            setCityEnable(false);
        }
    };


    const toggleStatusDropDown = () => {
        setStatusDropDown(prevState => !prevState);
        resetFormsValue();
    };
    const toggleTieZoneDropDown = () => {
        setTimeZoneDropDown(prevState => !prevState);
        resetFormsValue();
    };


    const toggleStatusDropArrow = () => {
        return statusDropDown ? 'icon-active' : '';
    };
    const toggleStatusDropCont = () => {
        return statusDropDown ? 'status-list-visible' : '';
    };
    const toggleTimeZoneDropArrow = () => {
        return timeZoneDropDown ? 'icon-active' : '';
    };
    const toggleTimeZoneDropCont = () => {
        return timeZoneDropDown ? 'time-zone-list-visible' : '';
    };


    const handleBackgroundClick = useCallback(event => {
        if (statusDropContRef.current && !statusDropContRef.current.contains(event.target)) {
            setStatusDropDown(false);
        }
        if (timeZoneDropContRef.current && !timeZoneDropContRef.current.contains(event.target)) {
            setTimeZoneDropDown(false);
        }
    },[]);


    useEffect(() => {
        document.addEventListener('click', handleBackgroundClick);
        return () => {
          document.removeEventListener('click', handleBackgroundClick);
        };
    },[handleBackgroundClick]);



    const onCountryValueChange = (e) => {
        setCountryValue(e.target.value);
        if((e.target.value.toLowerCase() !== leadDetailById.country.toLowerCase()) && (e.target.value !== '')){
            setCountryEnable(true);
        } else {
            setCountryEnable(false)
        }
    };


    const onRegionValueChange = (e) => {
        setRegionValue(e.target.value);
        if((e.target.value.toLowerCase() !== leadDetailById.region.toLowerCase()) && (e.target.value !== '')){
            setRegionEnable(true);
        } else {
            setRegionEnable(false);
        }
    };


    const onCityValueChange = (e) => {
        setCityValue(e.target.value);
        if((e.target.value.toLowerCase() !== leadDetailById.city.toLowerCase()) && (e.target.value !== '')){
            setCityEnable(true);
        } else {
            setCityEnable(false);
        }
    };
   


    const submitStatus = (status) => {
        if (isAdmin || isManager || isConversion) {
            const dataStatus = {
                id: leadDetailById._id,
                leadStatus: status
            }
            dispatch(patchStatus(dataStatus));
            setStatusDropDown(false);
        }
    };


    const submitTimeZone = (zone) => {
        if (isAdmin || isManager || isConversion) {
            const dataTimeZone = {
                id: leadDetailById._id,
                leadTimeZone: zone
            }
            dispatch(patchTimeZone(dataTimeZone));
            setTimeZoneDropDown(false);
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
                id: leadDetailById._id,
                leadCountry: formattedCountryValue
            };           
            dispatch(patchCountryLead(dataCountryLead));
            setCountryEnable(false);
        }
    };


    const saveRegionValue = () => {
        if (isAdmin || isManager || isConversion) {
            const formattedRegionValue = regionValue
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

            const dataRegionLead = {
                id: leadDetailById._id,
                leadRegion: formattedRegionValue
            };

            dispatch(patchRegionLead(dataRegionLead));
            setRegionEnable(false);
        }
    };


    const saveCityValue = () => {
        if (isAdmin || isManager || isConversion) {
            const formattedCityValue = cityValue
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

            const dataCityLead = {
                id: leadDetailById._id,
                leadCity: formattedCityValue
            }

            dispatch(patchCityLead(dataCityLead));
            setRegionEnable(false);
        }
    };



    return(
        <LeadChangeInfoBlockStyled>
            <div className="content-block" ref={statusDropContRef}>
                <p className="title-text">Status:</p>
                <button type="button" className="assign-button"
                    onClick={toggleStatusDropDown}
                >
                    {isStatus ? leadDetailById.status : 'N/A'}
                    <ArrowIcon className={`icon ${toggleStatusDropArrow()}`}/>
                </button>
                <ul className={`status-list ${toggleStatusDropCont()}`}>
                    {status.map((status, index) => (
                        <li className="status-item" key={index}>
                            <p className="drop-cont-text"
                                onClick={() => submitStatus(status)}
                            >{status}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="content-block" ref={timeZoneDropContRef}>
                <p className="title-text">Time Zone:</p>
                <button type="button" className="assign-button"
                    onClick={toggleTieZoneDropDown}
                >
                    {isTimeZone ? (leadDetailById.timeZone > 0 
                        ? `+ ${leadDetailById.timeZone}`
                        : `- ${Math.abs(leadDetailById.timeZone)}`)
                        : '0'
                    }
                    <ArrowIcon className={`icon ${toggleTimeZoneDropArrow()}`}/>
                </button>
                <ul className={`status-list time-zone-list ${toggleTimeZoneDropCont()}`}>
                    {timeZone.map((zone, index) => (
                        <li className="status-item" key={index}>
                            <p className="drop-cont-text"
                                onClick={() => submitTimeZone(zone)}
                            >{zone}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="content-block">
                <div>
                    <p className="title-text">Country:</p>
                </div>
                <form className="block-form" onSubmit={(e) => e.preventDefault()}>
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
            </div>
            <div className="content-block">
                <div>
                    <p className="title-text">Region:</p>
                </div>
                <form className="block-form" onSubmit={(e) => e.preventDefault()}>
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
            </div>
            <div className="content-block">
                <div>
                    <p className="title-text">City:</p>
                </div>
                <form className="block-form" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="city">
                        <input type="text"
                            value={cityValue}
                            onChange={onCityValueChange}
                            id='city'
                            name="city"
                            placeholder="Enter Region"
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
            </div>
            <div className="content-block">
                <p className="title-text">Client Time:</p>
                <p className="value-text">{calculateClientTime(leadDetailById.timeZone)}</p>
            </div>
        </LeadChangeInfoBlockStyled>
    );
};