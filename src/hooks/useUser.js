import { useSelector } from 'react-redux';
import {
    selectOffice,
    selectRole,
    selectActiveOffice,
    selectUserLoading, 
    selectUserError,
} from "../redux/User/user-selectors";


export const useUser = () => {
    const userSelectOffice = useSelector(selectOffice);
    const userSelectRole = useSelector(selectRole);
    const userLoading = useSelector(selectUserLoading);
    const userError = useSelector(selectUserError);
    const userOffice = useSelector(selectActiveOffice);


    return {
        userSelectOffice,
        userSelectRole,
        userLoading,
        userError,
        userOffice,
    };
};