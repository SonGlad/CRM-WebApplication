import { useSelector } from "react-redux";
import {
    selectSettingsModal,
    selectNewUserModal,
    selectNewLeadModal,
    selectLoading,
    selectNewUserSuccess,
    selectNewLeadSuccess,
} from "../redux/Modal/modal-selectors.js";


export const useModal = () => {
    const isSettingsModal = useSelector(selectSettingsModal);
    const isNewUserModal = useSelector(selectNewUserModal);
    const isNewLeadModal = useSelector(selectNewLeadModal);
    const isLoading = useSelector(selectLoading);
    const isNewUserSuccess = useSelector(selectNewUserSuccess);
    const isNewLeadSuccess = useSelector(selectNewLeadSuccess);


    return {
        isSettingsModal,
        isNewUserModal,
        isNewLeadModal,
        isLoading,
        isNewUserSuccess,
        isNewLeadSuccess,
    }
};