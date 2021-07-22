//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create the typeDefs
const typeDefs = gql`

  type Comment {
    comment_text: String!
    username: String!
    createdAt: String
  }

  type Project {
    project_name: String!
    username: String!
    price: Int!
    deployed_link: String
    repository_link: String
    description: String
    deadline: String
    comments: [Comment]
  }

type User {
    _id: ID
    username: String
    email: String
    password: String
    badges: [Skill]
  }
type Skill {
    _id: ID
    name: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    skills:[Skill]
    getProjects: [Project]
  }
  
  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    addSkill(name: String!): Skill
  }
  `;

// export ther typeDefs
module.exports = typeDefs;