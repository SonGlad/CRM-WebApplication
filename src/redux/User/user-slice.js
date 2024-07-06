import { createSlice } from "@reduxjs/toolkit";
import { 
    getOfficeList,
    getRoleList,
    getAllUsers,
    getUserById, 
    resendVerifyEmail,
    resetUserPassword,
} from "./user-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
    officeList: [],
    roleList: [],
    officeState: '',
    users: [],
    user: {
        id: null,
        name: null,
        email: null,
        role: null,
        branch: null,
        created: null,
        createdBy: {
            userName: null,
            userRole: null,
            userBranch: null
        },
        leads: {
            selfCreated: null,
            assigned: null,
        }
    },
    isLeadsDetails: false,
    isResposeForUserDetailsModal: false,
    isVerificationEmail: false,
    isMessage: '',
    isResetPassword: false,
    resetPasswordResponse: null,
    isUserLoading: false,
    isUserError: null,
};


const userSlice = createSlice({
    name: 'user',
    initialState,


    reducers: {
        isOfficeState:(state, action) => {
            state.officeState = action.payload;
        },
        resetOfficeState:(state) => {
            state.officeState = '';
        },
        resetUserState:(state) => {
            state.user = {
                id: null,
                name: null,
                email: null,
                role: null,
                branch: null,
                created: null,
                createdBy: {
                    userName: null,
                    userRole: null,
                    userBranch: null
                },
                leads: {
                    selfCreated: null,
                    assigned: null,
                }
            };
            state.isMessage = '';
            state.isResposeForUserDetailsModal = false;
            state.isVerificationEmail = false;
            state.isResetPassword = false;
            state.resetPasswordResponse = null;
            state.isUserError = null;
        },
        updatingVerificationEmailResponse: (state) => {
            state.isResposeForUserDetailsModal = false;
            state.isVerificationEmail = false;
            state.isMessage = '';
            state.isUserError = null;
        },
        updatingResetPasswordResponse: (state) => {
            state.isResposeForUserDetailsModal = false;
            state.isResetPassword = false;
            state.resetPasswordResponse = null;
            state.isUserError = null;
        },
    },

    extraReducers: builder => {
        builder

        
        //OFFICE LIST///////////
        .addCase(getOfficeList.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(getOfficeList.fulfilled, (state, { payload }) => {
            state.officeList = payload;
            state.isUserLoading = false;
            state.isUserError = null;
        })
        .addCase(getOfficeList.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isUserError = payload;
        })


        //ROLE LIST///////////
        .addCase(getRoleList.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(getRoleList.fulfilled, (state, { payload }) => {
            state.roleList = payload;
            state.isUserLoading = false;
            state.isUserError = null;
        })
        .addCase(getRoleList.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isUserError = payload;
        })


        // GET ALL USERS//
        .addCase(getAllUsers.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(getAllUsers.fulfilled, (state, {payload} ) => {
            state.users = payload;
            state.isUserLoading = false;
            state.isUserError = null;
        })
        .addCase(getAllUsers.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isUserError = payload;
        })


        // GET USER BY ID///
        .addCase(getUserById.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(getUserById.fulfilled, (state, { payload }) => {
            state.isUserLoading = false;
            state.isUserError = null;
            state.user = {
                id: payload._id,
                name: payload.username,
                email: payload.email,
                role: payload.role,
                branch: payload.branch,
                created: payload.createdAt,
                createdBy: {
                    userName: payload.createdBy.userName,
                    userRole: payload.createdBy.userRole,
                    userBranch: payload.createdBy.userBranch,
                },
                leads: {
                    selfCreated: payload.leads.selfCreated,
                    assigned: payload.leads.assigned,
                }
            } 
        })
        .addCase(getUserById.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isUserError = payload;
        })


        //RESEND VERIFICATION EMAIL//
        .addCase(resendVerifyEmail.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
            state.isResposeForUserDetailsModal = false;
            state.isVerificationEmail = false;
        })
        .addCase(resendVerifyEmail.fulfilled, (state, {payload} ) => {
            state.isUserLoading = false;
            state.isResposeForUserDetailsModal = true;
            state.isVerificationEmail = true;
            state.isMessage = payload;
            state.isUserError = null;

        })
        .addCase(resendVerifyEmail.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isResposeForUserDetailsModal = true;
            state.isVerificationEmail = true;
            state.isUserError = payload;
        })


        //RESET USER PASSWORD//
        .addCase(resetUserPassword.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
            state.isResposeForUserDetailsModal = false;
            state.isResetPassword = false;
        })
        .addCase(resetUserPassword.fulfilled, (state, {payload} ) => {
            state.isUserLoading = false;
            state.isResposeForUserDetailsModal = true;
            state.isResetPassword = true;
            state.resetPasswordResponse = payload
            state.isUserError = null;

        })
        .addCase(resetUserPassword.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isResposeForUserDetailsModal = true;
            state.isResetPassword = true;
            state.isUserError = payload;
        })

        
        // LOGOUT//////
        .addCase(logOut.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.officeList = [];
            state.roleList = [];
            state.officeState ='';
            state.users = [];
            state.user = {
                id: null,
                name: null,
                email: null,
                role: null,
                branch: null,
                created: null,
                createdBy: {
                    userName: null,
                    userRole: null,
                    userBranch: null,
                },
                leads: {
                    selfCreated: null,
                    assigned: null,
                }
            };
            state.isResposeForUserDetailsModal = false;
            state.isVerificationEmail = false;
            state.isResetPassword = false;
            state.resetPasswordResponse = null;
            state.isLeadsDetails = false;
            state.isMessage = ''; 
            state.isUserLoading = false;
            state.isUserError = null;
        })
        .addCase(logOut.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isUserError = payload;
        })
    }
});


export const userReducer = userSlice.reducer;


export const {
    isOfficeState,
    resetOfficeState,
    resetUserState,
    updatingVerificationEmailResponse,
    updatingResetPasswordResponse, 
} = userSlice.actions;