
export const NextCall = ({leads, lead, setLeads, index, handleTextareaChange }) => {
    
          const handleInputChange = (event, leadIndex, fieldName) => {
    const updatedLeads = [...leads];
    const fieldParts = fieldName.split(".");
    if (fieldParts.length === 2) {
      updatedLeads[leadIndex][fieldParts[0]][fieldParts[1]] =
        event.target.value;
    } else {
      updatedLeads[leadIndex][fieldName] = event.target.value;
    }
    setLeads(updatedLeads);
  };

    return (
                <td className="TableHeaderItem">
                  <label>
                    <input
                      type="datetime-local"
                      value={lead.latestComment.nextCall && lead.latestComment.nextCall
                        .toString()
                        .slice(0, 16)}
                      onChange={(e) =>
                        handleInputChange(e, index, "latestComment.nextCall")
                      }
                      onInput={handleTextareaChange}
                    />
                  </label>
                </td>
    );
};
