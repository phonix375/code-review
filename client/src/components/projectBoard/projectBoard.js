
import {Navbar,Container,Nav} from 'react-bootstrap';
import React from 'react';


function ProjectBoard() {
    return (
        <Container>
            <section className="portfolio-block projects-cards" style="border-style: none;">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="nature/image1.jpg" alt="Card Image" /></a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="nature/image2.jpg" alt="Card Image" /></a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="nature/image3.jpg" alt="Card Image" /></a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="nature/image4.jpg" alt="Card Image" /></a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="nature/image5.jpg" alt="Card Image" /></a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="nature/image6.jpg" alt="Card Image" /></a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default ProjectBoard;