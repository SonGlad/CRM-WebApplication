import { createSlice } from "@reduxjs/toolkit";
import { 
    getOfficeList,
    getRoleList,
    getAllUsers,
    getUserById, 
    resendVerifyEmail,
    resetUserPassword,
    deleteUser,
    getAvailableUsers,
    getAllUserSelfCreatedleads,
    getAllUserAssignedleads,
} from "./user-operation";
import { inregister, logOut } from "../Auth/auth-operation";


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
    selectedUsersCheckedCheckbox: [],
    filteredUsers: [],
    isUserDeleteSuccess: false,
    availableUsersForAssign: [],
    userLeads: [],
    userLeadsComponent: false,
    userLeadsComponentData: '',
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
        setFilteredUsers: (state, {payload}) => {
            state.filteredUsers = payload;
        },
        toggleUsersCheckboxState: (state, action) => {
            const {_id} = action.payload;
            const isSelected = state.selectedUsersCheckedCheckbox.includes(_id);
            if (isSelected) {
                state.selectedUsersCheckedCheckbox = state.selectedUsersCheckedCheckbox.filter(id => id !== _id);
            } else {
                state.selectedUsersCheckedCheckbox.push(_id);
            }
        },
        toggleUsersSelectAllCheckbox: (state) => {
            const filteredUserIds = state.filteredUsers.map(user => user._id);
            if (state.selectedUsersCheckedCheckbox.length === filteredUserIds.length) {
                state.selectedUsersCheckedCheckbox = [];
            } else {
                state.selectedUsersCheckedCheckbox = [...filteredUserIds];
            }
        },
        resetUsersSelectedCheckbox: (state) => {
            state.selectedUsersCheckedCheckbox = [];
        },
        setUserLeadsComponent: (state, {payload}) => {
            state.userLeadsComponent = true;
            state.userLeadsComponentData = payload;
        },
        resetUserLeadsComponent: (state) => {
            state.userLeadsComponent = false;
            state.userLeadsComponentData = '';
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


        //AVAILABLE USERS///////////
        .addCase(getAvailableUsers.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(getAvailableUsers.fulfilled, (state, { payload }) => {
            state.availableUsersForAssign = payload;
            state.isUserLoading = false;
            state.isUserError = null;
        })
        .addCase(getAvailableUsers.rejected, (state, {payload}) => {
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


        // CREATE NEW USER//////
        .addCase(inregister.pending, state => {
            state.isUserError = null;
        })
        .addCase(inregister.fulfilled, (state, {payload} ) => {
            state.users.unshift(payload);
            state.isUserError = null;
        })
        .addCase(inregister.rejected, (state, {payload}) => {
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


        //DELETE USER//
        .addCase(deleteUser.pending, state => {
            state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(deleteUser.fulfilled, (state, {payload} ) => {
            state.isUserLoading = false;
            state.isUserError = null;
            state.users = state.users.filter(user => user._id !== payload.id);
            state.selectedUsersCheckedCheckbox = state.selectedUsersCheckedCheckbox.filter(id => id !== payload.id);
        })
        .addCase(deleteUser.rejected, (state, {payload}) => {
            state.isUserLoading = false;
            state.isUserError = payload;
        })


        //GET USER ALL SELF CREATED LEADS//
        .addCase(getAllUserSelfCreatedleads.pending, state => {
            // state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(getAllUserSelfCreatedleads.fulfilled, (state, {payload} ) => {
            // state.isUserLoading = false;
            state.isUserError = null;
            state.userLeads = payload;
        })
        .addCase(getAllUserSelfCreatedleads.rejected, (state, {payload}) => {
            // state.isUserLoading = false;
            state.isUserError = payload;
        })


        //GET USER ALL ASSIGNED LEADS//
        .addCase(getAllUserAssignedleads.pending, state => {
            // state.isUserLoading = true;
            state.isUserError = null;
        })
        .addCase(getAllUserAssignedleads.fulfilled, (state, {payload} ) => {
            // state.isUserLoading = false;
            state.isUserError = null;
            state.userLeads = payload;
        })
        .addCase(getAllUserAssignedleads.rejected, (state, {payload}) => {
            // state.isUserLoading = false;
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
            state.selectedUsersCheckedCheckbox = [];
            state.filteredUsers = [];
            state.availableUsersForAssign = [];
            state.userLeads = [];
            state.userLeadsComponent = false;
            state.userLeadsComponentData = '';
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
    toggleUsersCheckboxState,
    toggleUsersSelectAllCheckbox,
    resetUsersSelectedCheckbox,
    setFilteredUsers, 
    setUserLeadsComponent,
    resetUserLeadsComponent,
} = userSlice.actions;