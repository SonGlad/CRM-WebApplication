export const selectActiveOffice = state => state.lead.officeState;

export const selectLeadsLoader = state => state.lead.isLeadLoading;

export const selectLeadsError = state => state.lead.isLeadError;