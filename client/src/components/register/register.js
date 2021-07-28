import React from 'react';

import {IoMdClose} from "react-icons/io"
import "./register.css";


class RegisterModal extends React.Component {
    render() {
        return (
            <div className="registerModal">
                <div className="modal-content">
                    <div className="modal-header" style={{ background: "#c3e7ff" }}>
                        <h4 style={{ color: "#003f54" }}>Create Account</h4><button type="button" className="btn-close" onClick={this.props.closeModal2} aria-label="Close"><IoMdClose /></button>
                    </div>
                    <div className="modal-body" style={{ background: "#edf6ff" }}>
                        <form className="mt-4">
                            <div className="form-group mb-3">
                                <div className="input-group"><span className="text-primary input-group-text"><i className="fa fa-user-o"></i></span>
                                    <input className="form-control" type="text" required="" placeholder="Full Name" /></div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="input-group"><span className="text-primary input-group-text"><i className="fa fa-envelope-o"></i></span>
                                    <input className="form-control" type="email" required="" placeholder="Email" /></div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="input-group"><span className="text-primary input-group-text"><i className="fa fa-lock"></i></span><input className="form-control" type="password" required="" placeholder="Password" /></div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" required="" checked=""/><label className="form-check-label border rounded" for="formCheck-1">I agree all the terms and conditions.</label></div>
                                </div>
                                <div className="form-group mb-3"><button className="btn btn-primary btn-lg border rounded-pill" style={{ width: "100%" }} type="button">Sign Up</button></div>
                        </form>
                            <hr style={{ backgroundColor: "#bababa" }} />
                            <p className="text-center">Already have an Account?&nbsp;<a className="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signup">Log In</a></p>
                            </div>
                    </div>
                </div>
        );
    }
}



export default RegisterModal;