import { StyledConfirmDeleteModal } from "./ConfirmDeleteModal.styled";
import { ReactComponent as CloseIcon } from "../../../images/svg-icons/close.svg";
import { useModal } from "../../../hooks/useModal";
import { useUser } from "../../../hooks/useUser";
import { useAuth} from "../../../hooks/useAuth";
import { closeModaConfirm } from "../../../redux/Modal/modal-slice";
import { resetUsersSelectedCheckbox } from "../../../redux/User/user-slice";
import { resetExternalLeadsSelectedCheckbox, resetOfficeLeadsSelectedCheckbox } from "../../../redux/Lead/lead-slice";
import { deleteUser } from "../../../redux/User/user-operation";
import { deleteLead } from "../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";



export const ConfirmDeleteModal = ({handleClickClose}) => {
    const dispatch = useDispatch();
    const { dataForDeleteId } = useModal();
    const { userOffice } = useUser();
    const { isAdmin } = useAuth();


    const ConfirmToDelete = () => {
        let dataToDelete;
        if (dataForDeleteId.component === 'Users') {
            dataToDelete = dataForDeleteId.idToDelete.map(id => ({id, branch: userOffice}));
        }
        if (dataForDeleteId.component === 'ExternalLeads' ||
            dataForDeleteId.component === 'Leads') {
            dataToDelete = dataForDeleteId.idToDelete.map(id => ({id}));
        }

        if(isAdmin && dataForDeleteId.component === 'Users'){
            dataToDelete.forEach((id) => {
                dispatch(deleteUser({
                    userId: id.id,
                    branch: userOffice,
                }));
                dispatch(closeModaConfirm());
            });
        }

        if(isAdmin && (dataForDeleteId.component === 'ExternalLeads' || dataForDeleteId.component === 'Leads')){
            dataToDelete.forEach((id) => {
                dispatch(deleteLead(id.id));
                dispatch(closeModaConfirm());
            });
        }
    };


    const textForModal = () => {
        if(dataForDeleteId.component === 'Users'){
            return 'Delete Users';
        };
        if(dataForDeleteId.component === 'ExternalLeads'){
            return 'Delete External Leads';
        };
        if(dataForDeleteId.component === 'Leads'){
            if(isAdmin){
                return 'Delete Office Leads';
            } else {
                return 'Delete Lead';
            }
        };
    };


    const amountToDelete = () => {
        let text;
        if(dataForDeleteId.component === 'Users'){
            if (isAdmin){
                if(dataForDeleteId.idToDelete.length === 1){
                    text = 'selected user?'
                } else {
                    text = `all ${dataForDeleteId.idToDelete.length} selected users?`
                }
            }
        }
        if(dataForDeleteId.component === 'ExternalLeads'){
            if (isAdmin) {
                if(dataForDeleteId.idToDelete.length === 1){
                    text = 'selected External Lead?'
                } else {
                    text = `all ${dataForDeleteId.idToDelete.length} selected External Leads?`
                }
            }
        }
        if(dataForDeleteId.component === 'Leads'){
            if (isAdmin) {
                if(dataForDeleteId.idToDelete.length === 1){
                    text = 'selected Office Lead?'
                } else {
                    text = `all ${dataForDeleteId.idToDelete.length} selected Office Leads?`
                }
            }
        }
        return text;
    };


    const closeConfirmModal = () => {
        if(dataForDeleteId.component === 'Users'){
            dispatch(resetUsersSelectedCheckbox());
        }
        if(dataForDeleteId.component === 'ExternalLeads'){
            dispatch(resetExternalLeadsSelectedCheckbox());
        }
        if(dataForDeleteId.component === 'Leads'){
            dispatch(resetOfficeLeadsSelectedCheckbox());
        }
        handleClickClose();
    };


    return(
        <StyledConfirmDeleteModal $component={dataForDeleteId.component}>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">{textForModal()}</h1>
            <h2 className="form-title2">Are you sure you want to delete {amountToDelete()}</h2>
            {dataForDeleteId.component === 'ExternalLeads' && (
                <div className="warning-cont">
                    <p className="warning-title">WARNING</p>
                    <p className="warning-text">If any of the selected external leads were assigned to 
                        any office, deleting these leads will also remove the leads connected to them 
                        in the corresponding office, including the entire history of the connected leads.
                    </p>
                </div>
            )}
            <div className="button-block">
                <button className="submit-button" type="button" onClick={ConfirmToDelete}>Confirm</button>
                <button className="reset-button" type="button" onClick={closeConfirmModal}>Cancel</button>
            </div>
        </StyledConfirmDeleteModal>
    );
};