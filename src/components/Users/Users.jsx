import { StyledUsersPage } from "./Users.styled";
import {ReactComponent as ArrowSVG} from "../../images/svg-icons/arrow-left.svg";
import {ReactComponent as CheckedIcon} from "../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../images/svg-icons/rectangle.svg";
import { RotatingLoader } from "../CustomLoaders/CustomLoaders";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useUser } from "../../hooks/useUser";
import { useAuth } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal"
import { resetOfficeUserState } from "../../redux/User/user-slice";
import { resetOfficeLeadState } from "../../redux/Lead/lead-slice";
import { getUserById } from "../../redux/User/user-operation";
import { openModalUserDetail } from "../../redux/Modal/modal-slice";
import { toggleUsersCheckboxState, setFilteredUsers } from "../../redux/User/user-slice";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';



export const Users = () => {
    const { isAdmin, isManager, isConversionManager } = useAuth();
    const { userOffice, allUsers, userLoading, usersCheckedCheckbox, filteredUsers } = useUser(); 
    const { isUserDetails } = useModal();
    const [filterType, setFilterType] = useState('');
    const dispatch = useDispatch();
    

    const resetStateForOffice = () => {
        dispatch(resetOfficeUserState());
        dispatch(resetOfficeLeadState());
    };


    const buttonsName = [
        {name: 'All'},
        {name: 'Conversion'},
        {name: 'Retention'},
        {name: 'Conversion Manager'},
        {name: 'Conversion Agent'},
        {name: 'Retention Manager'},
        {name: 'Retention Agent'},
    ];

   
    const formatOfficeName = (userOffice) => {
        return userOffice.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    }; 


    const formatBranchName = (branch) => {
        return branch.replace(/([a-zA-Z]+)(\d+)/, '$1 $2');
    };


    const formatDateTime = (dateString, timeZone = 'Europe/Kiev') => {
        const date = new Date(dateString);
        const zonedDate = toZonedTime(date, timeZone);
    
        const formattedDate = format(zonedDate, 'yyyy-MM-dd', { timeZone });
        const formattedTime = format(zonedDate, 'HH:mm', { timeZone });
    
        return `${formattedDate} ${formattedTime}`;
    };


    const handleFilter = (type) => {
        setFilterType(type);
    };


    useEffect(() => {
        const roleOrder = [
            'CRM Manager',
            'Conversion Manager',
            'Conversion Agent',
            'Retention Manager',
            'Retention Agent'
        ];
        const filteredUsers = allUsers.filter((user) => {
            switch (filterType) {
                case 'All':
                    return true;
                case 'Conversion':
                    return user.role === 'Conversion Manager' || user.role === 'Conversion Agent';
                case 'Retention':
                    return user.role === 'Retention Manager' || user.role === 'Retention Agent'; 
                case 'Conversion Manager':
                    return user.role === 'Conversion Manager';
                case 'Conversion Agent':
                    return user.role === 'Conversion Agent';
                case 'Retention Manager':
                    return user.role === 'Retention Manager';
                case 'Retention Agent':
                    return user.role === 'Retention Agent';
                default:
                    return true;
            }
        }).sort((a, b) => {
            if (filterType === '') {
              return new Date(b.createdAt) - new Date(a.createdAt);
            } else {
              const roleIndexA = roleOrder.indexOf(a.role);
              const roleIndexB = roleOrder.indexOf(b.role);
              if (roleIndexA === -1 || roleIndexB === -1) {
                return 0;
              }
              return roleIndexA - roleIndexB;
            }
        });
        dispatch(setFilteredUsers(filteredUsers));
    },[allUsers, dispatch, filterType])


    const openUserDetail = (_id) => {
        if(isAdmin){
            dispatch(getUserById({
                userId: _id,
                branch: userOffice,
            }));
        } else if(isManager || isConversionManager){
            dispatch(getUserById({
                userId: _id
            }));
        }
        dispatch(openModalUserDetail());
    };


    const handleCheckboxChange = (_id) => {
        dispatch(toggleUsersCheckboxState({_id}));
    };


    return(
        <StyledUsersPage>
            <div className="wraper">
                <div className="nav-block">
                    <NavLink className="link" to={isAdmin ? '/' : '/leads'} onClick={resetStateForOffice}>
                        <ArrowSVG className="svg"/>
                        <h1 className="titles">Back</h1>
                    </NavLink>
                    {isAdmin && (
                        <h2 className="titles">{formatOfficeName(userOffice)} Users</h2>
                    )}
                </div>
                <div className="filter-block">
                    <ul className='filter-list'>
                        {buttonsName.map(({name}, index) => (
                            <li className="filter-item" key={index}>
                                <button type='button' onClick={() => handleFilter(name)}>{name}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {(userLoading && !isUserDetails) ? (
                    <RotatingLoader/>
                ) : (
                    <div className="users-block">
                        <table>
                            <thead>
                                <tr>
                                    <th>User Role</th>
                                    <th>User Name</th>
                                    <th>User Email</th>
                                    <th>User Branch</th>
                                    <th>Total Leads</th>
                                    <th>Created At</th>
                                    <th>Details</th>
                                    {isAdmin &&(
                                        <th>Delete</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map(({_id, role, username, email, branch, createdAt, totalLeads}) => (
                                    <tr key={_id}>
                                        <td>{role}</td>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td>{formatBranchName(branch)}</td>
                                        <td>{totalLeads || 0}</td>
                                        <td>{formatDateTime(createdAt)}</td>
                                        <td>
                                            <button className="check-btn" type='button'
                                                onClick={() => openUserDetail(_id)}
                                            >Click
                                            </button>
                                        </td>
                                        {isAdmin && (
                                            <td>
                                                <input className="checkbox"
                                                    type="checkbox"
                                                    name="delete user" 
                                                    id={_id}
                                                    checked={usersCheckedCheckbox.includes(_id)}
                                                    onChange={() => handleCheckboxChange(_id)}
                                                />
                                                <div className="custom-checkbox">
                                                    <CheckBoxIcon className="custom-checkbox-before" width="16" height="16"/>
                                                    <CheckedIcon className="custom-checkbox-after" width="16" height="16"/>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </StyledUsersPage>
    );
};