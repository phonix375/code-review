//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create the typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    badges: [Skill]
    rating: Float
    balance: Float
    numberOfRates: Int
  }

type Comment {
    _id: ID
    comment_text: String
    username: String
    createdAt: String
  }




type Skill {
    _id: ID
    name: String
  }

  type Project {
    _id: ID
    project_name: String
    user_id: ID
    username: String
    price: Float
    deployed_link: String
    repository_link: String
    description: String
    deadline: String
    comments: [Comment]
    skills:[Skill]
    commentCount: Int
    requests: [User]
  }
  type Query {
    users: [User]
    user(username: String!): User
    skills:[Skill]
    addSkillToUser: Skill
    getProjects: [Project]
    getProject(projectId: ID!): Project
    getProjectsByUser(user_id: ID!): [Project]
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSkill(name: String!): Skill
    addSkillToUser(name: String! ): Skill
    updateRating(username:String!, rating:Float): User
    addProject(project_name: String!, user_id: String!, price: Float!,deployed_link: String,repository_link: String, description: String, deadline: String, skills: [ID]) : Project
    addComment(projectId: ID!, comment_text: String!) : Project
    projectRequest(projectId: ID!, user_id: String!): Project
  }
  type Auth {
    token: ID!
    user: User
  }
  `;

// export ther typeDefs
module.exports = typeDefs;