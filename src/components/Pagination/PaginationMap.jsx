import { PaginationMapStyled } from "./Pagination.styled";
import { forwardRef } from "react";


export const PaginationMap = forwardRef(({
    firstVisible,
    clickOnFirstVisible,
    listRef,
    elements,
    toggleButtonBackground,
    setButtonActive,
    lastVisible,
    clickOnLastVisible
}, ref) => {


    return(
        <PaginationMapStyled>
            {firstVisible && (
                <button type="button" 
                    className='button-background'
                    onClick={clickOnFirstVisible}
                ><p>...</p>
                </button>
            )}
            <ul className="content-list" ref={listRef}>
                {elements.map((element, index) => (
                    <li className="content-item" key={index}>
                        <button type="button" 
                            className={`button-background ${toggleButtonBackground(index + 1)}`}
                            onClick={() => setButtonActive(index + 1)}
                        ><p>{element}</p>
                        </button>
                    </li>
                ))}
            </ul>
            {lastVisible && (
                <button type="button" 
                    className='button-background'
                    onClick={clickOnLastVisible}
                ><p>...</p>
                </button>
            )}
        </PaginationMapStyled>
    )
});