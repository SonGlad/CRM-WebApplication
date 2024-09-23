import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getAllSource = createAsyncThunk(
    'finds/source?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/source${params}`);
            toast.success(`All Source load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getFilterStatus = createAsyncThunk(
    'finds/statuses?branch=Office1',
    async ( branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/statuses${params}`);
            toast.success(`All Satuses load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getFilterTimeZone = createAsyncThunk(
    'finds/timezones?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/timezones${params}`);
            toast.success(`All Time Zones load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllCountries = createAsyncThunk(
    'finds/country?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/country${params}`);
            toast.success(`All Countries load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllRegions = createAsyncThunk(
    'finds/region?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/region${params}`);
            toast.success(`All Regions load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllCities = createAsyncThunk(
    'finds/city?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/city${params}`);
            toast.success(`All Cities load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllAgents = createAsyncThunk(
    'finds/agent?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/agent${params}`);
            toast.success(`All Available Agents load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllNextCall = createAsyncThunk(
    'finds/nextcall?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/nextcall${params}`);
            toast.success(`All Available Next Call dates load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllLastUpdated = createAsyncThunk(
    'finds/lastupdate?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/lastupdate${params}`);
            toast.success(`All Available Last Updated dates load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllCreatedDate = createAsyncThunk(
    'finds/created?branch=Office1',
    async (branch, thunkApi) => {
        const params = branch ? `?branch=${branch}` : '';
        try{
            const response = await axios.get(`finds/created${params}`);
            toast.success(`All Available Created dates load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllOffice = createAsyncThunk(
    'finds/offices',
    async (_, thunkApi) => {
        try{
            const response = await axios.get(`finds/offices`);
            toast.success(`All Available Offices load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllManagers = createAsyncThunk(
    'finds/managers',
    async (_, thunkApi) => {
        try{
            const response = await axios.get(`finds/managers`);
            toast.success(`All Available Managers load successful`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);