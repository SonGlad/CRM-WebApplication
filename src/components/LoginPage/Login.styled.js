import styled from "styled-components";
import error from '../../images/svg-icons/error.svg';
import correct from '../../images/svg-icons/correct.svg';
import eye from '../../images/svg-icons/eye.svg';
import eye_off from '../../images/svg-icons/eye-off.svg';


export const StyledLogin = styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and (min-width: 1440px) {
        align-content: flex-end;
        flex-wrap: wrap;
        padding-right: 9.375rem;
    }

    .TitleContainer{
        @media only screen and (min-width: 1440px) {
           max-width: 37.5rem;
        } 
    }

    .singup-title{
        font-size: 2.125rem;
        font-weight: 600;
        line-height: 2.5rem;
        text-align: center;

        @media only screen and (min-width: 834px) {
            font-size: 2.25rem;
            line-height: 2.875rem;
        }

        @media only screen and (min-width: 1440px) {
            font-size: 2.5rem;
            line-height: 3.125rem;
        }
    }

    .title-text{
        color: ${props => props.theme.color.primary_grey};
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        margin-top: 1.25rem;
        text-align: center;
        margin-bottom: 1.25rem;

        @media only screen and (min-width: 834px) {
            font-size: 1.375rem;
            line-height: 2rem;
        }
        @media only screen and (min-width: 1440px) {
            font-size: 1.75rem;
            line-height: 2.5rem;
        }
    }

    .register-form{
        width: 100%;
        max-width: 31.25rem;
        border-radius: 1.25rem;
        background-color: rgba(255, 255, 255, 0);
        backdrop-filter: blur(5px); 
        box-shadow: 0px 0px 5px 5px rgba(255,255,255,0.5);
        margin-bottom: 3.75rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1.25rem;

        @media screen and (min-width: 834px){
            max-width: 37.5rem;
            padding: 1.875rem;
        }
        @media screen and (min-width: 1440px){
            max-width: 37.5rem;
            padding: 2.5rem;
        }
    }


    .DivInput {
        position: relative;
    }

    input {
        position: relative;
        width: 100%;
        padding: 0.5rem 0.625rem;
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
    }

    .ErrorInput {
        border: 1px solid ${p => p.theme.color.error_color};
    }

    .SuccessInput {
        border: 1px solid ${p => p.theme.color.success_color};
    }

    .ImgError {
        position: absolute;
        right: 0.625rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background-image: url(${error});
    }

    .ImgCorrect {
        position: absolute;
        right: 0.625rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background-image: url(${correct});
    }

    .ErrorText {
        position: absolute;
        margin-top: 0.25rem;
        margin-left: 0.625rem;
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
        margin-left: 0.625rem;
        color: ${p => p.theme.color.success_color};
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 0.875rem;

        @media only screen and (min-width: 1440px) {
            max-width: 12.5rem;
        }
    }

    .DivInput:hover .ShowPassword,
    .DivInput:hover .HidePassword {
        display: block;
    }

    .DivInput:hover input[name='password'] {
        border: 1px solid ${props => props.theme.color.primary_green_lite};
    }

    .DivInput[id='password']:hover .ImgError,
    .DivInput[id='password']:hover .ImgCorrect,
    .DivInput[id='password']:hover .ErrorText,
    .DivInput[id='password']:hover .SuccessText {
        display: none;
    }

    .ShowPassword {
        display: none;
        position: absolute;
        right: 0.625rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background-image: url(${eye_off});
    }

    .HidePassword {
        display: none;
        position: absolute;
        right: 0.625rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background-image: url(${eye});
    }

    input::placeholder {
        color: ${props => props.theme.color.primary_grey};
    }

    .ButtonNext {
        margin-top: 0.5rem;
        border-radius: 0.75rem;
        color: ${props => props.theme.color.primary_black_2};
        background: ${props => props.theme.color.primary_green_lite};
        padding: 0.5rem 0.625rem;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        cursor: pointer;
        transition: color ${p => p.theme.transition.main_transition};

        &:active,
        &:hover {
            color: ${props => props.theme.color.primary_grey};
        }

        &:disabled {
            color: ${(props) => props.theme.color.primary_grey};
            pointer-events: none;
        }
    }

    .DivContainerSingIn {
        margin-top: 3rem;

        @media only screen and (min-width: 834px) {
            display: flex;
            align-items: baseline;
            gap: 1rem;
        }
    }

    .SingInText {
        color: ${props => props.theme.color.primary_grey};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;

        @media only screen and (min-width: 834px) {
            font-size: 1.375rem;
            line-height: 2rem;
        }
        @media only screen and (min-width: 1440px) {
            font-size: 1.75rem;
            line-height: 2.5rem;
        }
    }

    .LinkToSingIn {
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 1rem;
        transition: color ${p => p.theme.transition.main_transition};

        &:active,
        &:hover {
            color: ${props => props.theme.color.primary_green_lite};
        }

        @media only screen and (min-width: 834px) {
            font-size: 1.375rem;
            line-height: 2rem;
        }
        @media only screen and (min-width: 1440px) {
            font-size: 1.75rem;
            line-height: 2.5rem;
        }
    }
`