import {ReactComponent as ErrorIcon} from "../../../images/svg-icons/error-logo.svg";


export const ErrorResponse = ({userError, isResponse}) => {
    

    return(
        <div>
            <div className="content">
                <ErrorIcon className="modal-icon" width={24} height={24}/>
                <p className="contact-modal-text error">Oops... Something went wrong.</p>
            </div>
            {isResponse === "isResetPassword" && (
                <p className="content-text">User password reset failed!</p>
            )}
            <p className="content-text">The following error occurred:</p>
            <p className="content-text">{userError}</p>
        </div>      
    )
};