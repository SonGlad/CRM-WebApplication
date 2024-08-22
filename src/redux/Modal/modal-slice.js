import { createSlice } from "@reduxjs/toolkit";
import { inregister } from "../Auth/auth-operation";
import { createNewLead } from "../Lead/lead-operation";
import { 
    getUserById, 
    resendVerifyEmail, 
    resetUserPassword,
} from "../User/user-operation";
import { getLeadById } from "../Lead/lead-operation";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isSettingsModal: false,
        isNewUserModal: false,
        isNewLeadModal: false,
        isUserDetails: false,
        isLeadDetails: false,
        isConfirmModal: false,
        dataForDeleteId:{
            idToDelete: [],
            component: '',
        },
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
            state.isSuccess = true;
        },
        openModalNewLead: (state) => {
            state.isNewLeadModal = true;
        },
        closeModalNewLead: (state) => {
            state.isNewLeadModal = false;
            state.isSuccess = true;
        },
        openModalUserDetail: (state) => {
            state.isUserDetails = true;
        },
        closeModaUserDetail: (state) => {
            state.isUserDetails = false;
            state.isSuccess = true;
        },
        openModalLeadDetail: (state) => {
            state.isLeadDetails = true;
        },
        closeModaLeadDetail: (state) => {
            state.isLeadDetails = false;
            state.isSuccess = true;
        },
        openModalConfirm: (state, {payload}) => {
            state.isConfirmModal = true;
            state.dataForDeleteId.idToDelete = payload.idToDelete;
            state.dataForDeleteId.component = payload.component;
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


        // GET LEAD BY ID SWITCHER
        .addCase(getLeadById.pending, state =>{
            state.isSuccess = true;
        })
        .addCase(getLeadById.fulfilled, (state, { payload }) => {
            state.isSuccess = true;
        })
        .addCase(getLeadById.rejected, (state, {payload}) => {
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
    openModalLeadDetail,
    closeModaLeadDetail,
    openModalConfirm,
    closeModaConfirm,
} = modalSlice.actions;