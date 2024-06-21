import { NewUserStyled } from "./NewUser.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import {ReactComponent as ArrowIcon} from "../../../images/svg-icons/arrow-down.svg";
import { useRef, useState, useCallback, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useUser } from "../../../hooks/useUser";



export const NewUser = ({handleClickClose}) => {
    const [isOfficeOpen, setOfficeOpen] = useState(false);
    const [isRoleOpen, setRoleOpen] = useState(false);
    const [isSelectOffice, setSelectOffice] = useState('Select');
    const [isSelectRole, setSelectRole] = useState('Select');
    const [isPassword, setPassword] = useState('')
    const selectedOffice = useRef(null);
    const selectedRole = useRef(null);
    const { isAdmin } = useAuth();
    const {userSelectOffice, userSelectRole} = useUser();


    const toggleOfficeSelectDrop = () => {
        setOfficeOpen(prevState => !prevState);
    };
    const toggleLeadSelectDrop = () => {
        setRoleOpen(prevState => !prevState)
    };


    const toggleOfficeDropCont = () => {
        return isOfficeOpen ? 'office-list-open' : '';
    };
    const toggleOfficeDropArrow = () => {
        return isOfficeOpen ? 'arrow-svg-active' : '';
    };
    const toggleRoleDropCont = () => {
        return isRoleOpen ? 'role-list-open' : '';
    };
    const toggleRoleDropArrow = () => {
        return isRoleOpen ? 'arrow-svg-active' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOfficeOpen(false);
            setRoleOpen(false);
            setSelectOffice("Select");
            setSelectRole("Select");
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        if (selectedOffice.current && !selectedOffice.current.contains(event.target)) {
          setOfficeOpen(false);
        }
        if (selectedRole.current && !selectedRole.current.contains(event.target)) {
            setRoleOpen(false);
        }
    },[]);


    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
          document.removeEventListener('click', handleBackgroundClick);
        };
    },[handleBackgroundClick, handleKeyPress]);



    const formatOfficeName = (office) => {
        return office.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };
    const formatdRoles = userSelectRole.filter(({ role }) => 
        role !== 'Manager' && role !== 'Administrator' && role !== 'Developer'
    );
    const showInputForOfficeSelect = (office) => {
        setSelectOffice(office);
    };
    const showInputForRoleSelect = (role) => {
        setSelectRole(role);
    };


    const generatePassword = () => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const minLength = 8;
        const maxLength = 50;
        const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        
        let password = "";
        for (let i = 0; i < passwordLength; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset[randomIndex];
        }

        setPassword(password);
    };
    


    return(
        <NewUserStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Create New User</h1>
            <form className="user-form">
                <label className="input-label" id='userName'>
                    <input 
                        type="text" 
                        className="userName"
                        id="userName"
                        name="userName"
                        placeholder="User Name"
                    />
                </label>
                <label className="input-label" id='userEmail'>
                    <input 
                        type="email" 
                        className="userEmail"
                        id="userEmail"
                        name="userEmail"
                        placeholder="User Email"
                    />
                </label>
                <label className="input-label for-password">
                    <input 
                        type="text" 
                        className="userPassword"
                        id="userPassword"
                        name="userPassword"
                        placeholder="User Password"
                        value={isPassword}
                    />
                    <button type="button" className="password-button" onClick={generatePassword}>
                        Generate Password
                    </button>
                </label>
                <div className="select-block">
                    {isAdmin && (
                        <div className="select-cont" ref={selectedOffice} onClick={toggleOfficeSelectDrop}>
                            <p>Select Office</p>
                            <div className="office-block">
                                <span className="office-value">{isSelectOffice}</span>
                                <ArrowIcon className={`arrow-svg ${toggleOfficeDropArrow ()}`}/>
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
                                {formatdRoles.map(({role}, index) => (
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
                    <button className="submit-button" type="submit">
                        Create User
                    </button>
                    <button className="reset-button" type="button">
                        Cancel
                    </button>
                </div>
            </form>
        </NewUserStyled>
    );
};