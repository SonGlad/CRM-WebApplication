import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export const register = createAsyncThunk(
    'users/register',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('users/register', credentials);
            // token.set(response.data.token);
            // toast.success(`Please check your email for verification`);
            return response.data;
        }
        catch(error) {
            // toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);