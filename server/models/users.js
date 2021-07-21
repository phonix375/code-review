const { Schema, model } = require('mongoose');
const Skills = require('./skills') 


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
          },
          email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
          },
          password: {
            type: String,
            required: true,
            minlength: 5
          },
          badges:{
            type:[Skills]
          }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const User = model('User', userSchema);

module.exports = User