import React, { useState, useEffect } from "react";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import "./Combine.css";
import Logic from "../Logic/Logic";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SiAmazonalexa } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Dragdrop from "./Dragdrop";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { Modal, Form } from "react-bootstrap";
import Menu from "../../Menu";
import MultipleChoiceDemo from "../../QuestionsDemo/MultipleChoiceDemo";
import RatingDemo from "../../QuestionsDemo/RatingDemo";
import YesNoDemo from "../../QuestionsDemo/YesNoDemo";
import QuestionsSet from "../../Set";

const PER_PAGE = 2;

function App({ components, setComponents,selectedtemplate,setSelectedTemplate }) {
  // view all questions pop-up start======>
  const [questionsSet, setQuestionsSet] = useState(QuestionsSet);
  const [showsi, setShowsi] = useState(undefined);
  // view all questions pop-up ends======>
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(undefined);

  const [items, setItems] = useState(Menu);
  const [showr, setShowr] = useState(false);

  // large pop part start================================>

  // large pop up ends====================================>

  // pagination start===============================================>
  const [currentPage, setCurrentPage] = useState(0);
  // pagination ends===============================================>
  const [lgShowtwo, setLgShowtwo] = useState(false);

  const [lgShow, setLgShow] = useState(false);
  // const win = window.sessionStorage;

  // xxx
  const handleCloser = () => setShowr(false);
  const handleShowr = () => setShowr(true);
  // xxx

  // off canvas functionality start===========================>

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // off canvas functionality start==============================>
  // large pop up functionality start=============================>
  const values = [true];

  // large pop up functionality ends================================>

  // post data with post selection part start==============================>
  const [postsData, setPostsData] = useState([
    {
      id: uuid(),
      question: {
        type: "YesNo",
        title: "Hubspot Is Best For Marketing Automation?",
      },
    },
    {
      id: uuid(),
      question: {
        type: "YesNo",
        title: "React Js Is a Front-End Technology ",
      },
    },
  ]);
  const [selectedPosts, setSelectedPosts] = useState([]);

  // post data with post selection part ends==========================================================>

  const validateQuestionInputs = () => {
    let validatAll = false;
    //  // for loop of components;
    //  for (let i = 0; i < components.length; i++) {
    //       if(component[i].question.title) {
    //            if((component[i].question.type === "MultipleChoice") {

    //            }

    //       }
    // }

    //
  };
 
const handleSelectTemplate = (id) => {
  console.log(id)
       setSelectedTemplate(id)
       toast.success("Template Selected SuccessFully");
}
  // function for adding all the predefined questions of a set
  const addAllQuestionsOfSet = (predefinedQuestions) => {
      setComponents(((prev) => [
        ...prev,
        ...predefinedQuestions
      ]));
      setShowsi(undefined);
      setLgShowtwo(false);
      toast.success("All Questions Added Successfully");
  }


  function addComponent() {
    //
    setComponents((prev) => [
      ...prev,
      { id: uuid(), question: { type: "YesNo", title: "" } },
    ]);
    // win.clear();
    console.log(components);
  }

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
      components,
      result.source.index,
      result.destination.index
    );
    setComponents(reorderedItems);
  };

  /* drag and drop functionality ends===================================> */

  //on submit functionality start=====================================>
  const handleData = (e) => {
    e.preventDefault();
    setSelectedPosts([]);
    setComponents((prev) => [...prev, ...selectedPosts]);
    toast.success("Questions Added Successfully");
  };
  //on submit functionality ends=====================================>

  // select functionality start=======================================>

  const handleSelect = (e, id, question) => {
    setSelectedPosts((prev) => {
      const foundIndex = prev.findIndex((item) => item.id === id);

      // if index is not find(if question is not selected) then add this
      if (foundIndex === -1) {
        return [...prev, { id, question }];
      }
      // if index is find(if question is  selected) then remove this
      return prev.filter((item) => item.id !== id);
    });
  };
  //select functionality ends================================================>

  //pagination start========================================================>
  //  const handlePageClick = ({ selected: selectedPage }) => {
  //   console.log("selectedPage", selectedPage);
  //   setCurrentPage(selectedPage);
  //   };
  // const offset = currentPage * PER_PAGE;

  // const current = components.slice(offset, offset + PER_PAGE);

  // const pageCount = Math.ceil(components.length / PER_PAGE);
  // pagination ends===========================================================>
  // template mapping part start=================================>

  // template mapping part ends===================================>
  return (
    <>
      <ToastContainer />
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <div className="lorem-head">
              <h3>Lorem ipsum doler sit amet</h3>
            </div>
          </Col>
          {/* select template start====================================== */}
          <Col md={6} lg={6}>
            <div className="select-temp">
              {/* import template pop-up start================================*/}
              <div>
                <Button onClick={() => setLgShowtwo(true)}>
                  {" "}
                  Import All questions
                </Button>
              </div>

              <Modal
                size="lg"
                show={lgShowtwo}
                onHide={() => setLgShowtwo(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Import All questions
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* view all question pop up start=============> */}
                  {questionsSet.map((questionSet) => {
                    const { id, title, questions } = questionSet;
                    return (
                      <>
                        <div>
                          <Button
                            className="yo"
                            variant="primary"
                            onClick={() => setShowsi(id)}
                          >
                            {title}
                          </Button>
                        </div>

                        <Modal
                          show={showsi === id}
                          onHide={() => setShowsi(undefined)}
                          dialogClassName="modal-90w"
                          aria-labelledby="example-custom-modal-styling-title"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                              All Pre Defined Questions
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="first-set">
                          <Container>
                            {questions.map(({ id, question }) => {
                              if (
                                question.type === "MultipleChoice"
                              ) {
                                return (
                                
                                  <div className="MultipleChoiceDemo">
                                  <MultipleChoiceDemo
                                    key={id}
                                    question={question}
                                  />
                                 </div>
                                
                                
                                );
                              } else if (question.type === "Rating") {
                                return (
                                
                                  <div className="RatingDemo">
                                    <RatingDemo
                                      key={id}
                                      question={question}
                                    />
                                  </div>
                                
                                  
                                );
                              } else if (question.type === "YesNo") {
                                return (
                                
                                  <div  className ="YesNoDemo">
                                  <YesNoDemo
                                    key={id}
                                    question={question}
                                  />
                                  </div>
                               
                                 
                                );
                              }
                            })}
                            <Button className="add-all" type="submit" onClick={() => addAllQuestionsOfSet(questions)} >Add ALL Questions</Button>
                            </Container>
                            </Modal.Body>
                        </Modal>
                      </>
                    );
                  })}

                  {/* view all question pop up ends======================================>*/}
                </Modal.Body>
              </Modal>

              {/* import template pop-up ends===========================================*/}

              {/*main template pop up start=========================================> */}
              <div>
                <Button onClick={() => setLgShow(true)} className="select">
                  {" "}
                  Select Template
                </Button>
              </div>

              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    View All Templates
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* internal design start===========================> */}

                  <Container>
                    {/* mapping part start ========================================>*/}
                    {items.map((elem) => {
                      const { id, image, title, para, preview } = elem;
                      return (
                        <>
                          <Row className="pop-row">
                            <Col lg={3} md={3}>
                              <div className="preone">
                                {/* <p>{id}</p>*/}
                                <img
                                  src={image}
                                  alt="menuimg"
                                  className="img-fluid"
                                />
                                {/* <img src="../images/pre1.png" alt="Logo"/> */}
                              </div>
                            </Col>
                            <Col lg={6} md={6} className="lorem-all">
                              <div className="lorem-headingone">
                                <h5>{title}</h5>
                              </div>
                              <div className="lorem-paraone">
                                <p>{para}</p>
                              </div>
                            </Col>

                            <Col lg={3} md={3} className="preview">
                              {/* preview part pop up start===============================*/}

                              <Button
                                className="yo"
                                variant="primary"
                                onClick={() => setShows(id)}
                              >
                                Preview
                              </Button>
                              
                      {/* use this template button start==============> */}

                       <Button className="usethis" onClick={() => handleSelectTemplate(id)}>Use This Template</Button>

                      {/* use this template button ends==============> */}

                              <Modal
                                show={shows === id}
                                onHide={() => setShows(undefined)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title id="example-custom-modal-styling-title">
                                    Template Preview
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{preview}</Modal.Body>
                              </Modal>
                              {/*preview part ends ================================== */}
                            </Col>
                          </Row>
                        </>
                      );
                    })}
                    {/* mapping part ends==================================>*/}
                  </Container>
                  {/*  internal design  ends===========================> */}
                </Modal.Body>
              </Modal>
              {/*  template pop up start==============> */}
            </div>
          </Col>
          {/* select template ends====================================== */}
        </Row>
      </Container>

      {/* side navbar part start ==========================*/}
      <Container fluid>
        <Row>
          <div className="all-in">
            <div className="side-circle ">
              <div className="best-flexs">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/FullPageView"
                >
                  <div className="bscircle" />
                </NavLink>
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/PageTwo"
                >
                  <div className="bscircle" />
                </NavLink>
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/PageThree"
                >
                  <div className="bscircle" />
                </NavLink>
              </div>

              {/*  pagination starts ==========================*/}
              {/*  <div className="pagtwo">
              <Col lg={2} md={2} className="react-pag">
                <ReactPaginate
                  // previousLabel={"<"}
                  // nextLabel={">"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"paginations"}
                  previousLinkClassName={"pagination_links"}
                  nextLinkClassName={"pagination_links"}
                  disabledClassName={"pagination_link--disabled"}
                  activeClassName={"pagination_link--actives"}
                />
              </Col>
          </div> */}
              {/*  pagination ends ===========================================*/}
            </div>
            {/* side navbar part ends========================================*/}

            {/* question drag and drop part start ==============================>*/}
            <Dragdrop
              //  questions={current}
              onDragEnd={onDragEnd}
              components={components}
              setComponents={setComponents}
              addComponent={addComponent}
            />
            {/* question drag and drop part ends ==============================>*/}

            {/*off canvas part start ================================================*/}

            <div className="canvas">
              <div className=" pls-ques">
                <a className="side-plus" onClick={handleShow}>
                  <AiOutlinePlusCircle />
                </a>
              </div>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Recommended Questions</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/*  question part start========================================*/}

                  <div className="input">
                    <form onSubmit={handleData}>
                      <Row>
                        <div className="q-para">
                          <p>Questions Category</p>
                        </div>
                        {/* Bolean questions start ================================*/}
                        <div className="bool">
                          <Col md={12} lg={12}>
                            <div className="boolean-heading">
                              <h4>Boolean Questions</h4>
                            </div>

                            {postsData.map((postItem) => (
                              <div className="flexo">
                                <input
                                  className="unique-first"
                                  type="checkbox"
                                  value={postItem.question.title}
                                  onChange={(e) =>
                                    handleSelect(
                                      e,
                                      postItem.id,
                                      postItem.question
                                    )
                                  }
                                  checked={
                                    selectedPosts.findIndex(
                                      (item) => item.id === postItem.id
                                    ) !== -1
                                  }
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  {postItem.question.title}
                                </label>
                              </div>
                            ))}
                          </Col>
                        </div>
                        {/* Boolean questions ends ================================*/}
                      </Row>

                      <Row>
                        <div className="special-button">
                          <button
                            type="Submit"
                            className="next"
                            onClick={handleClose}
                          >
                            Add +
                          </button>
                        </div>
                      </Row>
                    </form>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            {/* off canvas part ends================================================= */}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
