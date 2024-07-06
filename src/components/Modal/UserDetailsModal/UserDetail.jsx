import { UserDetailsStyled } from "./UserDetail.styled";
import { ReactComponent as CloseIcon } from "../../../images/svg-icons/close.svg";
import { DataLoading } from "../../CustomLoaders/CustomLoaders";
import { useUser } from "../../../hooks/useUser";
import { useAuth } from "../../../hooks/useAuth";
import { useModal } from "../../../hooks/useModal";
import { resendVerifyEmail, resetUserPassword } from "../../../redux/User/user-operation";
import { useDispatch } from "react-redux";
import { updatingVerificationEmailResponse, updatingResetPasswordResponse } from "../../../redux/User/user-slice";
import { UserInformation } from "./UserInformation";
import { UserDetailModalResponse } from "./UserDetailModalResponse";
import { useEffect, useState } from "react";


export const UserDetails = ({handleClickClose}) => {
    const dispatch = useDispatch();
    const {
        userLoading,
        userId,
        userName,
        userEmail,
        userRole,
        userBranch,
        userCreatedDate,
        userCreatorName,
        userCreatorRole,
        userCreatorBranch,
        userSelfCreateLeads,
        userAssignedLeads,
        verifyMessage,
        isResposeForUserDetailsModal,
        userError,
        isLeadsDetails,
        isResetPassword,
        isVerificationEmail,
        resetPasswordResponse,  
    } = useUser();
    const { isAdmin, isManager } = useAuth();
    const { isSuccess } = useModal();
    const [isCopied, setIsCopied] = useState(false);
    const [password, setPassword] = useState('');
    const [responseText, setResponseText] = useState('');
    const [passwordText, setPasswordText] = useState('');


    const resendUserVerifyEmail = () => {
        if (isAdmin){
            dispatch(resendVerifyEmail({
                userId: userId,
                branch: userBranch,
                email: userEmail,
            }))
        }
        if(isManager){
            dispatch(resendVerifyEmail({
                userId: userId,
                email: userEmail,
            }))
        }
    };


    const resetPasswordForUser = () => {
        if (isAdmin){
            dispatch(resetUserPassword({
                userId: userId,
                branch: userBranch,
            }))
        } 
        if(isManager){
            dispatch(resetUserPassword({
                userId: userId,
            }))
        }
    };


    const forDoneButton = () => {
        if(isVerificationEmail){
            dispatch(updatingVerificationEmailResponse());
        }
        if(isResetPassword){
            dispatch(updatingResetPasswordResponse());
            setIsCopied(false);
        }
        handleClickClose();
    };


    const forContinueButton = () => {
        if(isVerificationEmail){
            dispatch(updatingVerificationEmailResponse());
        }
        if(isResetPassword){
            dispatch(updatingResetPasswordResponse());
            setIsCopied(false);
        }
    };


    useEffect(() => {
        if(resetPasswordResponse){
            const text = resetPasswordResponse.message;
            const [extractedResponseText, extractedPasswordText, extractedPassword] = text.match(/^(.*?\.)(.*?:)(.*)$/).slice(1);
            setResponseText(extractedResponseText.trim());
            setPasswordText(extractedPasswordText.trim());
            setPassword(extractedPassword.trim());
        }
    },[resetPasswordResponse])
    
    
    const handleCopy = () => {
        const userData = `
            Name: ${resetPasswordResponse.username}
            Email: ${resetPasswordResponse.email}
            Branch: ${resetPasswordResponse.branch}
            Password: ${password}
        `.trim();
        
        navigator.clipboard.writeText(userData).then(() => {
            setIsCopied(true);
        });
    };
    
    

    return (
        <UserDetailsStyled $isResposeForUserDetailsModal={isResposeForUserDetailsModal}>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">User Details</h1>
            {userLoading ? (
                <DataLoading/>
            ) : ( 
                !isResposeForUserDetailsModal ? (
                    <UserInformation
                        userName={userName}
                        userEmail={userEmail}
                        userRole={userRole}
                        userBranch={userBranch}
                        userCreatedDate={userCreatedDate}
                        userCreatorName={userCreatorName}
                        userCreatorRole={userCreatorRole}
                        userCreatorBranch={userCreatorBranch}
                        isAdmin={isAdmin}
                        isManager={isManager}
                        userAssignedLeads={userAssignedLeads}
                        userSelfCreateLeads={userSelfCreateLeads}
                        resendUserVerifyEmail={resendUserVerifyEmail}
                        resetPasswordForUser={resetPasswordForUser}
                    />
                ) : (
                    <UserDetailModalResponse
                        isSuccess={isSuccess}
                        verifyMessage={verifyMessage}
                        userError={userError}
                        isVerificationEmail={isVerificationEmail}
                        isResetPassword={isResetPassword}
                        isLeadsDetails={isLeadsDetails}
                        responseText={responseText}
                        passwordText={passwordText}
                        password={password}
                        resetPasswordResponse={resetPasswordResponse}
                        isCopied={isCopied}
                        forContinueButton={forContinueButton}
                        forDoneButton={forDoneButton}
                        handleCopy={handleCopy}
                    />
                )
            )}
        </UserDetailsStyled>
    );
};