import { createSlice } from "@reduxjs/toolkit";
import { 
    // register, 
} from "./filter-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
    isFilterLoading: false,
    filterError: null,
};


const filterSlice = createSlice({
    name: 'filter',
    initialState,


    reducers: {
        isSettingsUpdatedtoFalse:(state) => {
            state.isSettingsUpdated = false
        },
    },

    extraReducers: builder => {
        builder

        
        //LOGOUT///////////
        .addCase(logOut.pending, state =>{
            state.isFilterLoading= true;
            state.filterError = null;
        })
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.isFilterLoading = false;
            state.filterError = null;
        })
        .addCase(logOut.rejected, (state, {payload}) => {
            state.isFilterLoading = false;
            state.filterError = payload;
        })
    }
});


export const filterReducer = filterSlice.reducer;


export const {
    isSettingsUpdatedtoFalse, 
} = filterSlice.actions;