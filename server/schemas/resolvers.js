const { User, Thought } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');
const { Project } = require('../models');

const resolvers = {
    Query: {
        // add context for login when ready
        getProjects: async (parent, args, context) => {
            const projects = await Project.find({}).select('-__v').populate('comments');

            return projects;
        }
    }
}

module.exports = resolvers;
