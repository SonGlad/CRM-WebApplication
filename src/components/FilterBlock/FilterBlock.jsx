import { FilterBlockStyled } from "./FilterBlock.styled";
import {ReactComponent as CloseIcon} from "../../images/svg-icons/close.svg";
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { 
    setSourceState,
    setCountryState,
    setRegionState,
    setCityState,
    setLastUpdateDateState,
    setCreatedDateState,
    setNextCallDateState,
    setAgentState,
    setTimeZoneState,
    setStatusState,
    setOpenFilterState,
    resetSourceState,
    resetCountryState,
    resetRegionState,
    resetCityState,
    resetLastUpdateDateState,
    resetCreatedDateState,
    resetNextCallDateState,
    resetAgentState,
    resetTimeZoneState,
    resetStatusState,
    resetOpenFilterState,
    resetFilterListState,
} from "../../redux/Filter/filter-slice";
import { 
    getAllSource, 
    getFilterStatus, 
    getFilterTimeZone, 
    getAllCountries,
    getAllRegions,
    getAllCities,
    getAllAgents,
    getAllNextCall,
    getAllLastUpdated,
    getAllCreatedDate
} from "../../redux/Filter/filter-operation";
import { useFilter } from "../../hooks/useFilter";
import { useLead } from "../../hooks/useLead";
import { useAuth } from "../../hooks/useAuth";



