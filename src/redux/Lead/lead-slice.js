import { createSlice } from "@reduxjs/toolkit";
import { 
    createNewLead,
    getAllLeads, 
    deleteLead,
} from "./lead-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
    officeState: '',
    leads: [],
    newLead: null,
    isNewLeadDataResponce: false,
    isLeadError: null,
    isLeadLoading: false,
    selectedExternalLeadsCheckedCheckbox: [],
};


const leadSlice = createSlice({
    name: 'lead',
    initialState,


    reducers: {
        isOfficeState: (state, action) => {
            state.officeState = action.payload;
        },
        resetOfficeState: (state) => {
            state.officeState = '';
        },
        updatingNewLeadDataResponce: (state) => {
            state.isNewLeadDataResponce = false;
        },
        updatingNewLead: (state) => {
            state.newLead = null;
        },
        getAllLeadsState: (state, action) => {
            state.leads = action.payload;
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
            const leadIds = state.leads.map(lead => lead._id);
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

    extraReducers: builder => {
        builder

        
        //LOGOUT///////////
        .addCase(logOut.pending, state => {
            state.isLeadLoading = true;
            state.isLeadError = null;
        })
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.officeState = '';
            state.leads = [];
            state.newLead = null;
            state.isLeadLoading = false;
            state.isLeadError = null;
            state.selectedExternalLeadsCheckedCheckbox = [];
        })
        .addCase(logOut.rejected, (state, { payload }) => {
            state.isLeadLoading = false;
            state.isLeadError = payload;
        })


        //CREATE NEW LEAD///////////
        .addCase(createNewLead.pending, state => {
            state.isLeadLoading = true;
            state.isLeadError = null;
            state.isNewLeadDataResponce = false;
        })
        .addCase(createNewLead.fulfilled, (state, { payload }) => {
            state.leads.unshift(payload);
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
        .addCase(getAllLeads.pending, state => {
            state.isLeadLoading = true;
            state.isLeadError = null;
        })
        .addCase(getAllLeads.fulfilled, (state, { payload }) => {
            state.isLeadLoading = false;
            state.isLeadError = null;
            state.leads = payload;
        })
            .addCase(getAllLeads.rejected, (state, { payload }) => {
            state.isLeadLoading = false;
                state.isLeadError = payload;
        })


        //DELETE LEADS//
        .addCase(deleteLead.pending, state => {
            state.isLeadLoading = true;
            state.isLeadError = null;
        })
        .addCase(deleteLead.fulfilled, (state, {payload} ) => {
            state.isLeadLoading = false;
            state.isLeadError = null;
            state.leads = state.users.filter(lead => lead._id !== payload.id);
            state.selectedExternalLeadsCheckedCheckbox = state.selectedExternalLeadsCheckedCheckbox.filter(id => id !== payload.id);
        })
        .addCase(deleteLead.rejected, (state, {payload}) => {
            state.isLeadLoading = false;
            state.isLeadError = payload;
        })
    }
});


export const leadReducer = leadSlice.reducer;


export const {
    isOfficeState,
    resetOfficeState,
    updatingNewLeadDataResponce,
    updatingNewLead,
    getAllLeadsState,
    toggleExternalLeadsCheckboxState,
    toggleExternalLeadsSelectAllCheckbox,
    resetExternalLeadsSelectedCheckbox,
} = leadSlice.actions;