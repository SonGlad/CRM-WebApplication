import styled from "styled-components";


export const TableListStyled = styled.div`
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
    height: ${props => props.$userLeadsComponent ? '73dvh' : '66.2dvh'};
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
    table-layout: auto;

    & thead{
      position: sticky;
      top: 0;
      z-index: 2;

      & th{
        background-color: ${p => p.theme.color.background3};
        border-bottom: 1px solid ${p => p.theme.color.primary_green_lite};
        border-right: 1px solid ${p => p.theme.color.primary_green_lite};
        padding: 1rem 0.25rem 1rem 0.25rem;


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
  }

  & tbody{
    & td {
      border-bottom: 1px solid ${p => p.theme.color.primary_green_lite};
      border-right: 1px solid ${p => p.theme.color.primary_green_lite};
      padding:0.5rem 0.25rem;
    }

    & tr:last-child{
      & td{
        border-bottom: none;
      }
    }
  }

  .TableHeaderName{
    font-weight: 600;
    font-size: 0.9rem;
    overflow-wrap: break-word;
    text-align: center;
  }

  .TableHeaderItem {
    font-weight: 500;
    font-size: 0.5rem;
    overflow-wrap: break-word;
    text-align: center;
    position: relative;
  }

  #cityColumn,
  #regionColumn,
  #countryColumn,
  #managerColumn,
  #agentColumn {
    padding: 0.5rem 0rem;
  }

  .calendar-cont{
    width: 100%;
    height: 100%;
    
    & input{
      width: 72px;
      border: none;
      background: none;
      padding: 0;
      text-align: center;
      color: ${props => props.theme.color.primary_white};
      transition: border ${props => props.theme.transition.main_transition};

      &:focus,
      &:hover {
        color: ${props => props.theme.color.primary_green_lite};

        &::placeholder{
        color: ${props => props.theme.color.primary_green_lite};
      }
      }
      
      &::placeholder{
        color: ${props => props.theme.color.primary_white};
      }
    }
  }

  .check-btn{
    font-size: 0.5rem;
    color: ${(props) => props.theme.color.primary_black};
    background-color: ${p => p.theme.color.primary_green_lite};
    border: 1px solid ${p => p.theme.color.primary_green_lite};
    padding: 0.25rem 0.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: color ${p => p.theme.transition.main_transition};
    flex-wrap: nowrap;

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
    width: 1rem;
    height: 1rem;
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
