import styled from "styled-components";

export const TableList = styled.div`
border: 1px solid ${p => p.theme.color.primary_green_lite};
border-radius: 0.625rem;
margin: 1.25rem 1rem 0.75rem 0;

  .Table{
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  border-radius: 0.5rem;
  overflow: hidden;
  }

  .TableHeader{
    background: #e3ffa869;
  }

 .TableHeaderList th{
   padding: 1rem 0.25rem 1rem 0.25rem; 
  }

    .TableHeaderItem {
    padding: 0.25rem;
    border-bottom: 1px solid ${p => p.theme.color.primary_green_lite};
  
    text-align: left;

    font-weight: 500;
    font-size: 0.5rem;

    overflow-wrap: break-word;
    text-align: center;
  }

 .TableHeaderItem:not(:last-child){
  border-right: 1px solid ${p => p.theme.color.primary_green_lite};
 }

   .WordList textarea, select, input  {
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
    color: ${p => p.theme.color.primary_white};

        &:focus {
      outline: none;
      box-shadow: none;
    }

  }
  .dropdown {
    z-index: 1000;
    position: absolute;
    margin-top: 0.3125;
    display: none;
    gap: 0.5rem;

    border-radius: 1rem;
    padding: 0.75rem 0.5rem;
    box-shadow: 0 0.25rem 3rem 0 rgba(18, 20, 23, 0.08);
    background: ${p => p.theme.color.primary_green_lite};
    color: black;
  }

  .ListItem {
    cursor: pointer;

    &:hover {
      color:  #a2a59e;
    }
  }

  /* #statistics:focus + .dropdown {
    display: grid;
  } */
`;
