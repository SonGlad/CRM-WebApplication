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
    'leads/all?page=&limit=&source=&branch=&resource=&createdAt=&conManager=&conAgent=&office=&openFilter=&country=&region=&city=&lastUpdate=&nextCall=&status=&timeZone=',
    async ({
        page, 
        limit, 
        branch, 
        resource, 
        createdAt, 
        conManager, 
        conAgent, 
        office, 
        openFilter,
        country,
        region,
        city,
        lastUpdate,
        nextCall,
        status,
        timeZone,
    }, thunkApi) => {
        const params = new URLSearchParams({
            page,
            limit,
            ...(branch && { branch }),
            ...(resource && { resource }),
            ...(createdAt && { createdAt }),
            ...(conManager && { conManager }),
            ...(conAgent && { conAgent }),
            ...(office && { office }),
            ...(openFilter && { openFilter }),
            ...(country && { country }),
            ...(region && { region }),
            ...(city && { city }),
            ...(lastUpdate && { lastUpdate }),
            ...(nextCall && { nextCall }),
            ...(status && { status }),
            ...(timeZone && { timeZone }),
        }).toString();
        try{
            const response = await axios.get(`leads/all?${params}`);
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


export const patchNextCall = createAsyncThunk(
    'leads/nextcall/:leadId',
    async (dataNextcallLead, thunkApi) => {
        const { id, leadNextcall } = dataNextcallLead;
        try{
            const response = await axios.patch(`leads/nextcall/${id}`, {nextCall: leadNextcall});
            toast.success(`Next call was changed successfully`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);      

          
export const leadAssign = createAsyncThunk(
    'leads/assign/:leadId',
    async ({leadId, data}, thunkApi) => {
        try{
            const response = await axios.post(`leads/assign/${leadId}`, data);
            toast.success(`Lead successful assigned`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const leadReAssign = createAsyncThunk(
    'leads/reassign/:leadId',
    async ({leadId, data}, thunkApi) => {
        try{
            const response = await axios.put(`leads/reassign/${leadId}`, data);
            toast.success(`Lead successful reassigned`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const leadChangeBaseInfo = createAsyncThunk(
    'leads/:leadId(change Base Info)',
    async ({leadId, data}, thunkApi) => {
        try{
            const response = await axios.patch(`leads/${leadId}`, data);
            toast.success(`Lead base information successful updated`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const leadChangeKYCInfo = createAsyncThunk(
    'leads/kyc/:leadId(change KYC Info)',
    async ({leadId, data}, thunkApi) => {
        try{
            const response = await axios.patch(`leads/kyc/${leadId}`, data);
            toast.success(`Lead KYC information successful updated`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const leadAddNewComment = createAsyncThunk(
    'leads/comment/:leadId(add new comment)',
    async ({leadId, data}, thunkApi) => {
        try{
            const response = await axios.patch(`leads/comment/${leadId}`, data);
            toast.success(`New comment added`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllComments = createAsyncThunk(
    'leads/allComments/:leadId',
    async (leadId, thunkApi) => {
        try{
            const response = await axios.get(`leads/allComments/${leadId}`);
            toast.success(`All Comments Received`);
            return response.data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);