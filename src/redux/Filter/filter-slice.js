import { createSlice } from "@reduxjs/toolkit";
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
    getAllManagers
} from "./filter-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
  source: {
    sourceState: '',
    sourceLoading: false,
  },
  country: {
    countryState: '',
    countryLoading: false,
  },
  region: {
    regionState: '',
    regionLoading: false,
  },
  city: {
    cityState: '',
    cityLoading: false,
  },
  lastUpdateDate: {
    lastUpdateDateState: '',
    lastUpdateDateLoading: false,
  },
  createdDate: {
    createdDateState: '',
    createdDateLoading: false,
  },
  nextCallDate: {
    nextCallDateState: '',
    nextCallDateLoading: false,
  },
  agent: {
    agentState: '',
    agentLoading: false,
  },
  timeZone: {
    timeZoneState: '',
    timeZoneLoading: false,
  },
  status: {
    statusState: '',
    statusLoading: false,
  },
  manager: {
    managerState: '',
    managerLoading: false,
  },
  office: {
    officeState: '',
    officeLoading: false,
  },
  openFilter: '',
  filterList: null,
  filterError: null,
};


const filterSlice = createSlice({
    name: 'filter',
    initialState,

    reducers: {
        setSourceState:(state, action) => {
            state.source.sourceState = action.payload;
        },
        setCountryState:(state, action) => {
            state.country.countryState = action.payload;
        },
        setRegionState:(state, action) => {
            state.region.regionState = action.payload;
        },
        setCityState:(state, action) => {
            state.city.cityState = action.payload;
        },
        setLastUpdateDateState:(state, action) => {
            state.lastUpdateDate.lastUpdateDateState = action.payload;
        },
        setCreatedDateState:(state, action) => {
            state.createdDate.createdDateState = action.payload;
        },
        setNextCallDateState:(state, action) => {
            state.nextCallDate.nextCallDateState = action.payload;
        },
        setAgentState:(state, action) => {
            state.agent.agentState = action.payload;
        },
        setTimeZoneState:(state, action) => {
            state.timeZone.timeZoneState = action.payload;
        },
        setStatusState:(state, action) => {
            state.status.statusState = action.payload;
        },
        setOfficesState:(state, action) => {
            state.office.officeState = action.payload;
        },
        setManagerState:(state, action) => {
            state.manager.managerState = action.payload;
        },
        setOpenFilterState:(state, action) => {
            state.openFilter = action.payload;
        },
        resetAllStates:(state) => {
            state.openFilter = '';
            state.agent.agentState = '';
            state.nextCallDate.nextCallDateState = '';
            state.createdDate.createdDateState = '';
            state.lastUpdateDate.lastUpdateDateState = '';
            state.city.cityState = '';
            state.region.regionState = '';
            state.country.countryState  = '';
            state.source.sourceState = '';
            state.status.statusState = '';
            state.timeZone.timeZoneState = '';
            state.manager.managerState = '';
            state.office.officeState = '';
        },
        resetSourceState:(state) => {
            state.source.sourceState = '';
        },
        resetCountryState:(state) => {
            state.country.countryState = '';
        },
        resetRegionState:(state) => {
            state.region.regionState = '';
        },
        resetCityState:(state) => {
            state.city.cityState = '';
        },
        resetLastUpdateDateState:(state) => {
            state.lastUpdateDate.lastUpdateDateState = '';
        },
        resetCreatedDateState:(state) => {
            state.createdDate.createdDateState = '';
        },
        resetNextCallDateState:(state) => {
            state.nextCallDate.nextCallDateState = '';
        },
        resetAgentState:(state) => {
            state.agent.agentState = '';
        },
        resetTimeZoneState:(state) => {
            state.timeZone.timeZoneState = '';
        },
        resetStatusState:(state) => {
            state.status.statusState = '';
        },
        resetOfficeState:(state) => {
            state.office.officeState = '';
        },
        resetManagerState:(state) => {
            state.manager.managerState = '';
        },
        resetOpenFilterState:(state) => {
            state.openFilter = '';
        },
        resetFilterListState:(state) => {
            state.filterList = null;
        },
    },

    extraReducers: builder => {
        builder

        
        //LOGOUT///////////
        .addCase(logOut.pending, state =>{
            state.filterError = null;
        })
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.source.sourceState = '';
            state.country.countryState = '';
            state.region.regionState = '';
            state.city.cityState = '';
            state.lastUpdateDate.lastUpdateDateState = '';
            state.createdDate.createdDateState = '';
            state.nextCallDate.nextCallDateState = '';
            state.agent.agentState = '';
            state.timeZone.timeZoneState = '';
            state.status.statusState = '';
            state.office.officeState ='';
            state.manager.managerState ='';
            state.openFilter = '';
            state.filterList = null;
            state.filterError = null;
        })
        .addCase(logOut.rejected, (state, {payload}) => {
            state.filterError = payload;
        })


        //GET ALL TIME ZONES///////////
        .addCase(getFilterTimeZone.pending, state =>{
            state.timeZone.timeZoneLoading = true;
            state.filterError = null;
        })
        .addCase(getFilterTimeZone.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.timeZone.timeZoneLoading = false;
        })
        .addCase(getFilterTimeZone.rejected, (state, {payload}) => {
            state.timeZone.timeZoneLoading = false;
            state.filterError = payload;
        })


        //GET ALL STATUS///////////
        .addCase(getFilterStatus.pending, state =>{
            state.status.statusLoading = true;
            state.filterError = null;
        })
        .addCase(getFilterStatus.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.status.statusLoading = false;
        })
        .addCase(getFilterStatus.rejected, (state, {payload}) => {
            state.status.statusLoading = false;
            state.filterError = payload;
        })


        //GET ALL SOURCE///////////
        .addCase(getAllSource.pending, state =>{
            state.source.sourceLoading = true;
            state.filterError = null;
        })
        .addCase(getAllSource.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.source.sourceLoading = false;
        })
        .addCase(getAllSource.rejected, (state, {payload}) => {
            state.source.sourceLoading = false;
            state.filterError = payload;
        })


        //GET ALL COUNTRIES///////////
        .addCase(getAllCountries.pending, state =>{
            state.country.countryLoading = true;
            state.filterError = null;
        })
        .addCase(getAllCountries.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.country.countryLoading = false;
        })
        .addCase(getAllCountries.rejected, (state, {payload}) => {
            state.country.countryLoading = false;
            state.filterError = payload;
        })


        //GET ALL REGIONS///////////
        .addCase(getAllRegions.pending, state =>{
            state.region.regionLoading = true;
            state.filterError = null;
        })
        .addCase(getAllRegions.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.region.regionLoading = false;
        })
        .addCase(getAllRegions.rejected, (state, {payload}) => {
            state.region.regionLoading = false;
            state.filterError = payload;
        })


        //GET ALL CITIES///////////
        .addCase(getAllCities.pending, state =>{
            state.city.cityLoading = true;
            state.filterError = null;
        })
        .addCase(getAllCities.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.city.cityLoading = false;
        })
        .addCase(getAllCities.rejected, (state, {payload}) => {
            state.city.cityLoading = false;
            state.filterError = payload;
        })


        //GET ALL AGENTS///////////
        .addCase(getAllAgents.pending, state =>{
            state.agent.agentLoading = true;
            state.filterError = null;
        })
        .addCase(getAllAgents.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.agent.agentLoading = false;
        })
        .addCase(getAllAgents.rejected, (state, {payload}) => {
            state.agent.agentLoading = false;
            state.filterError = payload;
        })


        //GET ALL NEXT CALL///////////
        .addCase(getAllNextCall.pending, state =>{
            state.nextCallDate.nextCallDateLoading = true;
            state.filterError = null;
        })
        .addCase(getAllNextCall.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.nextCallDate.nextCallDateLoading = false;
        })
        .addCase(getAllNextCall.rejected, (state, {payload}) => {
            state.nextCallDate.nextCallDateLoading = false;
            state.filterError = payload;
        })


        //GET ALL LAST UPDATED///////////
        .addCase(getAllLastUpdated.pending, state =>{
            state.lastUpdateDate.lastUpdateDateLoading = true;
            state.filterError = null;
        })
        .addCase(getAllLastUpdated.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.lastUpdateDate.lastUpdateDateLoading = false;
        })
        .addCase(getAllLastUpdated.rejected, (state, {payload}) => {
            state.lastUpdateDate.lastUpdateDateLoading = false;
            state.filterError = payload;
        })


        //GET ALL CREATED DATES///////////
        .addCase(getAllCreatedDate.pending, state =>{
            state.createdDate.createdDateLoading = true;
            state.filterError = null;
        })
        .addCase(getAllCreatedDate.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.createdDate.createdDateLoading = false;
        })
        .addCase(getAllCreatedDate.rejected, (state, {payload}) => {
            state.createdDate.createdDateLoading = false;
            state.filterError = payload;
        })


        //GET ALL AVAILABLE OFFICES///////////
        .addCase(getAllOffice.pending, state =>{
            state.office.officeLoading = true;
            state.filterError = null;
        })
        .addCase(getAllOffice.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.office.officeLoading = false;
        })
        .addCase(getAllOffice.rejected, (state, {payload}) => {
            state.office.officeLoading = false;
            state.filterError = payload;
        })


        //GET ALL AVAILABLE OFFICES///////////
        .addCase(getAllManagers.pending, state =>{
            state.manager.managerLoading = true;
            state.filterError = null;
        })
        .addCase(getAllManagers.fulfilled, (state, { payload }) => {
            state.filterList = payload;
            state.manager.managerLoading = false;
        })
        .addCase(getAllManagers.rejected, (state, {payload}) => {
            state.manager.managerLoading = false;
            state.filterError = payload;
        })
    }
});


export const filterReducer = filterSlice.reducer;


export const {
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
    resetAllStates,
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
    resetOfficeState,
    resetManagerState,
} = filterSlice.actions;