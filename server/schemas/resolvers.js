const { User, Skill, Project} = require('../models');
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
    getProjects: async () => {
      const projects = await Project.find({}).select('-__v').populate('comments');
      return projects;
    },
    getProject: async (parent, { projectId }) => {
      const project = await Project.findOne({ _id: projectId }).select('-__v').populate('comments');

      return project;
  }
  },
  Mutation:{
    addUser: async (parant, args, context) => {

        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };

    },
    addSkillToUser: async (parant, {skill} ,context) => {
        const skilltemp = Skill.findOne({skill});
        await User.findByIdAndUpdate(context.user._id, { $push: { skills: skilltemp._id } });

        return skilltemp;
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
      
    },
    updateRating: async(parent, {username, rating}, context) => {

 
        const rateUser = await User.findOne({username : username});
        const newRate =  (rating + rateUser.rating) / (rateUser.numberOfRates + 1 );
        const numberOfRates = rateUser.numberOfRates + 1 ;
        const updatedUser = await User.findOneAndUpdate(
          {_id : rateUser._id},
          {"$set" : {rating: newRate,numberOfRates: numberOfRates}},
          {new: true},
        )
        return updatedUser;
    },
    addProject: async (parent, args, context) => {
      console.log(args);
      const project = await Project.create(args);

      return project;
    },
    addComment: async (parent, { projectId, comment_text }, context) => {
    const updatedProject = await Project.findOneAndUpdate(
        { _id: projectId },
        { $push: { comments: { comment_text, username: context.user.username } } },
        { new: true }
    ).populate('comments');

    return updatedProject;
    }
  }
  };
  
module.exports = resolvers;