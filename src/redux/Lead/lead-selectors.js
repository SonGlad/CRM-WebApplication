export const selectActiveOffice = state => state.lead.officeState;

export const selectLeadsLoader = state => state.lead.isLeadLoading;

export const selectLeadsError = state => state.lead.isLeadError;

export const selectLeadResponce = state => state.lead.isNewLeadDataResponce;

export const selectLeads = state => state.lead.leads;

export const selectNewLead = state => state.lead.newLead;

export const selectStatus = state => state.lead.status;

export const selectStatusLoading = state => state.lead.isStatusLoading;

export const selectStatusError = state => state.lead.isStatusError;

export const selectTimeZone = state => state.lead.timeZone;

export const selectTimeZoneLoading = state => state.lead.isTimeZoneLoading;

export const selectTimeZoneError = state => state.lead.isTimeZoneLoading;

export const selectNewStatusLead = state => state.lead.newStatusLead;

export const selectPathStatusLoading = state => state.lead.patchStatusLoading;

export const selectPathStatusError = state => state.lead.patchStatusError;

export const selectNewTimeZone = state => state.lead.newTimeZoneLead;

export const selectPatchTimeZoneLoading = state => state.lead.patchTimeZoneLoading;

export const selectPatchTimeZoneError = state => state.lead.patchTimeZoneError;

export const selectNewCityLead = state => state.lead.newCityLead;

export const selectPatchCityLeadLoading = state => state.lead.patchCityLeadLoading;

export const selectPatchCityLeadError = state => state.lead.patchCityLeadError;

export const selectNewRegionLead = state => state.lead.newRegionLead;

export const selectPatchRegionLeadLoading = state => state.lead.patchRegionLeadLoading;

export const selectPatchRegionLeadError = state => state.lead.patchRegionLeadError;

export const selectNewCountryLead = state => state.lead.newCountryLead;

export const selectPatchCountryLeadLoading = state => state.lead.patchCountryLeadLoading;

export const selectPatchCountryLeadError = state => state.lead.patchCountryLeadError;

export const selectSelectedExternalLeadsCheckedCheckbox = state => state.lead.selectedExternalLeadsCheckedCheckbox;

export const selectLeadDetailById = state => state.lead.leadDetailById;

