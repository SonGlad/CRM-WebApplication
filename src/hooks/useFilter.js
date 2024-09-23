import { useSelector } from "react-redux";
import {
    selectFilterError,
    selectSourceState,
    selectSourceLoading,
    selectCountryState,
    selectCountryLoading,
    selectRegionState,
    selectRegionLoading,
    selectCityState,
    selectCityLoading,
    selectLastUpdateDateState,
    selectLastUpdateDateLoading,
    selectCreatedDateState,
    selectCreatedDateLoading,
    selectNextCallDateState,
    selectNextCallDateLoading,
    selectAgentState,
    selectAgentLoading,
    selectTimeZoneState,
    selectTimeZoneLoading,
    selectStatusState,
    selectStatusLoading,
    selectOfficesState,
    selectOfficesLoading,
    selectManagerState,
    selectManagerLoading,
    selectFilterList,
    selectOpenFilter,
} from "../redux/Filter/filter-selectors";


export const useFilter = () => {
    const isFilterError = useSelector(selectFilterError);
    const sourceState = useSelector(selectSourceState);
    const sourceLoading = useSelector(selectSourceLoading);
    const countryState = useSelector(selectCountryState);
    const countryLoading = useSelector(selectCountryLoading);
    const regionState = useSelector(selectRegionState);
    const regionLoading = useSelector(selectRegionLoading);
    const cityState = useSelector(selectCityState);
    const cityLoading = useSelector(selectCityLoading);
    const lastUpdateDateState = useSelector(selectLastUpdateDateState);
    const lastUpdateDateLoading = useSelector(selectLastUpdateDateLoading);
    const createdDateState = useSelector(selectCreatedDateState);
    const createdDateLoading = useSelector(selectCreatedDateLoading);
    const nextCallDateState = useSelector(selectNextCallDateState);
    const nextCallDateLoading = useSelector(selectNextCallDateLoading);
    const agentState = useSelector(selectAgentState);
    const agentLoading = useSelector(selectAgentLoading);
    const timeZoneState = useSelector(selectTimeZoneState);
    const timeZoneLoading = useSelector(selectTimeZoneLoading);
    const statusState = useSelector(selectStatusState);
    const statusLoading = useSelector(selectStatusLoading);
    const officesState = useSelector(selectOfficesState);
    const officesLoading = useSelector(selectOfficesLoading);
    const managerState = useSelector(selectManagerState);
    const managerLoading = useSelector(selectManagerLoading);
    const filterList = useSelector(selectFilterList);
    const openFilter = useSelector(selectOpenFilter);


    return {
        isFilterError,
        sourceState,
        sourceLoading,
        countryState,
        countryLoading,
        regionState,
        regionLoading,
        cityState,
        cityLoading,
        lastUpdateDateState,
        lastUpdateDateLoading,
        createdDateState,
        createdDateLoading,
        nextCallDateState,
        nextCallDateLoading,
        agentState,
        agentLoading,
        timeZoneState,
        timeZoneLoading,
        statusState,
        statusLoading,
        officesState,
        officesLoading,
        managerState,
        managerLoading,
        filterList,
        openFilter,
    }
};