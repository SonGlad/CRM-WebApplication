import { styled } from "styled-components";
import BackGroundWelcome from "../../images/images/welcome.jpg"
import BackGroundLogin from "../../images/images/login.jpg";
import BackGroundRegister from "../../images/images/register.jpg"


export const SectionStyle = styled.section`

`

export const WelcomeSectionStyled = styled.section`
    background-image: linear-gradient(rgba(46, 47, 66, 0.5), 
        rgba(46, 47, 66, 0.5)), 
        url(${BackGroundWelcome});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100dvh;
    width: 100%;
    margin-top: -3.5rem;

    @media screen and (min-width: 834px){
        margin-top: -4.85rem;
    }
    @media screen and (min-width: 1440px){
        margin-top: -5.1rem;
    }
`

export const RegisterSectionStyled = styled.section`
    background-image: linear-gradient(rgba(46, 47, 66, 0.7), 
        rgba(46, 47, 66, 0.7)), 
        url(${BackGroundRegister});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100dvh;
    width: 100%;
    margin-top: -3.5rem;

    @media screen and (min-width: 834px){
        margin-top: -4.85rem;
    }
    @media screen and (min-width: 1440px){
        margin-top: -5.1rem;
    }
`

export const LoginSectionStyled = styled.section`
    background-image: linear-gradient(rgba(46, 47, 66, 0.7), 
        rgba(46, 47, 66, 0.7)), 
        url(${BackGroundLogin});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100dvh;
    width: 100%;
    margin-top: -3.5rem;

    @media screen and (min-width: 834px){
        margin-top: -4.85rem;
    }
    @media screen and (min-width: 1440px){
        margin-top: -5.1rem;
    }
`