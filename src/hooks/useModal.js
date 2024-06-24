import { useSelector } from "react-redux";
import {
    selectSettingsModal,
    selectNewUserModal,
    selectNewLeadModal,
    selectLoading,
    selectNewUserSuccess,
} from "../redux/Modal/modal-selectors.js";


export const useModal = () => {
    const isSettingsModal = useSelector(selectSettingsModal);
    const isNewUserModal = useSelector(selectNewUserModal);
    const isNewLeadModal = useSelector(selectNewLeadModal);
    const isLoading = useSelector(selectLoading);
    const isNewUserSuccess = useSelector(selectNewUserSuccess);


    return {
        isSettingsModal,
        isNewUserModal,
        isNewLeadModal,
        isLoading,
        isNewUserSuccess,
    }
};