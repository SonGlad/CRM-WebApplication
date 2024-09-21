import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { FilterButtonLoader } from "../../CustomLoaders/CustomLoaders";
import { forwardRef } from "react";



export const FilterBlockMap = forwardRef(({
    searchValue,
    onValueChange,
    isFormCancelButton,
    resetFormValue,
    buttonsName,
    filterRefs,
    toggleFilterDrop,
    updatingLoader,
    formatDateFullMonth,
    resetFilterValue,
    filterList,
    toggleFiltersDropCont,
    saveFilterValue,
    isFilterError
},ref) => {
    

    return(
        <>
            <div className="open-filter-cont">
                <p className="search-text">For SEARCH, enter one of the following values: Client ID, Name, Last Name, Email, or Phone</p>
                <form className="search-form">
                    <label className="search-label" htmlFor="searchValue">
                        <input className="search-input" 
                            type="text"
                            value={searchValue}
                            onChange={onValueChange}
                            id='searchValue'
                            name="searchValue"
                            placeholder="Search"
                            required
                        />
                        {isFormCancelButton && (
                            <button type="button" className="cancel-btn"
                                onClick={resetFormValue}
                            >
                                <CloseIcon className="close-icon" width={8} height={8}/>
                            </button>
                        )}
                    </label>
                </form>
            </div>
            <div className="select-filter-cont">
                <ul className="filter-list">
                    {buttonsName.map(({buttonName, state}, index) => (
                        <li className="filter-item" key={index}  ref={el => {
                            if (el) {
                                filterRefs.current.set(buttonName, el);
                            }
                            }}
                        >
                            <button type='button' className="filter-btn"
                                style={{ paddingRight: state && "1.5rem"}}
                                onClick={() => toggleFilterDrop(buttonName)}
                            >   
                                {updatingLoader === buttonName ? (
                                    <FilterButtonLoader/>
                                ) : (
                                    <>
                                        {!state  
                                            ? buttonName 
                                            : ['Create Date', 'Next Call', 'Last Update'].includes(buttonName) 
                                            ? formatDateFullMonth(state) 
                                            : buttonName === 'Select Time-Zone' 
                                            ? (state > 0 
                                                ? `+ ${state}` 
                                                : (state === "0" 
                                                    ? '0' 
                                                    : `- ${Math.abs(state)}`)
                                                ) 
                                            : state
                                        }
                                  </>
                                )}
                            </button>
                            {state && (
                                <button type="button" className="cancel-filter-btn"
                                    onClick={() => resetFilterValue(buttonName)}
                                >
                                    <CloseIcon className="close-filter-icon" width={8} height={8}/>
                                </button>
                            )}
                            {filterList && (
                                <ul className={`filter-item-list ${toggleFiltersDropCont(buttonName)}`}>
                                    {filterList.map((name, index) => (
                                        <li className="filter-list-item" key={index}>
                                            <p className="drop-cont-text"
                                                style={{ color: name === "Not Defined" && "#ff000082"}}
                                                onClick={() => saveFilterValue(buttonName, name)}
                                            >
                                                {name}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {isFilterError && (
                                <ul className={`filter-item-list ${toggleFiltersDropCont(buttonName)}`}>
                                    <li className="filter-list-item" key={index}
                                        style={{ minHeight:"2rem",
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            pointerEvents: 'none'
                                        }}    
                                    >
                                        <p className="drop-cont-text"
                                            style={{ color:"#e74a3b"}}
                                        >
                                          {isFilterError}
                                        </p>
                                    </li>
                                </ul>
                            )}
                            
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
});