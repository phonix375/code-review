
import {Container} from 'react-bootstrap';
import React from 'react';


class Welcome extends React.Component {
    render() {
        return (
            <Container>
                <section class="features-blue" style={{
                    padding: "5px 5px 5px",
                    background: "rgb(0,63,84)",
                    color: "rgb(255, 255, 255)"
                }}>
                    <div class="container" style={{
                        padding: "0px 0px 5px 5px"
                    }}>
                        <div class="intro">
                            <h2 class="text-center">Welcome</h2>
                            <p class="text-center">This is a site designed and created to match experienced developers with others who need to have their code reviewed, debugged ect.  </p>
                        </div>
                        <div class="row features">
                            <div class="col-sm-6 col-md-4 item"><i class="fa fa-code icon"></i>
                                <h3 class="name">New to coding ?</h3>
                                <p class="description">Often new developers get stuck with their code not working and spend hours trying to troubleshoot. with this platform you set the price you want to pay. Experienced devs can apply to the job, you choose who you feel is best suited for the current project.</p>
                            </div>
                            <div class="col-sm-6 col-md-4 item"><i class="fa fa-folder-open-o icon"></i>
                                <h3 class="name"><strong>Experienced Developers</strong> </h3>
                                <p class="description">For those experienced developers this platform is perfect for you. Working with and troubleshooting other developers code with keep you engaged and also allow you to make money. You apply to jobs you feel suit your skills best.</p>
                            </div>
                            <div class="col-sm-6 col-md-4 item"><i class="fa fa-check-square-o icon"></i>
                                <h3 class="name"><strong>Quality Control</strong></h3>
                                <p class="description">Once a job is done and the agreed upon work is complete. The customer is able to give a thorough review of the dev who they hired. this will result in a rating for the devs as our form of quality control. </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        )
    }
}

export default Welcome;