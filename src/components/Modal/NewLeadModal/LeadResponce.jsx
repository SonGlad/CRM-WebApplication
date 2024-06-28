import { StyledLeadResponce } from "./NewLead.styled";
import {ReactComponent as SuccsessIcon} from "../../../images/svg-icons/ok.svg";
import {ReactComponent as ErrorIcon} from "../../../images/svg-icons/error-logo.svg";


export const LeadResponce = ({
    isNewLeadSuccess,
    isAdmin,
    newLead,
    isLeadsError,
    forContinueButton,
    forDoneButton,
}) => {


    const formatOfficeNameResponce = (responceBranch) => {
        return responceBranch.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    }; 


    return(
        <StyledLeadResponce>
            {isNewLeadSuccess ? (
                <div>
                    <div className="content">
                        <SuccsessIcon className="modal-icon" width={24} height={24}/>
                        <p className="contact-modal-text sucsess">New lead has been sucsesfully created!</p>
                    </div>
                    <div className="content-cont">
                        <p className="content-text-item"><span>Name:</span> {newLead.name}</p>
                        <p className="content-text-item"><span>Last Name:</span> {newLead.lastName}</p>
                        <p className="content-text-item"><span>Email:</span> {newLead.email}</p>
                        <p className="content-text-item"><span>Phone:</span> {newLead.phone}</p>
                        {isAdmin && newLead.branch && (
                            <p className="content-text-item"><span>Branch:</span> {formatOfficeNameResponce(newLead.branch)}</p>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="content">
                        <ErrorIcon className="modal-icon" width={24} height={24}/>
                        <p className="contact-modal-text error">Oops... Something went wrong.</p>
                    </div>
                    <p className="content-text">New Lead was not created because of:</p>
                    <p className="content-text">{isLeadsError}</p>
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
        </StyledLeadResponce>
    )
};