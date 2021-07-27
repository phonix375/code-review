
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
            <div className="">
                <Navigation></Navigation>
            </div>
        );
    }
}

export default App;
