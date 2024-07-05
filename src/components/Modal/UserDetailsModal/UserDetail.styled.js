import styled from "styled-components";


export const UserDetailsStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: ${props => props.$isVerificationResponse ? '31.25rem' : '48rem'};


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

    .response-button-block {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 2rem;
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








export const StyledUserInformation = styled.div`
    
    .group-block{
        width: 50%;
        margin-bottom: 1.5rem;
        padding: 0.75rem;

        & h2{
            text-align: center;
            margin-bottom: 1rem;
        }
    }

    .content-block{
        display: flex;
        flex-wrap: wrap;

        & div:nth-last-child(-n+2){
            margin-bottom: 0;
        }

        & span {
            font-size: 1.15rem;
            color: ${p => p.theme.color.primary_green_lite}
        }

        & p {
            margin-bottom: 0.5rem;
        }

        & p:last-child{
            margin-bottom: 0;
        }

        
        & .leads-block p{
            margin-bottom: 1rem;
        }

        & .button-block span{
            margin-bottom: 1rem;
            opacity: 0;
        }
    }

    .button-block{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        & button{
            margin-bottom: 1rem;
        }

        & button:last-child{
            margin-bottom: 0;
        }

        & button{
            color: ${(props) => props.theme.color.primary_black};
            background-color: ${(p) => p.theme.color.primary_green_lite};
            width: 60%;
            font-family: Poppins;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.25rem;
            border: 1px solid ${(p) => p.theme.color.primary_green_lite};
            border-radius: 0.75rem;
            padding: 0.5rem;
            cursor: pointer;
            transition: color ${p => p.theme.transition.main_transition};

            &:hover {
                color: ${(props) => props.theme.color.primary_grey};
            }
        }
    }

    .content-block .group-block .top{
        margin-bottom: 1rem;
    }

    .content-block .group-block .leads-block{

        & button{
            background-color: ${(props) => props.theme.color.primary_black_2};
            color: ${(props) => props.theme.color.primary_grey};
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.25rem;
            width: 60%;
            padding: 0.5rem;
            border: 1px solid transparent;
            border-radius: 0.75rem;
            cursor: pointer;
            transition: color ${p => p.theme.transition.main_transition};

            &:hover {
                color: ${(props) => props.theme.color.primary_green_lite};
            }
        }
    }
`







export const StyledUserVerification = styled.div`
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