import styled from "styled-components";


export const StyledAuthNav = styled.nav`
    display: flex;
    align-items: center;
    margin-left: auto;

    .link {
        text-decoration: none;
        font-weight: 400;
        color: ${p => p.theme.color.primary_white};
        font-size: 0.75rem;
        letter-spacing: 1px;
        transition: color ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 834px) {
            font-size: 1rem;
        }

        @media screen and (min-width: 1440px) {
            font-size: 1.125rem;
        }

        &:hover,
        &:focus {
            color: ${p => p.theme.color.primary_green_lite};
        }
    }

    .link.active {
        color: ${p => p.theme.color.primary_green_lite};
    }

    .header-span {
        text-decoration: none;
        font-weight: 400;
        color: ${p => p.theme.color.primary_white};
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-left: 0.3125rem;
        margin-right: 0.3125rem;

        @media screen and (min-width: 834px) {
            font-size: 1rem;
        }

        @media screen and (min-width: 1440px) {
            font-size: 1.125rem;
        }
    }

    .avatar-img{
        width: 1.625rem;
        margin-left: 0.375rem;

        @media screen and (min-width: 834px) {
            width: 1.758rem;
        }
    }
`