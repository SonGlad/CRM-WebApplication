import styled from "styled-components";
import error from '../../../images/svg-icons/error.svg';
import correct from '../../../images/svg-icons/correct.svg';


export const NewUserStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 34rem;
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

    .password-button{
        margin-top: -30px;
        margin-left: auto;
        color: ${(props) => props.theme.color.primary_black};
        background-color: ${(p) => p.theme.color.primary_green_lite};
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        width: 40%;
        border: 1px solid ${(p) => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.25rem;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_grey};
        }
    }

    .button-block {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 3.25rem;
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







export const StyledUserForm = styled.form`
    width: 100%;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .input-label{
        position: relative;

        input{
            position: relative;
            width: 100%;
            padding: 0.5rem 0.625rem;
            padding-right: 1.75rem;
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



    .select-block{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .select-cont{
            width: 48%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
    }

    .office-block,
    .role-block{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0.625rem;
        border-radius: 0.75rem;
        border: 1px solid ${props => props.theme.color.primary_green_lite};
        background: ${props => props.theme.color.primary_black_2};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        color: ${props => props.theme.color.primary_white};
        cursor: pointer;

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    .arrow-svg {
        width: 1rem;
        height: 1rem;
        stroke:  ${(props) => props.theme.color.primary_green_lite};
        rotate: 0deg;
        transition: rotate ${p => p.theme.transition.main_transition};
    }

    .arrow-svg-active{
        rotate: 180deg;
    }

    .office-list,
    .role-list{
        position: absolute;
        cursor: default;
        z-index: 1;
        left: 0;
        top: 110%;
        width: 100%;
        background-color: ${p => p.theme.color.background};
        border-radius: 0.5rem;
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
        padding-left: 1rem;
        overflow-y: auto;
        height: 0;
        opacity: 0;
        visibility: hidden;
        transition: height ${p => p.theme.transition.main_transition},
                    opacity ${p => p.theme.transition.main_transition},
                    visibility ${p => p.theme.transition.main_transition};
                    border-top: 0.25rem solid ${p => p.theme.color.primary_black_2};
        border-bottom: 0.25rem solid ${p => p.theme.color.primary_black_2};
        border-right: 0.25rem solid ${p => p.theme.color.primary_black_2};
        border-left: 0.25rem solid ${p => p.theme.color.primary_black_2};

        &::-webkit-scrollbar {
            width: 0.5rem;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: ${p => p.theme.color.primary_grey};
            border-radius: 5px;
        }


        .role-item,
        .office-item{
            margin-bottom: 0.5rem;
            cursor: pointer;
            transition: color ${p => p.theme.transition.main_transition};

            &:hover{
                color: ${p => p.theme.color.primary_green_lite};
            }
        }

        &.role-item:last-child,
        .office-item:last-child{
            margin-bottom: 0;
        }
    }

    .office-list-open,
    .role-list-open{
        height: 4.5rem;
        visibility: visible;
        opacity: 1;
    }
`













export const StyledUserResponce = styled.div`
    .content-cont{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        & span{
            font-weight: 800;
            color: ${(props) => props.theme.color.primary_green_lite};
        }

        & button{
            margin-left: auto;
            margin-top: -1rem;
        }
    }

    .content-text-item{
        margin-bottom: 1rem;
    }

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 834px){
            margin-bottom: 1.5rem;
        }
        @media screen and (min-width: 1440px){
            margin-bottom: 3rem;
        }
    }

    .modal-icon{
        width: 1.5rem;
        height: 1.5rem;
    }

    .contact-modal-text{
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        line-height: calc(24 / 16);
        letter-spacing: 0.04em;
        color: ${p => p.theme.color.close_black};

        @media screen and (min-width: 834px){
            font-weight: 600;
            font-size: 1.5rem;
            line-height: calc(24 / 16);
        }
        
        @media screen and (min-width: 14400px){
            font-weight: 700;
            font-size: 1.75rem;
            line-height: calc(24 / 16);
        }
    }
    .modal-text-notification{
        margin-bottom: 1.5rem;
        text-align: center;
        font-weight: 500;
        line-height: calc(24 / 16);
        letter-spacing: 0.04em;
    }
    .sucsess{
        color: ${p => p.theme.color.green2};
        text-shadow: 0px -1px 3px ${p => p.theme.color.primary_white};
    }
    .error{
        color: ${p => p.theme.color.red};
        text-shadow: 0px -1px 3px ${p => p.theme.color.primary_white};
    }

    .content-text{
        margin-bottom: 1rem;
        text-align: center;
    }

`