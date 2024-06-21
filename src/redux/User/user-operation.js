import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getOfficeList = createAsyncThunk(
    'users/office',
    async (_, thunkApi) => {
        try{
            const response = await axios.get('users/office');
            toast.success(`Office Information has been received`);
            return response.data;
        }
        catch(error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const getRoleList = createAsyncThunk(
    'users/role',
    async (_, thunkApi) => {
        try{
            const response = await axios.get('users/role');
            toast.success(`Role List has been received`);
            return response.data;
        }
        catch(error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);