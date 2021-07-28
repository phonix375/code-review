
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';



import Container from 'react-bootstrap/Container'

import Footer from "./components/footer/footer";
import Navigation from "./components/navBar/navBar";

import ProjectBoard from "./components/projectBoard/projectBoard";
import React from "react";
import Welcome from "./components/welcome/welcome";
import LoginModal from "./components/loginModal/login";
import RegisterModal from "./components/register/register";
import { useState } from "react";
import { StoreProvider } from "./utils/GlobalState";
import backgroundvid from "./assets/backgroundLoop.mp4";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})


function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);



  return (
    <ApolloProvider client={client}>
      <Router>
        <Container className="container1">
          <video autoPlay loop muted 
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            top: "0",
            left: "0",
            objectFit: "cover",
            // transform: "translate(-50%, -50%)",
            zIndex: "-1",
            backgroundRepeat: "repeat-y"
          }}>
            <source src={backgroundvid} type="video/mp4"/>
          </video>
          <StoreProvider>
            <Navigation loginOnClick={handleShow} signUpOnClick={handleShow2}></Navigation>
            {show && <LoginModal closeModal={handleClose}></LoginModal>}
            {show2 && <RegisterModal closeModal2={handleClose2}></RegisterModal>}
            <ProjectBoard></ProjectBoard>
            <Welcome></Welcome>
            <Footer></Footer>
          </StoreProvider>
        </Container>
      </Router>
    </ApolloProvider>

  );
}


export default App;
