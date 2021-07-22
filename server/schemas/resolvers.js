const { User, Skill, Project, Chat } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
        },
        skills: async () => {
            return Skill.find();
        },
        getProjects: async (parent, args, context) => {
            const projects = await Project.find({}).select('-__v').populate('comments');

            return projects;
        }
    },
    Mutation: {
        addUser: async (parant, args) => {
            const user = await User.create(args);
            return user;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incirrecr Credentuals');
            }

            return { user };
        },
        addSkill: async (parent, args) => {
            const skill = await Skill.create(args);

            return skill;
        }
    },
};

module.exports = resolvers;
