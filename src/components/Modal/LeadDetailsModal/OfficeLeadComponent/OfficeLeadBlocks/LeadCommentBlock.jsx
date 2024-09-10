import { LeadCommentBlockStyled } from "./OfficeLeadBlocks.styled";


export const LeadCommentBlock = ({leadDetailById}) => {
    console.log(leadDetailById.latestComment);
    

    return(
        <LeadCommentBlockStyled>
            <p>LEAD Comment Block</p>
        </LeadCommentBlockStyled>
    );
};