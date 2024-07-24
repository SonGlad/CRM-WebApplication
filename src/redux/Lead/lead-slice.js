import { createSlice } from "@reduxjs/toolkit";
import { 
    createNewLead,
    getAllLeads, 
} from "./lead-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
    officeState: '',
    leads: [],
    newLead: null,
    isNewLeadDataResponce: false,
    isLeadError: null,
    isLeadLoading: false,
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
        }
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
    }
});


export const leadReducer = leadSlice.reducer;


export const {
    isOfficeState,
    resetOfficeState,
    updatingNewLeadDataResponce,
    updatingNewLead,
    getAllLeadsState,
} = leadSlice.actions;