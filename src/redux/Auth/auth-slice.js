import { createSlice } from "@reduxjs/toolkit";
import { 
    register, 
    logIn,
    logOut,
    refreshCurrentUser,
    updateUserAvatar, 
    updateUserInfo,
    inregister,
} from "./auth-operation";


const initialState = {
    user: {
        name: null,
        role: null,
        branch: null,
    },
    newUser: {
        name: null,
        email: null,
        password: null,
        role: null,
        branch: null,
    },
    isAdmin: false,
    isManager: false,
    isRetention: false,
    isConversion: false,
    isRetentionManager: false,
    isConversionManager: false,
    isSettingsUpdated: false,
    isNewUserDataResponce: false,
    token: null,
    avatarURL: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
    isInitial: false,
    forNoneAdminLogin: false,
    error: null,
    currentLocation: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,


    reducers: {
        isSettingsUpdatedtoFalse:(state) => {
            state.isSettingsUpdated = false
        },
        saveUserCurrentLocation:(state, action) => {
            state.currentLocation = action.payload
        },
        updatingAdmin: (state) => {
            state.isAdmin = true
        },
        updatingManager: (state) => {
            state.isManager = true
        },
        updatingConversion: (state) => {
            state.isConversion = true
        },
        updatingRetention: (state) => {
            state.isRetention = true
        },
        updatingConversionManager: (state) => {
            state.isConversionManager = true
        },
        updatingRetentionManager: (state) => {
            state.isRetentionManager = true
        },
        updatingNewUserResponceData: (state) => {
            state.isNewUserDataResponce = false;
        },
        updatingForNoneAdminLogin: (state) => {
            state.forNoneAdminLogin = false;
        },
        updatingNewUser: (state) => {
            state.newUser = {
                name: null,
                email: null,
                password: null,
                role: null,
                branch: null,
            }
        },
    },

    extraReducers: builder => {
        builder

        

        // EXREGISTER///////////
        .addCase(register.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.user = {
                name: payload.username,
                role: payload.role,
            };
            state.isLoading = false;
            state.error = null;
        })
        .addCase(register.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.token = null;
            state.error = payload;
        })
  
  
        //LOGIN/////////////// 
        .addCase(logIn.pending, state => {
            state.isLoading = true;
            state.error = null;
            state.isLoggedIn = false;
            state.isInitial = true;
            state.forNoneAdminLogin = false;
        })
        .addCase(logIn.fulfilled, (state, {payload}) => {
            state.user = {
                name: payload.username,
                branch: payload.branch,
                role: payload.role,
            };
            state.avatarURL = payload.avatarURL;
            state.token = payload.token;
            state.isLoading = false;
            state.isLoggedIn = true;
            state.isInitial = true;
            state.forNoneAdminLogin = true;
            state.error = null;
        })
        .addCase(logIn.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.isInitial = false;
            state.forNoneAdminLogin = false;
            state.error = payload;
        })

        // LOGOUT////////
        .addCase(logOut.pending, state =>{
            state.isLoading = true;
            state.isRefreshing = false;
            state.isInitial = true;
            state.forNoneAdminLogin = false;
            state.error = null;
        })
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.user = {
                name: null,
                role: null,
                branch: null,
            };
            state.newUser = {
                name: null,
                email: null,
                password: null,
                role: null,
                branch: null,
            };
            state.isAdmin = false;
            state.isManager = false;
            state.isRetention = false;
            state.isConversion = false;
            state.isRetentionManager = false;
            state.isConversionManager = false;
            state.avatarURL = null;
            state.token = null;
            state.isLoading = false;
            state.isLoggedIn = false;
            state.isInitial = false;
            state.isRefreshing = false;
            state.forNoneAdminLogin = false;
            state.error = null;
            state.currentLocation = null;
        })
        .addCase(logOut.rejected, (state, {payload}) => {
            state.isInitial = false;
            state.isLoggedIn = false;
            state.isLoading = false;
            state.forNoneAdminLogin = false;
            state.error = payload;
        })


        // REFRESH CURRENT USER////////
        .addCase(refreshCurrentUser.pending, state => {
            state.isRefreshing = true;
            state.isInitial = false;
            state.isLoading = true;
        })
        .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
            state.user = {
                name: payload.username,
                branch: payload.branch,
                role: payload.role,
            };
            state.avatarURL = payload.avatarURL;
            state.isLoading = false;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.isInitial = true;
            state.error = null;
        })
        .addCase(refreshCurrentUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isRefreshing = false;
            state.isInitial = false;
            state.error = payload;
        })


        // UPDATE AVATAR/////
        .addCase(updateUserAvatar.pending, state => {
            state.error = null;
            state.isSettingsUpdated = false;
        })
        .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
            state.avatarURL = payload.avatarURL;
            state.isSettingsUpdated = true;
            state.isLoggedIn = true;
            state.error = null;
        })
        .addCase(updateUserAvatar.rejected, (state, { payload }) => {
            state.error = payload;
            state.isSettingsUpdated = false;
        })


        // UPDATE USER INORMATION////////
        .addCase(updateUserInfo.pending, state => {
            state.error = null;
            state.isSettingsUpdated = false;
        })
        .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
            state.isLoggedIn = true;
            state.isSettingsUpdated = true;
            state.error = null;
        })
        .addCase(updateUserInfo.rejected, (state, { payload }) => {
            state.isSettingsUpdated = false;
            state.error = payload;
        })


        // INREGISTER///////////
        .addCase(inregister.pending, state =>{
            state.error = null;
            state.isNewUserDataResponce = false;
        })
        .addCase(inregister.fulfilled, (state, { payload }) => {
            state.newUser = {
                name: payload.username,
                email: payload.email,
                password: payload.password,
                role: payload.role,
                branch: payload.branch,
            };
            state.error = null;
            state.isNewUserDataResponce = true;
        })
        .addCase(inregister.rejected, (state, {payload}) => {
            state.token = null;
            state.error = payload;
            state.isNewUserDataResponce = true;
        })
    }
});


export const authReducer = authSlice.reducer;


export const {
    isSettingsUpdatedtoFalse, 
    saveUserCurrentLocation,
    updatingAdmin,
    updatingManager,
    updatingConversion,
    updatingRetention,
    updatingConversionManager,
    updatingRetentionManager,
    updatingNewUserResponceData,
    updatingForNoneAdminLogin,
    updatingNewUser
} = authSlice.actions;