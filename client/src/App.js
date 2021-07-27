
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

class App extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Navigation></Navigation>
                </Row>
            </Container>
        );
    }
}

export default App;
