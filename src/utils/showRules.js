import { useState } from "react";

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

  return { 
    showPassword, 
    showPasswordNew, 
    getInputClass, 
    getInputAlert, 
    getHidePassword, 
    getHidePasswordNew  
  };
};
