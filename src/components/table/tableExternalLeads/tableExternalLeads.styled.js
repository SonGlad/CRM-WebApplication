import styled from "styled-components";

export const TableExternalList = styled.div`
  border: 1px solid ${(p) => p.theme.color.primary_green_lite};
  border-radius: 0.625rem;
  width: 100%;

  .Table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .TableHeader {
    background: #223f53;
  }

  .TableHeaderList th {
    padding: 1rem 0.25rem 1rem 0.25rem;
  }

  td[id^="lastName-"],
  td[id^="email-"],
  td[id^="phone-"],
  td[id^="resourse-"],
  td[id^="country-"],
  td[id^="region-"],
  td[id^="city-"] {
    max-width: 70px;
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
  }

    .TableHeaderItem {
    padding:0.5rem 0.25rem;
    border-bottom: 1px solid ${(p) => p.theme.color.primary_green_lite};
    text-align: left;
    font-weight: 500;
    font-size: 0.5rem;
    overflow-wrap: break-word;
    text-align: center;
    position: relative;
  }

  .TableHeaderItem:not(:last-child) {
    border-right: 1px solid ${(p) => p.theme.color.primary_green_lite};
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


`;
