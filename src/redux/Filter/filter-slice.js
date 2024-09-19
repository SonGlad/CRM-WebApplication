import { createSlice } from "@reduxjs/toolkit";
import { 
    // register, 
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
            state.timeZoneState.timeZoneState = '';
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
        resetOpenFilterState:(state) => {
            state.openFilter = '';
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
            state.openFilter = '';
            state.filterList = null;
            state.filterError = null;
        })
        .addCase(logOut.rejected, (state, {payload}) => {
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
    resetOpenFilterState
} = filterSlice.actions;