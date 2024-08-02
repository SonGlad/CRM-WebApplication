import styled from "styled-components";


export const StyledUsersPage = styled.div`
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    /* height: 90vh; */
    border-radius: 0.75rem;
    background-color: ${p => p.theme.color.background};
    box-shadow: 4px 0px 14px 5px rgba(227, 255, 168, 0.2);
    padding: 0.75rem;


    .wraper{
        width: 100%;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.75rem;
        height: 90.5dvh;

        @media screen and (min-width: 834px) {
            height: 87.5dvh;
        }
    }


    .nav-block{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .link{
        display: flex;
        align-items: center;
        gap: 0.25rem;
        margin-right: 35%;
        transition: all ${p => p.theme.transition.main_transition};

        .svg{
            width: 1.5rem;
            height: 1.5rem;
            stroke: ${p => p.theme.color.primary_white};
        }

        &:hover{
            color: ${p => p.theme.color.primary_green_lite};
        }
        &:hover .svg{
            stroke: ${p => p.theme.color.primary_green_lite};
        }
    }

    .titles{
        font-weight: 700;
        font-size: 1.5rem
    }

    .filter-list{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        & button {
            padding: 0.25rem 0.5rem;
            min-width: 5rem;
            color: ${(props) => props.theme.color.primary_black};
            background-color: ${(p) => p.theme.color.primary_green_lite};
            font-size: clamp(0.75rem, 0.5vw + 0.5rem, 1.5rem);
            font-weight: 500;
            line-height: 1.25rem;
            border: 1px solid ${(p) => p.theme.color.primary_green_lite};
            border-radius: 0.75rem;
            transition: color ${p => p.theme.transition.main_transition};

            &:hover,
            &:focus {
                color: ${(props) => props.theme.color.primary_grey};
            }
        }
    }

    .users-block{
        margin-top: 2rem;
        color: ${p => p.theme.color.primary_white};
        overflow-y: auto;
        height: 74dvh;
        padding-bottom: 4px;
        position: relative;

        @media screen and (min-width: 834px){
            height: 71dvh;
        }

        @media screen and (min-width: 1236px){
            height: 72.8dvh;
        }


        &::-webkit-scrollbar {
            width: 0.5rem;
            background-color: ${p => p.theme.color.primary_grey};
            border-radius: 24px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: ${p => p.theme.color.primary_green_lite};
            border-radius: 5px;
        }

        & table {
            width: 100%;
            border-spacing: 0px;
            border: 1px solid ${p => p.theme.color.primary_green_lite};
            border-top: none;
            border-radius: 12px;            

            & thead{
                position: sticky;
                top: 0;
                z-index: 1;
                background-color: pink;

                & th{
                    border-top: 1px solid ${p => p.theme.color.primary_green_lite};
                }
            }
        }

        & th{
            background-color: ${p => p.theme.color.background3};

            &:first-child{
                border-top-left-radius: 10px;
            }

            &:last-child{
                border-top-right-radius: 10px;
            }
        }

        & tr, td, th{
            text-align: center;
            padding: 1rem 0;
            border-bottom: 1px solid ${p => p.theme.color.primary_green_lite};
            border-right: 1px solid ${p => p.theme.color.primary_green_lite};
        }

        & tr:last-child {
            & td {
                border-bottom: none;
            }

            & td:last-child {
                border-bottom-right-radius: 10px;
            }
        }
        
        & td:last-child, 
        & th:last-child{
            border-right: none;
        }
        
        & td:last-child{
            position: relative;
        }
    }
    

    .check-btn{
        color: ${(props) => props.theme.color.primary_black};
        background-color: ${p => p.theme.color.primary_green_lite};
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        padding: 0.25rem 0.25rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover{
            color: ${props => props.theme.color.primary_grey};
        }
    }


    .checkbox {
        margin-top: 5px;
        width: 16px;
        height: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        opacity: 0;
    }
    
    .custom-checkbox{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .custom-checkbox-before, .custom-checkbox-after{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
    .checkbox:focus + .custom-checkbox > .custom-checkbox-before{
        outline: 3px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 2px;
        outline-offset: -3px; 
    }

    .checkbox:checked + .custom-checkbox > .custom-checkbox-after{
        opacity: 1;
    }
    .checkbox:checked + .custom-checkbox > .custom-checkbox-before{
        opacity: 0;
    }


`