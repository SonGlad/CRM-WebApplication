import styled from "styled-components";


export const StyledOfficeLeads = styled.div`
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.75rem;
    background-color: ${p => p.theme.color.background};
    box-shadow: 4px 0px 14px 5px rgba(227, 255, 168, 0.2);
    padding: 0.75rem;


    .wraper{
        width: 100%;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.75rem;
        height: 90.5dvh;

        @media screen and (min-width: 834px) {
            height: 87.5dvh;
            display: flex;
            flex-direction: column;
        }
    }

    .content-container{
        display: flex;
        flex-direction: column;
        height: 100%;
        flex-grow: 1;
    }
`