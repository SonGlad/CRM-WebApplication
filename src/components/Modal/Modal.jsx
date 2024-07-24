import { ModalStyled } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useEffect, useCallback} from "react";
import { 
    closeModalSettings,
    closeModalNewUser,
    closeModalNewLead,
    closeModaUserDetail,
    closeModaConfirm, 
} from "../../redux/Modal/modal-slice";
import { resetUserState } from "../../redux/User/user-slice";
import { updatingNewUserResponceData } from "../../redux/Auth/auth-slice";
import { useModal } from "../../hooks/useModal";
import { SettingsModal } from "./SettingsModal/SettingsModal";
import { NewUser } from "./NewUserModal/NewUser";
import { NewLead } from "./NewLeadModal/NewLead";
import { UserDetails } from "./UserDetailsModal/UserDetail";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal/ConfirmDeleteModal";
import { RefreshLoading } from "../../components/CustomLoaders/CustomLoaders";



const modalRoot = document.querySelector("#modal-root");


export const Modal = () => {
    const dispatch = useDispatch();
    const {
        isSettingsModal,
        isNewUserModal,
        isNewLeadModal,
        isUserDetails,
        isLoading,
        isConfirmModal, 
    } = useModal();


    const handleClickClose = useCallback(() => {
        if (isSettingsModal){
            dispatch(closeModalSettings());
        }
        if (isNewUserModal){
            dispatch(closeModalNewUser());
            dispatch(updatingNewUserResponceData());
        }
        if (isNewLeadModal){
            dispatch(closeModalNewLead());
        }
        if (isUserDetails){
            dispatch(resetUserState());
            dispatch(closeModaUserDetail());
        }
        if (isConfirmModal){
            dispatch(closeModaConfirm());
        }
    },[dispatch, isConfirmModal, isNewLeadModal, isNewUserModal, isSettingsModal, isUserDetails]);


    const handleBackdropClick = useCallback(event => {
        if (event.target === event.currentTarget) {
            handleClickClose();
        }
    },[handleClickClose]);


    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            handleClickClose();
        }
    },[handleClickClose]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleBackdropClick);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleBackdropClick);
        };
    },[handleBackdropClick, handleKeyDown]);


    
    return createPortal(
        <>
            {isLoading ? (
                <RefreshLoading/>
            ) : (
                (isSettingsModal || isNewUserModal || isNewLeadModal || isUserDetails || isConfirmModal) && (
                    <ModalStyled onClick={handleBackdropClick}>
                        {isSettingsModal && (
                            <SettingsModal handleClickClose={handleClickClose}/>
                        )}
                        {isNewUserModal && (
                            <NewUser handleClickClose={handleClickClose}/>
                        )}
                        {isNewLeadModal && (
                            <NewLead handleClickClose={handleClickClose}/>
                        )}
                        {isUserDetails && (
                            <UserDetails handleClickClose={handleClickClose}/>
                        )}
                        {isConfirmModal && (
                            <ConfirmDeleteModal handleClickClose={handleClickClose}/>
                        )}
                    </ModalStyled>
                )
            )}
        </>,
        modalRoot
    )
};
