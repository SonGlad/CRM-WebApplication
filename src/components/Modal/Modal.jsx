import { ModalStyled } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useEffect, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { 
    closeModalSettings,
    closeModalNewUser,
    closeModalNewLead,
    closeModaUserDetail,
    closeModaConfirm,
    closeModaLeadDetail, 
} from "../../redux/Modal/modal-slice";
import { setLeadDetailsModalFalse, resetAllComments } from "../../redux/Lead/lead-slice";
import { resetUserState, resetUserLeadsComponent } from "../../redux/User/user-slice";
import { updatingNewUserResponceData } from "../../redux/Auth/auth-slice";
import { useModal } from "../../hooks/useModal";
import { useUser } from "../../hooks/useUser";
import { SettingsModal } from "./SettingsModal/SettingsModal";
import { NewUser } from "./NewUserModal/NewUser";
import { NewLead } from "./NewLeadModal/NewLead";
import { UserDetails } from "./UserDetailsModal/UserDetail";
import { LeadDetails } from "./LeadDetailsModal/LeadDetails";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal/ConfirmDeleteModal";
import { RefreshLoading } from "../../components/CustomLoaders/CustomLoaders";


const modalRoot = document.querySelector("#modal-root");


export const Modal = ({userLocation}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        isSettingsModal,
        isNewUserModal,
        isNewLeadModal,
        isUserDetails,
        isLeadDetails,
        isLoading,
        isConfirmModal, 
    } = useModal();
    const { userLeadsComponent } = useUser();


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
            if(userLeadsComponent){
                dispatch(resetUserLeadsComponent())
            };
            if(userLocation === "/leads"){
                navigate('/users');
            };
            dispatch(resetUserState());
            dispatch(closeModaUserDetail());
        }
        if (isConfirmModal){
            dispatch(closeModaConfirm());
        }
        if (isLeadDetails){
            dispatch(closeModaLeadDetail());
            dispatch(setLeadDetailsModalFalse());
            dispatch(resetAllComments());
        }
    },[
        dispatch, 
        isConfirmModal, 
        isLeadDetails, 
        isNewLeadModal, 
        isNewUserModal, 
        isSettingsModal, 
        isUserDetails, 
        navigate, 
        userLeadsComponent, 
        userLocation
    ]);


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
                (isSettingsModal || isNewUserModal || isNewLeadModal || isUserDetails || isConfirmModal || isLeadDetails) && (
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
                        {isLeadDetails && (
                            <LeadDetails handleClickClose={handleClickClose}/>
                        )}
                    </ModalStyled>
                )
            )}
        </>,
        modalRoot
    )
};
