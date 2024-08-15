import { LeadDetailsStyled } from "./LeadDetails.styled";
import { ReactComponent as CloseIcon } from "../../../images/svg-icons/close.svg";
import { useLead } from "../../../hooks/useLead";
import { useModal } from "../../../hooks/useModal";
import { useAuth } from "../../../hooks/useAuth";
import { DataLoading } from "../../CustomLoaders/CustomLoaders";
import { ExternalLeadComponent } from "./ExernalLeadComponent/ExternalLead";



export const LeadDetails = ({handleClickClose}) => {
    const { leadDetailById, isLeadLoading, leadOffice } = useLead();
    const { isSuccess } = useModal();
    const { isAdmin } = useAuth();
    console.log("Lead Details:", leadDetailById);
    console.log("Is Success", isSuccess);
    console.log("Is Lead Loading", isLeadLoading);

    
    const formatLeadOffice = () => {
        return leadOffice.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };


    const formTitleText = () => {
        let text;
        if (isAdmin && !leadOffice) {
            text = 'Extrenal Lead Details'
        } else if(isAdmin && leadOffice){
            text = `${formatLeadOffice()} Lead Details`;
        } else {
            text = 'Lead Details';
        }
        return text;
    };  
    
    
    

    return(
        <LeadDetailsStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">{formTitleText}</h1>
            {isLeadLoading ? (
                <DataLoading/>
            ) : (
                <ExternalLeadComponent/>
            )}
        </LeadDetailsStyled>
    );
};