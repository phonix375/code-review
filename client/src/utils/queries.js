import gql from 'graphql-tag';

export const QUERY_PROJECTS = gql`
{
    getProjects{
        _id
        project_name
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
    }
}
`;

export const QUERY_SKILLS = gql`
    {
        skills{
            _id
            name
        }
    }
`;

export const QUERY_PROJECTS_BY_USER = gql`
query getProjectsByUser($user_id: ID!){
    getProjectsByUser(user_id: $user_id) {
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
        createdAt
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