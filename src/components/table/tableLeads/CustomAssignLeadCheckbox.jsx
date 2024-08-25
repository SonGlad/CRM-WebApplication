import { CustomCheckboxStyled } from "../tableExternalLeads/tableExternalLeads.styled";
import { ReactComponent as CheckedIcon } from "../../../images/svg-icons/check.svg";
import { ReactComponent as CheckBoxIcon } from "../../../images/svg-icons/rectangle.svg";
import { toggleAssignLeadsCheckboxState } from "../../../redux/Lead/lead-slice";
import { useDispatch } from "react-redux";




export const CustomAssignLeadCheckbox = ({selectedAssignLeadsCheckedCheckbox, lead}) => {
    const dispatch = useDispatch();


    const handleCheckboxChange = (_id) => {
        dispatch(toggleAssignLeadsCheckboxState({_id}));
    };


    return(
        <CustomCheckboxStyled>
            <div className="custom-checkbox">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="delete_external_lead"
                    id={lead._id}
                    checked={selectedAssignLeadsCheckedCheckbox.includes(lead._id)}
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