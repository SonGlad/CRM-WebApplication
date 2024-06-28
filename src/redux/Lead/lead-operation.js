import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const createNewLead = createAsyncThunk(
    'leads/',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('leads/', credentials);
            toast.success(`The new lead has been created`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);