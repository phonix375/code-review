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
    rating: Float
    balance: Float
    numberOfRates: Int
  }
type Skill {
    _id: ID
    name: String
  }
  type Query {
    users: [User]
    user(username: String!): User
    skills:[Skill]
    addSkillToUser: Skill
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSkill(name: String!): Skill
    addSkillToUser(name: String! ): Skill
    updateRating(username:String!, rating:Float): User
  }
  type Auth {
    token: ID!
    user: User
  }
  `;

// export ther typeDefs
module.exports = typeDefs;