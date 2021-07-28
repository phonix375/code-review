import React from 'react';

import {IoMdClose} from "react-icons/io"
import "./login.css";



class LoginModal extends React.Component {


    render() {
        return (
            <div className="modal-content">
                <div className="modal-header" style={{ background: "#c3e7ff" }}>
                    <h4>Sign In</h4>
                    <button type="button" className="btn-close" onClick={this.props.closeModal} aria-label="Close" ><IoMdClose /></button>
                </div>
                <div className="modal-body" style={{ background: "#edf6ff" }}>
                    <form>
                        <div className="form-group mb-3">
                            <div className="input-group"><span className="text-primary input-group-text"><i className="fa fa-envelope-o"></i></span>
                                <input className="form-control" type="email" required="" placeholder="Email" /></div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="input-group">
                                <span className="text-primary input-group-text"><i className="fa fa-lock"></i>
                                </span>
                                <input className="form-control" type="password" required="" placeholder="Password" /></div>
                        </div>
                        <div className="form-group mb-3"><button className="btn btn-primary btn-lg" style={{ width: "100%" }} type="button">Log in</button></div>
                    </form>
                    <hr style={{ backgroundColor: "#bababa" }} />
                    <p className="text-center">Or&nbsp;<a className="text-decoration-none" href="#">Forget password</a></p>
                    <p className="text-center">Don't have an account? &nbsp;<a className="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signin">Sign Up</a></p>
                </div>
            </div>



        );
    }
}



export default LoginModal;

