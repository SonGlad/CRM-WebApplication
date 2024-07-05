import { createSlice } from "@reduxjs/toolkit";
import { 
    getOfficeList,
    getRoleList,
    getAllUsers,
    getUserById, 
    resendVerifyEmail,
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
    isVerificationRespose: false,
    isMessage: '',
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
        resetUsereState:(state) => {
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
        },
        updatingVerificationEmailResponse: (state) => {
            state.isVerificationRespose = false;
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
            state.isVerificationRespose = false;
        })
        .addCase(resendVerifyEmail.fulfilled, (state, {payload} ) => {
            state.isMessage = payload.message;
            state.isUserLoading = false;
            state.isUserError = null;
            state.isVerificationRespose = true;
        })
        .addCase(resendVerifyEmail.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isUserError = payload;
            state.isVerificationRespose = true;
        })

        
        // LOGOUT//////
        .addCase(logOut.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.officeList = [];
            state.roleList = [];
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
            state.isVerificationRespose = false;
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
    resetUsereState,
    updatingVerificationEmailResponse, 
} = userSlice.actions;