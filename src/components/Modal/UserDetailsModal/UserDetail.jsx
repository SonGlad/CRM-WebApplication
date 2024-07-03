import { UserDetailsStyled } from "./UserDetail.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";


export const UserDetails = ({handleClickClose}) => {

    return (
        <UserDetailsStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">User Details</h1>
        </UserDetailsStyled>
    );
};