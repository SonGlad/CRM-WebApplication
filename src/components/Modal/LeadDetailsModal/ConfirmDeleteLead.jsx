import { ConfirmDeleteLeadStyled } from "./ConfirmDeleteLead.styled";
import { deleteLead } from "../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";
import { closeModaLeadDetail } from "../../../redux/Modal/modal-slice";



export const ConfirmDeleteLead = ({setDeleteComponentFalse, leadDetailById, leadDetailByIdLocation}) => {
    const dispatch = useDispatch();


    const deleteSelectedLeadLead = () => {
        dispatch(deleteLead(leadDetailById._id));
        dispatch(closeModaLeadDetail());
    }


    return (
        <ConfirmDeleteLeadStyled>
            <h2 className="form-title2">Are you sure you want to delete current Lead?</h2>
            {leadDetailByIdLocation === 'External' && (
                <div className="warning-cont">
                    <p className="warning-title">WARNING</p>
                    <p className="warning-text">If this lead was assigned to any office, 
                        deleting of it will also remove the lead connected to it in the 
                        corresponding office, including the entire history of the connected lead.
                    </p>
                </div>
            )}
            <div className="button-block">
                <button className="submit-button" type="button" onClick={deleteSelectedLeadLead}>Confirm</button>
                <button className="reset-button" type="button" onClick={setDeleteComponentFalse}>Cancel</button>
            </div>
        </ConfirmDeleteLeadStyled>
    )
};