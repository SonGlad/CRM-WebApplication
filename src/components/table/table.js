import { TableList } from "./table.styled";
import { useEffect, useState, useRef } from "react";
import leadsData from "./leads.json";
import statusData from "./status.json";
import timeZoneData from "./timeZone.json";
import { ReactComponent as ArrowDown } from "../../images/svg-icons/arrow-down.svg";

export function Table() {
  const [leads, setLeads] = useState(leadsData);
  // const [dropdownVisible, setDropdownVisible] = useState(null);
  const [isMenuBox, setMenuBox] = useState(false);
  const [inputVisible, setInputVisible] = useState({ row: null, cell: null });
  const inputRef = useRef(null);

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

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleTextareaChange = (event) => {
    adjustTextareaHeight(event.target);
  };

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      adjustTextareaHeight(textarea);
    });
  }, [leads]);

  // const handleDropdownClick = (leadIndex) => {
  //   setDropdownVisible(dropdownVisible === leadIndex ? null : leadIndex);
  // };

  const handleDropdownItemClick = (leadIndex, status) => {
    const updatedLeads = [...leads];
    updatedLeads[leadIndex].status = status;
    setLeads(updatedLeads);
    // setDropdownVisible(null); 
  };

  const calculateClientTime = (timeZoneOffset) => {
    const currentTime = new Date();
    const clientTime = new Date(
      currentTime.getTime() + timeZoneOffset * 60 * 60 * 1000
    );
    return clientTime.toLocaleString();
  };

  const toggleInputVisibility = (row, cell) => {
    setMenuBox(isMenuBox === row ? null : row);
    setInputVisible(
      inputVisible.row === row && inputVisible.cell === cell
        ? { row: null, cell: null }
        : { row, cell }
    );
  };

  const toggleUserMenuDropArrow = (row, cell) => {
    return inputVisible.row === row && inputVisible.cell === cell
      ? "arrow-svg-close"
      : "";
  };

  useEffect(() => {
    if (inputVisible.row !== null && inputVisible.cell !== null) {
      const inputElement = document.getElementById(
        `${inputVisible.cell}-${inputVisible.row}`
      );
      const inputContainer = inputRef.current;
      if (inputElement && inputContainer) {
        const rect = inputElement.getBoundingClientRect();
        inputContainer.style.top = `${
          rect.top + window.scrollY + rect.height
        }px`;
        inputContainer.style.left = `${rect.left + window.scrollX}px`;
        // inputContainer.style.width = `${rect.width}px`;
      }
    }
  }, [inputVisible]);

  return (
    <TableList>
      <table className="Table">
        <thead className="TableHeader">
          <tr className="TableHeaderList">
            <th className="TableHeaderItem">Client Id</th>
            <th className="TableHeaderItem">Name</th>
            <th className="TableHeaderItem">Last Name</th>
            <th className="TableHeaderItem">Email</th>
            <th className="TableHeaderItem">Phone</th>
            <th className="TableHeaderItem">Status</th>
            <th className="TableHeaderItem">Source</th>
            <th className="TableHeaderItem">Country</th>
            <th className="TableHeaderItem">Region</th>
            <th className="TableHeaderItem">City</th>
            <th className="TableHeaderItem">Time Zone</th>
            <th className="TableHeaderItem">Client Time</th>
            <th className="TableHeaderItem">Self created</th>
            <th className="TableHeaderItem">Last update</th>
            <th className="TableHeaderItem">Created At</th>
            <th className="TableHeaderItem">Agent</th>
            <th className="TableHeaderItem">Next call</th>
          </tr>
        </thead>
        <tbody>
          {leads &&
            leads.map((lead, index) => (
              <tr className="WordList" key={lead._id}>
                <td className="TableHeaderItem">{lead.clientId}</td>
                <td className="TableHeaderItem">{lead.name}</td>
                <td className="TableHeaderItem" id={`lastName-${index}`}>
                  {lead.lastName}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "lastName")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "lastName"
                    )}`}
                  />
                </td>
                <td className="TableHeaderItem" id={`email-${index}`}>
                  {lead.email}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "email")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "email"
                    )}`}
                  />
                </td>
                <td className="TableHeaderItem" id={`phone-${index}`}>
                  {lead.phone}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "phone")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "phone"
                    )}`}
                  />
                </td>
                {/* <td
                  className="TableHeaderItem custom-input"
                  onClick={() => handleDropdownClick(index)}
                >
                  <input
                    id="statistics"
                    name="statistics"
                    className="Input"
                    type="text"
                    placeholder="Categories"
                    value={lead.status}
                    readOnly
                  />
                  <ul
                    className="dropdown"
                    style={{
                      display: dropdownVisible === index ? "grid" : "none",
                    }}
                  >
                    {statusData.map((statu, item) => (
                      <li
                        className="ListItem"
                        key={item}
                        value={statu}
                        onClick={() => handleDropdownItemClick(index, statu)}
                      >
                        {statu}
                      </li>
                    ))}
                  </ul>
                </td> */}
                <td className="TableHeaderItem" id={`status-${index}`}>
                  {lead.status}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "status")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "status"
                    )}`}
                  />
                </td>
                    
                   <ul
                    className="dropdown"
                    style={{
                      display: inputVisible.cell === "status" ? "grid" : "none",
                    }}
                  >
                  {inputVisible.row !== null && inputVisible.cell === "status" && 
                    statusData.map((statu, item) => (
                      <li
                        className="ListItem"
                        key={item}
                        value={statu}
                        onClick={() => handleDropdownItemClick(index, statu)}
                      >
                        {statu}
                      </li>
                    ))
                  }
                  </ul>
                <td className="TableHeaderItem" id={`resource-${index}`}>
                  {lead.resource}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "resource")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "resource"
                    )}`}
                  />
                </td>
                <td className="TableHeaderItem" id={`country-${index}`}>
                  {lead.country}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "country")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "country"
                    )}`}
                  />
                </td>
                <td className="TableHeaderItem" id={`region-${index}`}>
                  {lead.region}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "region")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "region"
                    )}`}
                  />
                </td>
                         <td className="TableHeaderItem" id={`city-${index}`}>
                  {lead.city}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "city")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "city"
                    )}`}
                  />
                </td>

                <td className="TableHeaderItem">
                  <select
                    value={lead.timeZone}
                    onChange={(e) => handleInputChange(e, index, "timeZone")}
                  >
                    {timeZoneData.map((time, item) => (
                      <option key={item} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="TableHeaderItem">
                  {calculateClientTime(lead.timeZone)}
                </td>
                <td className="TableHeaderItem">
                  {lead.selfCreated ? "Yes" : "No"}
                </td>
                <td className="TableHeaderItem">
                  {lead.latestComment.updatedAt.slice(0, 19).replace("T", " ")}
                </td>
                <td className="TableHeaderItem">
                  {lead.latestComment.createdAt.slice(0, 19).replace("T", " ")}
                </td>
                <td
                  className="TableHeaderItem"
                  style={{ background: lead.assigned ? "none" : "#ff000082" }}
                >
                  {lead.conAgentId}
                </td>
                <td className="TableHeaderItem">
                  <label>
                    <input
                      type="datetime-local"
                      value={lead.latestComment.nextCall
                        .toString()
                        .slice(0, 16)}
                      onChange={(e) =>
                        handleInputChange(e, index, "latestComment.nextCall")
                      }
                      onInput={handleTextareaChange}
                    />
                  </label>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {inputVisible.row !== null && inputVisible.cell !== null &&  inputVisible.cell !== "status" && (
        <form className="InputContainer" ref={inputRef}>
          <input
            value={leads[inputVisible.row][inputVisible.cell]}
            onChange={(e) =>
              handleInputChange(e, inputVisible.row, inputVisible.cell)
            }
            onInput={handleTextareaChange}
          />
          <button className="ButtonSave" type="submit">
            Save
          </button>
        </form>
      )}
    </TableList>
  );
}
