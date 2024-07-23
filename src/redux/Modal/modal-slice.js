import { createSlice } from "@reduxjs/toolkit";
import { inregister } from "../Auth/auth-operation";
import { createNewLead } from "../Lead/lead-operation";
import { getUserById, resendVerifyEmail, resetUserPassword} from "../User/user-operation";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isSettingsModal: false,
        isNewUserModal: false,
        isNewLeadModal: false,
        isUserDetails: false,
        isConfirmModal: false,
        usersForDeleteId:[],
        isSuccess: true,
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
        openModalUserDetail: (state) => {
            state.isUserDetails = true;
        },
        closeModaUserDetail: (state) => {
            state.isUserDetails = false;
        },
        openModalConfirm: (state, {payload}) => {
            state.isConfirmModal = true;
            state.usersForDeleteId = payload;
        },
        closeModaConfirm: (state) => {
            state.isConfirmModal = false;
        },
    },


    extraReducers: builder => {
        builder

        // NEW USER SWITCHER
        .addCase(inregister.pending, state =>{
            state.isLoading = true;
            state.isSuccess = true;
        })
        .addCase(inregister.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(inregister.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = false;
        })


        // NEW LEAD SWITCHER
        .addCase(createNewLead.pending, state =>{
            state.isLoading = true;
            state.isSuccess = true;
        })
        .addCase(createNewLead.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(createNewLead.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = false;
        })


        // GET USER BY ID SWITCHER
        .addCase(getUserById.pending, state =>{
            state.isSuccess = true;
        })
        .addCase(getUserById.fulfilled, (state, { payload }) => {
            state.isSuccess = true;
        })
        .addCase(getUserById.rejected, (state, {payload}) => {
            state.isSuccess = false;
        })


        //VERIFY EMAIL SWITCHER
        .addCase(resendVerifyEmail.pending, state =>{
            state.isSuccess = true;
        })
        .addCase(resendVerifyEmail.fulfilled, (state, { payload }) => {
            state.isSuccess = true;
        })
        .addCase(resendVerifyEmail.rejected, (state, {payload}) => {
            state.isSuccess = false;
        })


        //RESET PASSWORD SWITCHER
        .addCase(resetUserPassword.pending, state =>{
            state.isSuccess = true;
        })
        .addCase(resetUserPassword.fulfilled, (state, { payload }) => {
            state.isSuccess = true;
        })
        .addCase(resetUserPassword.rejected, (state, {payload}) => {
            state.isSuccess = false;
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
    openModalUserDetail,
    closeModaUserDetail,
    openModalConfirm,
    closeModaConfirm,
} = modalSlice.actions;