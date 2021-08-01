import React from "react";
import Welcome from "../components/welcome/welcome";
import Container from "react-bootstrap/Container";
import ProjectBoard from "../components/projectBoard/projectBoard";

function Home() {
  return (
    <Container>
      <Welcome></Welcome>
      <ProjectBoard />
    </Container>
  );
}

export default Home;
