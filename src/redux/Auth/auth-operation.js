import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { token } from "../../api/axiosSettings";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const register = createAsyncThunk(
    'auth/exregister',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('auth/exregister', credentials);
            toast.success(`Please check your email for verification`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('auth/login', credentials);
            token.set(response.data.token);
            toast.success(`Welcome!`);
            return response.data;
        }
        catch(error){
            toast.error(`Oops. Your ${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);