import React from 'react';
import styled from "styled-components";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { REGISTER_TAGGLE, LOGGIN_TAGGLE } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";



function Navigation () {
    const [state, dispatch] = useStoreContext();
    console.log(state);
        return (
            <div className="header">
                <Nav className="navbar navbar-light navbar-expand-md sticky-top bg-white" style={{
                    color: "rgb(33, 37, 41)",
                    background: "linear-gradient(90deg, #c3e7ff 12%, #003f54 100%)",
                    opacity: "0.95",
                    height: "95px",
                    marginBottom: "95px"
                    }}>
                    <div className="container-fluid"><a className="navbar-brand" href="#" style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        color: "rgb(0,63,84)"
                        }}>
                            {`<!STUCK>`}</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navcol-1">
                            <ul className="navbar-nav">
                                <li className="nav-item"></li>
                                <li className="nav-item"></li>
                                <li className="nav-item"></li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link active" href="#"></a></li>
                                <li className="nav-item"><a className="nav-link active" href="#"></a></li>
                            </ul>

                            <button className="btn btn-outline-primary" type="button" style={{
                                background: "rgba(255,255,255,0)"
                                }}>Log In</button>
                            
                            <button className="btn btn-primary d-flex" type="button" data-bs-toggle="modal" data-bs-target="#signin">Sign Up</button>
                        </div>
                    </div>
                </Nav>
            </div>
        )
};

export default Navigation;





