import { TableList } from "./tableLeads.styled";
import { useEffect, useState, useRef, useCallback } from "react";
import leadsData from "./leads.json";
import statusData from "./status.json";
import timeZoneData from "./timeZone.json";
import { ReactComponent as ArrowDown } from "../../../images/svg-icons/arrow-down.svg";

export function TableLeads() {
  const [leads, setLeads] = useState(leadsData);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuBox, setMenuBox] = useState(false);
  const [inputVisible, setInputVisible] = useState({ row: null, cell: null });
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const handleDropdownItemClick = (leadIndex, status) => {
    const updatedLeads = [...leads];
    updatedLeads[leadIndex].status = status;
    setLeads(updatedLeads);
    setInputVisible({ row: null, cell: null });
  };

  const calculateClientTime = (timeZoneOffset) => {
    const clientTime = new Date(
      currentTime.getTime() + timeZoneOffset * 60 * 60 * 1000
    );
    return clientTime.toLocaleString();
  };

  const toggleInputVisibility = (row, cell) => {
    setMenuBox(isMenuBox === false ? row : false);
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
      const dropdownContainer = dropdownRef.current;
      if (inputElement && (inputContainer || dropdownContainer)) {
        const rect = inputElement.getBoundingClientRect();
        if (inputContainer) {
          inputContainer.style.top = `${
            rect.top + window.scrollY + rect.height
          }px`;
          inputContainer.style.left = `${rect.left + window.scrollX}px`;
        }
        if (dropdownContainer) {
          dropdownContainer.style.top = `${
            rect.top + window.scrollY + rect.height
          }px`;
          dropdownContainer.style.left = `${rect.left + window.scrollX}px`;
        }

        if (dropdownContainer && inputVisible.cell === "status") {
          dropdownContainer.style.display = "grid";
          dropdownContainer.style.top = `${
            (rect.top + window.scrollY + rect.height) / 2
          }px`;
          dropdownContainer.style.left = `${rect.right + window.scrollX}px`;
        }
        if (dropdownContainer && inputVisible.cell === "timeZone") {
          dropdownContainer.style.display = "flex";
          dropdownContainer.style.left = `${
            (rect.right + window.scrollX) / 1.36
          }px`;
        }
      }
    }
  }, [inputVisible]);

  const handleKeyPress = useCallback((event) => {
    if (event.key === "Escape") {
      setMenuBox(false);
      setInputVisible({ row: null, cell: null });
    }
  }, []);

  const handleBackgroundClick = useCallback((event) => {
    const target = event.target;
    if (
      !target.classList.contains("arrow-svg-close") &&
      ((inputRef.current && !inputRef.current.contains(event.target)) ||
        (dropdownRef.current && !dropdownRef.current.contains(event.target)))
    ) {
      setMenuBox(false);
      setInputVisible({ row: null, cell: null });
      return;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleBackgroundClick);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleBackgroundClick);
    };
  }, [handleBackgroundClick, handleKeyPress]);

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
                <td className="TableHeaderItem" id={`timeZone-${index}`}>
                  {lead.city}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "timeZone")}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "timeZone"
                    )}`}
                  />
                </td>
                <td className="TableHeaderItem">
                  {calculateClientTime(lead.timeZone)}
                </td>
                <td className="TableHeaderItem">
                  {lead.selfCreated ? "Yes" : "No"}
                </td>
                <td className="TableHeaderItem">
                  {lead.latestComment.updatedAt.slice(0, 16).replace("T", " ")}
                </td>
                <td className="TableHeaderItem">
                  {lead.latestComment.createdAt.slice(0, 16).replace("T", " ")}
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
      {inputVisible.row !== null &&
        inputVisible.cell !== null &&
        inputVisible.cell !== "status" &&
        inputVisible.cell !== "timeZone" && (
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
      {inputVisible.row !== null && inputVisible.cell === "status" && (
        <ul className="dropdown" ref={dropdownRef}>
          {statusData.map((statu, item) => (
            <li
              className="ListItem"
              key={item}
              value={statu}
              onClick={() => handleDropdownItemClick(inputVisible.row, statu)}
            >
              {statu}
            </li>
          ))}
        </ul>
      )}
      {inputVisible.row !== null && inputVisible.cell === "timeZone" && (
        <ul className="dropdown" ref={dropdownRef}>
          {timeZoneData.map((zona, item) => (
            <li
              className="ListItem"
              key={item}
              value={zona}
              onClick={() => handleDropdownItemClick(inputVisible.row, zona)}
            >
              {zona}
            </li>
          ))}
        </ul>
      )}
    </TableList>
  );
}
