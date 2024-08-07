import { createSlice } from "@reduxjs/toolkit";
import {
  createNewLead,
  getAllLeads,
  getStatus,
  getTimeZone,
  patchCityLead,
  patchCountryLead,
  patchRegionLead,
  patchStatus,
  patchTimeZone,
  deleteLead,
  getLeadById,
  leadAssign,
  leadReAssign,
} from "./lead-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
  officeState: "",
  leadsData: {
    leads: [],
    totalPages: '',
  },
  newLead: null,
  isNewLeadDataResponce: false,
  isLeadError: null,
  isLeadLoading: false,
  status: [],
  isStatusError: null,
  isStatusLoading: false,
  timeZone: [],
  isTimeZoneLoading: false,
  isTimeZoneError: null,
  newStatusLead: [],
  patchStatusLoading: false,
  patchStatusError: null,
  newTimeZoneLead: [],
  patchTimeZoneLoading: false,
  patchTimeZoneError: null,
  newCityLead: [],
  patchCityLeadLoading: false,
  patchCityLeadError: null,
  newRegionLead: [],
  patchRegionLeadLoading: false,
  patchRegionLeadError: null,
  newCountryLead: [],
  patchCountryLeadLoading: false,
  patchCountryLeadError: null,
  selectedExternalLeadsCheckedCheckbox: [],
  leadDetailById: null,
};

