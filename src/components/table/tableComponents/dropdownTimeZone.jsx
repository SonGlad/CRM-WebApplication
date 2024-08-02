import { useLead } from "../../../hooks/useLead";

export const DropdownTimeZone = ({ inputVisible, dropdownRef, handleDropdownItemClick }) => {

    const { timeZone: timeZoneData, isTimeZoneLoading } = useLead()

    const loading = "Loading...";

    return (
        <>
            {inputVisible.row !== null && inputVisible.cell === "timeZone" && (
                <ul className="dropdown" ref={dropdownRef}>
                    {!isTimeZoneLoading ? timeZoneData.map((zona, item) => (
                        <li
                            className="ListItem"
                            key={item}
                            value={zona}
                            onClick={() => handleDropdownItemClick(inputVisible.row, zona, "timeZone", inputVisible.leadId)}
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
