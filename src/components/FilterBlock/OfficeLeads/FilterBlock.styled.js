import styled from "styled-components";


export const FilterBlockStyled = styled.div`
    margin-bottom: 1rem;
    display: flex;


    .open-filter-cont {
        width: 20%;
        height: 100%;
        padding: 0.5rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    
    .search-text{
        font-size: 0.7rem;
        font-weight: 500;
        text-align: justify;
    }

    .search-form{
        width: 100%;
        position: relative;
    }

    .search-input{
        width: 100%;
        padding: 0.25rem 0.625rem;
        padding-right: 2rem;
        border-radius: 0.75rem;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        background: ${p => p.theme.color.primary_black_2};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        color: ${p => p.theme.color.primary_white};
        outline: none;
    }

    .cancel-btn{
        position: absolute;
        bottom: 0.5rem;
        right: 3%;
        border: none;
        outline: none;
        padding: 0rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    }
        
    .close-icon{
        stroke: ${p => p.theme.color.primary_grey};
        width: 0.9rem;
        height: 0.9rem;
        transition: transform ${p => p.theme.transition.main_transition};

        &:hover{
            transform: rotate(90deg);
            stroke: ${p => p.theme.color.error_color};
        }
    }


    .select-filter-cont{
        width: 80%;
        padding: 0.5rem;
    }

    .filter-list{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-evenly;
        font-weight: 500;
        line-height: 1.25rem;
        flex-wrap: wrap;
    }

    .filter-item{
        width: 18%;
        padding: 0;
        position: relative;
    }

    .filter-btn{
        width: 100%;
        padding: 0.25rem 0.5rem;
        color: ${p => p.theme.color.primary_black};
        background-color: ${p => p.theme.color.primary_green_lite};
        font-size: clamp(0.75rem, 0.5vw + 0.4rem, 1.5rem);
        font-weight: 500;
        line-height: 1.25rem;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            color: ${(props) => props.theme.color.primary_grey};
        }
    }

    .cancel-filter-btn{
        position: absolute;
        bottom: 0.5rem;
        right: 4%;
        border: none;
        outline: none;
        padding: 0rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    }
        
    .close-filter-icon{
        stroke: ${p => p.theme.color.primary_black_2};
        width: 0.9rem;
        height: 0.9rem;
        transition: transform ${p => p.theme.transition.main_transition};

        &:hover{
            transform: rotate(90deg);
            stroke: ${p => p.theme.color.error_color};
        }
    }


    .filter-item-list{
        max-height: 11.7rem;
        position: absolute;
        overflow-y: auto;
        z-index: 20;
        top: 115%;
        left: 0;
        width: 100%;
        border-radius: 0.5rem;
        padding: 0.25rem;
        gap: 0.75rem;
        background-color: ${p => p.theme.color.background2};
        display: flex;
        flex-direction: column;
        gap: 1rem;
        visibility: hidden;
        opacity: 0;
        font-size: 0.9rem;
        border: 0.25rem solid ${p => p.theme.color.background3};
        transform-origin: top;
        transition: all ${p => p.theme.transition.main_transition};


        &::-webkit-scrollbar {
            width: 0.25rem;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: ${p => p.theme.color.primary_grey};
            border-radius: 5px;
        }
    }

    .filter-item-list-visible{
        opacity: 1;
        visibility: visible;
        transform-origin: top;
    }

    .filter-list-item{
        cursor: pointer;
        width: 100%;
        text-align: center;
        

        & .drop-cont-text{
            transition: color ${p => p.theme.transition.main_transition};
            color: ${p => p.theme.color.primary_white};

            &:hover{
                color: ${p => p.theme.color.primary_green_lite}
            }
        }
    }
`