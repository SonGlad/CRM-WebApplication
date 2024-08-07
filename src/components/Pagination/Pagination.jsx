import { PaginationStyled } from "./Pagination.styled";
import { useLead } from "../../hooks/useLead";


export const Pagination = () => {
    const { totalPages } = useLead();
    const amount = Number(totalPages);
    console.log(amount);
    
    


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
                        <li className="content-item">
                            <button type="button">1</button>
                        </li>
                        <li className="content-item">
                            <button type="button">2</button>
                        </li>
                        <li className="content-item">
                            <button type="button">3</button>
                        </li>
                        <li className="content-item">
                            <button type="button">4</button>
                        </li>
                        <li className="content-item">
                            <button type="button">5</button>
                        </li>
                        <li className="content-item">
                            <button type="button">6</button>
                        </li>
                        <li className="content-item">
                            <button type="button">7</button>
                        </li>
                        <li className="content-item">
                            <button type="button">8</button>
                        </li>
                        <li className="content-item">
                            <button type="button">9</button>
                        </li>
                        <li className="content-item">
                            <button type="button">10</button>
                        </li>
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