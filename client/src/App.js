
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';



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
import { StoreProvider } from "./utils/GlobalState";

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

  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);


   
        return (
            <ApolloProvider client={client}>
                <Router>
                <Container>
                <StoreProvider>
                <Navigation loginOnClick={handleShow} signUpOnClick={handleClose2}></Navigation>
                {show && <LoginModal closeModal={handleClose}></LoginModal>}
                {show && <RegisterModal closeModal2={handleClose2}></RegisterModal>}
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
