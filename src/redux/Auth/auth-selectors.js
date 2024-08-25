export const selectUserName = state => state.auth.user.name;

export const selectUserRole = state => state.auth.user.role;

export const selectUserBranch = state => state.auth.user.branch;

export const selectUserEmail = state => state.auth.user.email;

export const selectUserAvatarURL = state => state.auth.avatarURL;

export const selectLoggedUser = state => state.auth.isLoggedIn;

export const selectLoading = state => state.auth.isLoading;

export const selectRefreshing = state => state.auth.isRefreshing;

export const selectInitial = state => state.auth.isInitial;

export const selectSettingsUpdate = state => state.auth.isSettingsUpdated;

export const selectNewUserResponceData = state => state.auth.isNewUserDataResponce;

export const selectUserLocation = state => state.auth.currentLocation;

export const selectAuthError = state => state.auth.error;

export const selectNewUserName = state => state.auth.newUser.name;

export const selectNewUserEmail = state => state.auth.newUser.email;

export const selectNewUserPassword = state => state.auth.newUser.password;

export const selectNewUserRole = state => state.auth.newUser.role;

export const selectNewUserBranch = state => state.auth.newUser.branch;

export const selectAdmin = state => state.auth.isAdmin;

export const selectManager = state => state.auth.isManager;

export const selectRetention = state => state.auth.isRetention;

export const selectConversion = state => state.auth.isConversion;

export const selectRetentionManager = state => state.auth.isRetentionManager;

export const selectConversionManager = state => state.auth.isConversionManager;

export const selectIsInitialized = state => state.auth.isInitialized;


