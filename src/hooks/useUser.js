import { useSelector } from 'react-redux';
import {
    selectOffice,
    selectRole,
    selectActiveOffice,
    selectUserLoading,
    selectIsUserLeadsLoading, 
    selectUserError,
    selectAllUsers,
    selectUserId,
    selectUserName,
    selectUserEmail,
    selectUserRole,
    selectUserBranch,
    selectUserCreatedDate,
    selectUserCreatedByName,
    selectUserCreatedByRole,
    selectUserCreatedByBranch,
    selectUserSelfCreatedLeads,
    selectUserAssignedLeads,
    selectUserMessage,
    selectResponseForUserDetailsModal,
    selectVerificationEmail,
    selectResetPassword,
    selectLeadDetails,
    selectResetPasswordResponse,
    selectUsersCheckedCheckbox,
    selectFilteredUsers,
    selectAvailableUsersForAssign,
    selectUserLeads,
    selectUserLeadsCompnent,
    selectUserLeadsComponentData,
} from "../redux/User/user-selectors";


export const useUser = () => {
    const userSelectOffice = useSelector(selectOffice);
    const userSelectRole = useSelector(selectRole);
    const userLoading = useSelector(selectUserLoading);
    const isUserLeadsLoading = useSelector(selectIsUserLeadsLoading);
    const userError = useSelector(selectUserError);
    const userOffice = useSelector(selectActiveOffice);
    const allUsers = useSelector(selectAllUsers);
    const userId = useSelector(selectUserId);
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userRole = useSelector(selectUserRole);
    const userBranch = useSelector(selectUserBranch);
    const userCreatedDate = useSelector(selectUserCreatedDate);
    const userCreatorName = useSelector(selectUserCreatedByName);
    const userCreatorRole = useSelector(selectUserCreatedByRole);
    const userCreatorBranch = useSelector(selectUserCreatedByBranch);
    const userSelfCreateLeads = useSelector(selectUserSelfCreatedLeads);
    const userAssignedLeads = useSelector(selectUserAssignedLeads);
    const verifyMessage = useSelector(selectUserMessage);
    const isResposeForUserDetailsModal = useSelector(selectResponseForUserDetailsModal);
    const isVerificationEmail = useSelector(selectVerificationEmail);
    const isResetPassword = useSelector(selectResetPassword);
    const isLeadsDetails = useSelector(selectLeadDetails);
    const resetPasswordResponse = useSelector(selectResetPasswordResponse);
    const usersCheckedCheckbox = useSelector(selectUsersCheckedCheckbox);
    const filteredUsers = useSelector(selectFilteredUsers);
    const availableUsersForAssign = useSelector(selectAvailableUsersForAssign);
    const userLeads = useSelector(selectUserLeads);
    const userLeadsComponent = useSelector(selectUserLeadsCompnent);
    const userLeadsComponentData = useSelector(selectUserLeadsComponentData);


    return {
        userSelectOffice,
        userSelectRole,
        userLoading,
        isUserLeadsLoading,
        userError,
        userOffice,
        allUsers,
        userId,
        userName,
        userEmail,
        userRole,
        userBranch,
        userCreatedDate,
        userCreatorName,
        userCreatorRole,
        userCreatorBranch,
        userSelfCreateLeads,
        userAssignedLeads,
        verifyMessage,
        isResposeForUserDetailsModal,
        isVerificationEmail,
        isResetPassword,
        isLeadsDetails,
        resetPasswordResponse,
        usersCheckedCheckbox,
        filteredUsers,
        availableUsersForAssign,
        userLeads,
        userLeadsComponent,
        userLeadsComponentData,
    };
};