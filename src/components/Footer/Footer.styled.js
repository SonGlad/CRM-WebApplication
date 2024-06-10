import styled from "styled-components";


export const StyledFooter = styled.footer`
    padding: 1.25rem 0.625rem;
    margin-top: -6.625rem;
    

    @media screen and (min-width: 834px){
        padding: 1.375rem 1.5625rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.875rem;
    }
    @media screen and (min-width: 1440px) {
        padding: 1.25rem 2.1875rem 1.25rem 2.1875rem;
    }

    .footer-left-cont,
    .footer-right-cont,
    .footer-center-cont{
        max-width: 30%;
    }

    .footer-left-cont{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 0.625rem;
    }

    .right-text-cont{
        & p:first-of-type {
            margin-bottom: 0.625rem;
        }
    }


    .footer-center-cont{
        display: flex;
        align-items: center;
        
        & span{
            font-weight: 600;
        }
        
        @media screen and (min-width: 1440px){
            margin-bottom: 0;
            margin-left: auto;
            margin-right: auto;
        }
    }


    .cont-for-foo-pic{
        width: 3.125rem;
        height: 3.125rem;
        margin-left: 5px;
        transition: scale ${p => p.theme.transition.main_transition};
    }

    .footer-img{
        width: 6.25rem;
        height: auto;
    }


    .cont-for-foo-pic{
        width: 3.125rem;
        height: 3.125rem;
        margin-left: 5px;
        transition: scale ${p => p.theme.transition.main_transition};
    }

    .footer-img{
        width: 6.25rem;
        height: auto;
    }


    .footer-right-cont{
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }

    .footer-link-cont{
        display: flex;
        align-items: center;
        flex-direction: column;

        & ul:first-of-type {
            margin-bottom: 0.625rem;
        }
    }


    .footer-social-list{
        display: flex;
        align-items: center;
        gap: 0.625rem;
    }

    .footer-social-link{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.625rem;
        height: 1.625rem;

        border-radius: 50%;
        box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.12),
        0px 0px 5px 5px rgba(0, 0, 0, 0.12) inset;
        background-color: ${p => p.theme.color.primary_white};
        fill: ${p => p.theme.color.primary_black};
        transition: background-color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};
        
        &:hover,
        &:focus{
            background-color: ${p => p.theme.color.primary_black};
            fill: ${p => p.theme.color.primary_white};
            box-shadow: 0px 0px 5px 5px rgba(204, 57, 0, 0.12),
            0px 0px 5px 5px rgba(0, 0, 0, 0.12) inset;
        }
    } 
`