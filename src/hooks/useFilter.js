import { useSelector } from "react-redux";
import {
    selectFilterLoader,
    selectFilterError,
} from "../redux/Filter/filter-selectors";


export const useModal = () => {
    const isFilterLoader = useSelector(selectFilterLoader);
    const isFilterError = useSelector(selectFilterError);


    return {
        isFilterLoader,
        isFilterError,
    }
};