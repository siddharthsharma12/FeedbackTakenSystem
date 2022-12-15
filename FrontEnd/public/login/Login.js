// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
// import { LoginUser, reset } from "../ReduxLogin/authSlice";
// import Modal from "react-bootstrap/Modal";
// import { Link } from "react-router-dom";

// const Login = () => {

//   // sign up start================>
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const captcha = useRef();
//   const [showing, setShowing] = useState(false);
//   const handleShowing = () => setShowing(true);
//   const handleClosing = () => setShowing(false);

  

//   const { user, isError, isSuccess, isLoading, message } = useSelector(
//     (state) => state.auth
//   );

//   // login=========================================>
//   const Login = (e) => {
//     e.preventDefault();
//     dispatch(LoginUser({ email, password }));
//   };

//   useEffect(() => {
//     if (user || isSuccess) {
//       navigate("/Usermanagement");
//     }
//     dispatch(reset());
//   }, [user, isSuccess, dispatch, navigate]);

//   // login========================================>

//   return (
//     <>
//       <div>
//         <Container fluid>
//           <Row>
//             <Col xl={6} lg={6} md={6} className="login-form">
//               <div className="login-heading">
//                 <h4>Login</h4>
//                 <p>PLEASE LOGIN TO CONTINUE</p>
//               </div>

//               <div className="col-md-8 col-lg-8">
//                 <div className="forms-left">
//                   <Form onSubmit={Login}>
//                     {isError && (
//                       <p
//                         style={{ color: "red", fontsize: "12px" }}
//                         className="has-text-centered"
//                       >
//                         {message}
//                       </p>
//                     )}
//                     <Form.Group className="mb-3" controlId="formBasicname">
//                       <Form.Label>Email</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter Your Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                       <Form.Label>Password</Form.Label>
//                       <Form.Control
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                     </Form.Group>
//                     <div className="dis">
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCheckbox"
//                       >
//                         <Form.Check type="checkbox" label="Remember me" />
//                       </Form.Group>

//                       {/* forgot password start==================================*/}
//                       <div className="password-pop">
//                         <a className="password-pop" onClick={handleShowing}>
//                           Forgot Password
//                         </a>

//                         <Modal show={showing} onHide={handleClosing}>
//                           <Modal.Header closeButton>
//                             <Modal.Title> Forgot Password</Modal.Title>
//                           </Modal.Header>
//                           <Modal.Body>
//                             <Form>
//                               <Form.Group
//                                 className="mb-3"
//                                 controlId="formBasicEmail"
//                               >
//                                 <Form.Label>Email address</Form.Label>
//                                 <Form.Control
//                                   type="email"
//                                   placeholder="Enter email"
//                                 />
//                                 <Form.Text className="text-muted">
//                                   We'll never share your email with anyone else.
//                                 </Form.Text>
//                               </Form.Group>

//                               <Button variant="primary" type="">
//                                 Next
//                               </Button>
//                             </Form>
//                           </Modal.Body>
//                         </Modal>
//                       </div>
//                       {/*    {isLoading ? "Loading..." : "Login"} forgot password ends=================================*/}
//                     </div>
//                     <div className="special-btn">
//                       <button type="submit" className="login-button">
//                        Login
//                       </button>
//                     </div>
//                   </Form>
//                 </div>
//                 {/*   login link start ========================*/}
//                 <div className="sign-up">
//                   <Nav.Link className="link-sign" as={Link} to="/SignUp">
//                     Didn't Sign ? SignUp
//                   </Nav.Link>
//                 </div>
//                 {/* login link ends =========================*/}
//               </div>
//             </Col>

//             <Col xl={6} lg={6} md={6} className="theme-image">
//               <div className="image-head">
//                 <p>FeedBack Taken</p>
//               </div>
//               <div className="right-image">
//                 <img src="./images/mt.png" alt="" />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Login;
