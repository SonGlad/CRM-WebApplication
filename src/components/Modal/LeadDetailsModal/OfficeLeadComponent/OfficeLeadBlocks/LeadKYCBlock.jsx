import { LeadKYCBlockStyled } from "./OfficeLeadBlocks.styled";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { leadChangeKYCInfo } from "../../../../../redux/Lead/lead-operation";
import { useAuth } from "../../../../../hooks/useAuth";



export const LeadKYCBlock = ({leadDetailById}) => {
    const [formChanged, setFormChanged] = useState(false);
    const {isAdmin, isConversion, isManager} = useAuth();
    const dispatch = useDispatch();


    const {
        values,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
    } = useFormik({
        initialValues: {
            trading: leadDetailById.KYC.trading ? "true" : "false",
            profitGoal: leadDetailById.KYC.profitGoal || "",
            riskTolerance: leadDetailById.KYC.riskTolerance || "",
            expirience: leadDetailById.KYC.expirience || "",
            investment: leadDetailById.KYC.investment || "",
            time: leadDetailById.KYC.time || "",
        },
               

        onSubmit: (values) => {
            if (isAdmin || isManager || isConversion) {
                const tradingBoolean = values.trading === "false" ? false : Boolean(values.trading);
                const dataToSend = {
                    leadId: leadDetailById._id,
                    data: {
                        KYC: {
                            trading: tradingBoolean,
                            profitGoal: values.profitGoal,
                            riskTolerance: values.riskTolerance,
                            expirience: values.expirience,
                            investment: values.investment,
                            time: values.time,
                        }
                    }
                };
                dispatch(leadChangeKYCInfo(dataToSend));
                setFormChanged(false);
            }
        },
    });


    const formReset = () => {
        resetForm({
            values: {
                trading: leadDetailById.KYC.trading ? "true" : "false",
                profitGoal: leadDetailById.KYC.profitGoal || "",
                riskTolerance: leadDetailById.KYC.riskTolerance || "",
                expirience: leadDetailById.KYC.expirience || "",
                investment: leadDetailById.KYC.investment || "",
                time: leadDetailById.KYC.time || "",
            },
        });
    };


    const handleCancel = () => {
        formReset();
        setFormChanged(false);
    };


    useEffect(() => {
        const tradingBooleanToString = leadDetailById.KYC.trading ? "true" : "false";
        if (
          values.trading !== tradingBooleanToString ||
          values.profitGoal !== leadDetailById.KYC.profitGoal ||
          values.riskTolerance !== leadDetailById.KYC.riskTolerance ||
          values.expirience !== leadDetailById.KYC.expirience ||
          values.investment !== leadDetailById.KYC.investment ||
          values.time !== leadDetailById.KYC.time
        ) {
            setFormChanged(true);
        } 
    },[
        leadDetailById.KYC.expirience, 
        leadDetailById.KYC.investment, 
        leadDetailById.KYC.profitGoal, 
        leadDetailById.KYC.riskTolerance, 
        leadDetailById.KYC.time, 
        leadDetailById.KYC.trading, 
        values.expirience, 
        values.investment, 
        values.profitGoal, 
        values.riskTolerance, 
        values.time, 
        values.trading
    ]);


    return(
        <LeadKYCBlockStyled>
            <form className="create-contact-form" onSubmit={handleSubmit}>
                <ul className="radio-btn-list">
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Trading Experience</p>
                        <label className="LabelActivity" htmlFor="yes">
                            <input
                                className="radio-btn-input"
                                id="yes"
                                name="trading"
                                type="radio"
                                onChange={handleChange}
                                value={true}
                                onBlur={handleBlur}
                                checked={values.trading === "true"}
                            />
                            Yes
                        </label>
                        <label className="LabelActivity" htmlFor="no">
                            <input
                                className="radio-btn-input"
                                id="no"
                                name="trading"
                                type="radio"
                                onChange={handleChange}
                                value={false}
                                onBlur={handleBlur}
                                checked={values.trading === "false"}
                            />
                            No
                        </label>
                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Profit Goal</p>
                        <label className="LabelActivity" htmlFor="conservative">
                            <input
                                className="radio-btn-input"
                                id="conservative"
                                name="profitGoal"
                                type="radio"
                                onChange={handleChange}
                                value='conservative'
                                onBlur={handleBlur}
                                checked={values.profitGoal === "conservative"}
                            />
                            Conservative
                        </label>
                        <label className="LabelActivity" htmlFor="moderate">
                            <input
                                className="radio-btn-input"
                                id="moderate"
                                name="profitGoal"
                                type="radio"
                                onChange={handleChange}
                                value='moderate'
                                onBlur={handleBlur}
                                checked={values.profitGoal === "moderate"}
                            />
                            Moderate
                        </label>
                        <label className="LabelActivity" htmlFor="aggressive">
                            <input
                                className="radio-btn-input"
                                id="aggressive"
                                name="profitGoal"
                                type="radio"
                                onChange={handleChange}
                                value='aggressive'
                                onBlur={handleBlur}
                                checked={values.profitGoal === "aggressive"}
                            />
                            Aggressive
                        </label>
                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Risk Tolerance</p>
                        <label className="LabelActivity" htmlFor="low">
                            <input
                                className="radio-btn-input"
                                id="low"
                                name="riskTolerance"
                                type="radio"
                                onChange={handleChange}
                                value='low'
                                onBlur={handleBlur}
                                checked={values.riskTolerance === "low"}
                            />
                            Low
                        </label>
                        <label className="LabelActivity" htmlFor="medium">
                            <input
                                className="radio-btn-input"
                                id="medium"
                                name="riskTolerance"
                                type="radio"
                                onChange={handleChange}
                                value='medium'
                                onBlur={handleBlur}
                                checked={values.riskTolerance === "medium"}
                            />
                            Medium
                        </label>
                        <label className="LabelActivity" htmlFor="high">
                            <input
                                className="radio-btn-input"
                                id="high"
                                name="riskTolerance"
                                type="radio"
                                onChange={handleChange}
                                value='high'
                                onBlur={handleBlur}
                                checked={values.riskTolerance === "high"}
                            />
                            High
                        </label>
                    </li> 
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Level of Trading</p>
                        <label className="LabelActivity" htmlFor="beginner">
                            <input
                                className="radio-btn-input"
                                id="beginner"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='beginner'
                                onBlur={handleBlur}
                                checked={values.expirience === "beginner"}
                            />
                            Beginner
                        </label>
                        <label className="LabelActivity" htmlFor="novice">
                            <input
                                className="radio-btn-input"
                                id="novice"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='novice'
                                onBlur={handleBlur}
                                checked={values.expirience === "novice"}
                            />
                            Novice
                        </label>
                        <label className="LabelActivity" htmlFor="intermediate">
                            <input
                                className="radio-btn-input"
                                id="intermediate"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='intermediate'
                                onBlur={handleBlur}
                                checked={values.expirience === "intermediate"}
                            />
                            Intermediate
                        </label>
                        <label className="LabelActivity" htmlFor="advanced">
                            <input
                                className="radio-btn-input"
                                id="advanced"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='advanced'
                                onBlur={handleBlur}
                                checked={values.expirience === "advanced"}
                            />
                            Advanced
                        </label>
                        <label className="LabelActivity" htmlFor="expert">
                            <input
                                className="radio-btn-input"
                                id="expert"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='expert'
                                onBlur={handleBlur}
                                checked={values.expirience === "expert"}
                            />
                            Expert
                        </label>
                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Investment Range</p>
                        <label className="LabelActivity" htmlFor="0-500">
                            <input
                                className="radio-btn-input"
                                id="0-500"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='0-500'
                                onBlur={handleBlur}
                                checked={values.investment === "0-500"}
                            />
                            0$ - 500$
                        </label>
                        <label className="LabelActivity" htmlFor="500-2500">
                            <input
                                className="radio-btn-input"
                                id="500-2500"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='500-2500'
                                onBlur={handleBlur}
                                checked={values.investment === "500-2500"}
                            />
                            500$ - 2500$
                        </label>
                        <label className="LabelActivity" htmlFor="2500-5000">
                            <input
                                className="radio-btn-input"
                                id="2500-5000"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='2500-5000'
                                onBlur={handleBlur}
                                checked={values.investment === "2500-5000"}
                            />
                            2500$ - 5000$
                        </label>
                        <label className="LabelActivity" htmlFor="5000-10000">
                            <input
                                className="radio-btn-input"
                                id="5000-10000"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='5000-10000'
                                onBlur={handleBlur}
                                checked={values.investment === "5000-10000"}
                            />
                            5000$ - 10000$
                        </label>
                        <label className="LabelActivity" htmlFor="10000+">
                            <input
                                className="radio-btn-input"
                                id="10000+"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='10000+'
                                onBlur={handleBlur}
                                checked={values.investment === "10000+"}
                            />
                            &#62; 10000$
                        </label>
                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Weekly Trading Hours</p>
                        <label className="LabelActivity" htmlFor="0-5">
                            <input
                                className="radio-btn-input"
                                id="0-5"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='0-5'
                                onBlur={handleBlur}
                                checked={values.time === "0-5"}
                            />
                            0-5 Hours
                        </label>
                        <label className="LabelActivity" htmlFor="5-10">
                            <input
                                className="radio-btn-input"
                                id="5-10"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='5-10'
                                onBlur={handleBlur}
                                checked={values.time === "5-10"}
                            />
                            5-10 Hours
                        </label>
                        <label className="LabelActivity" htmlFor="10-15">
                            <input
                                className="radio-btn-input"
                                id="10-15"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='10-15'
                                onBlur={handleBlur}
                                checked={values.time === "10-15"}
                            />
                            10-15 Hours
                        </label>
                        <label className="LabelActivity" htmlFor="15-20">
                            <input
                                className="radio-btn-input"
                                id="15-20"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='15-20'
                                onBlur={handleBlur}
                                checked={values.time === "15-20"}
                            />
                            15-20 Hours
                        </label>
                        <label className="LabelActivity" htmlFor="20+">
                            <input
                                className="radio-btn-input"
                                id="20+"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='20+'
                                onBlur={handleBlur}
                                checked={values.time === "20+"}
                            />
                            &#62; 20 Hours
                        </label>
                    </li>
                </ul>
                <div className="buttonContainer">
                    <button className="saveButton" type="submit"
                        disabled={!isValid || !formChanged}
                    >
                        Save
                    </button>
                    <button className="cancelButton" type="button" 
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </LeadKYCBlockStyled>
    );
};