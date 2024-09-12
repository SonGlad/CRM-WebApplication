import { useState } from "react";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';


export const ShowRules = (values, touched, errors) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordNew, setShowPasswordNew] = useState(false);


  const getInputClass = (fieldName) => {
    return !values[fieldName]
      ? ""
      : touched && errors[fieldName]
      ? "ErrorInput"
      : "SuccessInput";
  };


  const getInputAlert = (fieldName) => {
    return !values[fieldName] ? (
      ""
    ) : touched && errors[fieldName] ? (
      <>
        <p className="ErrorText">{errors[fieldName]}</p>
        <div className="ImgError" />
      </>
    ) : (
      <>
        <p className="SuccessText">{`${fieldName} is correct`}</p>
        <div className="ImgCorrect" />
      </>
    );
  };


  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const getHidePassword = () => {
    return (
      <div
        className={showPassword ? "HidePassword" : "ShowPassword"}
        onClick={handleTogglePassword}
      />
    );
  };


  const handleTogglePasswordNew = () => {
    setShowPasswordNew((prevShowPasswordNew) => !prevShowPasswordNew);
  };


  const getHidePasswordNew = () => {
    return (
      <div
        className={showPasswordNew ? "HidePasswordNew" : "ShowPasswordNew"}
        onClick={handleTogglePasswordNew}
      />
    );
  };


  const formatDateTime = (dateString, timeZone = 'Europe/Kiev') => {
    const date = new Date(dateString);
    const zonedDate = toZonedTime(date, timeZone);

    const formattedDate = format(zonedDate, 'dd.MM.yyyy', { timeZone });
    const formattedTime = format(zonedDate, 'HH:mm', { timeZone });

    return `${formattedDate}, ${formattedTime}`;
  };


  const formatDateTimeFullMonth = (dateString, timeZone = 'Europe/Kiev') => {
    const date = new Date(dateString);
    const zonedDate = toZonedTime(date, timeZone);

    const formattedDate = format(zonedDate, 'dd MMMM yyyy', { timeZone });
    const formattedTime = format(zonedDate, 'HH:mm', { timeZone });

    return `${formattedDate}, ${formattedTime}`;
  };


  const formatBranchName = (branch) => {
    if (branch) {
      return branch.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    }
  };


  const formatOfficeName = (officeName) => {
    if (officeName) {
      return officeName.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    }
  }; 


  return { 
    showPassword, 
    showPasswordNew, 
    getInputClass, 
    getInputAlert, 
    getHidePassword, 
    getHidePasswordNew,
    formatDateTime,
    formatBranchName,
    formatOfficeName,
    formatDateTimeFullMonth,  
  };
};
