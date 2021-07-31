import React, {useEffect} from 'react';
import { Nav } from 'react-bootstrap';
import { REGISTER_TAGGLE, LOGGIN_TAGGLE, NEW_PROJECT_TAGGLE, UPDATE_SKILL_LIST } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import Auth from "../../utils/auth";
import {QUERY_SKILLS} from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';

import LoginModal from '../loginModal/login';
import RegisterModal from '../register/register';
import NewProjectModal from '../createProject'



function Navigation () {
    const [state, dispatch] = useStoreContext();
    const {data: skills } = useQuery(QUERY_SKILLS)
    console.log(state);
    
    useEffect(()=> {
        if(skills){
  
          dispatch({
              type: UPDATE_SKILL_LIST,
              skills : skills.skills
          })
          console.log('this is a skill list:')
          console.log(skills.skills)
        }
    }, [dispatch,skills])


    function loginClickHandel(){
        if(state.registerOpen){
            dispatch({ type: REGISTER_TAGGLE });
        }
        dispatch({ type: LOGGIN_TAGGLE });
    };
    function signUpClickHandel(){
        if(state.logginOpen){
            dispatch({ type: LOGGIN_TAGGLE });
        }
        dispatch({ type: REGISTER_TAGGLE });
    };

    function newProjectTaggel(){
        dispatch({ type: NEW_PROJECT_TAGGLE });
    }

    function profileClickHandel(){
        dispatch({});
    }

        return (
            <div className="header">
                <Nav className="navbar navbar-light navbar-expand-md sticky-top bg-white" style={{
                    color: "rgb(33, 37, 41)",
                    background: "linear-gradient(90deg, #c3e7ff 12%, #003f54 100%)",
                    opacity: "0.95",
                    height: "95px",
                    width: "100% !important",
                    marginBottom: "95px"
                    }}>
                        
                    <div className="container-fluid"><a className="navbar-brand" href="/" style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        color: "rgb(0,63,84)"
                        }}>
                            {`<!STUCK>`}</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        { !Auth.loggedIn() && <div className="collapse navbar-collapse d-flex justify-content-end" id="navcol-1">
                            <Nav.Item>
                            <button className="btn btn-outline-primary" type="button" onClick={loginClickHandel} style={{ background: "rgba(255,255,255,0)"}} >Log In</button>
                            </Nav.Item>
                              <Nav.Item>
                              <button className="btn btn-primary" type="button" onClick={signUpClickHandel}>Sign Up</button>
                            </Nav.Item>
                            
                        </div>}


                        {Auth.loggedIn() && <div className="collapse navbar-collapse d-flex justify-content-end" id="navcol-1">
                            <Nav.Item>
                            <button className="btn btn-outline-primary" type="button" onClick={() => Auth.logout()} style={{ background: "rgba(255,255,255,0)"}} >Log Out</button>
                            </Nav.Item>
                            <Nav.Item>
                            <button className="btn btn-outline-primary" type="button" onClick={newProjectTaggel} style={{ background: "rgba(255,255,255,0)"}} >Create Project</button>
                            </Nav.Item>
                            {Auth.loggedIn() && 
                                <Nav.Item>
                                <Nav.Link eventKey="1" href="#/home" style={{ background: "rgba(255,255,255,0)"}}>Hello {Auth.getProfile().data.username}</Nav.Link>
                                </Nav.Item>
                            } 
                        </div>}
                    </div>
                </Nav>
                {state.logginOpen && <LoginModal closeModal={loginClickHandel} ></LoginModal>}
                {state.registerOpen && <RegisterModal closeModal2={signUpClickHandel}></RegisterModal>}
                {state.createProject && <NewProjectModal closeModal2={signUpClickHandel}></NewProjectModal>}
            </div>
        )
};

export default Navigation;





