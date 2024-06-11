import { createSlice } from "@reduxjs/toolkit";
import { 
    register, 
    logIn, 
} from "./auth-operation";


const initialState = {
    user: {
        name: null,
        email: null,
        password: null,
        role: null,
        branch: null,
    },
    isSettingsUpdated: false,
    token: null,
    avatarURL: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
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
        }
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
                email: payload.email,
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
            state.error = null;
        })
        .addCase(logIn.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = payload;
        })
    }
});


export const authReducer = authSlice.reducer;


export const {
    isSettingsUpdatedtoFalse, 
    saveUserCurrentLocation,
} = authSlice.actions;