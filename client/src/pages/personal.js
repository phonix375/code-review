import React, { useEffect } from 'react';
import Project from "../components/project";
import { QUERY_PROJECTS_BY_USER } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import { Container } from 'react-bootstrap';
import { ACCEPT_PROJECT_REQUEST } from '../utils/mutations';

function ProjectPage() {

    const [acceptProjectRequest, { error }] = useMutation(ACCEPT_PROJECT_REQUEST);

    const userProfile = Auth.loggedIn() ? Auth.getProfile() : '';
    const userId = userProfile.data._id;

    const { loading, data } = useQuery(QUERY_PROJECTS_BY_USER, {
        variables: { user_id: userId }
    });

    const projects = data?.getProjectsByUser || {};

    if (loading) {
        return <div>Loading...</div>
    }

    const acceptClickHandler = async event => {
        event.preventDefault();

        // console.log(event.target.dataset.projectId);
        // console.log(event.target.dataset.userId);
        const user_id = event.target.dataset.userId;
        const projectId = event.target.dataset.projectId;

        try {
            await acceptProjectRequest({
                variables: { projectId, user_id }
            })
        }
        catch (e) {
            console.error(e);
        }


    }

    return (
        <div>
            <div>
                <h2>Viewing {projects && projects.username} profile</h2>
            </div>
            {projects &&
                projects.map(project => (
                    <div className="card mb-3">
                        <div className="card-header">
                            <h3>{project.project_name}</h3>
                        </div>
                        <div className="card-body">
                            <h4>{project.description}</h4>
                            <h4>{project.price}</h4>
                            {project.requests.length ? (
                                <div>
                                    <h3>Requests</h3>
                                    {project.requests.map(request => (
                                        <>
                                            <h4>{request.username}</h4>
                                            <button onClick={acceptClickHandler} data-user-id={request._id} data-project-id={project._id}>Accept</button>
                                        </>
                                    ))}
                                </div>
                            )
                                :
                                <></>}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ProjectPage;