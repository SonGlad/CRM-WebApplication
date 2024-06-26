import styled from "styled-components";


export const StyledUserMenu = styled.div `
    color: ${p => p.theme.color.primary_white};
    font-size: 0.75rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-left: auto;


    @media screen and (min-width: 834px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 1440px) {
        font-size: 1.25rem;
    }


    .user-cont{
        color: ${p => p.theme.color.primary_white};
        display: flex;
        align-items: center;
    }

    .user-name-cont{
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: ${p => p.theme.color.primary_green_lite};

        span {
            display: flex;
            gap: 5px;
        }
 
        p {
            color: ${p => p.theme.color.primary_white};

            &::first-letter{
                text-transform: uppercase;
            }
        }
    }


    .user-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        padding: 0;
        margin-left: 0.625rem;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .for-user-avater {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0.25rem;

        @media screen and (min-width: 834px) {
            width: 2rem;
            height: 2rem;
        }
        @media screen and (min-width: 1440px) {
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    .user-avatar-img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .arrow-svg {
        width: 0.875rem;
        height: 0.875rem;
        stroke: ${props => props.theme.color.primary_green_lite};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    }

    .arrow-svg-close {
        transform: rotate(180deg);
    }

    .user-menu-btn:hover > .arrow-svg,
    .user-menu-btn:focus > .arrow-svg {
        stroke: ${props => props.theme.color.primary_white};
    }

    .user-info-cont{
        position: absolute;
        width: 9.875rem;
        top: 3.375rem;
        right: 0px;
        opacity: 0;
        visibility: hidden;
        height: 0;
        transform: scaleY(0);
        transition: opacity 0.5s ease,
            transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 0.5s ease;

        border-radius: 0.75rem;
        box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
        flex-direction: column;

        @media screen and (min-width: 834px) {
            top: 5rem;
        }

        &.show-info-container {
            opacity: 1;
            visibility: visible;
            transform: scaleY(1);
        }
    }

    .list-user-menu {
        display: flex;
        flex-direction: column;
        border-radius: 0.75rem;
        padding: 1.5rem;
        width: 100%;
        gap: 1.5rem;
        background-color: ${props => props.theme.color.background3};
        box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);

        .item-user-menu {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.4;
            transition: color 0.3s ease;
        }

        .setting-icon,
        .logout-icon {
            margin-right: 8px;
            stroke: ${props => props.theme.color.primary_white};
        }

        .button-setting,
        .button-link-logout {
            display: flex;
            align-items: center;
            border-color: transparent;
            cursor: pointer;
            background-color: transparent;
            padding: 0;
            color: ${props => props.theme.color.primary_white};
            transition: color ${p => p.theme.transition.main_transition};
        }

    
        .button-setting:hover,
        .button-setting:focus,
        .button-link-logout:hover,
        .button-link-logout:focus{
            color: ${(props) => props.theme.color.primary_green_lite};
        }

        .button-setting:hover > .setting-icon,
        .button-setting:focus > .setting-icon,
        .button-link-logout:hover > .logout-icon,
        .button-link-logout:focus > .logout-icon{
            stroke: ${(props) => props.theme.color.primary_green_lite};
        }
    }
`