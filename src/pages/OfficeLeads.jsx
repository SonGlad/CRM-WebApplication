import { OfficeLeads } from "../components/OfficeLeads/OfficeLeads";
import { UserLeads } from "../components/OfficeLeads/UserLeads";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAvailableUsers } from "../redux/User/user-operation";



const OfficeLeadsPage = () => {
    const dispatch = useDispatch();
    const { userLeadsComponent } = useUser();
    const { isAdmin, forNoneAdminLogin} = useAuth();


    useEffect(() => {
        if (!forNoneAdminLogin && !userLeadsComponent && !isAdmin) {
            dispatch(getAvailableUsers());
        }
    },[dispatch, forNoneAdminLogin, isAdmin, userLeadsComponent]);


    return(
        <>
            {userLeadsComponent ? (
                <UserLeads/>
            ) : (
                <OfficeLeads/>
            )}
        </>
    );
};


export default OfficeLeadsPage;