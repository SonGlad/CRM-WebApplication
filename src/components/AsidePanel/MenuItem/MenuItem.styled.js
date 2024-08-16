import styled from "styled-components";


export const MenuItemStyled = styled.li`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-child{
        margin-bottom: 0;
    }

    .side-panel-button{
        background-color: transparent;
        font-weight: 600;
        font-size: 1.25rem;
        padding: 0;
        color: ${p => p.theme.color.primary_white};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover,
        &:focus{
            color: ${p => p.theme.color.primary_green_lite}
        }
    }


    .users-dropdown-list{
        background-color: ${p => p.theme.color.for_modal_color};
        border-radius: 0.75rem;
        opacity: 0;
        visibility: hidden;
        height: 0;
        padding: 0;
        margin: 0;
        transition: 
            opacity ${p => p.theme.transition.main_transition},
            visibility ${p => p.theme.transition.main_transition},
            padding ${p => p.theme.transition.main_transition},
            margin-top ${p => p.theme.transition.main_transition},
            height ${p => p.theme.transition.main_transition};

        .users-drop-item:first-child {
            margin-bottom: 1rem;
        }

        &.users-dropdown-list-visible{
            opacity: 1;
            visibility: visible;
            padding: 0.5rem;
            margin-top: 0.25rem;
            height: 4.5rem;
        }
    }


    .users-drop-list{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .users-dropdowm-button{
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        font-weight: 500;
        font-size: 1rem;
        padding: 0;
        color: ${p => p.theme.color.primary_white};
        transition: color ${p => p.theme.transition.main_transition};

        &:hover,
        &:focus{
            color: ${p => p.theme.color.primary_green_lite}
        }
    }

    .arrow-svg {
        width: 0.875rem;
        height: 0.875rem;
        stroke: ${props => props.theme.color.primary_green_lite};
        transition: all ${p => p.theme.transition.main_transition};
    }

    .arrow-svg-close {
        transform: rotate(180deg);
    }

    .users-drop-item:last-child{
        position: relative;
    }

    .office-list{
        position: absolute;
        z-index: 3;
        top: 0;
        right: -75%;
        border-radius: 0.75rem;
        background-color: ${p => p.theme.color.background2};
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        visibility: hidden;
        opacity: 0;
        scale: 0;
        transform: scale(0.5) translateY(3px);
        transform-origin: left top;
        transition: all ${p => p.theme.transition.main_transition};
    }

    .office-list-visible{
        opacity: 1;
        visibility: visible;
        scale: 1;
        transform: scale(1) translateY(6px);
        transform-origin: left top;
    }

    .side-arrow-svg {
        width: 0.875rem;
        height: 0.875rem;
        rotate: -90deg;
        stroke: ${props => props.theme.color.primary_green_lite};
        transition: all ${p => p.theme.transition.main_transition};
    }

    .side-arrow-svg-active{
        rotate: 90deg;
    }

    .office-item .nav-link{
        color: ${props => props.theme.color.primary_white};
        transition: color ${p => p.theme.transition.main_transition};
        cursor: pointer;
    }

    .office-item:hover .nav-link{
        color: ${props => props.theme.color.primary_green_lite};
    }

    .none-admin-drop-item:hover .nav-link{
        color: ${props => props.theme.color.primary_green_lite};
    }


    .delete-dropdown-list{
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: ${p => p.theme.color.for_modal_color};
        border-radius: 0.75rem;
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
        height: 0;
        padding: 0;
        margin: 0;
        transition: 
            opacity ${p => p.theme.transition.main_transition},
            visibility ${p => p.theme.transition.main_transition},
            padding ${p => p.theme.transition.main_transition},
            margin-top ${p => p.theme.transition.main_transition},
            height ${p => p.theme.transition.main_transition};

        .users-drop-item{
            margin-bottom: 1rem;
        }

        & .delete-item:last-child{
            margin: 0 auto;
            width: 100%;
        }

        &.delete-dropdown-list-visible{
            opacity: 1;
            visibility: visible;
            padding: 0.5rem;
            margin-top: 0.25rem;
            height: 4.5rem;
        }
    }

    .delete-label{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        position: relative;
    }

    .delete-checkbox {
        width: 1rem;
        height: 1rem;
        outline: none;
        border: none;
        cursor: pointer;
        opacity: 0;
    }

    .custom-checkbox{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 1.5rem;
    }
    .custom-checkbox-before, .custom-checkbox-after{
        position: absolute;
        top: 50%;
        transform: translate(-50%, -60%);
        pointer-events: none;
    }
    .custom-checkbox-before{
        opacity: 1;
        transition: opacity ${p => p.theme.transition.main_transition};
    }
    .custom-checkbox-after{
        opacity: 0;
        transition: opacity ${p => p.theme.transition.main_transition};
    }
    .delete-checkbox:focus + .custom-checkbox > .custom-checkbox-before{
        outline: 1px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 2px;
        outline-offset: -1px; 
    }

    .delete-checkbox:checked + .custom-checkbox > .custom-checkbox-after{
        opacity: 1;
    }
    .delete-checkbox:checked + .custom-checkbox > .custom-checkbox-before{
        opacity: 0;
    }

    .delete-button{
        font-weight: 500;
        font-size: 0.9rem;
        outline: none;
        border: none;
        border-radius: 0.5rem;
        width: 100%;
        background-color: ${p => p.theme.color.primary_green_lite};
        transition: color ${p => p.theme.transition.main_transition};

        &:disabled {
            color: ${(props) => props.theme.color.primary_grey};
            pointer-events: none;
        }

        &:hover{
            color: ${props => props.theme.color.primary_grey};
        }
    } 
    
    
    .text-block{
        font-size: 1.1rem;
        text-align: center;
        font-weight: 600;
        
        & p:first-child{
            margin-bottom: 0.25rem;
        }
        
        & p:last-child{
            color: ${props => props.theme.color.primary_green_lite};
            margin-bottom: 0.5rem;
        }
    }

    .amount-dropdown-list{
        background-color: ${p => p.theme.color.for_modal_color};
        border-radius: 0.75rem;
        width: 9.5rem;
        opacity: 0;
        visibility: hidden;
        height: 0;
        padding: 0;
        margin: 0;
        transition: 
            opacity ${p => p.theme.transition.main_transition},
            visibility ${p => p.theme.transition.main_transition},
            padding ${p => p.theme.transition.main_transition},
            margin-top ${p => p.theme.transition.main_transition},
            height ${p => p.theme.transition.main_transition};

        .users-drop-item:first-child {
            margin-bottom: 1rem;
        }

        &.amount-dropdown-list-visible{
            opacity: 1;
            visibility: visible;
            padding: 0.5rem;
            margin-top: 0.25rem;
            height: 10.25rem;
        }

        & p{
            font-size: 11px;
            font-weight: 500;
            margin-bottom: 16px;
            text-align: justify;
        }

        & form{
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;

            & input {
                text-align: center;
                margin-bottom: 1rem;
                width: 100%;
                padding: 0.25rem 1.5rem;
                border-radius: 0.75rem;
                border: 1px solid ${props => props.theme.color.primary_green_lite};
                background: ${props => props.theme.color.primary_black_2};
                font-size: 0.8rem;
                font-weight: 400;
                color: ${props => props.theme.color.primary_white};


                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }

                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            }

            & button {
                margin: 0 auto;
                color: ${(props) => props.theme.color.primary_black};
                background-color: ${(p) => p.theme.color.primary_green_lite};
                font-size: 0.8rem;
                font-weight: 500;
                width: 50%;
                border: 1px solid ${(p) => p.theme.color.primary_green_lite};
                border-radius: 0.75rem;
                padding: 0.25rem;
                cursor: pointer;
                transition: color ${p => p.theme.transition.main_transition};

                &:hover {
                    color: ${(props) => props.theme.color.primary_grey};
                }

                &:disabled{
                    pointer-events: none;
                    color: ${p => p.theme.color.primary_grey};
                }
            }
        }
    }
`