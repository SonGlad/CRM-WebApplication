import { StyledUserForm } from "./NewUser.styled";
import {ReactComponent as ArrowIcon} from "../../../images/svg-icons/arrow-down.svg";
import { forwardRef } from "react";


export const UserForm = forwardRef(({
    handleSubmit,
    getInputClass,
    getInputAlert,
    handleChange,
    handleBlur,
    generatePassword,
    isAdmin,
    toggleOfficeSelectDrop,
    formatOfficeNameToShow,
    isSelectOffice,
    toggleOfficeDropArrow,
    toggleOfficeDropCont,
    userSelectOffice,
    showInputForOfficeSelect,
    formatOfficeName,
    toggleLeadSelectDrop,
    isSelectRole,
    toggleRoleDropArrow,
    toggleRoleDropCont,
    formatedRoles,
    showInputForRoleSelect,
    isValid,
    isFormChanged,
    handleCancel,
    selectedOffice,
    selectedRole,
    userName,
    userEmail,
    userPassword
}, ref) => {

    return(
        <StyledUserForm onSubmit={handleSubmit}>
            <label className="input-label">
                <input 
                    type="text"
                    className={getInputClass("userName")}
                    id="userName"
                    name="userName"
                    placeholder="User Name"
                    onChange={handleChange}
                    value={userName}
                    onBlur={handleBlur}
                />
                {getInputAlert("userName")}
            </label>
            <label className="input-label">
                <input 
                    type="email" 
                    className={getInputClass("userEmail")}
                    id="userEmail"
                    name="userEmail"
                    placeholder="User Email"
                    onChange={handleChange}
                    value={userEmail}
                    onBlur={handleBlur}
                />
                {getInputAlert("userEmail")}
            </label>
            <label className="input-label">
                <input 
                    type="text" 
                    className={getInputClass("userPassword")}
                    id="userPassword"
                    name="userPassword"
                    placeholder="User Password"
                    onChange={handleChange}
                    value={userPassword}
                    onBlur={handleBlur}
                    onKeyDown={handleChange}
                />
                {getInputAlert("userPassword")}
            </label>
            <button type="button" className="password-button" 
                onClick={generatePassword}
            >
                Generate Password
            </button>
            <div className="select-block">
                {isAdmin && (
                    <div className="select-cont" ref={selectedOffice} onClick={toggleOfficeSelectDrop}>
                        <p>Select Office</p>
                        <div className="office-block">
                            <span className="office-value">{formatOfficeNameToShow(isSelectOffice)}</span>
                            <ArrowIcon className={`arrow-svg ${toggleOfficeDropArrow()}`}/>
                            <ul className={`office-list ${toggleOfficeDropCont()}`}>
                                {userSelectOffice.map(({office}, index) => (
                                    <li key={index} className="office-item" 
                                        onClick={() => showInputForOfficeSelect(office)}
                                    >
                                        <p>{formatOfficeName(office)}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                <div className="select-cont" ref={selectedRole} onClick={toggleLeadSelectDrop}>
                    <p>Select Role</p>
                    <div className="role-block">
                        <span className="role-value">{isSelectRole}</span>
                        <ArrowIcon className={`arrow-svg ${toggleRoleDropArrow()}`}/>
                        <ul className={`role-list ${toggleRoleDropCont()}`}>
                            {formatedRoles.map(({role}, index) => (
                                <li key={index} className="role-item"
                                    onClick={() => showInputForRoleSelect(role)}
                                >
                                    <p>{role}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="button-block">
                <button className="submit-button" 
                    type="submit"
                    disabled={!isValid || !isFormChanged}
                >
                    Create User
                </button>
                <button className="reset-button"
                    type="button"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </StyledUserForm>
    );
});


