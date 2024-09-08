import { MenuItemStyled } from "./MenuItem.styled";
import { ReactComponent as ArrowDown } from '../../../images/svg-icons/arrow-down.svg';
import { forwardRef, useState} from "react";
import { useLead } from "../../../hooks/useLead";
import { useDispatch } from "react-redux";
import { setLeadsAmountPerPage } from "../../../redux/Lead/lead-slice";



export const AmountPerPage = forwardRef(({
    amountPerPageBlock,
    toggleAmountPerPageBlock,
    toggleAmountPerPageDropCont,
    toggleAmountPerPageDropArrow
}, ref) => {
    const { totalLeads, leadsAmountPerPage} = useLead();
    const [value, setValue] = useState("");
    const [isEnable, setEnable] = useState(false);
    const dispatch = useDispatch(); 
    

    const handleInput = (e, maxDigits) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (e.target.value.length > maxDigits) {
          e.target.value = e.target.value.slice(0, maxDigits);
        };
    };


    const onValueChange = ({ target: { value } }) => {
        let numericValue = parseInt(value, 10);

        if (numericValue >= 100) {
            numericValue = 100;
        }
        if (numericValue <= 1 || !numericValue) {
            numericValue = 1;
        }
        setValue(numericValue);
        setEnable(true);
    };


    const saveValue = () => {
        dispatch(setLeadsAmountPerPage(value));
        setValue('');
        setEnable(false);
        toggleAmountPerPageBlock();
    }


    return(
        <MenuItemStyled  ref={amountPerPageBlock}>
            <div className="text-block">
                <p>Total Leads:</p>
                <p>{totalLeads || 0}</p>

            </div>
            <div className="text-block">
                <p>Leads per page:</p>
                <p>{leadsAmountPerPage}</p>
            </div>
            <button type='button' className="side-panel-button" onClick={toggleAmountPerPageBlock}>
                Amount
                <ArrowDown className={`arrow-svg ${toggleAmountPerPageDropArrow()}`}/>
            </button>
            <ul className={`amount-dropdown-list ${toggleAmountPerPageDropCont()}`}>
                <li className="users-drop-item">
                    <p>To change the number of leads displayed on the page, simply enter a new value in the field below and then save it.</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="amount">
                            <input type="number"
                                value={value}
                                onChange={onValueChange}
                                onInput={e => handleInput(e, 3)} 
                                id='amount'
                                name="amount"
                                placeholder="Enter Amount"
                                min="1"
                                max="100" 
                                required
                            />
                        </label>
                        <button type="submit"
                            onClick={saveValue}
                            disabled={!isEnable}
                        >Save
                        </button>
                    </form>
                </li>
            </ul>
        </MenuItemStyled>
    );
});