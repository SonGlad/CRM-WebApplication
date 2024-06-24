import { createSlice } from "@reduxjs/toolkit";
import { inregister } from "../Auth/auth-operation";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isSettingsModal: false,
        isNewUserModal: false,
        isNewUserSuccess: true,
        isNewLeadModal: false,
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