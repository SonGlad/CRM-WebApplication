import styled from "styled-components";


export const StyledConfirmDeleteModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: ${props => props.component === 'ExternalLeads' ? '50rem' : '31.25rem'};
    height: auto;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2.5rem;
    border-radius: 0.75rem;
    background: ${(props) => props.theme.color.for_modal_color};
    position: relative;

    @media only screen and (min-width: 834px) {
        padding: 1.5rem;
    }


    .close-btn{
        position: absolute;
        z-index: 20;
        top: 0.625rem;
        right: 0.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        background-color: ${p => p.theme.color.primary_white};
        border-radius: 50%;
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: transform ${p => p.theme.transition.main_transition},
        box-shadow ${p => p.theme.transition.main_transition};

        &:hover, 
        &:focus{
            transform: rotate(90deg);
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 1440px){
            top: 1rem;
            right: 1rem;
        }
    }

    .close-icon{
        width: 0.75rem;
        height: 0.75rem;
        fill: ${p => p.theme.color.primary_black};
        transition: all ${p => p.theme.transition.main_transition};
    }

    .close-btn .close-icon:hover,
    .close-btn .close-icon:focus{
        fill: ${p => p.theme.color.secondary_color_grey_1};
    }

    .form-title{
        text-align: center;
        margin-top: 1rem;
        color: ${p => p.theme.color.primary_white};
        font-weight: 500;
        font-size: 1.875rem;
        line-height: 1.2;
        margin-bottom: 1.25rem;
    }

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