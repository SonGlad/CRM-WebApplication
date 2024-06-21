import { createSlice } from "@reduxjs/toolkit";
import { 
    // register, 
} from "./lead-operation";
import { logOut } from "../Auth/auth-operation";


const initialState = {
    officeState: '',
    isLeadError: null,
    isLeadLoading: false,
};


const leadSlice = createSlice({
    name: 'lead',
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

        
        //LOGOUT///////////
        .addCase(logOut.pending, state =>{
            state.isLeadLoading = true;
            state.isLeadError = null;
        })
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.officeState = ''
            state.isLeadLoading = false;
            state.isLeadError = null;
        })
        .addCase(logOut.rejected, (state, {payload}) => {
            state.isLeadLoading = false;
            state.isLeadError = payload;
        })
    }
});


export const leadReducer = leadSlice.reducer;


export const {
    isOfficeState,
    resetOfficeState, 
} = leadSlice.actions;