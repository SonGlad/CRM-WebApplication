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
  patchNextCall,
  getLeadById,
  leadAssign,
  leadReAssign,
  leadChangeBaseInfo,
} from "./lead-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
  officeState: "",
  leadsData: {
    leads: [],
    totalPages: '',
    totalLeads: null,
  },
  leadsAmountPerPage: '20',
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
  newNextCallLead: [],
  patchNextCallLeadLoading: false,
  patchNextCallLeadError: null,
  leadDetailById: null,
  selectedAssignLeadsCheckedCheckbox: [],
  isLeadDetailsModal: false,
  leadDetailByIdLocation: '',
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
      state.leadsData.totalLeads = null;
    },
    updatingNewLeadDataResponce: (state) => {
      state.isNewLeadDataResponce = false;
    },
    updatingNewLead: (state) => {
      state.newLead = null;
    },
    toggleExternalLeadsCheckboxState: (state, action) => {
      const { _id } = action.payload;
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
    setLeadsAmountPerPage: (state, action) => {
      state.leadsAmountPerPage = action.payload;
    },
    toggleAssignLeadsCheckboxState: (state, action) => {
      const { _id } = action.payload;
      const isSelected = state.selectedAssignLeadsCheckedCheckbox.includes(_id);
      if (isSelected) {
        state.selectedAssignLeadsCheckedCheckbox = state.selectedAssignLeadsCheckedCheckbox.filter(id => id !== _id);
      } else {
        state.selectedAssignLeadsCheckedCheckbox.push(_id);
      }
    },
    toggleAssignLeadsSelectAllCheckbox: (state) => {
      const leadIds = state.leadsData.leads.map(lead => lead._id);
      if (state.selectedAssignLeadsCheckedCheckbox.length === leadIds.length) {
        state.selectedAssignLeadsCheckedCheckbox = [];
      } else {
        state.selectedAssignLeadsCheckedCheckbox = [...leadIds];
      }
    },
    resetAssignLeadsSelectedCheckbox: (state) => {
      state.selectedAssignLeadsCheckedCheckbox = [];
    },
    setLeadDetailsModalTrue: (state, {payload}) => {
      state.isLeadDetailsModal = true;
      state.leadDetailByIdLocation = payload;
    },
    setLeadDetailsModalFalse: (state) => {
      state.isLeadDetailsModal = false;
      state.leadDetailById = null;
      state.leadDetailByIdLocation = '';
    },
  },
  

  extraReducers: (builder) => {
    builder
    
    
    //LOGOUT///////////
    .addCase(logOut.pending, (state) => {
      state.isLeadError = null;
    })
    .addCase(logOut.fulfilled, (state, { payload }) => {
      state.officeState = "";
      state.leadsData.leads = [];
      state.leadsData.totalPages = '';
      state.leadsData.totalLeads = null;
      state.leadsAmountPerPage = '20';
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
      state.newNextCallLead = [];
      state.patchNextCallLeadLoading = false;
      state.patchNextCallLeadError = null;
      state.selectedAssignLeadsCheckedCheckbox = [];
      state.isLeadDetailsModal = false;
      state.leadDetailByIdLocation = '';
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
      state.leadsData.totalLeads = state.leadsData.totalLeads + 1;
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
    })
    .addCase(getAllLeads.fulfilled, (state, { payload }) => {
      state.isLeadLoading = false;
      state.isLeadError = null;     
      state.leadsData.leads = payload.result;
      const currentTotalPages = Number(state.leadsData.totalPages); 
      const newTotalPages = Number(payload.totalPages);
      if (currentTotalPages !== newTotalPages) {
        state.leadsData.totalPages = payload.totalPages;
      }
      state.leadsData.totalLeads = payload.totalFilteredLeads;      
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
    .addCase(deleteLead.fulfilled, (state, { payload }) => {
      state.isLeadLoading = false;
      state.isLeadError = null;
      state.leadsData.leads = state.leadsData.leads.filter(lead => lead._id !== payload.id);
      state.selectedExternalLeadsCheckedCheckbox = state.selectedExternalLeadsCheckedCheckbox.filter(id => id !== payload.id);
      state.leadsData.totalLeads = state.leadsData.totalLeads - 1;
      state.selectedAssignLeadsCheckedCheckbox = state.selectedAssignLeadsCheckedCheckbox.filter(id => id !== payload.id);
    })
    .addCase(deleteLead.rejected, (state, { payload }) => {
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
    

    // PATCH NEXT CALL////////////////
    .addCase(patchNextCall.pending, (state) => {
      state.patchNextCallLeadLoading = true;
      state.patchNextCallLeadError = null;
    })
    .addCase(patchNextCall.fulfilled, (state, { payload }) => {
      state.newNextCallLead = payload;
      state.patchNextCallLeadLoading = false;
      state.patchNextCallLeadError = null;
    })
    .addCase(patchNextCall.rejected, (state, { payload }) => {
      state.patchNextCallLeadLoading = false;
      state.patchNextCallLeadError = payload;
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
      if(state.isLeadDetailsModal === true){
        state.leadDetailById = payload;
      };
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
      if(state.isLeadDetailsModal === true){
        state.leadDetailById = payload;
      };
      state.isLeadError = null;
    })
    .addCase(leadReAssign.rejected, (state, { payload }) => {
      state.isLeadError = payload;
    })


    //LEAD CHANGE BASE INFORMATION////////////////
    .addCase(leadChangeBaseInfo.pending, (state) => {
      state.isLeadError = null;
    })
    .addCase(leadChangeBaseInfo.fulfilled, (state, { payload }) => {
      const updatedLead = payload;      
      state.leadsData.leads = state.leadsData.leads.map(lead => 
        lead._id === updatedLead._id ? updatedLead : lead
      );
      if(state.isLeadDetailsModal === true){
        state.leadDetailById = payload;
      };
      state.isLeadError = null;
    })
    .addCase(leadChangeBaseInfo.rejected, (state, { payload }) => {
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
  setLeadsAmountPerPage,
  toggleAssignLeadsCheckboxState,
  toggleAssignLeadsSelectAllCheckbox,
  resetAssignLeadsSelectedCheckbox,
  setLeadDetailsModalTrue,
  setLeadDetailsModalFalse,
} = leadSlice.actions;