const leadSlice = createSlice({
  name: "lead",
  initialState,

  reducers: {
    isOfficeState: (state, action) => {
      state.officeState = action.payload;
    },
    resetOfficeLeadState: (state) => {
      state.officeState = '';
      state.leadsData.leads = [];
      state.leadsData.totalPages = '';
    },
    updatingNewLeadDataResponce: (state) => {
      state.isNewLeadDataResponce = false;
    },
    updatingNewLead: (state) => {
      state.newLead = null;
    },
    toggleExternalLeadsCheckboxState: (state, action) => {
      const {_id} = action.payload;
      const isSelected = state.selectedExternalLeadsCheckedCheckbox.includes(_id);
      if (isSelected) {
        state.selectedExternalLeadsCheckedCheckbox = state.selectedExternalLeadsCheckedCheckbox.filter(id => id !== _id);
      } else {
        state.selectedExternalLeadsCheckedCheckbox.push(_id);
      }
    },
    toggleExternalLeadsSelectAllCheckbox: (state) => {
      const leadIds = state.leadsData.leads.map(lead => lead._id);
      if (state.selectedExternalLeadsCheckedCheckbox.length === leadIds.length) {
        state.selectedExternalLeadsCheckedCheckbox = [];
      } else {
        state.selectedExternalLeadsCheckedCheckbox = [...leadIds];
      }
    },
    resetExternalLeadsSelectedCheckbox: (state) => {
      state.selectedExternalLeadsCheckedCheckbox = [];
    },
  },

  extraReducers: (builder) => {
    builder

    
    //LOGOUT///////////
    .addCase(logOut.pending, (state) => {
      state.isLeadLoading = true;
      state.isLeadError = null;
    })
    .addCase(logOut.fulfilled, (state, { payload }) => {
      state.officeState = "";
      state.leadsData.leads = [];
      state.leadsData.totalPages = '';
      state.newLead = null;
      state.isLeadLoading = false;
      state.isLeadError = null;
      state.status = [];
      state.isStatusError = null;
      state.isStatusLoading = false;
      state.newStatusLead = [];
      state.patchStatusLoading = false;
      state.patchStatusError = null;
      state.newTimeZoneLead = [];
      state.patchTimeZoneLoading = false;
      state.patchTimeZoneError = null;
      state.newCityLead = [];
      state.patchCityLeadLoading = false;
      state.patchCityLeadError = null;
      state.newRegionLead = [];
      state.patchRegionLeadLoading = false;
      state.patchRegionLeadError = null;
      state.newCountryLead = [];
      state.patchCountryLeadLoading = false;
      state.patchCountryLeadError = null;
      state.selectedExternalLeadsCheckedCheckbox = [];
    })
    .addCase(logOut.rejected, (state, { payload }) => {
      state.isLeadLoading = false;
      state.isLeadError = payload;
    })
    

    //CREATE NEW LEAD///////////
    .addCase(createNewLead.pending, (state) => {
      state.isLeadLoading = true;
      state.isLeadError = null;
      state.isNewLeadDataResponce = false;
    })
    .addCase(createNewLead.fulfilled, (state, { payload }) => {
      state.leadsData.leads.unshift(payload);
      state.newLead = payload;
      state.isLeadLoading = false;
      state.isLeadError = null;
      state.isNewLeadDataResponce = true;
    })
    .addCase(createNewLead.rejected, (state, { payload }) => {
      state.isLeadLoading = false;
      state.isLeadError = payload;
      state.isNewLeadDataResponce = true;
    })
    

    //GET ALL LEADS///////////
    .addCase(getAllLeads.pending, (state) => {
      state.isLeadLoading = true;
      state.isLeadError = null;
      state.leadsData.leads = [];
      state.leadsData.totalPages = '';
    })
    .addCase(getAllLeads.fulfilled, (state, { payload }) => {
      state.isLeadLoading = false;
      state.isLeadError = null;     
      state.leadsData.leads = payload.result;
      state.leadsData.totalPages = payload.totalPages;
    })
    .addCase(getAllLeads.rejected, (state, { payload }) => {
      state.isLeadLoading = false;
      state.isLeadError = payload;
    })
    

    //GET ALL STATUS////////////
    .addCase(getStatus.pending, (state) => {
      state.isStatusLoading = true;
      state.isStatusError = null;
    })
    .addCase(getStatus.fulfilled, (state, { payload }) => {
      state.isStatusLoading = false;
      state.isStatusError = null;
      state.status = payload;
    })
    .addCase(getStatus.rejected, (state, { payload }) => {
      state.isStatusLoading = false;
      state.isStatusError = payload;
    })

        
    //DELETE LEADS//
    .addCase(deleteLead.pending, state => {
        state.isLeadLoading = true;
        state.isLeadError = null;
    })
    .addCase(deleteLead.fulfilled, (state, {payload} ) => {
        state.isLeadLoading = false;
        state.isLeadError = null;
        state.leadsData.leads = state.leadsData.leads.filter(lead => lead._id !== payload.id);
        state.selectedExternalLeadsCheckedCheckbox = state.selectedExternalLeadsCheckedCheckbox.filter(id => id !== payload.id);
    })
    .addCase(deleteLead.rejected, (state, {payload}) => {
        state.isLeadLoading = false;
        state.isLeadError = payload;
    })


    //GET TIME ZONE///////////////
    .addCase(getTimeZone.pending, (state) => {
      state.isTimeZoneLoading = true;
      state.isTimeZoneError = null;
    })
    .addCase(getTimeZone.fulfilled, (state, { payload }) => {
      state.isTimeZoneLoading = false;
      state.isTimeZoneError = null;
      state.timeZone = payload;
    })
    .addCase(getTimeZone.rejected, (state, { payload }) => {
      state.isTimeZoneLoading = false;
      state.isTimeZoneError = payload;
    })
    

    // PATCH STATUS////////////////
    .addCase(patchStatus.pending, (state) => {
      state.patchStatusLoading = true;
      state.patchStatusError = null;
    })
    .addCase(patchStatus.fulfilled, (state, { payload }) => {
      state.newStatusLead = payload;
      state.patchStatusLoading = false;
      state.patchStatusError = null;
    })
    .addCase(patchStatus.rejected, (state, { payload }) => {
      state.patchStatusLoading = false;
      state.patchStatusError = payload;
    })
    
    
    // PATCH TIME ZONE////////////////
    .addCase(patchTimeZone.pending, (state) => {
      state.patchTimeZoneLoading = true;
      state.patchTimeZoneError = null;
    })
    .addCase(patchTimeZone.fulfilled, (state, { payload }) => {
      state.newTimeZoneLead = payload;
      state.patchTimeZoneLoading = false;
      state.patchTimeZoneError = null;
    })
    .addCase(patchTimeZone.rejected, (state, { payload }) => {
      state.patchTimeZoneLoading = false;
      state.patchTimeZoneError = payload;
    })
    
    
    // PATCH CITY////////////////
    .addCase(patchCityLead.pending, (state) => {
      state.patchCityLeadLoading = true;
      state.patchCityLeadError = null;
    })
    .addCase(patchCityLead.fulfilled, (state, { payload }) => {
      state.newCityLead = payload;
      state.patchCityLeadLoading = false;
      state.patchCityLeadError = null;
    })
    .addCase(patchCityLead.rejected, (state, { payload }) => {
      state.patchCityLeadLoading = false;
      state.patchCityLeadError = payload;
    })
    
    
    // PATCH REGION////////////////
    .addCase(patchRegionLead.pending, (state) => {
      state.patchRegionLeadLoading = true;
      state.patchRegionLeadError = null;
    })
    .addCase(patchRegionLead.fulfilled, (state, { payload }) => {
      state.newRegionLead = payload;
      state.patchRegionLeadLoading = false;
      state.patchRegionLeadError = null;
    })
    .addCase(patchRegionLead.rejected, (state, { payload }) => {
      state.patchRegionLeadLoading = false;
      state.patchRegionLeadError = payload;
    })
    
    
    // PATCH COUNTRY////////////////
    .addCase(patchCountryLead.pending, (state) => {
      state.patchCountryLeadLoading = true;
      state.patchCountryLeadError = null;
    })
    .addCase(patchCountryLead.fulfilled, (state, { payload }) => {
      state.newCountryLead = payload;
      state.patchCountryLeadLoading = false;
      state.patchCountryLeadError = null;
    })
    .addCase(patchCountryLead.rejected, (state, { payload }) => {
      state.patchCountryLeadLoading = false;
      state.patchCountryLeadError = payload;
    })


    // GET LEAD BY ID////////////////
    .addCase(getLeadById.pending, (state) => {
      state.isLeadLoading = true;
      state.isLeadError = null;
    })
    .addCase(getLeadById.fulfilled, (state, { payload }) => {
      state.leadDetailById = payload;
      state.isLeadLoading = false;
      state.isLeadError = null;
    })
    .addCase(getLeadById.rejected, (state, { payload }) => {
      state.isLeadLoading = false;
      state.isLeadError = payload;
    })


    //LEAD ASSIGN////////////////
    .addCase(leadAssign.pending, (state) => {
      state.isLeadError = null;
    })
    .addCase(leadAssign.fulfilled, (state, { payload }) => {
      const updatedLead = payload;      
      state.leadsData.leads = state.leadsData.leads.map(lead => 
        lead._id === updatedLead._id ? updatedLead : lead
      );
      state.isLeadError = null;
    })
    .addCase(leadAssign.rejected, (state, { payload }) => {
      state.isLeadError = payload;
    })


    //LEAD REASSIGN////////////////
    .addCase(leadReAssign.pending, (state) => {
      state.isLeadError = null;
    })
    .addCase(leadReAssign.fulfilled, (state, { payload }) => {
      const updatedLead = payload;      
      state.leadsData.leads = state.leadsData.leads.map(lead => 
        lead._id === updatedLead._id ? updatedLead : lead
      );
      state.isLeadError = null;
    })
    .addCase(leadReAssign.rejected, (state, { payload }) => {
      state.isLeadError = payload;
    })
  },
});


export const leadReducer = leadSlice.reducer;

export const {
  isOfficeState,
  resetOfficeLeadState,
  updatingNewLeadDataResponce,
  updatingNewLead,
  toggleExternalLeadsCheckboxState,
  toggleExternalLeadsSelectAllCheckbox,
  resetExternalLeadsSelectedCheckbox,
} = leadSlice.actions;
