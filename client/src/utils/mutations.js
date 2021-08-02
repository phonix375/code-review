import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_NEW_PROJECT = gql`
  mutation addProject(
    $project_name: String!
    $user_id: String!
    $price: Float!
    $deployed_link: String
    $repository_link: String
    $description: String
    $deadline: String
    $skills: [ID]
  ) {
    addProject(
      project_name: $project_name
      user_id: $user_id
      price: $price
      deployed_link: $deployed_link
      repository_link: $repository_link
      description: $description
      deadline: $deadline
      skills: $skills
    ) {
      _id
      project_name
      user_id
      price
      deployed_link
      repository_link
      description
      deadline
    }
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addComment($projectId: ID!, $comment_text: String!) {
    addComment(projectId: $projectId, comment_text: $comment_text) {
      _id
      project_name
      user_id
      price
      deployed_link
      repository_link
      description
      deadline
      comments {
        _id
        comment_text
        username
      }
    }
`;

export const PROJECT_REQUEST = gql`
  mutation projectRequest($projectId: ID!, $user_id: String!) {
    projectRequest(projectId: $projectId, user_id: $user_id) {
      _id
      project_name
      user_id
      username
      price
      deployed_link
      repository_link
      description
      deadline
      comments {
        _id
        comment_text
        username
      }
      commentCount
      requests {
        _id
        username
        email
        rating
      }
    }
  }
`;

export const ACCEPT_PROJECT_REQUEST = gql`
  mutation acceptProjectRequest($projectId: ID!, $user_id: ID!) {
    acceptProjectRequest(projectId: $projectId, user_id: $user_id) {
      _id
      project_name
      user_id
      username
      price
      deployed_link
      repository_link
      description
      deadline
      comments {
        _id
        comment_text
        username
      }
      commentCount
      requests {
        _id
        username
        email
        rating
      }
    }
  }
`;
