import React from 'react';
import { FaBorderNone } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from "react-icons/ai";
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
                                }}>About Us</a><a href="#" style={{ color: "#c3e7ff" }}>Contact us</a><a href="#" style={{
                                    color: "#c3e7ff",
                                    borderColor: "#c3e7ff"
                                }}>Terms and Service</a></div>
                        <div className="social-icons" >
                            <a className="icon" href="#" ><AiFillGithub /></a>
                            <a className="icon" href="#" >< AiFillInstagram /></a>
                            <a className="icon" href="#" ><AiFillTwitterCircle /></a></div>
                    </div>
                </footer>

            </div >
        );
    }
}



export default Footer;