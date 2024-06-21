import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isSettingsModal: false,
        isNewUserModal: false,
        isNewLeadModal: false,
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


    // extraReducers: builder => {
    //     builder


    // }
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