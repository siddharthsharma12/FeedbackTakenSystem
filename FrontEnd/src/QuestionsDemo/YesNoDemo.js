import React from "react";
import { useState } from "react";
import { Container, Col, Row,label } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./YesNoDemo.css";
import { BiAlignLeft } from "react-icons/bi";

function YesNoDemo({ question }) {
  return (
    <>
      <div>
        <Row>
          {/*  part starts======================================================> */}
          <div
            className="Design"
            style={{
              padding: "0px 0px",
            }}
          >
            {/*  dropsection starts======================================================> */}

            {/* mapping function starts======================================================>*/}
            <Row>
              <Col md={8} lg={8}>
                <div className="flex-flex">
                  <form>
                    <div className="firstinputedivdemo">
                      {/* <BiAlignLeft />*/}

                      <input
                        className="firstinputr"
                        id="validationDefaultUsername"
                        type="text"
                        name="question"
                        aria-describedby="inputGroupPrepend2"
                        value={question.title}
                        readOnly={true}
                      />
                    </div>
                  </form>
                  {/*   yes no part start================================= */}
                  <div className="input-extra">
                    <form>
                      <Row>
                        <Col md={2} lg={2}>
                          <div className="flexodot">
                            <div className="input-dot">
                              <input
                                className="firstdot"
                                type="radio"
                                name="Yes"
                                value="Yes"
                               
                              />
                           <label>Yes</label>
                            </div>
                            <div className="input-dotone">
                              <input
                                className="seconddot"
                                type="radio"
                                name="Yes"
                                value="No"
                              
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                  {/*  yes no part ends=====================================*/}
                </div>
              </Col>
            </Row>
            {/*mapping function ends======================================================> */}
          </div>
          {/*  part ends======================================================> */}
        </Row>
        {/* </Container> */}
      </div>
    </>
  );
}

export default YesNoDemo;
