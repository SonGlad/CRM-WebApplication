import { useSelector } from 'react-redux';
import {
    selectOffice,
    selectRole,
    selectActiveOffice,
    selectUserLoading, 
    selectUserError,
    selectAllUsers,
} from "../redux/User/user-selectors";


export const useUser = () => {
    const userSelectOffice = useSelector(selectOffice);
    const userSelectRole = useSelector(selectRole);
    const userLoading = useSelector(selectUserLoading);
    const userError = useSelector(selectUserError);
    const userOffice = useSelector(selectActiveOffice);
    const allUsers = useSelector(selectAllUsers);


    return {
        userSelectOffice,
        userSelectRole,
        userLoading,
        userError,
        userOffice,
        allUsers,
    };
};