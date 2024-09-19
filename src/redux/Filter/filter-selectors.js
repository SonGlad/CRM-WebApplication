export const selectFilterError = state => state.filter.filterError;

export const selectSourceState = state => state.filter.source.sourceState;

export const selectSourceLoading = state => state.filter.source.sourceLoading;

export const selectCountryState = state => state.filter.country.countryState;

export const selectCountryLoading = state => state.filter.country.countryLoading;

export const selectRegionState = state => state.filter.region.regionState;

export const selectRegionLoading = state => state.filter.region.regionLoading;

export const selectCityState = state => state.filter.city.cityState;

export const selectCityLoading = state => state.filter.city.cityLoading;

export const selectLastUpdateDateState = state => state.filter.lastUpdateDate.lastUpdateDateState;

export const selectLastUpdateDateLoading = state => state.filter.lastUpdateDate.lastUpdateDateLoading;

export const selectCreatedDateState = state => state.filter.createdDate.createdDateState;

export const selectCreatedDateLoading = state => state.filter.createdDate.createdDateLoading;

export const selectNextCallDateState = state => state.filter.nextCallDate.nextCallDateState;

export const selectNextCallDateLoading = state => state.filter.nextCallDate.nextCallDateLoading;

export const selectAgentState = state => state.filter.agent.agentState;

export const selectAgentLoading = state => state.filter.agent.agentLoading;

export const selectTimeZoneState = state => state.filter.timeZone.timeZoneState;

export const selectTimeZoneLoading = state => state.filter.timeZone.timeZoneLoading;

export const selectStatusState = state => state.filter.status.statusState;

export const selectStatusLoading = state => state.filter.status.statusLoading;

export const selectFilterList = state => state.filter.filterList;

export const selectOpenFilter = state => state.filter.openFilter;
