export const selectActiveOffice = state => state.lead.officeState;

export const selectLeadsLoader = state => state.lead.isLeadLoading;

export const selectLeadsError = state => state.lead.isLeadError;

export const selectLeadResponce = state => state.lead.isNewLeadDataResponce;

export const selectLeads = state => state.lead.leads;

export const selectNewLead = state => state.lead.newLead;

export const selectSelectedExternalLeadsCheckedCheckbox = state => state.lead.selectedExternalLeadsCheckedCheckbox;