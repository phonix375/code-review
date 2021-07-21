const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        comment_text: {
            type: String,
            required: true,
            maxLength: 140
        },
        username: {
            type: Schema.Types.ObjectId,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date, now
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

module.exports = commentSchema;