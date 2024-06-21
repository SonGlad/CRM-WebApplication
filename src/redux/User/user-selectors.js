export const selectOffice = state => state.user.officeList;

export const selectRole = state => state.user.roleList;

export const selectActiveOffice = state => state.user.officeState;

export const selectUserLoading = state => state.user.isUserLoading;

export const selectUserError = state => state.user.isUserError;