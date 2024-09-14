import styled from "styled-components";

export const TableListStyled = styled.div`
  border-radius: 0.625rem;
  width: 100%;
  position: relative;
  overflow-y: auto;

  .TableContainer{
    border: 1px solid ${(p) => p.theme.color.primary_green_lite};
  }

  .Table {
    table-layout: auto;
    width: 100%;
    border-collapse: collapse;
    border-radius: 0.5rem;
  }


  .TableHeader {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #223f53;
  }

  .TableHeaderItem::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px; 
     background-color: #E3FFA8;
    z-index: 5;
}

/* 
  .TableHeaderList thead {
    padding: 1rem 0.25rem 1rem 0.25rem;

    border-top: 1px solid #E3FFA8;
  } */

  td[id^="status-"],
  td[id^="timeZone-"],
  td[id^="country-"],
  td[id^="region-"],
  td[id^="city-"] {
    max-width: 70px;
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .TableHeaderItem {
    padding:0.5rem 0.25rem;
    border-bottom: 1px solid transparent;
    text-align: left;
    font-weight: 500;
    font-size: 0.5rem;
    overflow-wrap: break-word;
    text-align: center;
    position: relative;

    @media only screen and (min-width: 1800px) {
      white-space: nowrap;
    }
  }

  .TableHeaderItem:not(:last-child) {
    border-right: 1px solid ${(p) => p.theme.color.primary_green_lite};
  }


  .WordList textarea,
  select,
  input {
    cursor: pointer;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    background: none;
    resize: none;
    overflow: hidden;
    text-align: center;
    align-items: center;
    display: flex;
    color: ${(p) => p.theme.color.primary_white};
    position: relative;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .dropdown {
    width: 10rem;
    z-index: 1000;
    position: absolute;
    font-size: 0.75rem;
    gap: 0.2rem;
    border-radius: 1rem;
    padding: 0.75rem 0.5rem;
    box-shadow: 0 0.25rem 3rem 0 rgba(18, 20, 23, 0.08);
       background-color: ${p => p.theme.color.background2};
    border: 0.25rem solid ${p => p.theme.color.background3};
    color: black;
    overflow: hidden;
     overflow-x: auto; 
  }


  .ListItem {
    cursor: pointer;
    color: #E3FFA8;

    &:hover {
      color: #a2a59e;
    }
  }


  .arrow-svg {
    cursor: pointer;
    width: 0.875rem;
    height: 0.875rem;
    stroke: ${(props) => props.theme.color.primary_green_lite};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    left: 5px;
    bottom: 0px;
  }

  .arrow-svg-close {
     cursor: pointer;
    transform: rotate(180deg);
  }

  .InputContainer {
    display: flex;
    position: absolute;
    background-color: ${p => p.theme.color.background2};
    border: 0.25rem solid ${p => p.theme.color.background3};
    border-radius: 10px;
    padding: 10px;
    z-index: 999;
    width: max-content;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .InputContainer input {
    color: white;
  }

  .ButtonSave {
    cursor: pointer;
    border-radius: 5px;
    background: #E3FFA8;
    color: ${p => p.theme.color.background2};
    border: none;
  }

    .check-btn{
    font-size: 0.5rem;
    /* width: 70%; */
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


  .calendar-cont{
    width: 72px;

    & input{
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
