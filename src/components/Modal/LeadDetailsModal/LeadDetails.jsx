import { LeadDetailsStyled } from "./LeadDetails.styled";
import { ReactComponent as CloseIcon } from "../../../images/svg-icons/close.svg";
import { useLead } from "../../../hooks/useLead";
import { useAuth } from "../../../hooks/useAuth";
import { DataLoading } from "../../CustomLoaders/CustomLoaders";
import { ExternalLeadComponent } from "./ExernalLeadComponent/ExternalLead";
import { OfficeLeadComponent } from "./OfficeLeadComponent/OfficeLeadComponent";
import { ConfirmDeleteLead } from "./ConfirmDeleteLead";
import { useState } from "react";



export const LeadDetails = ({handleClickClose}) => {
    const { leadDetailById, isLeadLoading, leadOffice, leadDetailByIdLocation } = useLead();
    const { isAdmin } = useAuth();
    const [isDeleteComponent, setDeleteComponent] = useState(false);
        

    const formatLeadOffice = () => {
        return leadOffice.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };


    const formTitleText = () => {
        if (isAdmin && !leadOffice) {
            return 'Extrenal Lead Details'
        } else if(isAdmin && leadOffice){
            if(leadDetailById){
                return (
                    <>
                        {formatLeadOffice()} Lead <span>ID: {leadDetailById.clientId}</span> Details
                    </>
                )
            }
        } else {
            if (leadDetailById) {
                return (
                    <>
                        Lead <span>ID: {leadDetailById.clientId}</span> Details
                    </> 
                )
            }
        }
    };


    const setDeleteComponentTrue = () => {
        setDeleteComponent(true);
    };
    const setDeleteComponentFalse = () => {
        setDeleteComponent(false);
    };

    
    const selectComponent = () => {
        switch(leadDetailByIdLocation){
            case "External":
                return <ExternalLeadComponent 
                    leadDetailById={leadDetailById}
                    leadDetailByIdLocation={leadDetailByIdLocation}
                    setDeleteComponentTrue={setDeleteComponentTrue}
                    />
            case "Office":
                return <OfficeLeadComponent 
                    leadDetailById={leadDetailById}
                    leadDetailByIdLocation={leadDetailByIdLocation}
                    setDeleteComponentTrue={setDeleteComponentTrue}
                    />
            default:
                return <div>Error: Invalid lead type</div>;
        }
    };
    

    
    return(
        <LeadDetailsStyled 
            $leadDetailByIdLocation={leadDetailByIdLocation}
            $isDeleteComponent={isDeleteComponent}
        >
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">{formTitleText()}</h1>
            {isLeadLoading ? (
                <DataLoading/>
            ) : (
                !isDeleteComponent ? (
                    selectComponent()
                ) : (
                    <ConfirmDeleteLead
                        setDeleteComponentFalse={setDeleteComponentFalse}
                        leadDetailById={leadDetailById}
                        leadDetailByIdLocation={leadDetailByIdLocation}
                    />
                )
            )}
        </LeadDetailsStyled>
    );
};