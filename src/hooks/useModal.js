import { useSelector } from "react-redux";
import {
    selectSettingsModal,
    selectNewUserModal,
    selectNewLeadModal,
    selectLoading,
    selectIsSuccess,
    selectUserDetail,
    selectLeadDetail,
    selectConfirmModal,
    selectDataForDeleteId,
} from "../redux/Modal/modal-selectors.js";


export const useModal = () => {
    const isSettingsModal = useSelector(selectSettingsModal);
    const isNewUserModal = useSelector(selectNewUserModal);
    const isNewLeadModal = useSelector(selectNewLeadModal);
    const isLoading = useSelector(selectLoading);
    const isSuccess = useSelector(selectIsSuccess);
    const isUserDetails = useSelector(selectUserDetail);
    const isLeadDetails = useSelector(selectLeadDetail);
    const isConfirmModal = useSelector(selectConfirmModal);
    const dataForDeleteId = useSelector(selectDataForDeleteId);


    return {
        isSettingsModal,
        isNewUserModal,
        isNewLeadModal,
        isLoading,
        isSuccess,
        isUserDetails,
        isLeadDetails,
        isConfirmModal,
        dataForDeleteId,
    }
};