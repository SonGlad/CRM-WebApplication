import { OfficeLeads } from "../components/OfficeLeads/OfficeLeads";
import { UserLeads } from "../components/OfficeLeads/UserLeads";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../hooks/useAuth";
import { useLead } from "../hooks/useLead";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllLeads } from "../redux/Lead/lead-operation";
import { getAvailableUsers } from "../redux/User/user-operation";



const OfficeLeadsPage = () => {
    const dispatch = useDispatch();
    const { userLeadsComponent } = useUser();
    const { leadOffice } = useLead();
    const { isAdmin, isManager, isConversion, forNoneAdminLogin} = useAuth();


    useEffect(() => {
        if (isAdmin && !userLeadsComponent) {
            dispatch(getAllLeads(leadOffice));
        }
        if ((isManager || isConversion) && !userLeadsComponent) {
            dispatch(getAllLeads());
        }
        if (!forNoneAdminLogin && !userLeadsComponent && !isAdmin) {
            dispatch(getAvailableUsers());
        }
    },[dispatch, forNoneAdminLogin, isAdmin, isConversion, isManager, leadOffice, userLeadsComponent]);


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