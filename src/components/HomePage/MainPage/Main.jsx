import { StyledMainPage } from "./Main.styled";
import { useUser } from "../../../hooks/useUser";


export const Main = () => {
    const {userOffice} = useUser(); 
    console.log(userOffice);


    return(
        <StyledMainPage>
            <div className="wraper">
                <h1>MAIN PAGE</h1>
            </div>
        </StyledMainPage>
    );
};