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

type Project {
    _id: ID
    project_name: String
    user_id: ID
    price: Float
    deployed_link: String
    repository_link: String
    description: String
    deadline: String
    comments: [Comment]
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
    addProject(project_name: String!, user_id: String!, price: Float!,deployed_link: String,repository_link: String, description: String, deadline: String) : Project
    addComment(comment_text: String, username: String ) : Comment
  }
  type Auth {
    token: ID!
    user: User
  }
  `;

// export ther typeDefs
module.exports = typeDefs;