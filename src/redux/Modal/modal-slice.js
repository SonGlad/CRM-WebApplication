import { createSlice } from "@reduxjs/toolkit";
import { inregister } from "../Auth/auth-operation";
import { createNewLead } from "../Lead/lead-operation";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isSettingsModal: false,
        isNewUserModal: false,
        isNewUserSuccess: true,
        isNewLeadModal: false,
        isNewLeadSuccess: true,
        isLoading: false,
    },

    reducers: {
        openModalSettings: (state) => {
            state.isSettingsModal = true;
        },
        closeModalSettings: (state) => {
            state.isSettingsModal = false;
        },
        openModalNewUser: (state) => {
            state.isNewUserModal = true;
        },
        closeModalNewUser: (state) => {
            state.isNewUserModal = false;
        },
        openModalNewLead: (state) => {
            state.isNewLeadModal = true;
        },
        closeModalNewLead: (state) => {
            state.isNewLeadModal = false;
        },
    },


    extraReducers: builder => {
        builder

        // NEW USER SWITCHER
        .addCase(inregister.pending, state =>{
            state.isLoading = true;
            state.isNewUserSuccess = true;
        })
        .addCase(inregister.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isNewUserSuccess = true;
        })
        .addCase(inregister.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isNewUserSuccess = false;
        })


        // NEW LEAD SWITCHER
        .addCase(createNewLead.pending, state =>{
            state.isLoading = true;
            state.isNewLeadSuccess = true;
        })
        .addCase(createNewLead.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isNewLeadSuccess = true;
        })
        .addCase(createNewLead.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isNewLeadSuccess = false;
        })
    }
});


export const modalReducer = modalSlice.reducer;


export const {
    openModalSettings,
    closeModalSettings,
    openModalNewUser,
    closeModalNewUser,
    openModalNewLead,
    closeModalNewLead,
} = modalSlice.actions;