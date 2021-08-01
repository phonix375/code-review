import React from 'react';
import { FaBorderNone } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import "./footer.css"



class Footer extends React.Component {
    render() {
        return (
            <div className="footer" >
                <footer className="page-footer"
                    style={{
                        color: "rgb(255, 255, 255)", background: "#003f54",
                        padding: "20px 0px 0px",
                        borderStyle: "none",
                        borderColor: "rgb(255,255,255)"
                    }}>
                    <div className="container3">
                        <div className="links"
                            style={{
                                color: "rgb(255,255,255)"
                            }}><a className="linksa" href="#"
                                style={{
                                    color: "rgb(195,231,255)"
                                }}>About Us</a><a className="linksa" href="#" style={{ color: "#c3e7ff" }}>Contact us</a><a className="linksa" href="/donations" style={{
                                    color: "#c3e7ff",
                                    borderColor: "#c3e7ff"
                                }}>Donations</a>
                        </div>
                        <div className="social-icons" >
                            <a className="icon" href="#" ><AiFillGithub size={40} /></a>
                            <a className="icon" href="#" >< AiFillInstagram size={40} /></a>
                            <a className="icon" href="#" ><AiFillTwitterCircle size={40} /></a></div>
                    </div>
                </footer>

            </div >
        );
    }
}



export default Footer;