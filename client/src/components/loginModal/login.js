import React, { useState }  from 'react';

import {IoMdClose} from "react-icons/io"
import "./login.css";
import { REGISTER_TAGGLE, LOGGIN_TAGGLE } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { LOGIN } from "../../utils/mutations"
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";





function LoginModal(){
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [state, dispatch] = useStoreContext();
    const [login, { error }] = useMutation(LOGIN);



    const handelLoginSubmit = async event => {
        event.preventDefault();
        try {
          const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
          const token = mutationResponse.data.login.token;
          Auth.login(token);
        } catch (e) {
          console.log(e)
        }
      };

      
    function closeModal(){
        dispatch({ type: LOGGIN_TAGGLE})
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value
        });
        console.log(formState);
      };
    

        return (
            <div className="modal-content">
                <div className="modal-header" style={{ background: "#c3e7ff" }}>
                    <h4>Sign In</h4>
                    <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" ><IoMdClose /></button>
                </div>
                <div className="modal-body" style={{ background: "#edf6ff" }}>
                    <form onSubmit={handelLoginSubmit}>
                        <div className="form-group mb-3">
                            <div className="input-group"><span className="text-primary input-group-text"><i className="fa fa-envelope-o"></i></span>
                                <input className="form-control" required="" placeholder="Email" onChange={handleChange}  name="email" type="email" id="email"/></div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="input-group">
                                <span className="text-primary input-group-text"><i className="fa fa-lock"></i>
                                </span>
                                <input className="form-control" type="password" required="" placeholder="Password" onChange={handleChange} name="password" type="password" id="pwd"/></div>
                        </div>
                        <div className="form-group mb-3"><button className="btn btn-primary btn-lg" style={{ width: "100%" }} type="submit">Log in</button></div>
                    </form>
                    <hr style={{ backgroundColor: "#bababa" }} />
                    <p className="text-center">Or&nbsp;<a className="text-decoration-none" href="#">Forget password</a></p>
                    <p className="text-center">Don't have an account? &nbsp;<a className="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signin">Sign Up</a></p>
                </div>
            </div>



        );
    
}



export default LoginModal;

