import React, { useState }  from 'react';

import { useStoreContext } from "../../utils/GlobalState";
import { CREATE_NEW_PROJECT } from "../../utils/mutations"
import { REGISTER_TAGGLE, LOGGIN_TAGGLE, NEW_PROJECT_TAGGLE } from "../../utils/actions";

import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { Form } from 'react-bootstrap';


function NewProjectModal(){
    const [formState, setFormState] = useState({ project_name: '', price: 0, deployed_link:'',repository_link:'',description:'',deadline:''})
    //createProject <- the state managment for open modal
    const [state, dispatch] = useStoreContext();
    const [newProject, { error }] = useMutation(CREATE_NEW_PROJECT);



    const handelNewProjectSubmit = async event => {
        event.preventDefault();
        try {
            console.log('you trying to sumbit a bew project');
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
                                                type="text"
                                                placeholder="Deadline" 
                                                name="deadline"
                                                id="deadline"
                                                onChange={handleChange}/>
                            </Form.Group>

                            

                        <div className="form-group mb-3"><button className="btn btn-primary btn-lg" style={{ width: "100%" }} type="submit">Submit</button></div>
                    </form>
                </div>
                </div>
        );
    
}



export default NewProjectModal;

