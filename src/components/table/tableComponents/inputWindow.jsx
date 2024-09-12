import { useDispatch } from "react-redux";
import {
  patchCityLead,
  patchCountryLead,
  patchRegionLead,
} from "../../../redux/Lead/lead-operation";
import { useState } from "react";

export const InputWindow = ({
  inputVisible,
  inputRef,
  handleTextareaChange,
  setInputVisible,
}) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");


  const handleInputChange = (event) => {
    setNewText(event.target.value);
  };

  const handleSubmit = (e, leadIndex, fieldName, leadId) => {
    e.preventDefault();

    switch (fieldName) {
      case "city":
        dispatch(patchCityLead({ id: leadId, leadCity: newText }))
        setNewText("");
        setInputVisible({ row: null, cell: null, leadId: null });
      break;

      case "region":
        dispatch(patchRegionLead({ id: leadId, leadRegion: newText }))
        setNewText("");
        setInputVisible({ row: null, cell: null, leadId: null });
      break;

      case "country":
        if (fieldName === "country") {
          dispatch(patchCountryLead({ id: leadId, leadCountry: newText }))
          setNewText("");
          setInputVisible({ row: null, cell: null, leadId: null });
        }
      break;
      
      default:
    }
  };

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
    </>
  );
};
