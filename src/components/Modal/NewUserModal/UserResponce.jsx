import { StyledUserResponce } from "./NewUser.styled";
import {ReactComponent as SuccsessIcon} from "../../../images/svg-icons/ok.svg";
import {ReactComponent as ErrorIcon} from "../../../images/svg-icons/error-logo.svg";
import { ShowRules } from "../../../utils/showRules";


export const UserResponce = ({
    isSuccess, 
    authNewUserName, 
    authNewUserPassword, 
    authNewUserRole,
    isAdmin,
    authNewUserBranch,
    handleCopy,
    isCopied,
    authError,
    forContinueButton,
    forDoneButton,
}) => {
    const { formatOfficeName } = ShowRules();


    return(
        <StyledUserResponce>
            {isSuccess ? (
                <div>
                    <div className="content">
                        <SuccsessIcon className="modal-icon" width={24} height={24}/>
                        <p className="contact-modal-text sucsess">New User Has been sucsesfully created!</p>
                    </div>
                        <p className="modal-text-notification">Please ask the administrator to verify the new 
                            user via the administrator's email for the successful further use of the account you have created.
                        </p>
                    <div className="content-cont">
                        <p className="content-text-item"><span>Name:</span> {authNewUserName}</p>
                        <p className="content-text-item"><span>Email:</span> {authNewUserName}</p>
                        <p className="content-text-item"><span>Password:</span> {authNewUserPassword}</p>
                        <p className="content-text-item"><span>Role:</span> {authNewUserRole}</p>
                        {isAdmin && (
                            <p className="content-text-item"><span>Branch:</span> {formatOfficeName(authNewUserBranch)}</p>
                        )}
                        <button className="password-button" type='button' onClick={handleCopy}>
                            {isCopied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="content">
                        <ErrorIcon className="modal-icon" width={24} height={24}/>
                        <p className="contact-modal-text error">Oops... Something went wrong.</p>
                    </div>
                    <p className="content-text">New User was not created because of:</p>
                    <p className="content-text">{authError}</p>
                </div>
            )}
            <div className="button-block">
                <button type="button" className="submit-button" 
                    onClick={forContinueButton}>Continue
                </button>
                <button type="button" className="reset-button" 
                    onClick={forDoneButton}>Done
                </button>
            </div>
        </StyledUserResponce>
    );
};