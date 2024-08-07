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


export const getAllUsers = createAsyncThunk(
    'users/all',
    async(office, thunkApi) => {
        const branch = office && (office);
        try{
            const response = await axios.get(`users/all/${branch}`);
            toast.success(`All users list been received`);
            return response.data
        }
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const getUserById = createAsyncThunk(
    'users/:userId',
    async({userId, branch}, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`users/${userId}${params}`);
            toast.success(`All users list been received`);
            return response.data
        }
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const resendVerifyEmail = createAsyncThunk(
    'users/verify/:userId?branch',
    async({userId, branch, email}, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.post(`users/verify/${userId}${params}`, {email});
            toast.success(`All users list been received`);
            return response.data.message
        }
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const resetUserPassword = createAsyncThunk(
    'users/resetPassword/:userId?branch',
    async({userId, branch}, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.post(`users/resetPassword/${userId}${params}`);
            toast.success(`All users list been received`);
            return response.data
        }
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const deleteUser = createAsyncThunk(
    'users/:userId?branch=Office1',
    async({userId, branch}, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.delete(`users/${userId}${params}`);
            toast.success(`User Deleted`);
            return response.data
        }
        catch(error){
            toast.error(error.response.data.message);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAvailableUsers = createAsyncThunk(
    '/availableUsers',
    async (_, thunkApi) => {
        try{
            const response = await axios.get('users/availableUsers');
            toast.success(`Users Information has been received`);
            return response.data;
        }
        catch(error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const getAllUserSelfCreatedleads = createAsyncThunk(
    '/selfCreatedLeads/:userId?branch=Office1',
    async({userId, branch}, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`users/selfCreatedLeads/${userId}${params}`);
            toast.success(`All User Self Created leads received`);
            return response.data
        }
        catch(error){
            toast.error(error.response.data.message);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllUserAssignedleads = createAsyncThunk(
    '/assignedLeads/:userId?branch=Office1',
    async({userId, branch}, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`users/assignedLeads/${userId}${params}`);
            toast.success(`All User Assigned leads received`);
            return response.data
        }
        catch(error){
            toast.error(error.response.data.message);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);