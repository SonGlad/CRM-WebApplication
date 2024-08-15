import { PaginationStyled } from "./Pagination.styled";
import { useState, useRef, useEffect } from "react";
import {ReactComponent as ArrowDoubleLeft} from "../../images/svg-icons/angle-bouble-left.svg";
import {ReactComponent as ArrowDoubleRight} from "../../images/svg-icons/angle-double-right.svg";
import {ReactComponent as SingleArrow} from "../../images/svg-icons/arrow-down.svg";
import { PaginationMap } from "./PaginationMap";
import { getAllLeads } from "../../redux/Lead/lead-operation";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";
import { useLead } from "../../hooks/useLead";
import { useDispatch } from "react-redux";



export const Pagination = () => {
    const dispatch = useDispatch();
    const { isAdmin, isManager, isConversion } = useAuth();
    const { totalPages, leadOffice, leadsAmountPerPage } = useLead();
    const { userLeadsComponent } = useUser();
    const [count, setCount] = useState(1);
    const [firstVisible, setFirstVisible] = useState(false);
    const [lastVisible, setLastVisible] = useState(false);
    const [lastVisibleValue, setLastVisibleValue] = useState(0);
    const [firstVisibleValue, setFirstVisibleValue] = useState(0);
    const [decreaseEnable, setDecreaseEnable] = useState(false);
    const [increaseEnable, setIncreaseEnable] = useState(false);
    const listRef = useRef(null);
    
    
    let amount;
    if (totalPages) {
        amount = Number(totalPages);
    } else {
        amount = 1;
    }
    const elements = Array.from({ length: amount }, (_, index) => index + 1);


    const page = count.toString();
    const limit = leadsAmountPerPage.toString();
    

    useEffect(() => {
        if ((isAdmin || isManager || isConversion) && !userLeadsComponent) {
            dispatch(getAllLeads({
                page: page,
                limit: limit,
                branch: leadOffice,
            }));
        }
    },[dispatch, isAdmin, isConversion, isManager, leadOffice, limit, page, userLeadsComponent]);
       
     

    useEffect(() => {
        if (listRef.current) {
          const activeButton = listRef.current.querySelector('.button-active');
          if (activeButton) {
            activeButton.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            });
          }
        }
    }, [count]);

    
    useEffect(() => {
        if (elements.length > 9) {
            setLastVisible(true);
            setLastVisibleValue(10);
        }
        if (elements.length > 1) {
            setIncreaseEnable(true);
        }
        if (elements.length < 9) {           
            setLastVisible(false);
        }
        if (elements.length === 1) {
            setIncreaseEnable(false);
            setLastVisible(false);
        }
    },[elements]);
    

    const toggleButtonBackground = (index) => {
        return index === count ? 'button-active' : '';
    };


    const increaseCount = () => {
        if (count <= (elements.length - 1)) {
            setCount(prevState => prevState + 1);
            setDecreaseEnable(true);
        }
        if((elements.length - count) <= 5){
            setLastVisible(false);
        }
        if (count + 1 === elements.length) {
            setIncreaseEnable(false);
        }
        if ((elements.length > 9) && ((count >= 5))) { 
            setFirstVisible(true);
            const calculatedLastValue = count + 6;
            setLastVisibleValue(calculatedLastValue > elements.length ? elements.length : calculatedLastValue);
            const calculatedFirstValue = count - 4;
            setFirstVisibleValue(calculatedFirstValue > (elements.length - 9) ? (elements.length - 9) : calculatedFirstValue);
        }
    };
 

    const decreaseCount = () => {
        if (count >= 2) {
            setCount(prevState => prevState - 1);
            setIncreaseEnable(true);
        }
        if (count - 1 <= 1) {
            setDecreaseEnable(false);
        }
        if((elements.length > 9) && ((elements.length - count) >= 4)){
            setLastVisible(true);
            const calculatedLastValue = Math.max(10, count + 4);
            setLastVisibleValue(calculatedLastValue > elements.length ? elements.length : calculatedLastValue);
            const calculatedFirstValue = count - 6;
            setFirstVisibleValue(calculatedFirstValue > 1 ? calculatedFirstValue : 1); 
        }
        if ((elements.length > 9) && ((count <= 6))) { 
            setFirstVisible(false);
        }
    };
 

    const setButtonActive = (index) => {
        setCount(index);
    
        const remainingElements = elements.length - index;
        const isLargeList = elements.length > 9;
        setFirstVisible(isLargeList && index > 5);
        setLastVisible(isLargeList && remainingElements >= 5);
    
        if (isLargeList) {

            const calculatedLastValue = Math.max(Math.min(index + 5, elements.length), 10);
            const maxFirstValue = elements.length - 9;
            const calculatedFirstValue = Math.max(index - 5, 1);
            const finalFirstValue = calculatedFirstValue > maxFirstValue ? maxFirstValue : calculatedFirstValue;
    
            setLastVisibleValue(calculatedLastValue);
            setFirstVisibleValue(finalFirstValue);

        } else {
            setFirstVisible(false);
            setLastVisible(false);
        }

        setDecreaseEnable(index > 1);
        setIncreaseEnable(index < elements.length);
    };


    const toEnd = () => {
        setCount(elements.length);
        setIncreaseEnable(false);
        setDecreaseEnable(true);
        if(elements.length > 9){
            setLastVisible(false);
            setFirstVisible(true);
            setLastVisibleValue(elements.length);
            setFirstVisibleValue(elements.length - 9);
        }
    };


    const toBegin = () => {
        setCount(1);
        setIncreaseEnable(true);
        setDecreaseEnable(false);
        if(elements.length > 9){
            setLastVisible(true);
            setFirstVisible(false);
            setLastVisibleValue(10);
            setFirstVisibleValue(0);
        }
    };


    const clickOnFirstVisible = () => {
        setCount(firstVisibleValue);
        setIncreaseEnable(true);

        const calculatedFirstValue = firstVisibleValue - 5;
        const limitFirstValue = elements.length - 9;
        const newFirstVisibleValue = Math.min(calculatedFirstValue, limitFirstValue);
        setFirstVisibleValue(Math.max(newFirstVisibleValue, 0));
        
        if (firstVisibleValue === 1) {
            setDecreaseEnable(false);
        }

        if (count <= 10) {
            setFirstVisible(false);
        }
        
        if (elements.length >= count) {
            setLastVisible(true);
        }

        const calculatedLastValue = firstVisibleValue + 5;
        const newLastVisibleValue = Math.min(Math.max(calculatedLastValue, 10), elements.length);
        setLastVisibleValue(newLastVisibleValue);
    };


    const clickOnLastVisible = () => {
        setCount(lastVisibleValue);
        setFirstVisible(true);
        setDecreaseEnable(true);
        
        const newLastVisibleValue = Math.min(elements.length, lastVisibleValue + 5);
        setLastVisibleValue(newLastVisibleValue);

        if (newLastVisibleValue  >= elements.length) {
            setLastVisible(false);
        }
        if (lastVisibleValue === elements.length) {
            setIncreaseEnable(false);
        }

        const calculatedFirstValue = lastVisibleValue - 5;
        const limitFirstValue = elements.length - 9;
        const newFirstVisibleValue = Math.min(calculatedFirstValue, limitFirstValue);
        setFirstVisibleValue(newFirstVisibleValue);
    };

   
    
    return(
        <PaginationStyled>
            <div className="pagination-block">
                <div className="left-button-block">
                    <button type="button" className="paginaton-button" 
                        onClick={toBegin}
                        disabled={!decreaseEnable}
                    >
                        <ArrowDoubleRight className="arrow-icon" width={16} height={16}/>
                    </button>
                    <button type="button" className="paginaton-button button" 
                        onClick={decreaseCount}
                        disabled={!decreaseEnable}
                    >
                        <SingleArrow className="icon left-arrow" width={12} height={12}/>
                    </button>
                </div>
                <PaginationMap
                    firstVisible={firstVisible}
                    clickOnFirstVisible={clickOnFirstVisible}
                    listRef={listRef}
                    elements={elements}
                    toggleButtonBackground={toggleButtonBackground}
                    setButtonActive={setButtonActive}
                    lastVisible={lastVisible}
                    clickOnLastVisible={clickOnLastVisible}
                />
                <div className="right-button-block">
                    <button type="button" className="paginaton-button button" 
                        onClick={increaseCount}
                        disabled={!increaseEnable}
                    >
                        <SingleArrow className="icon right-arrow" width={12} height={12}/>
                    </button>
                    <button type="button" className="paginaton-button" 
                        onClick={toEnd}
                        disabled={!increaseEnable}
                    >
                        <ArrowDoubleLeft className="arrow-icon" width={16} height={16}/> 
                    </button>
                </div>
            </div>
        </PaginationStyled>
    );
};