import React from 'react';
import styled from "styled-components";
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./footer.css"


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <footer className="page-footer"
                    style={{
                        color: "rgb(255, 255, 255)", background: "#003f54",
                        padding: "20px 0px 0px",
                        borderStyle: "none",
                        borderColor: "rgb(255,255,255)"
                    }}>
                    <div className="container">
                        <div className="links"
                            style={{
                                color: "rgb(255,255,255)"
                            }}><a href="#"
                                style={{
                                    color: "rgb(195,231,255)"
                                }}>About Us</a><a href="#" style={{color: "#c3e7ff"}}>Contact us</a><a href="#" style={{
                                    color: "#c3e7ff",
                                    borderColor: "#c3e7ff"
                                    }}>Terms and Service</a></div>
                        <div className="social-icons"><a href="#" style={{
                            borderWidth: "2px",
                            color: "rgb(255,255,255)"
                            }}><i className="icon ion-social-facebook"></i></a><a href="#" style={{
                                borderWidth: "2px",
                                borderColor: "rgb(255,255,255)"
                                }}><i className="icon ion-social-instagram-outline"></i></a><a href="#" style={{
                                    color: "rgb(255,255,255)", 
                                    borderWidth: "2px"
                                    }}><i className="icon ion-social-twitter" style={{
                                        color: "#ffffff"}}></i></a></div>
                    </div>
                </footer>

            </div >
        );
    }
}



export default Footer;