import styled from "styled-components";


export const StyledWelcome = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .welcome-title{
        margin-bottom: 3.75rem;
        font-size: 40px;
        line-height: 1.3;
        font-weight: 700;
        color: ${p => p.theme.color.primary_white};
    
        @media screen and (min-width: 834px) {
            font-size: 3.4375rem;
            line-height: 1.2;
            letter-spacing: 0.625rem;
        }

        @media screen and (min-width: 1440px) {
            font-weight: 700;
            font-size: 4.375rem;
        }
    }

    .welcome-navigation{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .welcome-nav-list{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3.75rem;
        flex-direction: column;

        @media screen and (min-width: 834px) {
            flex-direction: row;
            gap: 1.875rem;
        }
        @media screen and (min-width: 1440px) {
            gap: 3.75rem;
        }
    }

    .welcome-nav-item{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media screen and (min-width: 1440px) {
            width: 30%;
        }
    }

    .welcome-item-text{
        text-align: center;
        margin-bottom: 1.875rem;

        @media screen and (min-width: 1440px) {
            font-size: 1.5625rem;
            line-height: 1.5;
        }
    }

    .welcome-nav-link{
        display: flex;
        width: 8.875rem;
        padding: 0.5rem 0.625rem;
        border-radius: 0.75rem;
        background: ${p => p.theme.color.primary_green_lite};
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.4;
        justify-content: center;
        color: ${p => p.theme.color.primary_black};
        transition: all ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${props => props.theme.color.primary_grey};
        }

        &:focus {
            color: ${props => props.theme.color.primary_grey};
        }

        @media screen and (min-width: 834px) {
            width: 50%;
            font-size: 1.25rem;
        }

        @media screen and (min-width: 1440px) {
            font-size: 1.5625rem;
            line-height: 1.5;
        }
    }
`