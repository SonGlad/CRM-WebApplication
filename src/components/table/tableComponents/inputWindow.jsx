import { useDispatch } from "react-redux";
import {
  patchCityLead,
  patchCountryLead,
  patchRegionLead,
} from "../../../redux/Lead/lead-operation";
import { useState } from "react";
import { useLead } from "../../../hooks/useLead";

export const InputWindow = ({
  leads,
  inputVisible,
  inputRef,
  setLeads,
  handleTextareaChange,
  setInputVisible,
  dropdownRef,
  handleDropdownItemClick,
}) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");

    const {
    status: tstatusData,
    timeZone: timeZoneData,
    isStatusLoading,
    isTimeZoneLoading,
    isStatusError,
  } = useLead();
  const loading = "Loading...";

  const handleInputChange = (event) => {
    setNewText(event.target.value);
  };

  const handleSubmit = (e, leadIndex, fieldName, leadId) => {
    e.preventDefault();

    switch (fieldName) {
      case "city":
        dispatch(patchCityLead({ id: leadId, leadCity: newText })).then(
          (response) => {
            if (response.payload.name) {
              const updatedLeads = [...leads];
              updatedLeads[leadIndex] = {
                ...updatedLeads[leadIndex],
                city: newText,
              };
              setLeads(updatedLeads);
              setNewText("");
              setInputVisible({ row: null, cell: null, leadId: null });
            }
          }
        );
        break;

      case "region":
        dispatch(patchRegionLead({ id: leadId, leadRegion: newText })).then(
          (response) => {
            if (response.payload.name) {
              const updatedLeads = [...leads];
              updatedLeads[leadIndex] = {
                ...updatedLeads[leadIndex],
                region: newText,
              };
              setLeads(updatedLeads);
              setNewText("");
              setInputVisible({ row: null, cell: null, leadId: null });
            }
          }
        );
        break;

      case "country":
        if (fieldName === "country") {
          dispatch(patchCountryLead({ id: leadId, leadCountry: newText })).then(
            (response) => {
              if (response.payload.name) {
                const updatedLeads = [...leads];
                updatedLeads[leadIndex] = {
                  ...updatedLeads[leadIndex],
                  country: newText,
                };
                setLeads(updatedLeads);
                setNewText("");
                setInputVisible({ row: null, cell: null, leadId: null });
              }
            }
          );
        }
        break;
      default:
    }
  };

  if (isStatusError) {
    return <div>Oooops something wrong</div>;
  }

  return (
    <>
      {inputVisible.row !== null &&
        inputVisible.cell !== null &&
        inputVisible.cell !== "status" &&
        inputVisible.cell !== "timeZone" && (
          <form className="InputContainer" ref={inputRef}>
            <input
              value={newText}
              onChange={handleInputChange}
              onInput={handleTextareaChange}
            />
            <button
              className="ButtonSave"
              type="submit"
              onClick={(e) =>
                handleSubmit(
                  e,
                  inputVisible.row,
                  inputVisible.cell,
                  inputVisible.leadId
                )
              }
            >
              Save
            </button>
          </form>
        )}
      {inputVisible.row !== null &&
        inputVisible.cell !== null &&
        inputVisible.cell === "status" && (
          <ul className="dropdown" ref={dropdownRef}>
            {!isStatusLoading
              ? tstatusData.map((status, item) => (
                  <li
                    className="ListItem"
                    key={item}
                    value={status}
                    onClick={() =>
                      handleDropdownItemClick(
                        inputVisible.row,
                        status,
                        "status",
                        inputVisible.leadId
                      )
                    }
                  >
                    {status}
                  </li>
                ))
              : loading.split("").map((load, item) => (
                  <li className="ListItem" key={item}>
                    {load}
                  </li>
                ))}
          </ul>
        )}

      {inputVisible.row !== null && inputVisible.cell === "timeZone" && (
        <ul className="dropdown" ref={dropdownRef}>
          {!isTimeZoneLoading
            ? timeZoneData.map((zona, item) => (
                <li
                  className="ListItem"
                  key={item}
                  value={zona}
                  onClick={() =>
                    handleDropdownItemClick(
                      inputVisible.row,
                      zona,
                      "timeZone",
                      inputVisible.leadId
                    )
                  }
                >
                  {zona}
                </li>
              ))
            : loading.split("").map((load, item) => (
                <li className="ListItem" key={item}>
                  {load}
                </li>
              ))}
        </ul>
      )}
    </>
  );
};
