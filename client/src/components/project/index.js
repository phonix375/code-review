
import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PROJECTS } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_PROJECTS
} from "../../utils/actions";
import Auth from '../../utils/auth';
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";

function Project() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProject, setCurrentProject] = useState({});

  const { loading, data } = useQuery(QUERY_PROJECTS);

  const { projects } = state;


  useEffect(() => {
    // already in global store
    if (projects.length) {
      setCurrentProject(projects.find(project => project._id === id));
      console.log('this is the currect project');
      console.log(currentProject)
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PROJECTS,
        projects: data.getProjects
      });
      setCurrentProject(data.getProjects.find(project => project._id === id));
      console.log('this is the currect project');
      console.log(currentProject)
    };
  }, [projects, data, dispatch, id]);



  console.log(state)
  return (
    <Container >
      <section className="features-blue" style={{
        padding: "5px 5px 5px",
        background: "rgb(0,63,84)",
        color: "rgb(255, 255, 255)"
      }}>
        <h1>{currentProject.project_name}</h1>
        <p>{currentProject.description}</p>
        <p>${currentProject.price}</p>
      </section>
      {currentProject.commentCount > 0 && (
        <CommentList comments={currentProject.comments} />
      )}

      {Auth.loggedIn() && <CommentForm projectId={currentProject._id} />}
    </Container>
  )
}

export default Project;