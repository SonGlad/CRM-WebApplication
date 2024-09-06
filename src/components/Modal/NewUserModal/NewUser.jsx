import { NewUserStyled } from "./NewUser.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { useRef, useState, useCallback, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useUser } from "../../../hooks/useUser";
import { useModal } from "../../../hooks/useModal";
import { NewUserSchema } from "../../../utils/validationSchemas";
import { ShowRules } from "../../../utils/showRules";
import { useFormik } from "formik";
import { inregister } from "../../../redux/Auth/auth-operation";
import { useDispatch } from "react-redux";
import { updatingNewUserResponceData, updatingNewUser } from "../../../redux/Auth/auth-slice";
import { UserForm } from "./UserForm";
import { UserResponce } from "./UserResponce";



export const NewUser = ({handleClickClose}) => {
    const dispatch = useDispatch();
    const [isCopied, setIsCopied] = useState(false);
    const [isOfficeOpen, setOfficeOpen] = useState(false);
    const [isRoleOpen, setRoleOpen] = useState(false);
    const [isFormChanged, setFormChanged] = useState(false);
    const [isSelectOffice, setSelectOffice] = useState('Select');
    const [isSelectRole, setSelectRole] = useState('Select');
    const selectedOffice = useRef(null);
    const selectedRole = useRef(null);
    const { userSelectOffice, userSelectRole } = useUser();
    const { isSuccess } = useModal();
    const { 
        isAdmin, 
        authNewUserName, 
        authNewUserEmail, 
        authNewUserPassword, 
        authNewUserRole, 
        authNewUserBranch, 
        isNewUserResponceData, 
        authError,
        userBranch,
    } = useAuth();


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
    const formatOfficeNameToShow = (isSelectOffice) => {
        return isSelectOffice.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };
    const formatedRoles = userSelectRole.filter(({ role }) => 
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

        setFieldValue('userPassword', password);
    };


    const {
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        setFieldValue,
    } = useFormik({
        initialValues: {
            userName: "",
            userEmail: "",
            userPassword: "",
        },
    
        validationSchema: NewUserSchema,
    
        onSubmit: (values) => {
            if (isAdmin) {
                dispatch(inregister({
                    username: values.userName,
                    email: values.userEmail,
                    password: values.userPassword,
                    role: isSelectRole,
                    branch: isSelectOffice,
                }))
            } else {
                dispatch(inregister({
                    username: values.userName,
                    email: values.userEmail,
                    password: values.userPassword,
                    role: isSelectRole,
                    branch: userBranch,
                })) 
            }
            resetForm();
            setSelectOffice('Select');
            setSelectRole('Select');
        },
    });

    
    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors);


    useEffect(() => {
        const areCommonFieldsFilled = 
            values.userName !== '' &&
            values.userPassword !== '' &&
            values.userEmail !== '' &&
            isSelectRole !== 'Select';
    
        const areAdminFieldsFilled = areCommonFieldsFilled && isSelectOffice !== 'Select';
    
        setFormChanged(isAdmin ? areAdminFieldsFilled : areCommonFieldsFilled);
    }, [isAdmin, isSelectOffice, isSelectRole, values.userEmail, values.userName, values.userPassword]);


    const handleCancel = () => {
        resetForm();
        setFormChanged(false);
        setSelectOffice('Select');
        setSelectRole('Select');
    };


    const handleCopy = () => {
        const userData = `
            Name: ${authNewUserName}
            Email: ${authNewUserEmail}
            Password: ${authNewUserPassword}
        `.trim();
        
        navigator.clipboard.writeText(userData).then(() => {
            setIsCopied(true);
        });
    };


    const forDoneButton = () => {
        setIsCopied(false);
        handleClickClose();
        dispatch(updatingNewUserResponceData());
        dispatch(updatingNewUser());
    };


    const forContinueButton = () => {
        dispatch(updatingNewUserResponceData());
        dispatch(updatingNewUser());
    };
  

    return(
        <NewUserStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Create New User</h1>
            {!isNewUserResponceData ? (
                <UserForm
                    handleSubmit={handleSubmit}
                    getInputClass={getInputClass}
                    getInputAlert={getInputAlert}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    generatePassword={generatePassword}
                    toggleOfficeSelectDrop={toggleOfficeSelectDrop}
                    formatOfficeNameToShow={formatOfficeNameToShow}
                    isAdmin={isAdmin}
                    isSelectOffice={isSelectOffice}
                    toggleOfficeDropArrow={toggleOfficeDropArrow}
                    toggleOfficeDropCont={toggleOfficeDropCont}
                    userSelectOffice={userSelectOffice}
                    showInputForOfficeSelect={showInputForOfficeSelect}
                    formatOfficeName={formatOfficeName}
                    toggleLeadSelectDrop={toggleLeadSelectDrop}
                    isSelectRole={isSelectRole}
                    toggleRoleDropArrow={toggleRoleDropArrow}
                    toggleRoleDropCont={toggleRoleDropCont}
                    formatedRoles={formatedRoles}
                    showInputForRoleSelect={showInputForRoleSelect}
                    isValid={isValid}
                    isFormChanged={isFormChanged}
                    handleCancel={handleCancel}
                    selectedOffice={selectedOffice}
                    selectedRole={selectedRole}
                    userName={values.userName}
                    userEmail={values.userEmail.trim()}
                    userPassword={values.userPassword.trim()}
                />
            ) : (
                <UserResponce
                    isSuccess={isSuccess}
                    authNewUserName={authNewUserName}
                    authNewUserPassword={authNewUserPassword}
                    authNewUserRole={authNewUserRole}
                    isAdmin={isAdmin}
                    authNewUserBranch={authNewUserBranch}
                    isCopied={isCopied}
                    authError={authError}
                    handleCopy={handleCopy}
                    forContinueButton={forContinueButton}
                    forDoneButton={forDoneButton}
                />
            )}
        </NewUserStyled>
    );
};