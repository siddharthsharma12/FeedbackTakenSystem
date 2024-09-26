import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { googleSignIn, Login, reset } from "../CopyRedux/authSlice";
import "./LoginCopy.css";
import { ToastContainer } from "react-bootstrap";


const initialState = {
  email: "",
  password: "",
};


const LoginCopy = () => {


  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(Login({ formValue, navigate, toast }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  return (
    <>
      <ToastContainer />
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
          marginTop: "120px",
        }}
      >
        <div alignment="center">
          <div className="sign-in">
            <h5>Sign In</h5>
          </div>

          <div>
            
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-12">
                <input
                  className="special-btn"
                  label="Email"
                  type="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-12">
                <input
                  className="special-btn"
                  label="Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                />
              </div>
              <div className="col-12">
               
                <div className="login-button">
                  <button className="btn-login">Login</button>
                </div>
              </div>
            </form>
            <br />
          </div>
          <div>

            <div className="sign-up">
              <Link to="/Register">
                <p>Don't have an account ? Sign Up</p>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCopy;