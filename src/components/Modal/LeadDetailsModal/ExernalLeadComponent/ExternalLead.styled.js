import styled from "styled-components";


export const ExternalLeadStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.85rem;


    .info-cont{
        display: flex;
        flex-direction: column;
        gap: 1.775rem;
        width: 49%;
        padding: 0.5rem;

        
        & p{
            & span{
                color: ${(p) => p.theme.color.primary_green_lite};
            }
        }

        & div{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            & p{
                & span{
                    color: ${(p) => p.theme.color.primary_green_lite};
                }
            }

            & p:first-child{
                color: ${(p) => p.theme.color.primary_green_lite};

            }
        }

        .drop-cont{
            position: relative;
            max-width: 50%;
        }

        & .assign-button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.25rem;
            color: ${(props) => props.theme.color.primary_black};
            background-color: ${p => p.theme.color.primary_green_lite};
            border: 1px solid ${p => p.theme.color.primary_green_lite};
            padding: 0.25rem;
            border-radius: 0.75rem;
            cursor: pointer;
            transition: color ${p => p.theme.transition.main_transition};

            & .icon{
                width: 0.875rem;
                height: 0.875rem;
                rotate: -90deg;
                stroke: ${props => props.theme.color.primary_black};
                transition: all ${p => p.theme.transition.main_transition};
                margin-right: -0.5rem;
            }

            & .icon-active{
                rotate: 90deg;
            }

            &:hover{
                color: ${props => props.theme.color.primary_grey};

                & .icon{
                    stroke: ${props => props.theme.color.primary_grey};
                }
            }
        }


        .office-list{
            height: 5.4rem;
            overflow-y: hidden;
            overflow-x: hidden;
            width: 0;
            position: absolute;
            z-index: 1;
            top: -100%;
            left: 110%;
            border-radius: 0.5rem;
            padding: 0.5rem;
            gap: 1rem;
            background-color: ${p => p.theme.color.background};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            visibility: hidden;
            opacity: 0;
            font-size: 0rem;
            transform: scaleX(0) translate(-10px, 6px);
            transform-origin: 0% 0%;
            border-top: 0.25rem solid ${p => p.theme.color.primary_black_2};
            border-bottom: 0.25rem solid ${p => p.theme.color.primary_black_2};
            border-right: 0.25rem solid ${p => p.theme.color.primary_black_2};
            border-left: 0.25rem solid ${p => p.theme.color.primary_black_2};
            transition: all ${p => p.theme.transition.main_transition};


            &::-webkit-scrollbar {
                width: 0.5rem;
                background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: ${p => p.theme.color.primary_grey};
                border-radius: 5px;
            }
        }

        .office-list-visible{
            width: 9rem;
            opacity: 1;
            visibility: visible;
            overflow-y: auto;
            transform: scaleX(1) translate(-10px, 6px);
            transform-origin: 0% 0%;
            font-size: 1rem;
        }

        .office-item{
            cursor: pointer;

            & .drop-cont-text{
                transition: color ${p => p.theme.transition.main_transition};
                color: ${p => p.theme.color.primary_white};

                &:hover{
                    color: ${p => p.theme.color.primary_green_lite}
                }
            }
        }
    }

`