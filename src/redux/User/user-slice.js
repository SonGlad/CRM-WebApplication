import { createSlice } from "@reduxjs/toolkit";
import { 
    getOfficeList,
    getRoleList,
    getAllUsers, 
} from "./user-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
    officeList: [],
    roleList: [],
    officeState: '',
    users: [],
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
            state.isUserError = false;
        })
        .addCase(getAllUsers.fulfilled, (state, {payload} ) => {
            state.users = payload;
            state.isUserLoading = false;
            state.isUserError = false;
        })
        .addCase(getAllUsers.rejected, (state, {payload}) => {
            state.isUserLoading = false;
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
            state.users = [];
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
} = userSlice.actions;