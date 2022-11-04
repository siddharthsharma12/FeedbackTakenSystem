import React from "react";
import { ListGroup, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Edit } from "react-feather";
import Sidebar from "../sidebar/Sidebar";
import "./Profile.css";

function Profile() {

  return (
    
      <>
       <ListGroup bsPrefix className="myprofile">
        <Container fluid>
          <Row>
              <Col className="leftside-content width-fix">
                  <Sidebar />
              </Col>
            <Col>
              <ListGroup bsPrefix="rightside-content">
              <ListGroup bsPrefix className="set-profile">
                 <Row>
                    <Col>
                     <h2 className="text-skyblue heading-22 font-bold mt-10 mb-30 sm-heading">My Details</h2>
                   </Col>
                  </Row>
                    <Row>
                    <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                       <Form.Group className="form-group">
                            <Form.Label className="text-lightblack font-14">User Email  <span className="edituser"><Edit /></span> </Form.Label>
                            <Form.Control id="" type="email" placeholder="User Email" />
                          </Form.Group>
                      </Col>
                      <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                          <Form.Group className="form-group position-relative">
                          <Form.Label className="text-lightblack font-14">Pas <span  className="edituser"><Edit /></span> </Form.Label>
                            <Form.Control id="" type="password" placeholder="Password" />
                              <span className="changepass">Change Password</span>
                          </Form.Group>
                      </Col>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Form.Group className="form-group">
                          <Form.Label className="text-lightblack font-14">TimeZone</Form.Label>
                            <Form.Select>
                              <option value="-12:00">(GMT -12:00) Rajasthan</option>
                              <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                              <option value="-10:00">(GMT -10:00) Hawaii</option>
                              <option value="-09:50">(GMT -9:30) Taiohae</option>
                              <option value="-09:00">(GMT -9:00) Alaska</option>
                              <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                              <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                              <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                            </Form.Select>
                          </Form.Group>
                      </Col>
                     </Row>

                      <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h2 className="text-darkblue heading-22 font-bold pt-40 mb-30 sender-heading">Sender Details</h2>
                      </Col>
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
                          <Button bsPrefix className="btn-blue" type="submit">
                             Update
                          </Button>
                          <Button bsPrefix className="btn btn-link ml-10" type="submit">
                            Clear
                          </Button>
                          </Form.Group>
                      </Col>
                    </Row>
                </ListGroup>
              </ListGroup>
            </Col>
          </Row>
        </Container>
       </ListGroup>
      </>
  );
}

export default Profile;
