import React, { useState } from "react";
import { ListGroup, Container, Row, Col, Form, Button, Tabs, Tab, Modal } from "react-bootstrap";
import { InformationCircleOutline, CheckmarkOutline, CloseCircleOutline } from 'react-ionicons';
import { Edit } from "react-feather";
import Sidebar from "../sidebar/Sidebar";
import "./Profile.css";
import { BsPersonFill } from "react-icons/bs";
import Formextra from "../Validation/Formextra.js"
import Header from "../header/Header";
import { useSelector } from "react-redux";


// import Formextra from "./Validation"
function Profile() {

  const [show, setShow] = useState(false);
  // image preview part start===============================>
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  // const {user: currentUser} = useSelector((state) => state.auth);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      // console.log("selected")
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
      // console.log("file is not supported")
    }
  };

  // image preview part ends===================================>

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Header />
      <ListGroup bsPrefix="myprofile">
        <Container fluid>
          <Row>
            <Col className="leftside-content width-fix">
              <Sidebar />
            </Col>
            <Col>

              <ListGroup bsPrefix="rightside-content">
                <ListGroup bsPrefix="my-profile">
                  <Row>
                    <Col>

                      <h2 className="text-skyblue heading-22 font-bold mt-10 mb-30 sm-heading">My Profile</h2>
                    </Col>
                  </Row>

                  <Row>
                    <div className="myprotab">
                      <Tabs defaultActiveKey="mydetails" id="uncontrolled-tab-example" className="myprofiletab">
                        <Tab eventKey="mydetails" title="My Details">
                          <Row>
                            {/*image updation part start ===========================*/}
                            <Row>
                              <div className="biglist">

                                <div
                                  className="imgPreview"
                                  style={{
                                    background: imgPreview
                                      ? `url("${imgPreview}") no-repeat center/cover`
                                      : "#131313",
                                  }}
                                >
                                  {!imgPreview && (
                                    <div className="cust">
                                      <p><BsPersonFill /></p>
                                      <label htmlFor="fileUpload" className="customfileupload">
                                        Update
                                      </label>
                                      <input
                                        type="file"
                                        id="fileUpload"
                                        onChange={handleImageChange}
                                      />
                                      <div className="span">
                                        { /*  <span>(jpg,jpeg or png)</span> */}
                                      </div>
                                    </div>

                                  )}

                                </div>
                                <div className="htp">
                                  {imgPreview && (
                                    <div className="fixo">
                                      <a className="probtn" onClick={() => setImgPreview(null)} style={{ cursor: "pointer" }}>
                                        Remove
                                      </a>
                                    </div>
                                  )}
                                </div>
                                <div className="error">
                                  {error && <p className="errormsg">file not supported</p>}
                                </div>
                              </div>

                              <div>

                              </div>
                            </Row>



                            {/*image updation part ends ===========================*/}


                            <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                              <Form.Group className="form-group">
                                <Form.Label className="text-lightblack font-14">Registered Email </Form.Label>
                                <Form.Control id="" type="text" placeholder="enter mail" />
                              </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                              <Form.Group className="form-group position-relative">
                                <Form.Label className="text-lightblack font-14"> Password
                                  <span className="edituser"><Edit /> </span>  </Form.Label>
                                <Form.Control id="" type="password" placeholder="enter password" />
                                <span className="changepassword" onClick={handleShow}>Change Password</span></Form.Group>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                              <Form.Group className="form-group">
                                <Form.Label className="text-lightblack font-14">TimeZone</Form.Label>
                                <Form.Select>
                                  <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                                  <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                                  <option value="-10:00">(GMT -10:00) Hawaii</option>
                                  <option value="-09:50">(GMT -9:30) Taiohae</option>
                                  <option value="-09:00">(GMT -9:00) Alaska</option>
                                  <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada</option>
                                  <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                                  <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), MexicoCity</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Tab>
                        <Tab eventKey="senderdetail" title="Sender Details">
                          <Row>
                            <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                              <Form.Group className="form-group">
                                <Form.Label className="text-lightblack font-14">First Name</Form.Label>
                                <Form.Control id="" type="text" placeholder="First Name" />
                              </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                              <Form.Group className="form-group">
                                <Form.Label className="text-lightblack font-14">Last Name</Form.Label>
                                <Form.Control id="" type="text" placeholder="Last Name" />
                              </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                              <Form.Group className="form-group position-relative">
                                <Form.Label className="text-lightblack font-14">Sender Email</Form.Label>
                                <Form.Control id="" type="email" placeholder="Sender Email" />
                                <span className="text-red verify-email">Verify</span>
                              </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                              <Form.Group className="form-group">
                                <Form.Label className="text-lightblack font-14">Email Signature</Form.Label>
                                <Form.Control id="" type="text" placeholder="Email Signature" />
                              </Form.Group>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                              <Form.Group className="form-group mt-10">
                                <Button bsPrefix="cta cta-blue" type="submit">Update</Button>
                                <Button bsPrefix="cta cta-blue-outline ml-10" type="submit" >Clear</Button>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Tab>
                      </Tabs>
                    </div>
                  </Row>
                </ListGroup>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </ListGroup>

      <Modal className="password-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="heading-18 text-darkblue font-bold">Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Siddharth Coding Start ==========================================*/}
          <Formextra />

          {/* Siddharth Coding ends ==========================================*/}

        </Modal.Body>

      </Modal>
    </>
  );
}

export default Profile;
