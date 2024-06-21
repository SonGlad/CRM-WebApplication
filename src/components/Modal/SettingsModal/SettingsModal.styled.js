import styled from "styled-components";
import error from '../../../images/svg-icons/error.svg';
import correct from '../../../images/svg-icons/correct.svg';
import eye from '../../../images/svg-icons/eye.svg';
import eye_off from '../../../images/svg-icons/eye-off.svg';


export const SettingsModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 31.25rem;
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

    .settings-form{
        width: 100%;
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
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

        &[type="file"] {
            visibility: hidden;
            pointer-events: none;
            display: none;
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
    .DivInput:hover .HidePassword,
    .DivInput:hover .ShowPasswordNew,
    .DivInput:hover .HidePasswordNew {
        display: block;
    }


    .DivInput:hover input[name='currentPassword'],
    .DivInput:hover input[name='newPassword'] {
        border: 1px solid ${props => props.theme.color.primary_green_lite};
    }

    .DivInput[id='currentPassword']:hover .ImgError,
    .DivInput[id='currentPassword']:hover .ImgCorrect,
    .DivInput[id='currentPassword']:hover .ErrorText,
    .DivInput[id='currentPassword']:hover .SuccessText,
    .DivInput[id='newPassword']:hover .ImgError,
    .DivInput[id='newPassword']:hover .ImgCorrect,
    .DivInput[id='newPassword']:hover .ErrorText,
    .DivInput[id='newPassword']:hover .SuccessText {
        display: none;
    }

    .ShowPassword,
    .ShowPasswordNew {
        display: none;
        position: absolute;
        right: 0.625rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background-image: url(${eye_off});
    }

    .HidePassword,
    .HidePasswordNew {
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


    .FileContainer {
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 0.75rem;
    }

    .Thumb {
        height: 2.25rem;
        width: 2.25rem;
        border-radius: 50%;
        margin-right: 0.75rem;
        overflow: hidden;
    }

    .AvaImg {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .DownloadPhoto {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.25rem;
        display: flex;
        align-items: center;
        gap: 6px;

        & > .download-svg {
            width: 1rem;
            height: 1rem;
            stroke:  ${(props) => props.theme.color.primary_green_lite};
        }
    }

    .label-for-avatar{
        cursor: pointer;
        max-width: 13.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color ${p => p.theme.transition.main_transition},
                    stroke ${p => p.theme.transition.main_transition};
    }

    .label-for-avatar:hover .DownloadPhoto,
    .label-for-avatar:focus .DownloadPhoto{
        color: ${(props) => props.theme.color.primary_green_lite};
    }

    .label-for-avatar:hover .DownloadPhoto > .download-svg,
    .label-for-avatar:focus .DownloadPhoto > .download-svg {
        stroke: ${(props) => props.theme.color.primary_white};
    }


    .ButtonContainer {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
        margin-top: 1.25rem;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 834px) {
            flex-direction: row;
        }
    }

    .SaveButton {
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

    .CancelButton {
        background-color: ${(props) => props.theme.color.primary_black_2};
        color: ${(props) => props.theme.color.primary_grey};
        font-family: Poppins;
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