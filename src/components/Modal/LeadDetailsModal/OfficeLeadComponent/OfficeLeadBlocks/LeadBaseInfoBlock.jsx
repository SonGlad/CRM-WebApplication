import {LeadBaseInfoBlockStyled} from "./OfficeLeadBlocks.styled";
import { LeadNameForm } from "../../LeadNameForm";
import { useState, useEffect } from "react";
import { useAuth } from "../../../../../hooks/useAuth";



export const LeadBaseInfoBloc = ({leadDetailById, leadDetailByIdLocation}) => {
    const [isOwner, setIsOwner] = useState(false);
    const { userEmail } = useAuth();


    useEffect(() => {
        if(leadDetailById.owner){
            if (userEmail === leadDetailById.owner.email) {
                setIsOwner(true)
            } else {
                setIsOwner(false)
            }
        }
    },[leadDetailById.owner, userEmail]);
    

    return(
        <>
            {isOwner ? (
                <LeadNameForm 
                    leadDetailById={leadDetailById}
                    leadDetailByIdLocation={leadDetailByIdLocation}
                />
            ) : (
                <LeadBaseInfoBlockStyled>
                    <div className="label-cont">
                        <p className="label-name">Name</p>
                        <div className="data-cont-for-style">
                            <p className="data-text">{leadDetailById.name}</p>
                        </div>
                    </div>
                    <div className="label-cont">
                        <p className="label-name">Last Name</p>
                        <div className="data-cont-for-style">
                            <p className="data-text">{leadDetailById.lastName}</p>
                        </div>
                    </div>
                    <div className="label-cont">
                        <p className="label-name">Email</p>
                        <div className="data-cont-for-style">
                            <p className="data-text">{leadDetailById.email}</p>
                        </div>
                    </div>
                    <div className="label-cont">
                        <p className="label-name">Phone</p>
                        <div className="data-cont-for-style">
                            <p className="data-text">{leadDetailById.phone}</p>
                        </div>
                    </div>
                </LeadBaseInfoBlockStyled>
            )}
        </>
    );
};