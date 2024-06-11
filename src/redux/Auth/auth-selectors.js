export const selectUserName = state => state.auth.user.name;

export const selectUserEmail= state => state.auth.user.email;

export const selectUserPassword = state => state.auth.user.password;

export const selectUserRole = state => state.auth.user.role;

export const selectUserBranch = state => state.auth.user.branch;

export const selectUserAvatarURL = state => state.auth.avatarURL;

export const selectLoggedUser = state => state.auth.isLoggedIn;

export const selectLoading = state => state.auth.isLoading;

export const selectRefreshing = state => state.auth.isRefreshing;

export const selectSettingsUpdate = state => state.auth.isSettingsUpdated;

export const selectUserLocation = state => state.auth.currentLocation;

export const selectAuthError = state => state.auth.error;