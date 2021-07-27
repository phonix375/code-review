import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
function Navigation(props){
   const { 
     setCurrentSelection} = props
    function clickHandel(e){
      setCurrentSelection(e.target.name)
    }
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Alexy Kotliar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link name='About' onClick={clickHandel}>About Me</Nav.Link>
          <Nav.Link name='Projects' onClick={clickHandel}>My Projects</Nav.Link>
          <Nav.Link name='Contact' onClick={clickHandel}>Contact</Nav.Link>
          <Nav.Link name='Resume' onClick={clickHandel}>Resume</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
export default Navigation;
// import {Navbar,Container,Nav} from 'react-bootstrap';
// import React from 'react';



// function Navigation() {
//     return (
//         <Container>
//             <Nav className="navbar navbar-light navbar-expand-md sticky-top bg-white" style="color: rgb(33, 37, 41);background: linear-gradient(90deg, #c3e7ff 12%, #003f54 100%);opacity: 0.95;height: 95px;margin-bottom: 95px;">
//                 <div className="container-fluid"><a className="navbar-brand" href="#" style="font-weight: bold;font-size: 30px;color: rgb(0,63,84);">Code Reviews.</a><button data-bs-toggle="collapse" data-bs-target="#navcol-1" className="navbar-toggler"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
//                     <div className="collapse navbar-collapse d-flex justify-content-end" id="navcol-1">
//                         <ul className="navbar-nav">
//                             <li className="nav-item"></li>
//                             <li className="nav-item"></li>
//                             <li className="nav-item"></li>
//                         </ul>
//                         <ul className="navbar-nav">
//                             <li className="nav-item"><a className="nav-link active" href="#"></a></li>
//                             <li className="nav-item"><a className="nav-link active" href="#"></a></li>
//                         </ul><button className="btn btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#signup" style="background: rgba(255,255,255,0);">Log In</button><button className="btn btn-primary d-flex" type="button" data-bs-toggle="modal" data-bs-target="#signin">Sign Up</button>
//                     </div>
//                 </div>
//             </Nav>
//         </Container>
//     )
// }

// export default Navigation;