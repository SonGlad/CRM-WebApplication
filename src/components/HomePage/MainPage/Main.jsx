import { StyledMainPage } from "./Main.styled";
import { useUser } from "../../../hooks/useUser";
import { TableExternalLeads } from "../../table/tableExternalLeads/tableExternalLeads";



export const Main = () => {
  const { userOffice } = useUser();
  console.log(userOffice);

  
  return (
    <StyledMainPage>
      <div className="wraper">
        <h1>MAIN PAGE</h1>
        <TableExternalLeads />
      </div>
    </StyledMainPage>
  );
};
