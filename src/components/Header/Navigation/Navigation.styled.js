import styled from "styled-components";


export const StyledNavigation = styled.div`

    .header-logo-img{
        width: 5.375rem;
        height: 2.25rem;

        @media screen and (min-width: 834px) {
            width: 6.8rem;
            height: 2.875rem;
        }

        @media screen and (min-width: 1440px) {
            width: 7.375rem;
            height: 3.125rem;
        }
    }

    .pointer-events{
        pointer-events: none;
    }
`