import { useSelector } from 'react-redux';
import {
    selectUserName,
    selectUserRole,
    selectUserBranch,
    selectUserEmail, 
    selectUserAvatarURL,
    selectLoggedUser,
    selectLoading,
    selectRefreshing,
    selectInitial,
    selectSettingsUpdate,
    selectUserLocation,
    selectAuthError,
    selectNewUserName,
    selectNewUserEmail,
    selectNewUserPassword,
    selectNewUserRole,
    selectNewUserBranch,
    selectAdmin,
    selectManager,
    selectRetention,
    selectConversion,
    selectRetentionManager,
    selectConversionManager,
    selectNewUserResponceData,
    selectIsInitialized,
} from "../redux/Auth/auth-selectors";


export const useAuth = () => {
    const isLoadingAuth = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const isRefreshing = useSelector(selectRefreshing);
    const isInitial = useSelector(selectInitial);
    const isSettingsUpdated = useSelector(selectSettingsUpdate);
    const userName = useSelector(selectUserName);
    const userRole = useSelector(selectUserRole);
    const userBranch = useSelector(selectUserBranch);
    const userEmail = useSelector(selectUserEmail);
    const userAvatarURL = useSelector(selectUserAvatarURL);
    const userLocation = useSelector(selectUserLocation);
    const authError = useSelector(selectAuthError);
    const authNewUserName = useSelector(selectNewUserName);
    const authNewUserEmail = useSelector(selectNewUserEmail);
    const authNewUserPassword = useSelector(selectNewUserPassword);
    const authNewUserRole = useSelector(selectNewUserRole);
    const authNewUserBranch = useSelector(selectNewUserBranch);
    const isAdmin = useSelector(selectAdmin);
    const isManager =  useSelector(selectManager);
    const isConversion = useSelector(selectConversion);
    const isRetention = useSelector(selectRetention);
    const isConversionManager = useSelector(selectConversionManager);
    const isRetentionManager = useSelector(selectRetentionManager);
    const isNewUserResponceData = useSelector(selectNewUserResponceData);
    const isInitialized = useSelector(selectIsInitialized);


    return {
        isLoadingAuth,
        isLoggedIn,
        isRefreshing,
        isInitial,
        isSettingsUpdated,
        userName,
        userRole,
        userBranch,
        userEmail,
        userAvatarURL,
        userLocation,
        authError,
        authNewUserName,
        authNewUserEmail,
        authNewUserPassword,
        authNewUserRole,
        authNewUserBranch,
        isAdmin,
        isManager,
        isConversion,
        isRetention,
        isConversionManager,
        isRetentionManager,
        isNewUserResponceData,
        isInitialized,
    };
};