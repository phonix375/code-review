
import React, { useEffect } from 'react';
import "./projectBoard.css";
import   placeholder from "../../assets/placeholder.jpeg";
import { QUERY_PROJECTS } from "../../utils/queries"
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PROJECTS } from "../../utils/actions";
import { Link } from "react-router-dom";




function ProjectBoard(){
    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_PROJECTS);
    useEffect(()=> {
        if(data){
            dispatch({
                type: UPDATE_PROJECTS,
                projects: data.getProjects
            });
        
        }else if(loading){
            console.log('loading')
        }
    }, [data, loading, dispatch])

        return (
            <div className="projectBoard">
                <section className="portfolio-block projects-cards" style={{
                    borderStyle: "none"}}>
                    <div className="container">
                        <div className="row">
                        {state.projects.map(project => (
                            
                            <div className="col-md-6 col-lg-4 cards" key={project._id}>
                            <div className="card border-0"><a href={`/project/${project._id}`}> <img className="card-img-top scale-on-hover" src={placeholder} alt="Card Image" /></a>
                                <div className="card-body">
                                    <h6><a href={`/project/${project._id}`}>{project.project_name}</a></h6>
                                    <p className="text-muted card-text">{project.description}</p>
                                    <p className="text-muted card-text">Price : {project.price}</p>
                                </div>
                            </div>
                        </div>
                            

                        ))}



                        </div>
                    </div>
                </section>
            </div>
        );
}



export default ProjectBoard;