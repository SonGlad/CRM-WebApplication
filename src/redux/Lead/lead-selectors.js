export const selectActiveOffice = state => state.lead.officeState;

export const selectLeadsLoader = state => state.lead.isLeadLoading;

export const selectLeadsError = state => state.lead.isLeadError;

export const selectLeadResponce = state => state.lead.isNewLeadDataResponce;

export const selectLeads = state => state.lead.leadsData.leads;

export const selectTotalPages = state => state.lead.leadsData.totalPages;

export const selectTotalLeads = state => state.lead.leadsData.totalLeads;

export const selectLeadsAmountPerPage = state => state.lead.leadsAmountPerPage

export const selectNewLead = state => state.lead.newLead;

export const selectStatus = state => state.lead.status;

export const selectStatusLoading = state => state.lead.isStatusLoading;

export const selectStatusError = state => state.lead.isStatusError;

export const selectTimeZone = state => state.lead.timeZone;

export const selectTimeZoneLoading = state => state.lead.isTimeZoneLoading;

export const selectTimeZoneError = state => state.lead.isTimeZoneLoading;

export const selectLeadDetailById = state => state.lead.leadDetailById;

export const selectSelectedExternalLeadsCheckedCheckbox = state => state.lead.selectedExternalLeadsCheckedCheckbox;

export const selectSelectedAssignLeadsCheckedCheckbox = state => state.lead.selectedAssignLeadsCheckedCheckbox;

export const selectLeadDetailByIdLocation = state => state.lead.leadDetailByIdLocation;

export const selectIsSuccess = state => state.lead.isSuccess;

export const selectAllComments = state => state.lead.allComments;

export const selectIsAllCommentsLoading = state => state.lead.isAllCommentsLoading;

export const selectIsAllCommentsError = state => state.lead.isAllCommentsError;




