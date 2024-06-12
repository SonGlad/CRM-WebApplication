import { createSlice } from "@reduxjs/toolkit";
import { 
    register, 
} from "./filter-operation";


const initialState = {
    user: {
        name: null,
        email: null,
        password: null,
        role: null,
    },
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


export const filterReducer = filterSlice.reducer;


export const {
    isSettingsUpdatedtoFalse, 
} = filterSlice.actions;