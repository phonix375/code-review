import { Container } from "react-bootstrap";
import React from "react";
import "./personal.css";

class Personal extends React.Component {
  render() {
    return (
      <Container className="container2">
        <section
          className="features-blue"
          style={{
            padding: "5px 5px 5px",
            background: "rgb(0,63,84)",
            color: "rgb(255, 255, 255)",
          }}
        >
          <div
            class="container"
            style={{
              background: "rgb(34,73,214)",
              width: "1338px",
              margin: "0px",
              margin: "25px",
            }}
          >
            <div class="row">
              <div class="col-md-12" style={{ height: "54px" }}>
                <button
                  class="btn btn-primary"
                  type="button"
                  style={{
                    width: "110.9844px",
                    marginLeft: "489px",
                    marginTop: "8px",
                  }}
                >
                  Post Job
                </button>
              </div>
            </div>
            <div class="row" style={{ height: "352px" }}>
              <div class="col-md-4" style={{ height: "185px" }}>
                <h1 style={{ color: "rgb(144,199,255)", textAlign: "center" }}>
                  Current Jobs
                </h1>
              </div>
              <div class="col-md-4">
                <h1 style={{ color: "rgb(144,199,255)", textAlign: "center" }}>
                  Ratings
                </h1>
              </div>
              <div class="col-md-4">
                <h1 style={{ color: "rgb(144,199,255)", textAlign: "center" }}>
                  Account Info
                </h1>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default Personal;
