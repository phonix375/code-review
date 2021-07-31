import React, { useState, useEffect }  from 'react';
import { useQuery } from '@apollo/react-hooks';

import { useStoreContext } from "../../utils/GlobalState";
import { CREATE_NEW_PROJECT } from "../../utils/mutations"
import {QUERY_SKILLS} from '../../utils/queries'
import { REGISTER_TAGGLE, LOGGIN_TAGGLE, NEW_PROJECT_TAGGLE } from "../../utils/actions";

import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { Form } from 'react-bootstrap';



function NewProjectModal(){
    const [formState, setFormState] = useState({ project_name: '', price: 0, deployed_link:'',repository_link:'',description:'',deadline:''})
    const [skillList, setSkillList] = useState([])
    //createProject <- the state managment for open modal
    const [state, dispatch] = useStoreContext();
    const [newProject, { error }] = useMutation(CREATE_NEW_PROJECT);
    const { loading, data: skills } = useQuery(QUERY_SKILLS);

    useEffect(()=> {
      if(skills){

        setSkillList(skills)
        console.log('this is a skill list:')
        console.log(skills)
      }
  }, [setSkillList,skills])


    const handelNewProjectSubmit = async event => {
      event.preventDefault();
      try {
        const mutationResponse = await newProject({ variables: {
           project_name: formState.project_name,
           repository_link: formState.repository_link,
           price : parseFloat(formState.price),
           description: formState.description,
           deployed_link: formState.deployed_link,
           deadline: formState.deadline,
           user_id: Auth.getProfile().data._id
          } })
        const data = mutationResponse.data;
        console.log(data);
      } catch (e) {
        console.log(e)
      }
      };

      
    function closeModal(){
        dispatch({ type: NEW_PROJECT_TAGGLE});
    };


    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value
        });
        console.log(formState);
      };
    

        return (
            <div className="modal-content">
                <div className="modal-header" style={{ background: "#c3e7ff" }}>
                    <h4>Create new Project</h4>
                    <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" >X</button>
                </div>
                <div className="modal-body" style={{ background: "#edf6ff" }}>
                    <form onSubmit={handelNewProjectSubmit}>
                            <Form.Group className="form-group mb-3">
                            <Form.Label>Project Title:</Form.Label>
                            <Form.Control className="form-control" 
                                                type="text"
                                                placeholder="Project Title" 
                                                name="project_name"
                                                id="project_name"
                                                onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="form-group mb-3">
                            <Form.Label>Price :</Form.Label>
                            <Form.Control className="form-control" 
                                                type="number"
                                                placeholder="0" 
                                                name="price"
                                                id="price"
                                                onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="form-group mb-3">
                            <Form.Label>Deployed Link :</Form.Label>
                            <Form.Control className="form-control" 
                                                type="text"
                                                placeholder="Deployed Link" 
                                                name="deployed_link"
                                                id="deployed_link"
                                                onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="form-group mb-3">
                            <Form.Label>Repository Link :</Form.Label>
                            <Form.Control className="form-control" 
                                                type="text"
                                                placeholder="Repository Link" 
                                                name="repository_link"
                                                id="repository_link"
                                                onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="form-group mb-3">
                            <Form.Label>Description :</Form.Label>
                            <Form.Control className="form-control" 
                                                type="text"
                                                placeholder="Description" 
                                                name="description"
                                                id="description"
                                                onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="form-group mb-3">
                            <Form.Label>Deadline :</Form.Label>
                            <Form.Control className="form-control" 
                                                type="date"
                                                placeholder="Deadline" 
                                                name="deadline"
                                                id="deadline"
                                                onChange={handleChange}/>
                            </Form.Group>
                            {skillList.skills && skillList.skills.map(skill => (
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" name={skill._id} data-skillId={skill._id} label={skill.name} onChange={handleChange}/>
                                </Form.Group>
                            ))}
                        <div className="form-group mb-3"><button className="btn btn-primary btn-lg" style={{ width: "100%" }} type="submit">Submit</button></div>
                    </form>
                </div>
                </div>
        );
    
}



export default NewProjectModal;

