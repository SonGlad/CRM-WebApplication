import { LeadDetailsStyled } from "./LeadDetails.styled";
import { ReactComponent as CloseIcon } from "../../../images/svg-icons/close.svg";
import {ReactComponent as UserIcon} from "../../../images/svg-icons/user.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/email.svg";
// import {ReactComponent as ArrowIcon} from "../../../images/svg-icons/arrow-down.svg";



export const LeadDetails = ({handleClickClose}) => {

    return(
        <LeadDetailsStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Lead Details</h1>
            <form className="lead-form">
                <div className="info-cont">
                    <label className='input-label' htmlFor="leadName">
                        <p>Name</p>
                        <input
                            type="text"
                            // className={getInputClass('leadName')}
                            id='leadName'
                            name="leadName"
                            placeholder="Name"
                            // onChange={handleChange}
                            // value={newLeadName}
                            // onBlur={handleBlur}
                        />
                        {/* {getInputAlert("leadName")} */}
                        <UserIcon className="icon"/>
                    </label>
                    <label className='input-label' htmlFor="leadlastName">
                        <p>Last Name</p>
                        <input
                            type="text"
                            // className={getInputClass('leadLastName')}
                            id='leadLastName'
                            name="leadLastName"
                            placeholder="Last Name"
                            // onChange={handleChange}
                            // value={newLeadLastName}
                            // onBlur={handleBlur}
                        />
                        {/* {getInputAlert('leadLastName')} */}
                        <UserIcon className="icon"/>
                    </label>
                    <label className='input-label' htmlFor="leadEmail">
                        <p>Email</p>
                        <input
                            type="email"
                            // className={getInputClass('leadEmail')}
                            id='leadEmail'
                            name="leadEmail"
                            placeholder="Email"
                            // onChange={handleChange}
                            // value={newLeadEmail}
                            // onBlur={handleBlur}
                        />
                        {/* {getInputAlert('leadEmail')} */}
                        <EmailIcon className="icon"/>
                    </label>
                    <label className='input-label' htmlFor="leadPhone">
                        <p>Phone</p>
                        <input
                            type="phone"
                            // className={getInputClass('leadEmail')}
                            id='leadPhone'
                            name="leadPhone"
                            placeholder="Phone"
                            // onChange={handleChange}
                            // value={newLeadEmail}
                            // onBlur={handleBlur}
                        />
                        {/* {getInputAlert('leadEmail')} */}
                        <EmailIcon className="icon"/>
                    </label>
                </div>
                <div className="info-cont">
                    <p>other info</p>
                </div>
            </form>
        </LeadDetailsStyled>
    );
};