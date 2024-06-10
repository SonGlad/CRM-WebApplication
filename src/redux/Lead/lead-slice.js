import { createSlice } from "@reduxjs/toolkit";
import { 
    register, 
} from "./lead-operation";


const initialState = {
    user: {
        name: null,
        email: null,
        password: null,
        role: null,
    },
};


const leadSlice = createSlice({
    name: 'lead',
    initialState,


    reducers: {
        isSettingsUpdatedtoFalse:(state) => {
            state.isSettingsUpdated = false
        },
    },

    extraReducers: builder => {
        builder

        
        // REGISTER///////////
        .addCase(register.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.user = {
                name: payload.username,
                email: payload.email,
                password: payload.password,
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
    }
});


export const leadReducer = leadSlice.reducer;


export const {
    isSettingsUpdatedtoFalse, 
} = leadSlice.actions;