import { useDispatch } from "react-redux";
import { useLead } from "../../../hooks/useLead";
import { patchStatus} from "../../../redux/Lead/lead-operation";

export const DropdownStatus = ({ inputVisible, dropdownRef, leads, setLeads, setInputVisible}) => {
    const dispatch = useDispatch();

    const { status: tstatusData, isStatusLoading, isStatusError} = useLead()
    const loading = "Loading...";

    const handleDropdownItemClick = (e, leadIndex, status, leadId) => {
        e.preventDefault();
          dispatch(patchStatus({ id: leadId, leadStatus: status })).then(
          (response) => {
            if (response.payload.name) {
              const updatedLeads = [...leads];
              updatedLeads[leadIndex] = {
                ...updatedLeads[leadIndex],
                status: status,
              };
              setLeads(updatedLeads);
              setInputVisible({ row: null, cell: null, leadId: null });
            }
          }
        );
  };

    
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
                            onClick={(e) => handleDropdownItemClick(e, inputVisible.row, status, inputVisible.leadId)}
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
