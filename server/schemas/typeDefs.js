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
        repository_link: String!
        description: String!
        deadline: String
        comments: [Comment]
    }

    type Query {
        getProjects: [Project]
    }

`;

// export ther typeDefs
module.exports = typeDefs;