export const FilterBlock = () => {
    const { 
        openFilter, 
        sourceState, 
        countryState, 
        regionState, 
        cityState,
        lastUpdateDateState,
        createdDateState,
        nextCallDateState,
        agentState,
        timeZoneState,
        statusState,
        filterList,
    } = useFilter();
    const { leadOffice } = useLead();
    const { isAdmin } = useAuth();
    const [searchValue, setSearchValue] = useState('');
    const [isFormCancelButton, setFormCancelButton] = useState(false);
    const [openFilterList, setOpenFilterList] = useState(new Map());
    const [selectedButton, setSelectedButton] = useState('');
    const filterRefs = useRef(new Map());
    const dispatch = useDispatch();















    console.log(filterList);    
    useEffect(() => {
        console.log("REDUX:", openFilter);
    },[openFilter])
    useEffect(() => {
        console.log("Redux sourceState:", sourceState);
    },[sourceState]);
    useEffect(() => {
        console.log("Redux countryState:", countryState);
    },[countryState]);
    useEffect(() => {
        console.log("Redux regionState:", regionState);
    },[regionState])
    useEffect(() => {
        console.log("Redux cityState:", cityState);
    },[cityState])
    useEffect(() => {
        console.log("Redux lastUpdateDateState:", lastUpdateDateState);
    },[lastUpdateDateState])
    useEffect(() => {
        console.log("Redux createdDateState:", createdDateState);
    },[createdDateState])
    useEffect(() => {
    console.log("Redux nextCallDateState:", nextCallDateState);  
    },[nextCallDateState])
    useEffect(() => {
        console.log("Redux agentState:", agentState);
    },[agentState])
    useEffect(() => {
        console.log("Redux timeZoneState:", timeZoneState);
    },[timeZoneState])
    useEffect(() => {
        console.log("Redux statusState:", statusState);
    },[statusState])
















    const buttonsName = [
        {buttonName: 'Select Source', state: sourceState},
        {buttonName: 'Select Country', state: countryState},
        {buttonName: 'Select Region', state: regionState},
        {buttonName: 'Select City', state: cityState},
        {buttonName: 'Last Update', state: lastUpdateDateState},
        {buttonName: 'Create Date', state: createdDateState},
        {buttonName: 'Next Call', state: nextCallDateState},
        {buttonName: 'Select Agent', state: agentState},
        {buttonName: 'Select Status', state: statusState},
        {buttonName: 'Select Time-Zone', state: timeZoneState},
    ];


    const onValueChange = (e) => {
        setSearchValue(e.target.value);
    };


    const resetFormValue = () => {
        setSearchValue('');
        dispatch(resetOpenFilterState());
    };


    useEffect(() => {
        if (searchValue) {
            setFormCancelButton(true);
        } else {
            setFormCancelButton(false);
        }

        const handler = setTimeout(() => {
            dispatch(setOpenFilterState(searchValue))
        }, 500);
        
        return () => {
            clearTimeout(handler);
        };
    }, [dispatch, searchValue]);


    const toggleFilterDrop = (buttonName) => {
        setOpenFilterList(prevState => {
            const newMap = new Map(prevState);
            const isOpen = !newMap.get(buttonName);
            newMap.set(buttonName, isOpen);

            if (isOpen) {
                setSelectedButton(buttonName);
            }
            return newMap;
        });
    };


    useEffect(() => {
        if (!selectedButton) return;

        dispatch(resetFilterListState());

        switch (selectedButton) {
            case 'Select Source':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getAllSource(leadOffice));
                } else {
                    dispatch(getAllSource());
                }
            break;

            case 'Select Country':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getAllCountries(leadOffice));
                } else {
                    dispatch(getAllCountries());
                }
            break;

            case 'Select Region':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getAllRegions(leadOffice));
                } else {
                    dispatch(getAllRegions());
                }
            break;

            case 'Select City':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getAllCities(leadOffice));
                } else {
                    dispatch(getAllCities());
                }
            break;

            case 'Last Update':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getAllLastUpdated(leadOffice));
                } else {
                    dispatch(getAllLastUpdated());
                }
            break;

            case 'Create Date':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getAllCreatedDate(leadOffice));
                } else {
                    dispatch(getAllCreatedDate());
                }
            break;

            case 'Next Call':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getAllNextCall(leadOffice));
                } else {
                    dispatch(getAllNextCall());
                }
            break;

            case 'Select Agent':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getAllAgents(leadOffice));
                } else {
                    dispatch(getAllAgents());
                }
            break;

            case 'Select Status':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getFilterStatus(leadOffice));
                } else {
                    dispatch(getFilterStatus());
                }
            break;

            case 'Select Time-Zone':
                dispatch(resetFilterListState());
                if (isAdmin) {
                    dispatch(getFilterTimeZone(leadOffice));
                } else {
                    dispatch(getFilterTimeZone());
                }
            break;

            default:
            break;
        }
    },[dispatch, isAdmin, leadOffice, selectedButton])


    const toggleFiltersDropCont = (buttonName) => {
        return openFilterList.get(buttonName) ? 'filter-item-list-visible' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            if (filterList) {
                dispatch(resetFilterListState())
            }
            setOpenFilterList(new Map());
        }
    },[dispatch, filterList]);


    const handleBackgroundClick = useCallback(event => {
        const newOpenMenus = new Map(openFilterList);
        let shouldUpdate = false;

        filterRefs.current.forEach((ref, leadId) => {
            if (ref && !ref.contains(event.target) && openFilterList.get(leadId)) {
                newOpenMenus.set(leadId, false);
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            setOpenFilterList(newOpenMenus);
        }
        if(filterList){
            dispatch(resetFilterListState());
        }
    }, [dispatch, filterList, openFilterList]);


    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, [handleBackgroundClick, handleKeyPress]);


    const saveFilterValue = (buttonName, name) => {
        switch (buttonName){
            case "Select Source":
                console.log("Select Source Button:",name);
                dispatch(setSourceState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Country":
                console.log("Select Country Button:",name);
                dispatch(setCountryState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Region":
                console.log("Select Region Button:",name);
                dispatch(setRegionState(name));
                setOpenFilterList(new Map());
            break;

            case "Select City":
                console.log("Select City Button:",name);
                dispatch(setCityState(name));
                setOpenFilterList(new Map());
            break;

            case "Last Update":
                console.log("Last Update Button:",name);
                dispatch(setLastUpdateDateState(name));
                setOpenFilterList(new Map());
            break;

            case "Create Date":
                console.log("Create Date Button:",name);
                dispatch(setCreatedDateState(name));
                setOpenFilterList(new Map());
            break;

            case "Next Call":
                console.log("Next Call Button:",name);
                dispatch(setNextCallDateState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Agent":
                console.log("Select Agent Button:",name);
                dispatch(setAgentState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Status":
                console.log("Select Status Button:",name);
                dispatch(setStatusState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Time-Zone":
                console.log("Select Time-Zone Button:",name);
                dispatch(setTimeZoneState(name));
                setOpenFilterList(new Map());
            break;

            default:
                return;
        }
    };


    const resetFilterValue = (buttonName) => {
        switch (buttonName){
            case "Select Source":
                dispatch(resetSourceState());
            break;

            case "Select Country":
                dispatch(resetCountryState());
            break;

            case "Select Region":
                dispatch(resetRegionState());
            break;

            case "Select City":
                dispatch(resetCityState());
            break;

            case "Last Update":
                dispatch(resetLastUpdateDateState());
            break;

            case "Create Date":
                dispatch(resetCreatedDateState());
            break;

            case "Next Call":
                dispatch(resetNextCallDateState());
            break;

            case "Select Agent":
                dispatch(resetAgentState());
            break;

            case "Select Status":
                dispatch(resetStatusState());
            break;

            case "Select Time-Zone":
                dispatch(resetTimeZoneState());
            break;

            default:
                return;
        }
    };
    

    return(
        <FilterBlockStyled>
            <div className="open-filter-cont">
                <p className="search-text">For SEARCH, enter one of the following values: Client ID, Name, Last Name, Email, or Phone</p>
                <form className="search-form">
                    <label className="search-label" htmlFor="searchValue">
                        <input className="search-input" 
                            type="text"
                            value={searchValue}
                            onChange={onValueChange}
                            id='searchValue'
                            name="searchValue"
                            placeholder="Search"
                            required
                        />
                        {isFormCancelButton && (
                            <button type="button" className="cancel-btn"
                                onClick={resetFormValue}
                            >
                                <CloseIcon className="close-icon" width={8} height={8}/>
                            </button>
                        )}
                    </label>
                </form>
            </div>
            <div className="select-filter-cont">
                <ul className="filter-list">
                    {buttonsName.map(({buttonName, state}, index) => (
                        <li className="filter-item" key={index}  ref={el => {
                            if (el) {
                                filterRefs.current.set(buttonName, el);
                            }
                            }}
                        >
                            <button type='button' className="filter-btn"
                                onClick={() => toggleFilterDrop(buttonName)}
                            >
                                {state ? state : buttonName}
                            </button>
                            {state && (
                                <button type="button" className="cancel-filter-btn"
                                    onClick={() => resetFilterValue(buttonName)}
                                >
                                    <CloseIcon className="close-filter-icon" width={8} height={8}/>
                                </button>
                            )}
                            {filterList && (
                                <ul className={`filter-item-list ${toggleFiltersDropCont(buttonName)}`}>
                                    {filterList.map((name, index) => (
                                        <li className="filter-list-item" key={index}>
                                            <p className="drop-cont-text"
                                                onClick={() => saveFilterValue(buttonName, name)}
                                            >
                                                {name}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </FilterBlockStyled>
    );
};