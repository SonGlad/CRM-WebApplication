import styled from "styled-components";
import error from '../../../images/svg-icons/error.svg';
import correct from '../../../images/svg-icons/correct.svg';


export const LeadNameFormStyled = styled.form `
    width: ${props => props.$leadDetailByIdLocation === "External" ? '49%' : '32.5%'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;


    .input-label{
        position: relative;

        p{
            margin-bottom: 0.25rem;
        }

        input{
            position: relative;
            width: 100%;
            padding: 0.5rem 1.75rem;
            border-radius: 0.75rem;
            border: 1px solid ${props => props.theme.color.primary_green_lite};
            background: ${props => props.theme.color.primary_black_2};
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.25rem;
            color: ${props => props.theme.color.primary_white};

            &:focus {
                outline: none;
                box-shadow: none;
            }

            &::placeholder{
                color: ${props => props.theme.color.primary_grey}
            }
        }

        .ErrorInput {
            border: 1px solid ${p => p.theme.color.error_color};
        }
    
        .SuccessInput {
            border: 1px solid ${p => p.theme.color.success_color};
        }
    }

    .input-label:last-of-type {
        margin-bottom: 0.35rem;
    }

    .icon{
        position: absolute;
        top: 2rem;
        left: 7px;
        fill: ${p => p.theme.color.primary_green_lite};
        width: 1rem;
        height: 1rem;
    }

    .ImgError {
        position: absolute;
        right: 0.625rem;
        top: 68%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background-image: url(${error});
    }

    .ImgCorrect {
        position: absolute;
        right: 0.625rem;
        top: 68%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background-image: url(${correct});
    }


    .ErrorText {
        position: absolute;
        margin-top: 0.25rem;
        right: 0;
        color: ${p => p.theme.color.error_color};
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 0.875rem;

        @media only screen and (min-width: 1440px) {
            max-width: 12.5rem;
        }
    }

    .SuccessText {
        position: absolute;
        margin-top: 0.25rem;
        right: 0;
        color: ${p => p.theme.color.success_color};
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 0.875rem;

        @media only screen and (min-width: 1440px) {
            max-width: 12.5rem;
        }
    }

    .button-container {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;
        line-height: 1.25rem;
        font-size: 0.875rem;
    }

    .submit-btn{
        color: ${(props) => props.theme.color.primary_black};
        background-color: ${(p) => p.theme.color.primary_green_lite};
        width: 49%;
        border: 1px solid ${(p) => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.25rem;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_grey};
        }

        &:disabled {
            color: ${(props) => props.theme.color.primary_grey};
            pointer-events: none;
        }
    }

    .cancel-btn {
        background-color: ${(props) => props.theme.color.primary_black_2};
        color: ${(props) => props.theme.color.primary_grey};
        width: 49%;
        padding: 0.25rem 0.5rem;
        border: 1px solid transparent;
        border-radius: 0.75rem;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_green_lite};
        }
    }



    


    /* PHONE INPUT */

    
    .input-label .form-field-number{
        padding-left: 2.75rem;
    }

    .dropdown-cont{
        color: black;
        height: 100%;
        outline: none;
        border: none;
        border-radius: 0.75rem 0 0 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;


        &:hover,
        &:focus,
        &:active{
            background-color: transparent;
            border-radius: none;
        }
    }

    .react-tel-input .selected-flag:hover, 
    .react-tel-input .selected-flag:focus {
        background-color: transparent;
    }

    .react-tel-input .flag-dropdown.open {
        z-index: 2;
        background: transparent;
        border-radius: 0.75rem 0 0 0.75rem;
    }

    .react-tel-input .flag-dropdown.open .selected-flag {
        background-color: transparent;
        border-radius: 0.75rem 0 0 0.75rem;
    }

    .react-tel-input .selected-flag {
        border-radius: 0.75rem 0 0 0.75rem;
    }


    .react-tel-input .selected-flag .arrow {
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 4px solid ${p => p.theme.color.primary_green_lite};
    }

    .react-tel-input .selected-flag .arrow.up {
        border-top: none;
        border-bottom: 4px solid ${p => p.theme.color.primary_green_lite};
    }

    .react-tel-input .country-list {
        margin-top: 4px;
        padding-left: 6px;
        background-color: ${p => p.theme.color.primary_white};
        width: 240px;
        overflow-x: hidden;
        border-radius: 0.75rem;
        border-top: 5px solid ${p => p.theme.color.primary_white};
        border-bottom: 5px solid ${p => p.theme.color.primary_white};
        border-right: 1px solid ${p => p.theme.color.primary_grey};


        &::-webkit-scrollbar {
            width: 0.5rem;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: ${p => p.theme.color.primary_grey};
            border-radius: 5px;
        }
    }
`