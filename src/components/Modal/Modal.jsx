import { ModalStyled } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useEffect, useCallback} from "react";
import { 
    closeModalSettings,
    closeModalNewUser,
    closeModalNewLead, 
} from "../../redux/Modal/modal-slice";
import { updatingNewUserResponceData } from "../../redux/Auth/auth-slice";
import { useModal } from "../../hooks/useModal";
import { SettingsModal } from "./SettingsModal/SettingsModal";
import { NewUser } from "./NewUserModal/NewUser";
import { NewLead } from "./NewLeadModal/NewLead";
import { RefreshLoading } from "../../components/CustomLoaders/CustomLoaders";



const modalRoot = document.querySelector("#modal-root");


export const Modal = () => {
    const dispatch = useDispatch();
    const {
        isSettingsModal,
        isNewUserModal,
        isNewLeadModal,
        isLoading, 
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
    },[dispatch, isNewLeadModal, isNewUserModal, isSettingsModal]);


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
                (isSettingsModal || isNewUserModal || isNewLeadModal) && (
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
                    </ModalStyled>
                )
            )}
        </>,
        modalRoot
    )
};
