const { User, Skill } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    user: async (parent, args , context) => {
        if(context.user){
            const user = await User.findById(context.user._id)
            return user
        }
    throw new AuthenticationError('Not logged in');
    },
    skills: async () => {
      return Skill.find();
    },
  },
  Mutation:{
    addUser: async (parant, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email,password }) => {
      const user= await User.findOne({ email });

      if(!user){
        throw new AuthenticationError('Incorrect credentials')
      }
      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw){
        throw new AuthenticationError('Incirrecr Credentuals');
      }

      const token = signToken(user);

      return {token, user };
    },
    addSkill: async(parent, args) => {
    const skill = await Skill.create(args);
    
        return skill;
      }
    },
  };
  
module.exports = resolvers;
