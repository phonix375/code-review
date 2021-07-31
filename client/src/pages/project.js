import React from 'react';
import Welcome from '../components/welcome/welcome'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './projectStyle.css'



function Project(){
    return(
        <Container fluid className="" >
        <Row className="justify-content-md-center mt-3" >
          <Col> <Welcome /></Col>
        </Row>
      </Container>
           

    )
}

export default Project;