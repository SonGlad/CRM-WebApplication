import { useLead } from "../../../hooks/useLead";

export const DropdownStatus = ({ inputVisible, dropdownRef, handleDropdownItemClick }) => {


    const { status: tstatusData, isStatusLoading, isStatusError } = useLead()
    const loading = "Loading...";

    
    if (isStatusError) {
        return <div>Oooops something wrong</div>
    };
    

    return (
        <>
            {inputVisible.row !== null && inputVisible.cell === "status" && (
                <ul className="dropdown" ref={dropdownRef}>
                    {!isStatusLoading ? tstatusData.map((status, item) => (
                        <li
                            className="ListItem"
                            key={item}
                            value={status}
                            onClick={() => handleDropdownItemClick(inputVisible.row, status, "status", inputVisible.leadId)}
                        >
                            {status}
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
