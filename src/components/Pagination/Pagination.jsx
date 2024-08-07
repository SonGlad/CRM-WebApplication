import { PaginationStyled } from "./Pagination.styled";
import { useLead } from "../../hooks/useLead";


export const Pagination = () => {
    const { totalPages } = useLead();
    const amount = Number(totalPages);
    console.log(amount);
    const number = 10;
    const elements = Array.from({ length: number }, (_, index) => index + 1);
    
       

    return(
        <PaginationStyled>
            <div className="pagination-block">
                <div className="button-block">
                    <button type="button" className="paginaton-button">
                        Begin
                    </button>
                    <button type="button" className="paginaton-button">
                        Previos
                    </button>
                </div>
                <div>
                <div className="content-block">
                    <ul className="content-list">
                        {elements.map((element, index) => (
                            <li className="content-item" key={index}>
                                <button type="button">{element}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                <div className="button-block">
                    <button type="button" className="paginaton-button">
                        Next
                    </button>
                    <button type="button" className="paginaton-button">
                        End
                    </button>
                </div>
            </div>
        </PaginationStyled>
    );
};