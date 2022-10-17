import React, { useState,useEffect } from "react";
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
import {VscCircleLargeOutline} from "react-icons/vsc";



const PER_PAGE = 2;

function App({ components, setComponents}) {
  // pagination===============================================>
  const [currentPage, setCurrentPage] = useState(0);

  
  // off canvas functionality start===========================>


  const [show, setShow] = useState(false);
  const handleClose = () =>setShow(false);
  const handleShow = () => setShow(true);


  // post data with post selection part start==============================>
  const [postsData, setPostsData] = useState([
    {
      id: uuid(),
      question: { type: "Boolean", title: "Hubspot Is Best For Marketing Automation?" },
    },
    {
      id: uuid(),
      question: { type: "Boolean", title: "React Js Is a Front-End Technology " },
    },
  ]);
  const [selectedPosts, setSelectedPosts] = useState([]);

   // data storage functionality start======================================>
  
  //  data storage functionality ends=========================================>

  // post data with post selection part ends==========================================================>

  function addComponent() {
    setComponents((prev) => [
      ...prev,
      { id: uuid(), question: { type: "Boolean", title: "" }},
    ]);
    console.log(components)
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
   const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
    };
  const offset = currentPage * PER_PAGE;

  const current = components.slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(components.length / PER_PAGE);
  // pagination ends===========================================================>

  //  search query start=========================>

  // search query ends===========================>

  return (
    <>
      <ToastContainer/>
      <Container>
      <Row>
      <Col md={6} lg={6}>
      <div className="lorem-head">
      <h3>Lorem ipsum doler sit amet</h3>
      </div>
      </Col>
      <Col md={6} lg={6}>
      <div className="select-temp">
      <h3>Select Template</h3>
      </div>
      </Col>
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
              <div className="bscircle"/>
              </NavLink>
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/PageThree"
              >
                <div className="bscircle"/>
              </NavLink>
            </div>
           
            {/*  pagination starts ==========================*/}
            <div className="pagtwo">
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
            </div>
          {/*  pagination ends ===========================================*/}
          </div>
         {/* side navbar part ends========================================*/}

         {/* question drag and drop part start ==============================>*/}
           <Dragdrop
             questions={current}
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
                <AiOutlinePlusCircle/>
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
                        <button type="Submit" className="next" onClick={handleClose}>
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
