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


export const getAllLeads = createAsyncThunk(
    'leads/all?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`leads/all${params}`);
            toast.success(`All Leads load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getStatus = createAsyncThunk(
    'leads/allstatus/',
    async ( _, thunkApi) => {
        try{
            const response = await axios.get('leads/allstatus');
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getTimeZone = createAsyncThunk(
    'leads/alltimezone',
    async ( _, thunkApi) => {
        try{
            const response = await axios.get('leads/alltimezone');
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const patchStatus = createAsyncThunk(
    'leads/status/:leadId',
    async (dataStatus, thunkApi) => {
        const { id, leadStatus } = dataStatus;
        try{
            const response = await axios.patch(`leads/status/${id}`, {status: leadStatus});
            toast.success(`Status was changed successfully`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const patchTimeZone = createAsyncThunk(
    'leads/timezone/:leadId',
    async (dataTimeZone, thunkApi) => {
        const { id, leadTimeZone } = dataTimeZone;
        try{
            const response = await axios.patch(`leads/timezone/${id}`, {timeZone: leadTimeZone});
            toast.success(`Time Zone was changed successfully`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const deleteLead = createAsyncThunk(
    'leads/:leadId',
    async(leadId, thunkApi) => {
        try{
            const response = await axios.delete(`leads/${leadId}`);
            toast.success(`Lead Deleted`);
            return response.data
        }
        catch(error){
            toast.error(error.response.data.message);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const patchCityLead = createAsyncThunk(
    'leads/city/:leadId',
    async (dataCityLead, thunkApi) => {
        const { id, leadCity } = dataCityLead;
        try{
            const response = await axios.patch(`leads/city/${id}`, {city: leadCity});
            toast.success(`City was changed successfully`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const patchRegionLead = createAsyncThunk(
    'leads/region/:leadId',
    async (dataRegionLead, thunkApi) => {
        const { id, leadRegion } = dataRegionLead;
        try{
            const response = await axios.patch(`leads/region/${id}`, {region: leadRegion});
            toast.success(`Region was changed successfully`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const patchCountryLead = createAsyncThunk(
    'leads/country/:leadId',
    async (dataCountryLead, thunkApi) => {

        const { id, leadCountry } = dataCountryLead;

        try{
            const response = await axios.patch(`leads/country/${id}`, {country: leadCountry});
            toast.success(`Country was changed successfully`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getLeadById = createAsyncThunk(
    'leads/:leadId?branch=Office1',
    async ({leadId, branch}, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`leads/${leadId}${params}`);
            toast.success(`Lead Details load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);