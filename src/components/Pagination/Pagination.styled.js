import styled from "styled-components";


export const PaginationStyled = styled.div`
    margin-bottom: 1rem;
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    border-radius: 0.75rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .pagination-block{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .content-list{
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .button-block{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

`