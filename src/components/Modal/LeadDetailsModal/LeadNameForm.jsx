import { LeadNameFormStyled } from "./LeadNameForm.styled";
import {ReactComponent as UserIcon} from "../../../images/svg-icons/user.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/email.svg";
import { useDispatch } from "react-redux";
import { AsYouType } from 'libphonenumber-js';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { useFormik } from "formik";
import { ShowRules } from "../../../utils/showRules";
import { NewLeadFormSchema } from "../../../utils/validationSchemas";
import { useState, useEffect } from "react";
import {leadChangeBaseInfo} from "../../../redux/Lead/lead-operation";



export const LeadNameForm = ({leadDetailById}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formatedPhoneNumber, setFormatedPhoneNumber] = useState('');
    const [isFormChanged, setFormChanged] = useState(false);
    const dispatch = useDispatch();    
    

    useEffect(() => {
        if (leadDetailById) {
            const formatedPhoneNumber = leadDetailById.phone.replace(/\D/g, '');
            setFormatedPhoneNumber(formatedPhoneNumber);
            setPhoneNumber(formatedPhoneNumber);
        }
    },[leadDetailById]);


    const {
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        validateField,
    } = useFormik({
        initialValues: {
            leadName: leadDetailById.name,
            leadLastName: leadDetailById.lastName,
            leadEmail: leadDetailById.email,
            phone: leadDetailById.phone,
        },
        
        validationSchema: NewLeadFormSchema,

        onSubmit: (values) => {
            const phoneNumberWithPlus = '+' + phoneNumber;
            const formattedNumber = new AsYouType().input(phoneNumberWithPlus);
            const data = {
                leadId: leadDetailById._id,
                data: {
                    name: values.leadName,
                    lastName: values.leadLastName,
                    email: values.leadEmail,
                    phone: formattedNumber
                }
            }
            dispatch(leadChangeBaseInfo(data))
            setFormChanged(false);
        },
    });   


    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors); 
    
    
    useEffect(() => {
        if (phoneNumber) {
            setFieldValue('phone', phoneNumber);
            validateField('phone');
        }
    }, [phoneNumber, setFieldValue, validateField]);


    useEffect(() => {
        if(
            values.leadName !== (leadDetailById.name || '') ||
            values.leadLastName !== (leadDetailById.lastName || '') ||
            values.leadEmail !== (leadDetailById.email || '') ||
            phoneNumber !== (formatedPhoneNumber || '')
        ) {
            setFormChanged(true);
        } else {
            setFormChanged(false);
        }
    }, [
        leadDetailById.email, 
        leadDetailById.lastName, 
        leadDetailById.name,
        formatedPhoneNumber, 
        phoneNumber, 
        values.leadEmail, 
        values.leadLastName, 
        values.leadName
    ]);
   

    return(
        <LeadNameFormStyled onSubmit={handleSubmit}>
            <label className='input-label' htmlFor="leadName">
                <p>Name</p>
                <input
                    type="text"
                    className={getInputClass('leadName')}
                    id='leadName'
                    name="leadName"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.leadName}
                    onBlur={handleBlur}
                />
                {getInputAlert("leadName")}
                <UserIcon className="icon"/>
            </label>
            <label className='input-label' htmlFor="leadLastName">
                <p>Last Name</p>
                <input
                    type="text"
                    className={getInputClass('leadLastName')}
                    id='leadLastName'
                    name="leadLastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={values.leadLastName}
                    onBlur={handleBlur}
                />
                {getInputAlert('leadLastName')}
                <UserIcon className="icon"/>
            </label>
            <label className='input-label' htmlFor="leadEmail">
                <p>Email</p>
                <input
                    type="email"
                    className={getInputClass('leadEmail')}
                    id='leadEmail'
                    name="leadEmail"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.leadEmail}
                    onBlur={handleBlur}
                />
                {getInputAlert('leadEmail')}
                <EmailIcon className="icon"/>
            </label>
            <label className='input-label' htmlFor="phone">
                <p>Phone</p>
                <PhoneInput
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: false,
                        id: "phone",
                    }}
                    onBlur={handleBlur}
                    value={phoneNumber}
                    onChange={phone => {
                        handleChange({ target: { name: 'phone', value: phone } });
                        setPhoneNumber(phone);
                    }}
                    containerClass = 'input-label form-label-pnone'
                    inputClass = {`form-field-number ${getInputClass('phone')}`}
                    buttonClass = "dropdown-cont"
                    country='ua'
                    placeholder="Enter Phone Number"
                    autoFormat={true}
                    countryCodeEditable={false}
                    enableSearch={true}
                    disableSearchIcon={false}
                />
                {getInputAlert("phone")}
            </label>
            <button type="submit" className="submit-btn"
                disabled={!isValid || !isFormChanged}
            >Save
            </button>
        </LeadNameFormStyled>
    );
};