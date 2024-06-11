import { useSelector } from 'react-redux';
import {
    selectUserName,
    selectUserEmail,
    selectUserPassword,
    selectUserRole,
    selectUserBranch, 
    selectUserAvatarURL,
    selectLoggedUser,
    selectLoading,
    selectRefreshing,
    selectSettingsUpdate,
    selectUserLocation,
    selectAuthError,
} from "../redux/Auth/auth-selectors";


export const useAuth = () => {
    const isLoadingAuth = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const isRefreshing = useSelector(selectRefreshing);
    const isSettingsUpdated = useSelector(selectSettingsUpdate);
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPassword = useSelector(selectUserPassword);
    const userRole = useSelector(selectUserRole);
    const userBranch = useSelector(selectUserBranch );
    const userAvatarURL = useSelector(selectUserAvatarURL);
    const userLocation = useSelector(selectUserLocation);
    const authError = useSelector(selectAuthError); 


    return {
        isLoadingAuth,
        isLoggedIn,
        isRefreshing,
        isSettingsUpdated,
        userName,
        userEmail,
        userPassword,
        userRole,
        userBranch,
        userAvatarURL,
        userLocation,
        authError,
    };
};