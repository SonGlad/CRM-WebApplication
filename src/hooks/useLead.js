import { useSelector } from 'react-redux';
import {
    selectActiveOffice,
    selectLeadsLoader,
    selectLeadsError,
    selectLeadResponce,
    selectLeads,
    selectNewLead,
} from "../redux/Lead/lead-selectors";


export const useLead = () => {
    const leadOffice = useSelector(selectActiveOffice);
    const isLeadLoading = useSelector(selectLeadsLoader);
    const isLeadsError = useSelector(selectLeadsError);
    const isNewLeadDataResponce = useSelector(selectLeadResponce);
    const isLeads = useSelector(selectLeads);
    const newLead = useSelector(selectNewLead);


    return {
        leadOffice,
        isLeadLoading,
        isLeadsError,
        isNewLeadDataResponce,
        isLeads,
        newLead,
    };
};