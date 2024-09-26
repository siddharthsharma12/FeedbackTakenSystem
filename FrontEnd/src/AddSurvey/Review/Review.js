import React, { useState, useEffect } from "react";
import {
  ListGroup,
  Container,
  Row,
  Col,
  Nav,
  Button,
  Modal,
} from "react-bootstrap";
import "./Review.css";
import { FcInvite } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Logic from "../Logic/Logic";
import axios from "axios";
import { useSearchParams } from "react-router-dom";


const Review = ({ question, setquestion, selectedRecepients }) => {
  const [showreview, setShowReview] = useState(false);
  const [showpreview, setShowPreview] = useState(false);
  const handleCloseReview = () => setShowReview(false);
  const handleShowReview = () => setShowReview(true);

  {
    /* preview part start ================================>*/
  }
  // remove user starts========================>
  const removeUser = (index) => {
    const filtered = [...question];
    filtered.splice(index, 1);
    setquestion(filtered);
  };
  //   remove user ends=============================>

  /* drag and drop functionality start===========================> */

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      question,
      result.source.index,
      result.destination.index
    );

    setquestion(reorderedItems);
  };

  /* drag and drop functionality ends===========================> */


  { /*  preview part ends=============================>  */ }

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
                  <span className="ten">{question.length}</span><p className="total">Total
                    Questions</p>
                </p>
              </div>
            </Col>

            <Col md={6} lg={6} className="right-ques">
              <div className="right-review">
                {/*   preview pop up start =====================>*/}
                <a variant="primary" onClick={() => setShowPreview(true)}>
                  Preview
                </a>

                <Modal
                  show={showpreview}
                  onHide={() => setShowPreview(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      The Final Preview
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* Preview body start ========================>*/}
                    <Container>
                      <div className="All">
                        <p>Final Preview Of All The Questions</p>
                      </div>
                      <Row>
                        <div className="col-md-12 col-lg-12">
                          {/*  Mapping start ======================================*/}
                          <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                              {(provided) => (
                                <div
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                >
                                  {question.map((component, index) => (
                                    <Draggable
                                      draggableId={component.id}
                                      key={component.id}
                                      index={index}
                                    >
                                      {(provided) => (
                                        <div
                                          className="flex-flex"
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <Logic
                                            removeUser={removeUser}
                                            id={component.id}
                                            question={question}
                                            setquestion={setquestion}
                                            key={component.id}
                                          />
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}

                                  {/*  dropsection starts======================================================> */}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </DragDropContext>

                          {/*add component part  Mapping ends =======================================*/}
                        </div>
                      </Row>
                    </Container>

                    {/* Preview body ends========================>*/}
                  </Modal.Body>
                </Modal>

                {/*   preview pop up start =====================>*/}
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
                        <span className="block-one-head">
                          {selectedRecepients.length}
                        </span>
                      </p>
                      <p>
                        <span className="block-one-para">Added</span>
                      </p>
                    </div>
                    <div className="review-para">
                      {/*review modal start ========================>*/}
                      <a variant="primary" onClick={() => setShowReview(true)}>
                        Review
                      </a>

                      {/*review modal ends ========================>*/}

                      {/*   modalbody start ================================>*/}
                      <Modal
                        show={showreview}
                        onHide={() => setShowReview(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                      >
                        <Modal.Header closeButton>

                        </Modal.Header>
                        <Modal.Body>
                          <div className="reci-head">
                            <h5>Selected Recepients</h5>
                          </div>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>jobtitle</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedRecepients.map((recepient) => {
                                return (
                                  <tr key={recepient.id}>
                                    <td>{recepient.name}</td>
                                    <td>{recepient.email}</td>
                                    <td>{recepient.jobtitle}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </Modal.Body>
                      </Modal>

                      {/*   modalbody ends ================================>*/}
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

        <ListGroup>
          <Row>
            <div className="flat-btn">

              <Button className="button-confirm" >Confirm and Send</Button>
              <Button className="button-confirm-one">
                Confirm and Schedule
              </Button>
            </div>
          </Row>
        </ListGroup>
      </Container>
      {/* confirm and send part start===========================> */}

      {/*  confirm and send part ends ===============================> */}
    </>
  );
};

export default Review;
