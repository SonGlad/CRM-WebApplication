import { StyledUsersPage } from "./Users.styled";
import { NavLink } from "react-router-dom";
import { resetOfficeState } from "../../redux/User/user-slice";
import { useDispatch } from "react-redux";
import { useUser } from "../../hooks/useUser";



export const Users = () => {
    const {userOffice} = useUser(); 
    const dispatch = useDispatch();
    console.log(userOffice);


    const resetStateForOffice = () => {
        dispatch(resetOfficeState())
    };


    return(
        <StyledUsersPage>
            <div className="wraper">
                <NavLink to='/' onClick={resetStateForOffice}>
                    <h1>Back</h1>
                </NavLink>
                <h2>USERS PAGE</h2>
            </div>
        </StyledUsersPage>
    );
};