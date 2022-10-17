import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import "./Review.css";
import { FcInvite } from "react-icons/fc";

const Review = () => {
  return (
    <>
      <Container>
        <ListGroup bsPrefix="review-head">
          <Row>
            <Col md={6} lg={6}>
              <div className="left-schedule">
                <h3>Review And Send/Schedule</h3>
              </div>
            </Col>

            <Col md={6} lg={6} className="right-schedule">
              <a>Preview</a>
            </Col>
          </Row>
        </ListGroup>

        <ListGroup bsPrefix="Total-ques">
          <Row>
            <Col md={6} lg={6}>
              <div className="left-ques">
                <p>
                  <span className="ten">10</span>Total Questions
                </p>
              </div>
            </Col>

            <Col md={6} lg={6} className="right-ques">
              <div className="right-review">
                <a>Preview</a>
              </div>
            </Col>
          </Row>
        </ListGroup>

        <ListGroup bsPrefix="left-receipt">
          <Row>
            <Col md={7} lg={7} className="left-part">
              <div className="left-part-number">
                <div className="left-part-heading">
                  <h3>Recepients</h3>
                </div>
                <div className="paragraph">
                  <p>lorem upim sink ponstuitf dolum lerum</p>
                </div>

                <Row>
                  <Col md={4} lg={4}>
                    <div className="white-block-one">
                      <p>
                        <span className="block-one-head">41</span>
                      </p>
                      <p>
                        <span className="block-one-para">Added</span>
                      </p>
                    </div>
                    <div className="review-para">
                      <p>Review</p>
                    </div>
                  </Col>
                  <Col md={4} lg={4}>
                    <div className="white-block-one">
                      <p>
                        <span className="block-one-head">35</span>
                      </p>
                      <p>
                        <span className="block-one-para">Mailable</span>
                      </p>
                    </div>
                  </Col>
                  <Col md={4} lg={4}>
                    <div className="white-block-one">
                      <p>
                        <span className="block-one-head">06</span>
                      </p>
                      <p>
                        <span className="block-one-para">UnSubscribed</span>
                      </p>
                    </div>
                    <div className="view-remove">
                      <Row>
                        <Col md={12} lg={6}>
                          <div className="view">
                            <a>View</a>
                          </div>
                        </Col>
                        <Col md={12} lg={6}>
                          <div className="remove">
                            <a>Remove</a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={1} lg={1} className="mid-part">
              <div className=""></div>
            </Col>

            <Col md={4} lg={4} className="right-part">
              <div className="email-all">
                <div className="email-pic">
                  <FcInvite />
                </div>
                <div className="email-heading">
                  <h3>Sender Email</h3>
                </div>
                <div className="email-para-one">
                  <span className="lorem">lorem limpsum lit gui</span>
                  <br />
                  <span className="email-para-two">
                    Email id:sharmasiddharth044@gmail.com
                  </span>
                </div>
                <div className="verify-btn">
                  <a>Verify</a>
                </div>
              </div>
            </Col>
          </Row>
        </ListGroup>
        
      </Container>
    </>
  );
};

export default Review;
