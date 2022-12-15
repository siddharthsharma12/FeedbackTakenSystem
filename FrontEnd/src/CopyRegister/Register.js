import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast,ToastContainer } from "react-toastify";
import { googleSignIn, SignUp } from "../CopyRedux/authSlice";
import { GoogleLogin } from "react-google-login";
import "./CopyRegister.css";



const initialState = {
  email: "",
  password: "",
  confirmpassword: "",
};

const Register = () => {
  // const [feror, setFeror] = useState("password didn'match");
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password, confirmpassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password && confirmpassword) {
      dispatch(SignUp({ formValue, navigate, toast }));
      // return toast.success("sign up successfully");
    }
    if (password !== confirmpassword) {
      return toast.error("password didnt match");
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  // const googleSuccess = (resp) => {
  //   const email = resp?.profileObj?.email;
  //   const name = resp?.profileObj?.name;
  //   const token = resp?.tokenId;
  //   const googleId = resp?.googleId;
  //   const result = { email, name, token, googleId };
  //   // dispatch(googleSignIn({ result, navigate, toast }));
  // };
  // const googleFailure = (error) => {
  //   toast.error(error);
  // };

  return (
    <>
    <ToastContainer/>
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
        <h5>Sign Up</h5>
        </div>

        <div>
          <form onSubmit={handleSubmit} noValidate className="row g-3">
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
            <div className="col-md-12">
              <input
              className="special-btn"
                label="Confirm Password"
                type="password"
                value={confirmpassword}
                name="confirmpassword"
                onChange={onInputChange}
               
              />
            </div>
            <div className="col-12">
           {/*   <MDBBtn style={{ width: "100%" }} className="mt-2">
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                SignUp
                </MDBBtn> */}
                <div className="register-button">
                 <button type="submit" className="btn-register">Register</button>
                </div>
            </div>
          </form>
          <br />
         
        </div>
        <div  className="sign-up">
          <Link to="/">
            <p>Already have an account ? Sign in</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
 
}

export default Register;
