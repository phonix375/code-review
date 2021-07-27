

import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';


function Footer() {
    return (
        <Container>
            <footer className="page-footer" style="color: rgb(255,255,255);background: #003f54;padding: 20px 0px 5px;border-style: none;border-color: rgb(255,255,255);">
                <div className="container">
                    <div className="links" style="color: rgb(255,255,255);"><a href="#" style="color: rgb(195,231,255);">About Us</a><a href="#" style="color: #c3e7ff;">Contact us</a><a href="#" style="color: #c3e7ff;border-color: #c3e7ff;">Terms and Service</a></div>
                    <div className="social-icons"><a href="#" style="border-width: 2px;color: rgb(255,255,255);"><i className="icon ion-social-facebook"></i></a><a href="#" style="border-width: 2px;border-color: rgb(255,255,255);"><i className="icon ion-social-instagram-outline"></i></a><a href="#" style="color: rgb(255,255,255);border-width: 2px;"><i className="icon ion-social-twitter" style="color: #ffffff;"></i></a></div>
                </div>
            </footer>
        </Container>
    )
}

export default Footer;