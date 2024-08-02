import { StyledUserInformation } from "./UserDetail.styled";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';


export const UserInformation = ({
    userName,
    userEmail,
    userRole,
    userBranch,
    userCreatedDate,
    userCreatorName,
    userCreatorRole,
    userCreatorBranch,
    isAdmin,
    isManager,
    userAssignedLeads,
    userSelfCreateLeads,
    resendUserVerifyEmail,
    resetPasswordForUser,
    getAssignedLeads,
    getSelfCreatedLeads,
}) => {


    const formatBranchName = (userBranch) => {
        return userBranch.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };
    const formatCreatorBranchName = (userCreatorBranch) => {
        return userCreatorBranch.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };


    const formatDateTime = (dateString, timeZone = 'Europe/Kiev') => {
        const date = new Date(dateString);
        const zonedDate = toZonedTime(date, timeZone);
    
        const formattedDate = format(zonedDate, 'yyyy-MM-dd', { timeZone });
        const formattedTime = format(zonedDate, 'HH:mm', { timeZone });
    
        return `${formattedDate} ${formattedTime}`;
    };



    return(
        <StyledUserInformation>
            <div className="content-block">
                <div className="group-block">
                    <h2>User Information:</h2>
                    <p><span>Name: </span>{userName}</p>
                    <p><span>Email: </span>{userEmail}</p>
                    <p><span>Role: </span>{userRole}</p>
                    <p><span>Branch: </span>{formatBranchName(userBranch)}</p>
                    <p><span>Crated: </span>{formatDateTime(userCreatedDate)}</p>
                </div>
                <div className="group-block">
                    <h2>User Creator Information:</h2>
                    <p><span>Creator Name: </span>{userCreatorName}</p>
                    <p><span>Creator Role: </span>{userCreatorRole}</p>
                    <p><span>Creator Branch: </span>{formatCreatorBranchName(userCreatorBranch)}</p>
                </div>
                {(isAdmin || isManager) && (
                    <div className="group-block">
                        <h2>User Management:</h2>
                        <div className="button-block">
                            <span>1</span>
                            <button type="button" onClick={resendUserVerifyEmail}>Resend Verification Email</button>
                            <span>1</span>
                            <button type="button" onClick={resetPasswordForUser}>Reset User Password</button>
                        </div>
                    </div>
                )}
                <div className="group-block">
                    <h2>User Leads Information:</h2>
                    <div className="leads-block top">
                        <p><span>Total Assigned Leads: </span>{userAssignedLeads}</p>
                        <button type="button" 
                            onClick={getAssignedLeads}
                            disabled={!userAssignedLeads || userAssignedLeads === 0}
                        >
                            Click for Details
                        </button>
                    </div>
                    <div className="leads-block">
                        <p><span>Total Self-Created Leads: </span>{userSelfCreateLeads}</p>
                        <button type="button"
                            onClick={getSelfCreatedLeads}
                            disabled={!userSelfCreateLeads || userSelfCreateLeads === 0}
                        >
                            Click for Details
                        </button>
                    </div>
                </div>
            </div>
        </StyledUserInformation>
    );
};