import React from 'react';
import { Link } from 'react-router-dom';

// add link to user's profile page

const CommentList = ({ comments }) => {
    console.log(`Comments`);
    console.log(comments);
    return (
        <div className="card mb-3">
            <div className="card-header">
                <span className="text-dark">Comments</span>
            </div>
            <div className="card-body">
                {comments &&
                    comments.map(comment => (
                        <p key={comment._id}>
                            {comment.comment_text} {'by '}
                            <span className="text-primary">{comment.username}</span>
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default CommentList;