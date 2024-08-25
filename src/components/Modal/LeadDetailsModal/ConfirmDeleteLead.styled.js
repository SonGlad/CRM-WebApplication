import styled from "styled-components";


export const ConfirmDeleteLeadStyled = styled.div`
    .form-title2{
        text-align: center;
        line-height: 1.5;
    }

    .warning-cont{
        margin-top: 1.5rem;
    }

    .warning-title{
        font-weight: 700;
        font-size: 1.75rem;
        text-align: center;
        color: ${p => p.theme.color.error_color};
        margin-bottom: 1rem;
    }

    .warning-text{
        line-height: 1.5;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: justify;
    }

    .button-block {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1.5rem;
        align-items: center;
        justify-content: space-between;

        @media screen and (min-width: 834px) {
            flex-direction: row;
        }
    }

    .submit-button {
        color: ${(props) => props.theme.color.primary_black};
        background-color: ${(p) => p.theme.color.primary_green_lite};
        font-family: Poppins;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        width: 50%;
        border: 1px solid ${(p) => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_grey};
        }

        &:disabled {
            color: ${(props) => props.theme.color.primary_grey};
            pointer-events: none;
        }

        @media screen and (max-width: 834px) {
            max-width: 45%;
        }
    }

    .reset-button {
        background-color: ${(props) => props.theme.color.primary_black_2};
        color: ${(props) => props.theme.color.primary_grey};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        width: 50%;
        padding: 0.5rem 0.75rem;
        border: 1px solid transparent;
        border-radius: 0.75rem;
        cursor: pointer;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_green_lite};
        }

        @media screen and (min-width: 834px) {
            max-width: 45%;
        }
    } 
`