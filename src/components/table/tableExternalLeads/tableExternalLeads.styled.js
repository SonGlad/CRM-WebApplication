import styled from "styled-components";


export const TableExternalList = styled.div`
  color: ${p => p.theme.color.primary_white};
  overflow-y: auto;
  height: 74dvh;
  position: relative;
  border: 1px solid ${p => p.theme.color.primary_green_lite};
  border-right: none;
  border-radius: 12px;

  @media screen and (min-width: 834px){
    height: 71dvh;
  }

  @media screen and (min-width: 1236px){
    height: 68.93dvh;
  }


  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${p => p.theme.color.primary_grey};
    border-radius: 24px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${p => p.theme.color.primary_green_lite};
  }


  & table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;

    & thead{
      position: sticky;
      top: 0;
      z-index: 2;

      & th{
        background-color: ${p => p.theme.color.background3};
        border-bottom: 1px solid ${p => p.theme.color.primary_green_lite};
        border-right: 1px solid ${p => p.theme.color.primary_green_lite};

        &:last-child{
          border-right: none;
        }
      }
    }
  }


  .back-color{
    background-color: #369469;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 10px inset;
  }
  

  & tr, td, th{
    text-align: center;
    padding: 1rem 0;
  }

  & tbody{
    & td {
      border-bottom: 1px solid ${p => p.theme.color.primary_green_lite};
      border-right: 1px solid ${p => p.theme.color.primary_green_lite};
    }

    & tr:last-child{
      & td{
        border-bottom: none;
      }
    }
  }

      
  & td:last-child, 
  & th:last-child{
    border-right: none;
    width: 3.75rem;
  }


  & td:nth-last-child(2),
  & th:nth-last-child(2),
  & td:nth-last-child(3),
  & th:nth-last-child(3) {
    width: 6rem;
  }

  
  & td:last-child{
    position: relative;
  }


  .TableHeaderName{
    padding:0.5rem 0.25rem;
    font-weight: 600;
    font-size: 0.9rem;
    overflow-wrap: break-word;
    text-align: center;
  }

  .TableHeaderItem {
    padding:0.5rem 0.25rem;
    font-weight: 500;
    font-size: 0.8rem;
    overflow-wrap: break-word;
    text-align: center;
  }


  #sourceColumn{
    width: 5.5rem;
  }
  #createdColumn {
    width: 7rem;
  }
  #officeColumn {
    width: 5rem;
  }


  .check-btn{
    font-size: 0.8rem;
    width: 70%;
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

`;






export const CustomCheckboxStyled = styled.div`

  .custom-checkbox{
    display: flex;
    align-items: center;
    justify-content: center;
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





export const AssignDropContStyled = styled.div`
  position: relative;


  .office-list{
    width: 6.4rem;
    position: absolute;
    z-index: 1;
    top: -0.5rem;
    right: -117%;
    border-radius: 0.5rem;
    padding: 0.7rem 0.2rem;
    gap: 1rem;
    background-color: ${p => p.theme.color.background2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    visibility: hidden;
    opacity: 0;
    scale: 0;
    transform: scale(0.5) translateY(10px);
    transform-origin: left top;
    transition: all ${p => p.theme.transition.main_transition};
    border: 0.25rem solid ${p => p.theme.color.background3};
  }

  .office-list-visible{
    opacity: 1;
    visibility: visible;
    scale: 1;
    transform: scale(1) translateY(6px);
    transform-origin: left top;
  }

  .office-item{
    cursor: pointer;

    & p{
      font-size: 1rem;
      transition: color ${p => p.theme.transition.main_transition};

      &:hover{
        color: ${p => p.theme.color.primary_green_lite}
      }
    }
  }


  .assign-btn{
    margin-left: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    font-size: 0.8rem;
    width: 95%;
    color: ${(props) => props.theme.color.primary_black};
    background-color: ${p => p.theme.color.primary_green_lite};
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    padding: 0.25rem 0.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: color ${p => p.theme.transition.main_transition};

    & .icon{
      width: 0.875rem;
      height: 0.875rem;
      rotate: -90deg;
      stroke: ${props => props.theme.color.primary_black};
      transition: all ${p => p.theme.transition.main_transition};
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
`
