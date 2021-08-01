import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';
import "./style.css"

const CommentForm = ({ projectId }) => {

    const [comment_text, setCommentText] = useState('');
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        setCommentText(event.target.value);
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: { projectId, comment_text }
            })

            setCommentText('');
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <form className="commentForm" onSubmit={handleFormSubmit}>
                <textarea
                    placeholder="Leave a comment..."
                    value={comment_text}
                    className="commentBox form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>

                <button className="commentBtn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;