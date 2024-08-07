
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { patchNextCall } from "../../../redux/Lead/lead-operation";

export const NextCall = ({ lead }) => {
  const [newDate, setNewDate] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    if (lead.nextCall) {
      setNewDate(lead.nextCall.toString().slice(0, 16));
    }
  }, [lead.nextCall]);

  const handleInputChange = (event) => {
    const updatedDate = event.target.value;
    dispatch(patchNextCall({ id: lead._id, leadNextcall: updatedDate }))
      .then((response) => {
        if (response.payload.nextCall) {
          setNewDate(updatedDate);
        }
      })
  };

  return (
    <td className="TableHeaderItem">
      <label>
        <input
          type="datetime-local"
          value={newDate}
          onChange={handleInputChange}
        />
      </label>
    </td>
  );
};

