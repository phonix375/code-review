const { Schema, model } = require('mongoose');

const skillsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
          },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Skill = model('skillsSchema', skillsSchema);

module.exports = Skill