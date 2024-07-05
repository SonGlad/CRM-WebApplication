export const selectOffice = state => state.user.officeList;

export const selectRole = state => state.user.roleList;

export const selectActiveOffice = state => state.user.officeState;

export const selectAllUsers = state => state.user.users;

export const selectUserLoading = state => state.user.isUserLoading;

export const selectUserError = state => state.user.isUserError;

export const selectUserId = state => state.user.user.id;

export const selectUserName = state => state.user.user.name;

export const selectUserEmail = state => state.user.user.email;

export const selectUserRole = state => state.user.user.role;

export const selectUserBranch = state => state.user.user.branch;

export const selectUserCreatedDate = state => state.user.user.created;

export const selectUserCreatedByName = state => state.user.user.createdBy.userName;

export const selectUserCreatedByRole = state => state.user.user.createdBy.userRole;

export const selectUserCreatedByBranch = state => state.user.user.createdBy.userBranch;

export const selectUserSelfCreatedLeads = state => state.user.user.leads.selfCreated;

export const selectUserAssignedLeads = state => state.user.user.leads.assigned;

export const selectUserMessage = state => state.user.isMessage;

export const selectVerificationResponse = state => state.user.isVerificationRespose;









