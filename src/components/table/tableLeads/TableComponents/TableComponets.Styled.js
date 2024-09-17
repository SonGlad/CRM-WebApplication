import styled from "styled-components"


export const StatusesStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .status-btn{
        color: ${p => p.theme.color.primary_white};
        padding: 0;
        width: 100%;
        min-height: 1.3rem;
        background-color: transparent;
    }

    .arrow-svg {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        stroke: black;
        stroke: ${p => p.theme.color.primary_green_lite};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        top: -4px;
        right: -2px;
        transform: rotate(-90deg);
    } 
    
    .arrow-svg-open {
        transform: rotate(90deg);
    } 

    .status-list{
        height: 0rem;
        position: absolute;
        overflow-y: auto;
        z-index: 1;
        top: -0.5rem;
        left: ${props => props.$isTimeZone ? '115%' : '110%'};
        border-radius: 0.5rem;
        padding: 0.25rem;
        gap: 0.75rem;
        background-color: ${p => p.theme.color.background2};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        visibility: hidden;
        opacity: 0;
        font-size: 0.25rem;
        border: 0.25rem solid ${p => p.theme.color.background3};
        transform: scale(0.5);
        transform-origin: left top;
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

    .status-list-visible{
        height: 11.8rem;
        width: ${props => props.$isTimeZone ? '4rem' : '7rem'};
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transform-origin: left top;
        font-size: 0.7rem;
    }

    .status-list-visible-adjusted{
        top: -10.1rem;
        height: 11.8rem;
        width: ${props => props.$isTimeZone ? '4rem' : '7rem'};
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transform-origin: left top;
        font-size: 0.7rem;
    }

    .status-item{
        cursor: pointer;

        & .drop-cont-text{
            transition: color ${p => p.theme.transition.main_transition};
            color: ${p => p.theme.color.primary_white};

            &:hover{
                color: ${p => p.theme.color.primary_green_lite}
            }
        }
    }
`










export const CountryStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .data-btn{
        color: ${props => {
            if (props.$isCountry || props.$isRegion || props.$isCity){
                return props.theme.color.primary_white;
            } else {
                return props.theme.color.primary_grey;
            }
        }};
        padding: 0rem 0.25rem;
        width: 100%;
        min-height: 1.3rem;
        background-color: transparent;
    }

    .arrow-icon {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        stroke: black;
        stroke: ${p => p.theme.color.primary_green_lite};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        bottom: -5px;
        left: 4px;
        transform: rotate(0deg);
    } 
    
    .arrow-icon-open {
        transform: rotate(180deg);
    }

    .input-form{
        visibility: hidden;
        opacity: 0;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 145%;
        transform: scale(0);
        background-color: ${p => p.theme.color.background2};
        border: 0.25rem solid ${p => p.theme.color.background3};
        border-radius: 0.75rem;
        padding: 0.8rem 0.5rem;
        transform-origin: left top;
        transition: all ${p => p.theme.transition.main_transition};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        
        
        & input{
            text-align: center;
            padding: 0.25rem;
            border-radius: 0.75rem;
            border: 1px solid ${p => p.theme.color.primary_green_lite};
            background: transparent;
            font-size: 0.8rem;
            font-weight: 400;
            color: ${p => p.theme.color.primary_white};
            outline: none;

            &::placeholder{
                color: ${p => p.theme.color.primary_grey};
                letter-spacing: 0.04em;
            }

            &:focus{
                border: 1px solid ${p => p.theme.color.primary_white};
            }
        }

        & .submit-button{
            color: ${(props) => props.theme.color.primary_black};
            background-color: ${(p) => p.theme.color.primary_green_lite};
            font-size: 0.8rem;
            font-weight: 500;
            width: 50%;
            border: 1px solid ${(p) => p.theme.color.primary_green_lite};
            border-radius: 0.5rem;
            padding: 0.25rem;
            cursor: pointer;
            transition: color ${p => p.theme.transition.main_transition};

            &:hover {
                color: ${(props) => props.theme.color.primary_grey};
            }

            &:disabled{
                display: none;
            }
        }
    }

    .input-form-visible{
        visibility: visible;
        opacity: 1;
        transform: scale(1);
        transform-origin: left top;
    }

    .input-form-visible-adjusted{
        top: -325%;
        visibility: visible;
        opacity: 1;
        transform: scale(1);
        transform-origin: left top;
    }
`