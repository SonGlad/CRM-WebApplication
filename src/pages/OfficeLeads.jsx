import { OfficeLeads } from "../components/OfficeLeads/OfficeLeads";
import { UserLeads } from "../components/OfficeLeads/UserLeads";
import { useUser } from "../hooks/useUser";



const OfficeLeadsPage = () => {
    const {userLeadsComponent} = useUser();


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