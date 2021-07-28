
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import { Row, Column } from 'react-bootstrap';
import Footer from "./components/footer/footer";
import Navigation from "./components/navBar/navBar";

import ProjectBoard from "./components/projectBoard/projectBoard";
import React from "react";
import Welcome from "./components/welcome/welcome";
import LoginModal from "./components/loginModal/login";
import RegisterModal from "./components/register/register";
import {useState} from "react";
import backgroundvid from "./assets/backgroundLoop.mp4";



function App() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


   
        return (
            <Container className="container1">
                <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "50%",
                    left: "50%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}>
                    <source src={backgroundvid} type="video/mp4"/>
                </video>
                <Navigation loginOnClick={handleShow} signUpOnClick={handleShow2}></Navigation>
                {show && <LoginModal closeModal={handleClose}></LoginModal>}
                {show2 && <RegisterModal closeModal2={handleClose2}></RegisterModal>}
                <ProjectBoard></ProjectBoard>
                <Welcome></Welcome>
                <Footer></Footer>
            </Container>
        );
    }


export default App;
