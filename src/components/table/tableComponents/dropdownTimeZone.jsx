import { useDispatch } from "react-redux";
import { useLead } from "../../../hooks/useLead";
import { patchTimeZone } from "../../../redux/Lead/lead-operation";


export const DropdownTimeZone = ({ inputVisible, dropdownRef, setInputVisible}) => {
const dispatch = useDispatch();

    const { timeZone: timeZoneData, isTimeZoneLoading } = useLead()
    const loading = "Loading...";

    const handleDropdownItemClick = (e, leadIndex, zona, leadId) => {
        e.preventDefault();
        dispatch(patchTimeZone({ id: leadId, leadTimeZone: zona }))
        setInputVisible({ row: null, cell: null, leadId: null });
    };


    return (
        <>
            {inputVisible.row !== null && inputVisible.cell === "timeZone" && (
                <ul className="dropdown" ref={dropdownRef}>
                    {!isTimeZoneLoading ? timeZoneData.map((zona, item) => (
                        <li
                            className="ListItem"
                            key={item}
                            value={zona}
                            onClick={(e) => handleDropdownItemClick(e, inputVisible.row, zona, inputVisible.leadId)}
                        >
                            {zona}
                        </li>
                    )) : loading.split("").map((load, item) => (
                        <li
                        className="ListItem"
                            key={item}
                        >{load}</li>
                    ))}
                </ul>
            )}
        </>
    );
};
