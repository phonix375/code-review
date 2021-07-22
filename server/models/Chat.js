const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema(
    {
        chatId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        messageText: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const chatSchema = new Schema(
    {
        // add fields for chat schema here
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

const Chat = model('Chat', chatSchema);

module.exports = Chat;