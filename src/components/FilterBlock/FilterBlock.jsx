import { FilterBlockStyled } from "./FilterBlock.styled";
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
    setOfficesState,
    setManagerState,
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
    resetOfficeState,
    resetManagerState,
    resetFilterListState,
    resetAllStates,
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
    getAllCreatedDate,
    getAllOffice,
    getAllManagers,
} from "../../redux/Filter/filter-operation";
import { useFilter } from "../../hooks/useFilter";
import { useLead } from "../../hooks/useLead";
import { useAuth } from "../../hooks/useAuth";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { FilterBlockMap } from "./FilterBlockMap";



export const FilterBlock = () => {
    const {
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
        officesState,
        managerState,
        filterList,
        isFilterError,
    } = useFilter();
    const { leadOffice } = useLead();
    const { isAdmin, userLocation, isLoggedIn } = useAuth();
    const [searchValue, setSearchValue] = useState('');
    const [isFormCancelButton, setFormCancelButton] = useState(false);
    const [openFilterList, setOpenFilterList] = useState(new Map());
    const [selectedButton, setSelectedButton] = useState('');
    const [updatingLoader, setUpdatingLoader] = useState(null);
    const [buttonsName, setButtonsName] = useState();
    const filterRefs = useRef(new Map());
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        if (isLoggedIn && isAdmin && userLocation === '/') {
            setButtonsName([
                {buttonName: 'Select Source', state: sourceState},
                {buttonName: 'Create Date', state: createdDateState},
                {buttonName: 'Select Manager', state: managerState},
                {buttonName: 'Select Agent', state: agentState},
                {buttonName: 'Select Office', state: officesState},
            ]);
        } else {
            setButtonsName([
                {buttonName: 'Select Source', state: sourceState},
                {buttonName: 'Select Country', state: countryState},
                {buttonName: 'Select Region', state: regionState},
                {buttonName: 'Select City', state: cityState},
                {buttonName: 'Last Update', state: lastUpdateDateState},
                {buttonName: 'Create Date', state: createdDateState},
                {buttonName: 'Next Call', state: nextCallDateState},
                {buttonName: 'Select Agent', state: agentState},
                {buttonName: 'Select Status', state: statusState},
                {buttonName: 'Select Time-Zone', state: String(timeZoneState)},
            ]);
        }
    },[
        agentState, 
        cityState, 
        countryState, 
        createdDateState, 
        isAdmin, 
        isLoggedIn, 
        lastUpdateDateState, 
        nextCallDateState, 
        regionState, 
        sourceState, 
        statusState, 
        timeZoneState,
        officesState,
        managerState, 
        userLocation
    ]);


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
            } else {
                setSelectedButton('');  
            }
            return newMap;
        });
    };


    useEffect(() => {
        if (!selectedButton) return;

        dispatch(resetFilterListState());

        switch (selectedButton) {
            case 'Select Source':
                setUpdatingLoader(selectedButton);
    
                const sourceDispatch = isAdmin 
                ? dispatch(getAllSource(leadOffice)) 
                : dispatch(getAllSource());
                
                sourceDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Select Country':
                setUpdatingLoader(selectedButton);

                const countryDispatch = isAdmin 
                ? dispatch(getAllCountries(leadOffice)) 
                : dispatch(getAllCountries());
                
                countryDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Select Region':
                setUpdatingLoader(selectedButton);

                const regionDispatch = isAdmin 
                ? dispatch(getAllRegions(leadOffice)) 
                : dispatch(getAllRegions());
                
                regionDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Select City':
                setUpdatingLoader(selectedButton);

                const cityDispatch = isAdmin 
                ? dispatch(getAllCities(leadOffice)) 
                : dispatch(getAllCities());
                
                cityDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Last Update':
                setUpdatingLoader(selectedButton);

                const lastUpdateDispatch = isAdmin 
                ? dispatch(getAllLastUpdated(leadOffice)) 
                : dispatch(getAllLastUpdated());
                
                lastUpdateDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Create Date':
                setUpdatingLoader(selectedButton);

                const createDateDispatch = isAdmin 
                ? dispatch(getAllCreatedDate(leadOffice)) 
                : dispatch(getAllCreatedDate());
                
                createDateDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Next Call':
                setUpdatingLoader(selectedButton);

                const nextCallDispatch = isAdmin 
                ? dispatch(getAllNextCall(leadOffice)) 
                : dispatch(getAllNextCall());
                
                nextCallDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Select Agent':
                setUpdatingLoader(selectedButton);

                const agentDispatch = isAdmin 
                ? dispatch(getAllAgents(leadOffice)) 
                : dispatch(getAllAgents());
                
                agentDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Select Status':
                setUpdatingLoader(selectedButton);

                const statusDispatch = isAdmin 
                ? dispatch(getFilterStatus(leadOffice)) 
                : dispatch(getFilterStatus());
                
                statusDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Select Time-Zone':
                setUpdatingLoader(selectedButton);

                const timeZoneDispatch = isAdmin 
                ? dispatch(getFilterTimeZone(leadOffice)) 
                : dispatch(getFilterTimeZone());
                
                timeZoneDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Select Manager':
                setUpdatingLoader(selectedButton);

                const managerDispatch = isAdmin 
                && dispatch(getAllManagers());
                
                managerDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
            break;

            case 'Select Office':
                setUpdatingLoader(selectedButton);

                const officeDispatch = isAdmin 
                && dispatch(getAllOffice());
                
                officeDispatch.finally(() => {
                    setUpdatingLoader(null);
                });
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
            setSelectedButton('');  
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
        setSelectedButton('');
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
                dispatch(setSourceState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Country":
                dispatch(setCountryState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Region":
                dispatch(setRegionState(name));
                setOpenFilterList(new Map());
            break;

            case "Select City":
                dispatch(setCityState(name));
                setOpenFilterList(new Map());
            break;

            case "Last Update":
                dispatch(setLastUpdateDateState(name));
                setOpenFilterList(new Map());
            break;

            case "Create Date":
                dispatch(setCreatedDateState(name));
                setOpenFilterList(new Map());
            break;

            case "Next Call":
                dispatch(setNextCallDateState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Agent":
                dispatch(setAgentState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Status":
                dispatch(setStatusState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Time-Zone":
                dispatch(setTimeZoneState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Manager":
                dispatch(setManagerState(name));
                setOpenFilterList(new Map());
            break;

            case "Select Office":
                dispatch(setOfficesState(name));
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

            case "Select Manager":
                dispatch(resetManagerState());
            break;

            case "Select Office":
                dispatch(resetOfficeState());
            break;

            default:
                return;
        }
    };


    const formatDateFullMonth = (dateString, timeZone = 'Europe/Kiev') => {
        if (dateString) {
            const date = new Date(dateString);
            if (isNaN(date)) {
                return dateString;
            }
            const zonedDate = toZonedTime(date, timeZone);
            const formattedDate = format(zonedDate, 'dd MMMM yyyy', { timeZone });
            return `${formattedDate}`;
        }
        return '';
    };


    const clearAllFilters = () => {
        dispatch(resetAllStates());
        setSearchValue('');
    };


    return(
        <FilterBlockStyled>
            <FilterBlockMap
                searchValue={searchValue}
                onValueChange={onValueChange}
                isFormCancelButton={isFormCancelButton}
                resetFormValue={resetFormValue}
                buttonsName={buttonsName}
                filterRefs={filterRefs}
                toggleFilterDrop={toggleFilterDrop}
                updatingLoader={updatingLoader}
                formatDateFullMonth={formatDateFullMonth}
                resetFilterValue={resetFilterValue}
                filterList={filterList}
                toggleFiltersDropCont={toggleFiltersDropCont}
                saveFilterValue={saveFilterValue}
                isFilterError={isFilterError}
                clearAllFilters={clearAllFilters}
            />
        </FilterBlockStyled>
    );
};