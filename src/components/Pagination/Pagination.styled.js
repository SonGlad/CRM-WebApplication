import styled from "styled-components";


export const PaginationStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;

    .pagination-block{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
    }


    .left-button-block,
    .right-button-block{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
    }

    .paginaton-button{
        border-radius: 50%;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        scale: calc(1);
        transition: scale ${p => p.theme.transition.main_transition};

        & .arrow-icon{
            width: 1rem;
            height: 1rem;
        }
        & .icon{
            width: 0.75rem;
            height: 0.75rem;
        }
        & .left-arrow{
            transform: rotate(90deg);
        }
        & .right-arrow{
            transform: rotate(-90deg);
        }
        &:hover{
            scale: calc(1.2);
        }
    }

    .right-button-block{
        & button {
            background-color: ${p => p.theme.color.primary_green_lite};

            & .right-arrow{
                stroke: ${p => p.theme.color.primary_black};
            }
            & .arrow-icon{
                fill: ${p => p.theme.color.primary_black};
            }

            &:disabled{
                scale: calc(1);
                pointer-events: none;

                & .arrow-icon{
                    fill: ${p => p.theme.color.primary_grey};
                }
                & .right-arrow{
                    stroke: ${p => p.theme.color.primary_grey};
                }
            }

        }
        
    }

    .left-button-block{
        & button {
            background-color: ${p => p.theme.color.for_modal_color};

            & .left-arrow{
                stroke: ${p => p.theme.color.primary_white};
            }
            & .arrow-icon{
                fill: ${p => p.theme.color.primary_white};
            }

            &:disabled{
                scale: calc(1);
                pointer-events: none;

                & .left-arrow{
                    stroke: ${p => p.theme.color.background};
                }
                & .arrow-icon{
                    fill: ${p => p.theme.color.background};
                }
            }
        }
    }

    .button{
        padding: 0.375rem;
    }
`










export const PaginationMapStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 0.375rem;

    .content-list{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 17.875rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        padding: 0 2px;

        &::-webkit-scrollbar {
            display: none;
        }
        &::-webkit-scrollbar-thumb {
            display: none;
        }
    }

    .content-item {
        scroll-snap-align: center;
        padding: 0;
    }

    .button-background{
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: pink;
        background-color: ${p => p.theme.color.for_modal_color};
        color: ${p => p.theme.color.primary_white};
        transition: all ${p => p.theme.transition.main_transition};

        &:hover{
            background-color: ${p => p.theme.color.primary_green_lite};
            color: ${p => p.theme.color.primary_black};
        }
    }

    .button-active{
        background-color: ${p => p.theme.color.primary_green_lite};
        color: ${p => p.theme.color.primary_black};
    }
`