import { LeadCommentBlockStyled } from "./OfficeLeadBlocks.styled";
import { ShowRules } from "../../../../../utils/showRules";
import { useState, useEffect, useCallback, useRef } from "react";
import { leadAddNewComment, getAllComments } from "../../../../../redux/Lead/lead-operation";
import { useDispatch } from "react-redux";
import { useLead } from "../../../../../hooks/useLead";
import { AllCommentsLoader } from "../../../../CustomLoaders/CustomLoaders";



export const LeadCommentBlock = ({leadDetailById}) => {
    const {formatDateTimeFullMonth} = ShowRules();
    const [comment, setComment] = useState([]);
    const [isUserName, setIsUserName] = useState(false);
    const [isUserEmail, setIsUserEmail] = useState(false);
    const [isUserRole, setIsUserRole] = useState(false);
    const [isTime, setIsTime] = useState(false);
    const [isComment, setIsComment] = useState(false);
    const [newCommentWindow, setNewCommentWindow] = useState(false); 
    const [allCommentWindow, setAllCommentWindow] = useState(false); 
    const [formChanged, setFormChanged] = useState();
    const [formValue, setFormValue] = useState(''); 
    const commentWindow = useRef();
    const dispatch = useDispatch();
    const { allComments, isAllCommentsLoadding, isAllCommentsError} = useLead();
    const [allCommentsFiltered, setAllCommentsFiltered] = useState();
    console.log(leadDetailById);
    

    
    useEffect(() => {
        const commentObject = leadDetailById.latestComment.createdBy;
        const commentTime = leadDetailById.latestComment.createdAt;
        const commentComment = leadDetailById.latestComment.comment;

        if(commentObject.username){
            setIsUserName(true);
        };
        if(commentObject.email){
            setIsUserEmail(true);
        };
        if(commentObject.role){
            setIsUserRole(true);
        };
        if(commentTime){
            setIsTime(true);
        };
        if(commentComment){
            setIsComment(true);
        };

    },[leadDetailById.latestComment]);
    

    useEffect(() => {
        if (isComment) {
            const commentArray = leadDetailById.latestComment.comment
            .split(/(?<!\w@\w+\.\w+)[.,](?!\w)/)
            .filter(Boolean);
        setComment(commentArray);
        };
    },[isComment, leadDetailById.latestComment.comment]);


    const toggleNewComment = () => {
        setNewCommentWindow(prevState => !prevState);
        setAllCommentWindow(false);
        setFormValue('');
    };
    const toggleAllComment = () => {
        setAllCommentWindow(prevState => !prevState);
        setNewCommentWindow(false);
        setFormValue('');
        dispatch(getAllComments(leadDetailById._id));
    };
   

    const handleBackdropClick = useCallback(event => {
        if (commentWindow.current && !commentWindow.current.contains(event.target)) {
            if (newCommentWindow) {
                setNewCommentWindow(false);
                setFormValue('')
            }
            if (allCommentWindow) {
                setAllCommentWindow(false);
            }
        }
    },[allCommentWindow, newCommentWindow]);


    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            if (newCommentWindow) {
                setNewCommentWindow(false);
                setFormValue('');
            }
            if (allCommentWindow) {
                setAllCommentWindow(false);
            }
        }
    },[allCommentWindow, newCommentWindow]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleBackdropClick);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleBackdropClick);
        };
    },[handleBackdropClick, handleKeyDown]);


    const handleFormChange = (event) => {
        setFormValue(event.target.value)
    };


    useEffect(() => {
        if(formValue !== ''){
            setFormChanged(true);
        } else{
            setFormChanged(false);
        }
    },[formValue]);
   

    const submitNewComment = () => {
        const newComment = {
            leadId: leadDetailById._id,
            data: {
                comment: formValue
            }
        }
        dispatch(leadAddNewComment(newComment));
        setFormChanged(false);
        setNewCommentWindow(false);
        setFormValue('');
    };
    
    
    useEffect(() => {
        if (allComments) {
            const sortedComments = [...allComments].sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            setAllCommentsFiltered(sortedComments);
        }
    }, [allComments]);


    const allCommentsDevidingComment = (comments) => {
        const commentArray = comments
        .split(/(?<!\w@\w+\.\w+)[.,](?!\w)/)
        .filter(Boolean);        
        return commentArray.length > 0 && (
            <>
                <p className="comment-text">Comment: <span>{`1) ${commentArray[0]}.`}</span></p>
                {commentArray.slice(1).map((part, index) => (
                    <span key={index}>
                        {`${index + 2}) ${part}.`}<br></br>
                    </span>
                ))}
            </>
        )
    };

   
    
    return(
        <LeadCommentBlockStyled  ref={commentWindow}>
            <p className="title">Latest Comment:</p>
            <div className="content-block">
                <div className="latest-comment-cont">
                    <div className="detail-cont">
                        <div className="user-cont">
                            <div className="group-cont">
                                <p className="user-title">Name:</p>
                                <p className="user-text">
                                    {isUserName ? (
                                        leadDetailById.latestComment.createdBy.username
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                            </div>
                            <div className="group-cont">
                                <p className="user-title">Email:</p>
                                <p className="user-text">
                                    {isUserEmail ? (
                                        leadDetailById.latestComment.createdBy.email
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                            </div>
                            <div className="group-cont">
                                <p className="user-title">Role:</p>
                                <p className="user-text">
                                    {isUserRole ? (
                                        leadDetailById.latestComment.createdBy.role
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                            </div>
                        </div>
                        <p className="time-text">
                            {isTime ? (
                                formatDateTimeFullMonth(leadDetailById.latestComment.createdAt)
                            ): (
                                "N/A"
                            )}
                        </p>
                    </div>
                    <div className="comment-cont-parrent">
                        <div className="comment-cont">
                            {isComment ? (
                                comment.length > 0 && (
                                    <>
                                        <p className="comment-text">Comment: <span>{`1) ${comment[0]}.`}</span></p>
                                        {comment.slice(1).map((part, index) => (
                                            <span key={index}>
                                                {`${index + 2}) ${part}.`}<br></br>
                                            </span>
                                        ))}
                                    </>
                                )
                            ) : (
                                <p className="comment-text">Comment: <span>N/A</span></p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="button-block">
                    <button className="create-btn" type="button"
                        onClick={toggleNewComment}
                    >
                        Create New Comment
                    </button>
                    {!newCommentWindow && (
                        <button className="create-btn" type="button"
                            onClick={toggleAllComment}
                            disabled={allCommentWindow}
                        >
                            View All Comments
                        </button>
                    )}
                </div>
            </div>
            {newCommentWindow && (
                <div className="new-comment-cont">
                    <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="user_comment">
                            <p>Enter Your Comment</p>
                            <div>
                                <textarea 
                                    className="form-comment" 
                                    name="user_comment" 
                                    id="user_comment" 
                                    rows="6" 
                                    placeholder="New Comment"
                                    onChange={handleFormChange}
                                    value={formValue}
                                ></textarea>
                            </div>
                        </label>
                        <button type="submit" className="submit-btn"
                            disabled={!formChanged}
                            onClick={submitNewComment}
                        >
                            Save Comment
                        </button>
                    </form>
                </div>
            )}
            {allCommentWindow && (
                <div className="all-comment-cont">
                    <div className="all-comment-padding">
                        {!isAllCommentsLoadding ? (
                            allComments ? (
                                <ul className="all-comment-list">
                                    {allCommentsFiltered.map((filteredComment, index) => (
                                        <li className="all-comment-item" key={filteredComment._id}>
                                            <div className="all-comment-detail-cont">
                                                <div className="all-comment-user-cont">
                                                    <div className="group-cont">
                                                        <p className="user-title">Name:</p>
                                                        <p className="user-text">
                                                            {(filteredComment.createdBy.username && filteredComment.createdBy.username !== '') ? (
                                                                filteredComment.createdBy.username
                                                            ) : (
                                                                "N/A"
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="group-cont">
                                                        <p className="user-title">Email:</p>
                                                        <p className="user-text">
                                                            {(filteredComment.createdBy.email && filteredComment.createdBy.email !== '') ? (
                                                                filteredComment.createdBy.email
                                                            ) : (
                                                                "N/A"
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="group-cont">
                                                        <p className="user-title">Role:</p>
                                                        <p className="user-text">
                                                            {(filteredComment.createdBy.role && filteredComment.createdBy.role !== '') ? (
                                                                filteredComment.createdBy.role
                                                            ) : (
                                                                "N/A"
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="time-text">
                                                    {(filteredComment.createdAt && filteredComment.createdAt !== '') ? (
                                                        formatDateTimeFullMonth(filteredComment.createdAt)
                                                    ): (
                                                        "N/A"
                                                    )}
                                                </p>
                                            </div>
                                            <div className="all-comment-cont-parrent">
                                                <div className="all-comment-cont-cont">
                                                    {(filteredComment.comment && filteredComment.comment !== '') ? (
                                                        allCommentsDevidingComment(filteredComment.comment)
                                                    ) : (
                                                        <p className="comment-text">Comment: <span>N/A</span></p>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div>
                                    <p>{isAllCommentsError}</p>
                                </div>
                            )
                        ) : (
                            <AllCommentsLoader/>
                        )}
                    </div>
                </div>
            )}
        </LeadCommentBlockStyled>
    );
};