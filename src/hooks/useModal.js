import { useSelector } from "react-redux";
import {
    selectSettingsModal,
    selectNewUserModal,
    selectNewLeadModal,
    selectLoading,
    selectNewUserSuccess,
    selectNewLeadSuccess,
    selectUserDetail,
} from "../redux/Modal/modal-selectors.js";


export const useModal = () => {
    const isSettingsModal = useSelector(selectSettingsModal);
    const isNewUserModal = useSelector(selectNewUserModal);
    const isNewLeadModal = useSelector(selectNewLeadModal);
    const isLoading = useSelector(selectLoading);
    const isNewUserSuccess = useSelector(selectNewUserSuccess);
    const isNewLeadSuccess = useSelector(selectNewLeadSuccess);
    const isUserDetails = useSelector(selectUserDetail);


    return {
        isSettingsModal,
        isNewUserModal,
        isNewLeadModal,
        isLoading,
        isNewUserSuccess,
        isNewLeadSuccess,
        isUserDetails,
    }
};