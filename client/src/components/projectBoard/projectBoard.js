
import React from 'react';
import "./projectBoard.css";
import   placeholder from "../../assets/placeholder.jpeg";
class ProjectBoard extends React.Component {
    render() {
        return (
            <div className="projectBoard">
                <section className="portfolio-block projects-cards" style={{
                    borderStyle: "none"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 cards">
                                <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src={placeholder} alt="Card Image" /></a>
                                    <div className="card-body">
                                        <h6><a href="#">Lorem Ipsum</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 cards">
                                <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src={placeholder} alt="Card Image" /></a>
                                    <div className="card-body">
                                        <h6><a href="#">Lorem Ipsum</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 cards">
                                <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src={placeholder} alt="Card Image" /></a>
                                    <div className="card-body">
                                        <h6><a href="#">Lorem Ipsum</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 cards">
                                <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src={placeholder} alt="Card Image" /></a>
                                    <div className="card-body">
                                        <h6><a href="#">Lorem Ipsum</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 cards">
                                <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src={placeholder} alt="Card Image" /></a>
                                    <div className="card-body">
                                        <h6><a href="#">Lorem Ipsum</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 cards">
                                <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src={placeholder} alt="Card Image" /></a>
                                    <div className="card-body">
                                        <h6><a href="#">Lorem Ipsum</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}



export default ProjectBoard;