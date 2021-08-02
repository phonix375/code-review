import React, { useState } from 'react';

import "./register.css";
import { REGISTER_TAGGLE, LOGGIN_TAGGLE } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { Form } from 'react-bootstrap';


function RegisterModal() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [state, dispatch] = useStoreContext();
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                password: formState.password,
                email: formState.email,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    function closeModal() {
        dispatch({ type: REGISTER_TAGGLE })
    };

    function signUpClickHandel() {
        dispatch({ type: REGISTER_TAGGLE });
        dispatch({ type: LOGGIN_TAGGLE });
    }

    function handelChange(event) {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })
        // console.log(formState);
    }
    return (
        <div className="registerModal">
            <div className="modal-content">
                <div className="modal-header" style={{ background: "#c3e7ff" }}>
                    <h4 style={{ color: "#003f54" }}>Create Account</h4><button type="button" className="btn-close" onClick={closeModal} aria-label="Close">X</button>
                </div>
                <div className="modal-body" style={{ background: "#edf6ff" }}>
                    <form className="mt-4" onSubmit={handleFormSubmit}>
                        <Form.Group className="form-group mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control className="form-control"
                                type="username"
                                placeholder="Username"
                                name="username"
                                id="username"
                                onChange={handelChange} />
                        </Form.Group>
                        <Form.Group className="form-group mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="form-control"
                                type="email"
                                placeholder="Email"
                                name="email"
                                id="email"
                                onChange={handelChange} />
                        </Form.Group>
                        <Form.Group className="form-group mb-3">
                            <Form.Label>Password </Form.Label>
                            <Form.Control className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                id="pwd"
                                onChange={handelChange} />
                        </Form.Group>
                        <div className="form-group mb-3"><button className="btn btn-primary btn-lg border rounded-pill" style={{ width: "100%" }} type="submit">Sign Up</button></div>
                    </form>
                    <hr style={{ backgroundColor: "#bababa" }} />
                    <p className="text-center">Already have an Account?&nbsp;<a className="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signup" onClick={signUpClickHandel}>Log In</a></p>
                </div>
            </div>
        </div>
    );
}



export default RegisterModal;