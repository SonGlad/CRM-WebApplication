import { MenuItemStyled } from "./MenuItem.styled";
import { ReactComponent as ArrowDown } from '../../../images/svg-icons/arrow-down.svg';
import { forwardRef } from "react";


export const StatisticItem = forwardRef(({statisticBlock, toggleStatisticMenuDrop, toggleStatisticDropArrow, toggleStatisticDropCont}, ref) => {


    return(
        <MenuItemStyled ref={statisticBlock}>
            <button type='button' className="side-panel-button" onClick={toggleStatisticMenuDrop}>
                Statistic
                <ArrowDown className={`arrow-svg ${toggleStatisticDropArrow()}`}/>   
            </button>
            <ul className={`users-dropdown-list ${toggleStatisticDropCont()}`}>
                <li className="users-drop-item">
                    <button type='button' className="users-dropdowm-button">Statistic</button>
                </li>
                <li className="users-drop-item">
                    <button type='button' className="users-dropdowm-button">Statistic</button>
                </li>
            </ul>
        </MenuItemStyled>
    );
});