import { CustomCheckboxStyled } from "./tableExternalLeads.styled";
import { ReactComponent as CheckedIcon } from "../../../images/svg-icons/check.svg";
import { ReactComponent as CheckBoxIcon } from "../../../images/svg-icons/rectangle.svg";
import { toggleExternalLeadsCheckboxState } from "../../../redux/Lead/lead-slice";
import { useDispatch } from "react-redux";



export const CustomCheckbox = ({selectedExternalLeadsCheckedCheckbox, lead}) => {
    const dispatch = useDispatch();


    const handleCheckboxChange = (_id) => {
        dispatch(toggleExternalLeadsCheckboxState({_id}));
    };


    return(
        <CustomCheckboxStyled>
            <div className="custom-checkbox">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="delete_external_lead"
                    id={lead._id}
                    checked={selectedExternalLeadsCheckedCheckbox.includes(lead._id)}
                    onChange={() => handleCheckboxChange(lead._id)}
                />
                <div className="custom-checkbox">
                    <CheckBoxIcon className="custom-checkbox-before" width="16" height="16"/>
                    <CheckedIcon className="custom-checkbox-after" width="16" height="16"/>
                </div>
            </div>
        </CustomCheckboxStyled>
    );
};