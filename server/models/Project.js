const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const Skill = require('./Skill')

const projectSchema = new Schema(
    {
        project_name: {
            type: String,
            required: true,
            min: [1, 'Project name must be at least 1 character long'],
            max: [30, 'Project name is too long']
        },
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        deployed_link: {
            type: String
        },
        repository_link: {
            type: String,
            required: 'You must include a repository link!'
        },
        description: {
            type: String,
            required: true,
            min: [4, 'Please write a brief description about your project']
        },
        deadline: {
            type: Date
        },
        comments: {
            type: [commentSchema]
        },
        skills: {
            type: Schema.Types.ObjectId,
            ref: 'skills'
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

projectSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

const Project = model('Project', projectSchema);

module.exports = Project;