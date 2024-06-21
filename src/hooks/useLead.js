import { useSelector } from 'react-redux';
import {
    selectActiveOffice,
    selectLeadsLoader,
    selectLeadsError
} from "../redux/Lead/lead-selectors";


export const useLead = () => {
    const leadOffice = useSelector(selectActiveOffice);
    const isLeadLoading = useSelector(selectLeadsLoader);
    const isLeadsError = useSelector(selectLeadsError);


    return {
        leadOffice,
        isLeadLoading,
        isLeadsError,
    };
};