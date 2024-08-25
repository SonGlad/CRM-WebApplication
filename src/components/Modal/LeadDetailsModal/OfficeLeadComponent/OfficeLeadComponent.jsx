import { OfficeLeadComponentStyled } from "./OfficeLeadComponentStyled";
import { LeadBaseInfoBloc } from "./OfficeLeadBlocks/LeadBaseInfoBlock";
import { LeadAssignReAssignOwnerBlock } from "./OfficeLeadBlocks/LeadAssignReassignOwnerBlock";
import { LeadChangeInfoBlock } from "./OfficeLeadBlocks/LeadChangeInfoBlock";
import { LeadKYCBlock } from "./OfficeLeadBlocks/LeadKYCBlock";
import { LeadCreateUpdateCallBlock } from "./OfficeLeadBlocks/LeadCreateUpdateCallBlock";
import { LeadCommentBlock } from "./OfficeLeadBlocks/LeadCommentBlock";



export const OfficeLeadComponent = ({leadDetailById, leadDetailByIdLocation, setDeleteComponentTrue}) => {


    return(
        <OfficeLeadComponentStyled>
            <LeadBaseInfoBloc
                leadDetailById={leadDetailById}
                leadDetailByIdLocation={leadDetailByIdLocation}
            />
            <LeadAssignReAssignOwnerBlock
                leadDetailById={leadDetailById}
            />
            <LeadChangeInfoBlock/>
            <LeadKYCBlock/>
            <LeadCreateUpdateCallBlock/>
            <LeadCommentBlock/>
            <button type="button" onClick={setDeleteComponentTrue}>Delete</button>
        </OfficeLeadComponentStyled>
    )
};