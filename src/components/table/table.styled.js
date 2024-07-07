import styled from "styled-components";

export const TableList = styled.div`
  border: 1px solid ${(p) => p.theme.color.primary_green_lite};
  border-radius: 0.625rem;
  width: 100%;

  .Table {
    border-collapse: collapse;
    table-layout: fixed;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .TableHeader {
    background: #e3ffa869;
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
    z-index: 1000;
    position: absolute;
    margin-top: 0.3125rem;
    display: none;
    gap: 0.5rem;
    border-radius: 1rem;
    padding: 0.75rem 0.5rem;
    box-shadow: 0 0.25rem 3rem 0 rgba(18, 20, 23, 0.08);
    background: ${(p) => p.theme.color.primary_green_lite};
    color: black;
  }

  .ListItem {
    cursor: pointer;

    &:hover {
      color: #a2a59e;
    }
  }


  .arrow-svg {
    width: 0.875rem;
    height: 0.875rem;
    stroke: ${(props) => props.theme.color.primary_green_lite};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    left: 5px;
    bottom: 0px;
  }

  .arrow-svg-close {
    transform: rotate(180deg);
  }

  .InputContainer {
    display: flex;
    position: absolute;
    background: #e3ffa8e0;
    border-radius: 10px;
    padding: 10px;
    z-index: 9999;
    width: max-content;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .InputContainer input {
    color: black;
  }

  .ButtonSave {
    border-radius: 5px;
    background: black;
    color: white;
    border: none;
  }
`;
