import { StyledUserVerification } from "./UserDetail.styled";
import {ReactComponent as SuccsessIcon} from "../../../images/svg-icons/ok.svg";
import { useState, useEffect } from "react";
import { ErrorResponse } from "./UserErrorResponse";
import { ShowRules } from "../../../utils/showRules";


export const UserDetailModalResponse = ({
    isSuccess,
    verifyMessage,
    userError,
    forContinueButton,
    forDoneButton,
    isLeadsDetails,
    isResetPassword,
    isVerificationEmail,
    responseText,
    passwordText,
    password,
    isCopied,
    handleCopy,
    resetPasswordResponse,
}) => {
    const { formatOfficeName } = ShowRules();
    const [isResponse, setResponse] = useState('');
    const [branch, setBranch] = useState(null);


    useEffect(() => {
        if (isVerificationEmail) {
            setResponse('isVerificationEmail');
        } else if (isResetPassword) {
            setResponse('isResetPassword');
        } else if (isLeadsDetails) {
            setResponse('isLeadsDetails');
        }
    }, [isVerificationEmail, isResetPassword, isLeadsDetails]);



    useEffect(() => {
        if(resetPasswordResponse){
            const extractedBranch = resetPasswordResponse.branch;
            setBranch(extractedBranch);
        }
    },[resetPasswordResponse]);


    return (
        <StyledUserVerification>
            {isSuccess ? (
                <>
                    {isResponse === "isVerificationEmail" && (
                        <div>
                            <div className="content">
                                <SuccsessIcon className="modal-icon" width={24} height={24}/>
                                <p className="contact-modal-text sucsess">{verifyMessage}</p>
                            </div>
                            <p className="content-text">Please ask the administrator to verify the user 
                                via the administrator's email for the successful further use of the account.
                            </p>
                        </div>
                    )}
                    {isResponse === "isResetPassword" && (
                        <div>
                            <div className="content">
                                <SuccsessIcon className="modal-icon" width={24} height={24}/>
                                <p className="contact-modal-text sucsess">{responseText}</p>
                            </div>
                            <p className="reset-password-text">User Name: <span>{resetPasswordResponse.username}</span></p>
                            <p className="reset-password-text">User Email: <span>{resetPasswordResponse.email}</span></p>
                            <p className="reset-password-text">User Branch: <span>{formatOfficeName(branch)}</span></p>
                            <p className="reset-password-text">{passwordText} <span>{password}</span></p>
                            <div className="div-for-copy-btn">
                                <button className="password-button" type='button' onClick={handleCopy}>
                                    {isCopied ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </div>
                    )}
                    {isResponse === "isLeadsDetails" && (
                        <div>

                        </div>
                    )}
                </>
            ) : (
                <>
                    {isResponse === "isVerificationEmail" && (
                        <ErrorResponse
                            userError={userError}
                        />             
                    )}
                    {isResponse === "isResetPassword" && (
                        <ErrorResponse
                           userError={userError}
                           isResponse={isResponse}
                       />               
                    )}
                    {isResponse === "isLeadsDetails" && (
                        <ErrorResponse
                           userError={userError}
                       />
                    )}
                </>
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