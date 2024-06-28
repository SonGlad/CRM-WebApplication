import { StyledNewLeadForm } from "./NewLead.styled";
import {ReactComponent as UserIcon} from "../../../images/svg-icons/user.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/email.svg";
import {ReactComponent as ArrowIcon} from "../../../images/svg-icons/arrow-down.svg";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';


export const NewLeadForm = ({
    handleSubmit,
    getInputClass,
    handleChange,
    handleBlur,
    getInputAlert,
    newLeadName,
    newLeadLastName,
    newLeadEmail,
    phoneNumber,
    setPhoneNumber,
    isAdmin,
    selectedOffice,
    toggleOfficeSelectDrop,
    formatOfficeNameToShow,
    toggleOfficeDropArrow,
    toggleOfficeDropCont,
    userSelectOffice,
    isSelectOffice,
    showInputForOfficeSelect,
    formatOfficeName,
    isValid,
    isFormChanged,
    handleCancel,
}) => {


    return(
        <StyledNewLeadForm onSubmit={handleSubmit}>
            <label className='input-label' htmlFor="leadName">
                <input
                    type="text"
                    className={getInputClass('leadName')}
                    id='leadName'
                    name="leadName"
                    placeholder="Name"
                    onChange={handleChange}
                    value={newLeadName}
                    onBlur={handleBlur}
                />
                {getInputAlert("leadName")}
                <UserIcon className="icon"/>
            </label>
            <label className='input-label' htmlFor="leadlastName">
                <input
                    type="text"
                    className={getInputClass('leadLastName')}
                    id='leadLastName'
                    name="leadLastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={newLeadLastName}
                    onBlur={handleBlur}
                />
                {getInputAlert('leadLastName')}
                <UserIcon className="icon"/>
            </label>
            <label className='input-label' htmlFor="leadEmail">
                <input
                    type="email"
                    className={getInputClass('leadEmail')}
                    id='leadEmail'
                    name="leadEmail"
                    placeholder="Email"
                    onChange={handleChange}
                    value={newLeadEmail}
                    onBlur={handleBlur}
                />
                {getInputAlert('leadEmail')}
                <EmailIcon className="icon"/>
            </label>
            <div className="input-label">
                <PhoneInput
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: false,
                        id: "phone",
                    }}
                    onBlur= {handleBlur} 
                    value={phoneNumber}
                    onChange={phone => {
                        handleChange({ target: { name: 'phone', value: phone } });
                        setPhoneNumber(phone);
                    }}
                    containerClass ='input-label form-label-pnone'
                    inputClass = {`form-field-number`}
                    buttonClass = "dropdown-cont"
                    country='ua'
                    placeholder="Enter Phone Number"
                    autoFormat={true}
                    countryCodeEditable={false}
                    enableSearch={true}
                    disableSearchIcon={false}
                />
                {getInputAlert("phone")}
            </div>
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
            </div>
            <div className="button-block">
                <button type='submit' 
                    className="submit-button"
                    disabled={!isValid || !isFormChanged}
                >
                    Create Lead
                </button>
                <button type='button' 
                    className="reset-button"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </StyledNewLeadForm>
    )
};