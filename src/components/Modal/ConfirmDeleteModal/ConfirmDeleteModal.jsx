import { StyledConfirmDeleteModal } from "./ConfirmDeleteModal.styled";
import { ReactComponent as CloseIcon } from "../../../images/svg-icons/close.svg";
import { useModal } from "../../../hooks/useModal";
import { useUser } from "../../../hooks/useUser";
import { useAuth} from "../../../hooks/useAuth";
import { closeModaConfirm } from "../../../redux/Modal/modal-slice";
import { resetSelectedCheckbox } from "../../../redux/User/user-slice";
import { deleteUser } from "../../../redux/User/user-operation";
import { useDispatch } from "react-redux";


export const ConfirmDeleteModal = ({handleClickClose}) => {
    const dispatch = useDispatch();
    const { usersForDeleteId } = useModal();
    const { userOffice } = useUser();
    const { isAdmin } = useAuth();


    const ConfirmToDelete = () => {
        const usersToDelete = usersForDeleteId.map(id => ({id, branch: userOffice}));
        if(isAdmin){
            usersToDelete.forEach((id) => {
                dispatch(deleteUser({
                    userId: id.id,
                    branch: userOffice,
                }));
                dispatch(closeModaConfirm());
            });
        }
    };


    const amountOfUsers = () => {
        let text;
        if(usersForDeleteId.length === 1){
            text = 'selected user?'
        } else {
            text = `all ${usersForDeleteId.length} selected users?`
        }
        return text;
    };


    const closeConfirmModal = () => {
        dispatch(resetSelectedCheckbox());
        handleClickClose();
    };



    return(
        <StyledConfirmDeleteModal>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Delete Users</h1>
            <h2 className="form-title2">Are you sure you want to delete {amountOfUsers()}</h2>
            <div className="button-block">
                <button className="submit-button" type="button" onClick={ConfirmToDelete}>Confirm</button>
                <button className="reset-button" type="button" onClick={closeConfirmModal}>Cancel</button>
            </div>
        </StyledConfirmDeleteModal>
    );
};