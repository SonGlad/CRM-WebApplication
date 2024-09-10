import styled from "styled-components";
import "flatpickr/dist/themes/dark.css";



export const LeadBaseInfoBlockStyled = styled.div`
    width: 23.7%;
    padding: 0.5rem;
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    border-radius: 0.75rem;

    .label-cont{
        margin-bottom: 1rem;
    }

    .label-name{
        margin-bottom: 0.25rem;
    }

    .data-cont-for-style{
        width: 100%;
        padding: 0.5rem 1.75rem;
        border-radius: 0.75rem;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        background: ${p => p.theme.color.primary_black_2};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        color: ${p => p.theme.color.primary_white};
    }
`










export const LeadAssignReAssignOwnerBlockStyled = styled.div`
    width: 23.7%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    padding: 0.5rem;
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    border-radius: 0.75rem;

    & p{
        & span{
            color: ${(p) => p.theme.color.primary_green_lite};
        }
    }

    & .users-details-cont{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        & div{
            display: flex;
            gap: 4px;

            & p:first-child{
                color: ${(p) => p.theme.color.primary_green_lite};
            }

            & p:last-child{
                max-width: 210px;
                overflow: hidden;
                font-size: 1rem;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }
    }

    .drop-cont{
        position: relative;
        max-width: 35%;
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
        width: 15.5rem;
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
`






export const LeadKYCBlockStyled = styled.div`
    width: 50%;
    padding: 0.5rem;
    font-size: 0.875rem;
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    border-radius: 0.75rem;

    .create-contact-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.65rem;
    }

    .radio-btn-list{
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .radio-btn-item{
        width: 32.3%;
        padding: 0.5rem;
        border: 1px solid ${props => props.theme.color.primary_green_lite};
        border-radius: 0.75rem;
    }

    .radio-btn-item-title{
        margin-bottom: 0.6rem;
        text-align: center;
    }

    .LabelActivity {
        position: relative;
        align-items: center;
        display: flex;
        margin-bottom: 0.6rem;
        padding-left: 0.5rem;

        &:last-child{
            margin-bottom: 0;
        }
    }

    .radio-btn-input {
        height: 0.75rem;
        width: 0.75rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        cursor: pointer;
        margin-right: 0.5rem;
        border-radius: 50%;
        padding: 0;

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 9%;
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background-color: ${props => props.theme.color.primary_black_2};
            border: 1px solid ${props => props.theme.color.primary_grey};
        }

        &:checked::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 9%;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: ${props => props.theme.color.primary_green_lite};
            transform: translate(-50%, -50%);
            visibility: visible;
        }
    }


    .buttonContainer {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;
        line-height: 1.25rem;
        margin-top: auto;
    }

    .saveButton {
        color: ${(props) => props.theme.color.primary_black};
        background-color: ${(p) => p.theme.color.primary_green_lite};
        width: 49%;
        border: 1px solid ${(p) => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.25rem;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_grey};
        }

        &:disabled {
            color: ${(props) => props.theme.color.primary_grey};
            pointer-events: none;
        }
    }

    .cancelButton {
        background-color: ${(props) => props.theme.color.primary_black_2};
        color: ${(props) => props.theme.color.primary_grey};
        width: 49%;
        padding: 0.25rem 0.5rem;
        border: 1px solid transparent;
        border-radius: 0.75rem;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_green_lite};
        }
    }
`






