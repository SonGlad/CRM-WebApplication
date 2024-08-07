import { useEffect } from "react";
import { Users } from "../components/Users/Users";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "../hooks/useUser";
import { getAllUsers } from "../redux/User/user-operation";
import { useDispatch } from "react-redux";


const UsersPage = () => {
    const {isAdmin, isManager, isConversionManager} = useAuth();
    const {userOffice} = useUser();
    const dispatch = useDispatch();


    useEffect(() => {
        if (isAdmin) {
            dispatch(getAllUsers(userOffice));
        }
        if (isManager || isConversionManager) {
            dispatch(getAllUsers())            
        }
    },[dispatch, isAdmin, isConversionManager, isManager, userOffice]);

    
    return(
        <>  
            <Users/>
        </>
    );
};


export default UsersPage;