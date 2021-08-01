import React, { useState } from "react";

import "./login.css";
import { REGISTER_TAGGLE, LOGGIN_TAGGLE } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { LOGIN } from "../../utils/mutations";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { Form } from "react-bootstrap";

function LoginModal() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [state, dispatch] = useStoreContext();
  const [login] = useMutation(LOGIN);

  const handelLoginSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  function closeModal() {
    dispatch({ type: LOGGIN_TAGGLE });
  }

  function signUpClickHandel() {
    dispatch({ type: LOGGIN_TAGGLE });
    dispatch({ type: REGISTER_TAGGLE });
  }

  function closeModal() {
    dispatch({ type: LOGGIN_TAGGLE });
  }

  function signUpClickHandel() {
    dispatch({ type: LOGGIN_TAGGLE });
    dispatch({ type: REGISTER_TAGGLE });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  return (
    <div className="modal-content">
      <div className="modal-header" style={{ background: "#c3e7ff" }}>
        <h4>Sign In</h4>
        <button
          type="button"
          className="btn-close"
          onClick={closeModal}
          aria-label="Close"
        >
          X
        </button>
      </div>
      <div className="modal-body" style={{ background: "#edf6ff" }}>
        <form onSubmit={handelLoginSubmit}>
          <Form.Group className="form-group mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="form-group mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </Form.Group>
          <div className="form-group mb-3">
            <button
              className="btn btn-primary btn-lg"
              style={{ width: "100%" }}
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
        <hr style={{ backgroundColor: "#bababa" }} />
        <p className="text-center">
          Don't have an account? &nbsp;
          <a
            className="text-decoration-none"
            data-bs-dismiss="modal"
            data-bs-toggle="modal"
            data-bs-target="#signin"
            onClick={signUpClickHandel}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
