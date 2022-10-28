import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { LoginUser, reset ,SignupUser} from "../ReduxLogin/authSlice";
// extra============================================>
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// extra===========================================>

const Login = () => {
  // const [emailone, setEmailOne] = useState("");
  // const [passwordone, setPasswordOne] = useState("");
   // sign up start================>
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
  //  const [pass,setPass] = useState("");
  // sign ends===============>
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // extra==========================>
 
  // pop up start===============>
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  // pop up ends========================>

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowing = () => setShowing(true);
  const handleClosing = () => setShowing(false);

  // extra============================>

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  
   // login=====================>
  const Auth = (e) => { 
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/Usermanagement");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  // login=====================>

  //  sign up =====================>
 const signup = (e) => {
  e.preventDefault();
  dispatch(SignupUser({ email, password}));
};
useEffect(() => {
  if (user || isSuccess) {
    navigate("/");
  }
  dispatch(reset());
}, [user, isSuccess, dispatch, navigate]);
 
  // sign up=====================>

   

  
  
  
 



  return (
    <>
      <div>
        <Container fluid>
          <Row>
            <Col xl={6} lg={6} md={6} className='login-form'>

              <div className='login-heading'>
                <h4>
                  Login
                </h4>
                <p>PLEASE LOGIN TO CONTINUE</p>
              </div>
           
              <div className='col-md-8 col-lg-8'>
                <div className='forms-left'>
                  <Form onSubmit={Auth}>
                  {isError && <p style={{color:"red",fontsize:"12px"}} className="has-text-centered">{message}</p>}
                    <Form.Group className="mb-3" controlId="formBasicname">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />


                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <div className="dis">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                  {/* forgot password start==================================*/}
                    <div className="password-pop">
                    {/*  pop-up start ===========================*/}
                    <a className="password-pop" onClick={handleShowing}>
                      Forgot Password
                     </a>
            
                  <Modal show={showing} onHide={handleClosing}>
                    <Modal.Header closeButton>
                      <Modal.Title> Forgot Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {/* forgot password start=========================> */}
                        {/*  forgot details start =======================*/}
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                    
                        <Button variant="primary" type="">
                          Next
                        </Button>
                      </Form>
                     {/*  forgot details ends =======================*/}
                    {/* forgot password ends =========================>*/}
                    
                    </Modal.Body>

                    <Modal.Footer>
                   
                    </Modal.Footer>
                  </Modal>
                    {/* pop-up ends ==============================*/}
                    </div>
                    {/* forgot password ends=================================*/}
                    </div>
                    <div className='special-btn'>
                    <button
                    type="submit"
                    className="login-button">
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                    </div>
                    
                  </Form>
                </div>
                  {/* Sign Up Page start==================================*/}
                  <div className="sign-pop">
                  {/*  pop-up start ===========================*/}
                  <a className="sign-pop" onClick={handleShow}>
                   Sign-Up
                   </a>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Create An Account</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     {/*  section details start =======================*/}
                     <Form  onSubmit={signup}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control 
                       type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         />
                       <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                       </Form.Text>
                     </Form.Group>
               
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Password</Form.Label>
                       <Form.Control
                        type="password"
                         placeholder="Password"
                         value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         />
                     </Form.Group>

                   {/*  <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Confirm Password</Form.Label>
                       <Form.Control
                       type="password"
                        placeholder="Confirm Password" 
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        />
                     </Form.Group> */}
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       <Form.Check type="checkbox" label="Check me out" />
                     </Form.Group>
                     <Button variant="primary" type="submit" onClick={handleClose} >
                       Submit
                     </Button>
                   </Form>
                  {/*  section details ends =======================*/}
                  </Modal.Body>
                
                </Modal>
                  {/* pop-up ends ==============================*/}
                  </div>
                  {/* Sign Up ends=================================*/}
              </div>

            </Col>

            <Col xl={6} lg={6} md={6} className='theme-image'>
              <div className='image-head'>
                <p>FeedBack Taken</p>
              </div>
              <div className='right-image'>
                <img src="./images/mt.png" alt="" />
              </div>
            </Col>

          </Row>

        </Container>
      </div>
    </>

  )
}

export default Login