export const LeadCreateUpdateCallBlockStyled = styled.div`
    line-height: 1.38rem;
    width: 23.7%;
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    border-radius: 0.75rem;


    .content-block{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 16.25rem;
        position: relative;
    }

    .title-text{
        color: ${p => p.theme.color.primary_green_lite};
        width: 6.5rem;
        font-size: 1rem;
    }

    .next-call{
        width: 5.5rem;
    }

    .next-call-cont{
        display: flex;
        gap: 0.25rem;
        align-items: center;
    }

    .calendar-cont{
        position: relative;
        width: 65%;
    }

    & input{
        padding: 0.25rem 0.5rem;
        padding-right: 1.75rem;
        text-align: center;
        width: 100%;
        border-radius: 0.75rem;
        border: 1px solid ${props => props.theme.color.primary_green_lite};
        background: ${props => props.$isOverdue ? '#e74a3b' : props.$isAlmostDue ? '#223f53' : '#0F0F0F'};
        font-size: 0.875rem;
        font-weight: 500;
        color: ${props => props.theme.color.primary_white};
        transition: border ${props => props.theme.transition.main_transition};

        &:focus {
            outline: none;
            border: 1px solid ${props => props.theme.color.primary_gray};
        }

        &:focus + .calendar-icon {
            fill: ${props => props.theme.color.primary_white};
        }
    }

    .calendar-icon{
        position: absolute;
        fill: ${props => props.theme.color.primary_green_lite};
        top: 50%;
        right: 0%;
        transform: translate(-50%, -50%);
        transition: fill ${props => props.theme.transition.main_transition};
    }

    .delete-block{
        display: flex;
        gap: 0.75rem;
        align-items: center;
        justify-content: space-between;
        line-height: 1.25rem;
        margin-top: auto;
    }

    .delete-button{
        color: ${(props) => props.theme.color.primary_black};
        background-color: ${(p) => p.theme.color.primary_green_lite};
        width: 40%;
        border: 1px solid ${(p) => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.25rem;
        transition: color ${p => p.theme.transition.main_transition};

        &:hover {
            color: ${(props) => props.theme.color.primary_grey};
        }

        &:disabled {
            color: ${(props) => props.theme.color.primary_grey};
            pointer-events: none;
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
        right: 0;
    }
    .custom-checkbox-before, .custom-checkbox-after{
        position: absolute;
        top: 50%;
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
`









export const LeadChangeInfoBlockStyled = styled.div`
    width: 32.4%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    padding: 0.5rem;
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    border-radius: 0.75rem;

    .content-block{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 16.25rem;
        position: relative;
    }

    .title-text{
        color: ${p => p.theme.color.primary_green_lite};
        width: 6.25rem;
    }

    & .assign-button{
        width: 9.6rem;
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
        padding: 0 0.25rem;
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

    .status-list{
        height: 13.5rem;
        position: absolute;
        overflow-y: auto;
        z-index: 1;
        top: -40%;
        left: 102%;
        border-radius: 0.5rem;
        padding: 0.25rem;
        gap: 0.75rem;
        background-color: ${p => p.theme.color.background};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        visibility: hidden;
        opacity: 0;
        font-size: 0.25rem;
        border-top: 0.25rem solid ${p => p.theme.color.primary_black_2};
        border-bottom: 0.25rem solid ${p => p.theme.color.primary_black_2};
        border-right: 0.25rem solid ${p => p.theme.color.primary_black_2};
        border-left: 0.25rem solid ${p => p.theme.color.primary_black_2};
        transform: scale(0.5) translateY(10px);
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
        width: 7rem;
        opacity: 1;
        visibility: visible;
        transform: scale(1) translateY(6px);
        transform-origin: left top;
        font-size: 0.7rem;
    }

    .time-zone-list {
        height: 10.8rem;
        gap: 0.75rem;
    }

    .time-zone-list-visible{
        width: 5rem;
        opacity: 1;
        visibility: visible;
        transform: scale(1) translateY(6px);
        transform-origin: left top;
        font-size: 0.9rem;
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

    .block-form{
        display: flex;
        gap: 1rem;

        & label{
            width: 100%;

            & input{
                text-align: center;
                width: 100%;
                padding: 0.25rem 0.5rem;
                border-radius: 0.75rem;
                border: 1px solid ${props => props.theme.color.primary_green_lite};
                background: ${props => props.theme.color.primary_black_2};
                font-size: 0.875rem;
                font-weight: 500;
                color: ${props => props.theme.color.primary_white};
                transition: border ${props => props.theme.transition.main_transition};

                &:focus {
                    outline: none;
                    box-shadow: none;
                    border: 1px solid ${props => props.theme.color.primary_gray};
                }
            }
        }

        & .submit-button{
            margin-right: -100px;
            color: ${(props) => props.theme.color.primary_black};
            background-color: ${(p) => p.theme.color.primary_green_lite};
            font-size: 0.875rem;
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
                display: none;
            }
        }
    }
`






export const LeadCommentBlockStyled = styled.div`
    width: 41.3%;
    padding: 0.5rem;
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    border-radius: 0.75rem;



    
`