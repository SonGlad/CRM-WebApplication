import styled from "styled-components";


export const StyledAsidePanel = styled.aside`
    background-image: linear-gradient(90deg, #7e7e7e, #b5b5b547);
    box-shadow: 0px 0px 14px 5px rgba(227, 255, 168, 0.2);
    max-width: 12.5rem;
    min-width: 12.5rem;
    flex-grow: 1;
    border-radius: 0.75rem;
    padding: 0.75rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;

    .side-panel-cont{
        height: 90.5dvh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.75rem;

        @media screen and (min-width: 834px) {
            height: 87.5dvh;
        }
    }

    .side-panel-list{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .delete-list{
        margin-top: auto;
    }
`