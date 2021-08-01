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
`