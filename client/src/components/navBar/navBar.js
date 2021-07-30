import React from 'react';
import styled from "styled-components";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { REGISTER_TAGGLE, LOGGIN_TAGGLE } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import "./navBar.css";
import Auth from "../../utils/auth";



import LoginModal from '../loginModal/login';
import RegisterModal from '../register/register';


function Navigation (props) {
    const [state, dispatch] = useStoreContext();
    console.log(state);
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
                    <div className="container-fluid"><a className="navbar-brand" href="#" style={{
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
                        </div>}
                    </div>
                </Nav>
                {state.logginOpen && <LoginModal closeModal={loginClickHandel} ></LoginModal>}
                {state.registerOpen && <RegisterModal closeModal2={signUpClickHandel}></RegisterModal>}
            </div>
        )
};

export default Navigation;





