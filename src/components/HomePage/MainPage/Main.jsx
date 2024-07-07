import { StyledMainPage } from "./Main.styled";
import { useUser } from "../../../hooks/useUser";
import { Table } from "../../table/table";


export const Main = () => {
    const {userOffice} = useUser(); 
    console.log(userOffice);


    return(
        <StyledMainPage>
            <div className="wraper">
                <Table/>
            </div>
        </StyledMainPage>
    );
};