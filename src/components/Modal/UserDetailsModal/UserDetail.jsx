import { UserDetailsStyled } from "./UserDetail.styled";
import { ReactComponent as CloseIcon } from "../../../images/svg-icons/close.svg";
import { DataLoading } from "../../CustomLoaders/CustomLoaders";
import { useUser } from "../../../hooks/useUser";
import { useAuth } from "../../../hooks/useAuth";
import { useModal } from "../../../hooks/useModal";
import { resendVerifyEmail } from "../../../redux/User/user-operation";
import { useDispatch } from "react-redux";
import { updatingVerificationEmailResponse } from "../../../redux/User/user-slice";
import { UserInformation } from "./UserInformation";
import { UserVerificationResponse } from "./UserVerification";


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
        isVerificationResponse,
        isUserError,  
    } = useUser();
    const { isAdmin, isManager } = useAuth();
    const { isSuccess } = useModal();


    const resendUserVerifyEmail = () => {
        if (isAdmin){
            dispatch(resendVerifyEmail({
                userId: userId,
                branch: userBranch,
                email: userEmail,
            }))
        } else {
            dispatch(resendVerifyEmail({
                userId: userId,
                email: userEmail,
            }))
        }
    };


    const forDoneButton = () => {
        handleClickClose();
        dispatch(updatingVerificationEmailResponse());
    };


    const forContinueButton = () => {
        dispatch(updatingVerificationEmailResponse());
    };
 

    return (
        <UserDetailsStyled $isVerificationResponse={isVerificationResponse}>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">User Details</h1>
            {userLoading ? (
                <DataLoading/>
            ) : ( 
                !isVerificationResponse ? (
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
                    />
                ) : (
                    <UserVerificationResponse
                        isSuccess={isSuccess}
                        verifyMessage={verifyMessage}
                        isUserError={isUserError}
                        forContinueButton={forContinueButton}
                        forDoneButton={forDoneButton}
                    />
                )
            )}
        </UserDetailsStyled>
    );
};