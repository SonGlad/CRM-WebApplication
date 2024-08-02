import { UserLeadsStyled } from "./UserLeads.styled";
import {ReactComponent as ArrowSVG} from "../../images/svg-icons/arrow-left.svg";
import { openModalUserDetail } from "../../redux/Modal/modal-slice";
import { resetUserLeadsComponent } from "../../redux/User/user-slice"
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUser } from "../../hooks/useUser";



export const UserLeads = () => {
    const { userLeads, userName, userLeadsComponentData } = useUser();
    const dispatch = useDispatch();
    console.log(userLeads);


    const openUserModal = () => {
        dispatch(openModalUserDetail())
    };

    const backToUsers = () => {
        dispatch(resetUserLeadsComponent());
    };


    return(
        <UserLeadsStyled>
            <div className="wraper">
                <div className="nav-block">
                    <button type='button' 
                        className="modal-button" 
                        onClick={openUserModal}
                    >
                        <ArrowSVG className="svg"/>
                        Back to User Information
                    </button>
                    <NavLink className="link" to='/users' on onClick={backToUsers}>
                        Back to Users
                        <ArrowSVG className="svg"/>
                    </NavLink>
                </div>
                <h1 className="titles">{userName} all {userLeadsComponentData} Leads details</h1>
                <h2>UserLeads</h2>
            </div>
        </UserLeadsStyled>
    );
};