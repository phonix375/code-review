import { Container } from "react-bootstrap";
import React from "react";
import "./welcome.css";

class Welcome extends React.Component {
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
            className="container"
            style={{
              padding: "0px 0px 5px 5px",
            }}
          >
            <div className="intro">
              <h2
                className="text-center"
                style={{
                  color: "rgb(240, 217, 90)",
                  padding: "5px",
                }}
              >
                Welcome
              </h2>
              <p
                className="text-center"
                style={{
                  color: "rgb(240, 217, 90)",
                  padding: "5px",
                }}
              >
                This is a site designed and created to match experienced
                developers with others who need to have their code reviewed,
                debugged ect.  
              </p>
            </div>
            <div className="row features">
              <div className="col-sm-6 col-md-4 item">
                <i className="fa fa-code icon"></i>
                <h3
                  className="name"
                  style={{
                    color: "rgb(240, 217, 90)",
                    padding: "5px",
                  }}
                >
                  New to coding ?
                </h3>
                <p
                  className="description"
                  style={{
                    color: "rgb(240, 217, 90)",
                    padding: "5px",
                  }}
                >
                  Often new developers get stuck with their code not working and
                  spend hours trying to troubleshoot. with this platform you set
                  the price you want to pay. Experienced devs can apply to the
                  job, you choose who you feel is best suited for the current
                  project.
                </p>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <i className="fa fa-folder-open-o icon"></i>
                <h3
                  className="name"
                  style={{
                    color: "rgb(240, 217, 90)",
                    padding: "5px",
                  }}
                >
                  <strong>Experienced Developers</strong> 
                </h3>
                <p
                  className="description"
                  style={{
                    color: "rgb(240, 217, 90)",
                    padding: "5px",
                  }}
                >
                  For those experienced developers this platform is perfect for
                  you. Working with and troubleshooting other developers code
                  with keep you engaged and also allow you to make money. You
                  apply to jobs you feel suit your skills best.
                </p>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <i className="fa fa-check-square-o icon"></i>
                <h3
                  className="name"
                  style={{
                    color: "rgb(240, 217, 90)",
                    padding: "5px",
                  }}
                >
                  <strong>Quality Control</strong>
                </h3>
                <p
                  className="description"
                  style={{
                    color: "rgb(240, 217, 90)",
                    padding: "5px",
                  }}
                >
                  Once a job is done and the agreed upon work is complete. The
                  customer is able to give a thorough review of the dev who they
                  hired. this will result in a rating for the devs as our form
                  of quality control. 
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default Welcome;
