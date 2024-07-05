import { StyledUserVerification } from "./UserDetail.styled";
import {ReactComponent as SuccsessIcon} from "../../../images/svg-icons/ok.svg";
import {ReactComponent as ErrorIcon} from "../../../images/svg-icons/error-logo.svg";


export const UserVerificationResponse = ({
    isSuccess,
    verifyMessage,
    isUserError,
    forContinueButton,
    forDoneButton,
}) => {
    

    return (
        <StyledUserVerification>
            {isSuccess ? (
                <div>
                    <div className="content">
                        <SuccsessIcon className="modal-icon" width={24} height={24}/>
                        <p className="contact-modal-text sucsess">{verifyMessage}</p>
                    </div>
                    <p className="content-text">Please ask the administrator to verify the user 
                        via the administrator's email for the successful further use of the account.
                    </p>
                </div>
            ) : (
                <div>
                    <div className="content">
                        <ErrorIcon className="modal-icon" width={24} height={24}/>
                        <p className="contact-modal-text error">Oops... Something went wrong.</p>
                    </div>
                    <p className="content-text">The following error occurred:</p>
                    <p className="content-text">{isUserError}</p>
                </div>                 
            )}  
                <div className="response-button-block">
                    <button type="button" className="submit-button" 
                        onClick={forContinueButton}>Continue
                    </button>
                    <button type="button" className="reset-button" 
                        onClick={forDoneButton}>Done
                    </button>
                </div>
        </StyledUserVerification>
    );
};