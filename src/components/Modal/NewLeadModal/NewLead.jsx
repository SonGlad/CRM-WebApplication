import { NewLeadStyled } from "./NewLead.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { useRef, useState, useCallback, useEffect } from "react";
import { NewLeadFormSchema } from "../../../utils/validationSchemas";
import { ShowRules } from "../../../utils/showRules";
import { useFormik } from "formik";
import { useAuth } from "../../../hooks/useAuth";
import { useLead } from "../../../hooks/useLead";
import { useUser } from "../../../hooks/useUser";
import { useModal } from "../../../hooks/useModal";
import { useDispatch } from "react-redux";
import { AsYouType } from 'libphonenumber-js';
import { createNewLead } from "../../../redux/Lead/lead-operation";
import { updatingNewLeadDataResponce, updatingNewLead } from "../../../redux/Lead/lead-slice";
import { LeadResponce } from "./LeadResponce";
import { NewLeadForm } from "./NewLeadForm";


export const NewLead = ({handleClickClose}) => {
    const dispatch = useDispatch();
    const selectedOffice = useRef(null);
    const [isOfficeOpen, setOfficeOpen] = useState(false);
    const [isFormChanged, setFormChanged] = useState(false);
    const [isSelectOffice, setSelectOffice] = useState('External');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { isAdmin, userRole } = useAuth();
    const { userSelectOffice } = useUser();
    const { isSuccess } = useModal();
    const { isNewLeadDataResponce, isLeadsError, newLead } = useLead();


    const toggleOfficeSelectDrop = () => {
        setOfficeOpen(prevState => !prevState);
    };


    const toggleOfficeDropCont = () => {
        return isOfficeOpen ? 'office-list-open' : '';
    };
    const toggleOfficeDropArrow = () => {
        return isOfficeOpen ? 'arrow-svg-active' : '';
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setOfficeOpen(false);
            setSelectOffice("Select");
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        if (selectedOffice.current && !selectedOffice.current.contains(event.target)) {
          setOfficeOpen(false);
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
    const showInputForOfficeSelect = (office) => {
        setSelectOffice(office);
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
    } = useFormik({
        initialValues: {
            leadName: "",
            leadLastName: "",
            leadEmail: "",
            leadPhone: phoneNumber,
            resource: userRole,
            branch: isSelectOffice,
        },
    
        validationSchema: NewLeadFormSchema,

        onSubmit: (values) => {
            const phoneNumberWithPlus = '+' + phoneNumber;
            const formattedNumber = new AsYouType().input(phoneNumberWithPlus);

            const leadData = {
                name: values.leadName,
                lastName: values.leadLastName,
                email: values.leadEmail,
                phone: formattedNumber,
                resource: values.resource,
            };

            if (isAdmin && isSelectOffice !== 'External') {
                leadData.branch = isSelectOffice;
            }
  
            dispatch(createNewLead(leadData));
            resetForm();
            setSelectOffice('External');
            setPhoneNumber('');
        },
    });

    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors);
 

    useEffect(() => {
        if(
            values.leadName !== '' &&
            values.leadLastName !== '' &&
            values.leadEmail !== '' &&
            phoneNumber !== ''
        ) {
            setFormChanged(true);
        }
    }, [phoneNumber, values.leadEmail, values.leadLastName, values.leadName]);


    const handleCancel = () => {
        resetForm();
        setFormChanged(false);
        setSelectOffice('External');
        setPhoneNumber('');
    };


    const forDoneButton = () => {
        handleClickClose();
        dispatch(updatingNewLeadDataResponce());
        dispatch(updatingNewLead());
    };


    const forContinueButton = () => {
        dispatch(updatingNewLeadDataResponce());
        dispatch(updatingNewLead());
    };


    return (
        <NewLeadStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Create New Lead</h1>
            {!isNewLeadDataResponce ? (
                <NewLeadForm
                    phoneNumber={phoneNumber}
                    isAdmin={isAdmin}
                    selectedOffice={selectedOffice}
                    userSelectOffice={userSelectOffice}
                    isSelectOffice={isSelectOffice}
                    isValid={isValid}
                    isFormChanged={isFormChanged}
                    newLeadName={values.leadName}
                    newLeadLastName={values.leadLastName}
                    newLeadEmail={values.leadEmail}
                    handleSubmit={handleSubmit}
                    getInputClass={getInputClass}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    getInputAlert={getInputAlert}
                    setPhoneNumber={setPhoneNumber}
                    toggleOfficeSelectDrop={toggleOfficeSelectDrop}
                    formatOfficeNameToShow={formatOfficeNameToShow}
                    toggleOfficeDropArrow={toggleOfficeDropArrow}
                    toggleOfficeDropCont={toggleOfficeDropCont}
                    showInputForOfficeSelect={showInputForOfficeSelect}
                    formatOfficeName={formatOfficeName}
                    handleCancel={handleCancel}
                />
            ) : (
                <LeadResponce
                    isSuccess={isSuccess}
                    isAdmin={isAdmin}
                    isLeadsError={isLeadsError}
                    newLead={newLead}
                    forContinueButton={forContinueButton}
                    forDoneButton={forDoneButton}
                />
            )}
        </NewLeadStyled>
    );
};