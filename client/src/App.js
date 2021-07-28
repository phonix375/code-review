
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




function App() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


   
        return (
            <Container>
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
