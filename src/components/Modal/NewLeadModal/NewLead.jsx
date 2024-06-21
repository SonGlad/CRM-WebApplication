import { NewLeadStyled } from "./NewLead.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";


export const NewLead = ({handleClickClose}) => {

    return (
        <NewLeadStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Create New Lead</h1>
        </NewLeadStyled>
    );
};