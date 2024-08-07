import { PaginationStyled } from "./Pagination.styled";
import { useLead } from "../../hooks/useLead";


export const Pagination = () => {
    const { totalPages } = useLead();
    console.log(totalPages);
    


    return(
        <PaginationStyled>
            <h1>ITS ME PAGINATION</h1>
        </PaginationStyled>
    );
};