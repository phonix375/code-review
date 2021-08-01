import React from 'react';
import { Link } from 'react-router-dom';

// add link to user's profile page

const CommentList = ({ comments }) => {
    return (
        <div>
            <div className="card-header">
                <span className="text-light">Comments</span>
            </div>
            <div>
                {comments &&
                    comments.map(comment => (
                        <p key={comment._id}>
                            {comment.comment_text} {'// '}
                            {comment.username} on {comment.createdAt}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default CommentList;