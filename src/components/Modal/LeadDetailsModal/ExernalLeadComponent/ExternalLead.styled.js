import styled from "styled-components";
import error from '../../../../images/svg-icons/error.svg';
import correct from '../../../../images/svg-icons/correct.svg';


export const ExternalLeadStyled = styled.div`
    .lead-form{
        width: 100%;
        padding: 1.25rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .info-cont{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 48%;
    }


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

`