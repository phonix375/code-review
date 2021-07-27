
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import Footer from "./components/footer/footer";
import Navigation from "./components/navBar/navBar";
import ProjectBoard from "./components/projectBoard/projectBoard";
import Welcome from "./components/welcome/welcome";
import LoginModal from "./components/loginModal/login";
import Register from "./components/register/register";

function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            {/* <ProjectBoard></ProjectBoard>
            <Welcome></Welcome>
            <Footer></Footer> */}

        </div>
    );
}

export default App;
