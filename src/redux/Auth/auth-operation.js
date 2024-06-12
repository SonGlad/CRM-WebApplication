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


export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try{
            await axios.post('auth/logout');
            token.unset();
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }   
);


export const refreshCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;
        if(persistedToken === null){
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        try{
            token.set(persistedToken);
            const response = await axios.get('auth/current');
            return response.data;
        }
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const updateUserAvatar = createAsyncThunk(
    'auth/avatars',
    async (formData, thunkApi) => {
      try {
        const response = await axios.patch(`auth/avatars`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
            toast.info('Your User avatar has been successfully updated');
            return response.data;
        } catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const updateUserInfo = createAsyncThunk(
    'auth/update',
    async (userData, thunkApi) => {
        try {
            const response = await axios.put(`auth/update`, userData);
            toast.success('Your User information has been successfully updated');
            return response.data;
        } catch (error) {
            toast.error(`Oops... ${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);