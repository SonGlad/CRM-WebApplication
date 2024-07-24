import { useSelector } from "react-redux";
import {
    selectSettingsModal,
    selectNewUserModal,
    selectNewLeadModal,
    selectLoading,
    selectIsSuccess,
    selectUserDetail,
    selectConfirmModal,
    selectUsersForDeleteId,
} from "../redux/Modal/modal-selectors.js";


export const useModal = () => {
    const isSettingsModal = useSelector(selectSettingsModal);
    const isNewUserModal = useSelector(selectNewUserModal);
    const isNewLeadModal = useSelector(selectNewLeadModal);
    const isLoading = useSelector(selectLoading);
    const isSuccess = useSelector(selectIsSuccess);
    const isUserDetails = useSelector(selectUserDetail);
    const isConfirmModal = useSelector(selectConfirmModal);
    const usersForDeleteId = useSelector(selectUsersForDeleteId);


    return {
        isSettingsModal,
        isNewUserModal,
        isNewLeadModal,
        isLoading,
        isSuccess,
        isUserDetails,
        isConfirmModal,
        usersForDeleteId,
    }
};