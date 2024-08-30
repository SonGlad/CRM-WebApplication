import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getStatus, getTimeZone } from "../../../redux/Lead/lead-operation";
import { useLead } from "../../../hooks/useLead";


export const useTableHook = () => {
  const [isMenuBox, setMenuBox] = useState(false);
  const [inputVisible, setInputVisible] = useState({ row: null, cell: null, leadId: null });
  const [index, setIndex] = useState()
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

    const {
    isLeads,
    } = useLead();



  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };


  const handleTextareaChange = (event) => {
    adjustTextareaHeight(event.target);
  };


  const toggleInputVisibility = (row, cell, leadId) => {
    setIndex(leadId)
    switch (cell) {
      case "status":
        dispatch(getStatus())
        break;
         case "timeZone":
        dispatch(getTimeZone())
        break;
      default:
    }

        setMenuBox(isMenuBox === false ? row : false);
    setInputVisible(
      inputVisible.row === row && inputVisible.cell === cell
        ? { row: null, cell: null }
        : { row, cell, leadId }
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
           isLeads[isLeads.length - 1]._id !== index? rect.top - dropdownRef.current.clientHeight * 0.9 : rect.top - dropdownRef.current.clientHeight * 1.11
          }px`;
          dropdownContainer.style.left = `${rect.right + window.scrollX}px`;
        }
        if (dropdownContainer && inputVisible.cell === "timeZone") {
          dropdownContainer.style.display = "flex";
          dropdownContainer.style.left = `${
            (rect.right + window.scrollX) / 1.125
          }px`;
        }
      }
    }
  }, [inputVisible, isLeads, index]);


  const handleKeyPress = useCallback((event) => {
    if (event.key === "Escape") {
      setMenuBox(false);
      setInputVisible({ row: null, cell: null });
    }
  },[]);


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


  return {
    inputVisible,
    inputRef,
    isMenuBox,
    dropdownRef,
    setInputVisible,
    setMenuBox,
    handleTextareaChange,
    toggleUserMenuDropArrow,
    toggleInputVisibility,
  };
};

