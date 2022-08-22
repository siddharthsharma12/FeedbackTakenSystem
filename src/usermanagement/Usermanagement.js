import {
  ListGroup,
  Container,
  Row,
  Col,
  Form,
  Button,
  Tabs,
  Tab,
  Modal,
} from "react-bootstrap";
import { Edit } from "react-feather";
import Sidebar from "../sidebar/Sidebar";
import "./Usermanagement.css";
// development part start===========================================>
import React, { useEffect, useState } from "react";
import axios from "axios";
import nextId from "react-id-generator";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ReactPaginate from "react-paginate";
import { Accordion } from "react-bootstrap";
import { BsArrowDownUp } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import ReadTable from "../usermanagement/ReadTable";
import Handleformone from "../usermanagement/Handleformone";
// development part ends============================================>

// currentPosts, setCurrentPosts,searchQuery, setSearchQuery,order, setorder,currentPage, setCurrentPage,posts, setPosts,addPost, setAddPost,editPostId, setEditPostId,editFormData, setEditFormData,selectedItem, setSelectedItem
const PER_PAGE = 5;
function Usermanagement({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  {
    /* usermanagement coding part start ================================*/
  }
  // all addtable states start =================================>
  const [posts, setPosts] = useState([]);
  const [addPost, setAddPost] = useState({
    title: "",
    body: "",
  });

  const [editPostId, setEditPostId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    body: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [order, setorder] = useState("ASC");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPosts, setCurrentPosts] = useState([]);

  // all addtable states ends====================================>

  // Global form functionality start=================================>
  const [forms, setForms] = useState("form one");
  const [handleformonevisible, setHandleFormOneVisible] = useState(false);

  // Global Form functionality ends==================================>

  // sorting part start================================>
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...posts].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setPosts(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...posts].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setPosts(sorted);
      setorder("ASC");
    }
  };
  // sorting part ends=========================================>

  //Add Data To Table start==================================>
  const handleAddPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: nextId(),
      title: addPost.title,
      body: addPost.body,
    };
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    console.log(newPosts);
  };
  //Add Data To Table ends==================================>

  //Get Form Values start=============================>
  const handleChange = (input) => (e) => {
    e.preventDefault();
    console.log(addPost);
    setAddPost({ ...addPost, [input]: e.target.value });
  };
  //Get Form Values ends=============================>

  //Edit data into table starts====================================>
  const handleEditFormClick = (input) => (e) => {
    e.preventDefault();
    console.log(editFormData);
    setEditFormData({ ...editFormData, [input]: e.target.value });
  };
  //Edit data into table ends====================================>

  //onclick Edit data into table start====================================>
  const handleEditPostForm = (e, post) => {
    e.preventDefault();
    setEditPostId(post.id);
    console.log(post.id);

    const formValues = {
      title: post.title,
      body: post.body,
    };
    setEditFormData(formValues);
  };

  //onclick Edit Form Data ends=====================================================>

  //Save Edit Form Data start==========================================>
  const handleFormSave = (e) => {
    e.preventDefault();
    const savePost = {
      id: editPostId,
      title: editFormData.title,
      body: editFormData.body,
    };

    const newPosts = [...posts];

    const formIndex = posts.findIndex((post) => post.id === editPostId);

    newPosts[formIndex] = savePost;
    setPosts(newPosts);
    setEditPostId(null);
    // setSelectedItem(null);
    console.log(editPostId);
  };
  //Save Edit Form Data ends==========================================>

  //pop-up  Delete Data start===================================================>
  const handleDelete = (e) => {
    e.preventDefault();
    const newPosts = [...posts];
    const formIndex = posts.findIndex((post) => post.id === editPostId);
    newPosts.splice(formIndex, 1);
    setPosts(newPosts);
    setSelectedItem(null);
    console.log(newPosts);
  };
  // pop -up Delete Data ends===================================================>

  //Get Data From JSON Placeholder===========================>
  const fetchUrl = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchUrl);
      setPosts(data.data);
      console.log(data.data);
      return data;
    }
    fetchData();
  }, [fetchUrl]);
  //Get Data From JSON Placeholder===========================>

  // searching part using useEffect=============================>
  useEffect(() => {
    setCurrentPage(0);
    if (!searchQuery) {
      setCurrentPosts(posts);
      return;
    }
    const tempPosts = posts.filter(
      (row) => row.title.toLowerCase().indexOf(searchQuery) > -1
    );
    setCurrentPosts(tempPosts);
  }, [searchQuery, posts]);
  // searching part using useEffect=============================>

  // selecting functionality using useeffect start====================>
  useEffect(() => {
    forms === "form one"
      ? setHandleFormOneVisible(true)
      : setHandleFormOneVisible(false);
    // team === "team two" ? setTeamTwoVisible(true) : setTeamTwoVisible(false);
  }, [forms]);
  // selecting functionality using useeffect ends====================>

  //  Pagination part start=====================================>
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(currentPosts.length / PER_PAGE);
  console.log("hello i am current posts", currentPosts);
  //  Pagination part ends=====================================>

  // Global form handling start============================>
  const handleOnChange = (e) => {
    setForms(e.target.value);
  };
  // Global from handling ends================================>

  {
    /* usermanagement coding part ends ================================*/
  }

  return (
    <>
      <ListGroup bsPrefix className="myprofile">
        <Container fluid>
          <Row>
            <Col className="leftside-content width-fix">
              <Sidebar />
            </Col>
            {/* usermanagement HTML part start ================================*/}
            <Col>
              <ListGroup bsPrefix="rightside-content">
                {/* search form starts ========================================>*/}
                <div className="d-flex-user">
                  <Row>
                    <Col md={6} lg={6} className="userhead-right">
                      <div className="usermanagement">
                        <h4>User Management</h4>
                      </div>
                    </Col>

                    <Col md={6} lg={6} className="search-right">
                   <div className="search d-flex">
                    <div className="search">
                        <form className="row g-3 ms-auto">
                          <div className="col-auto">
                            <input
                              type="text"
                              className="form-control ms-auto"
                              placeholder="search data"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                          </div>
                        </form>
                      </div>
                      {/*  Add button pop-up start =========================================>*/}
                      <div className="btn-one">
                      <Button variant="warning" onClick={handleShow} >
                        Add +
                      </Button>
                      </div>
                      </div>
                      {/*  Add button pop-up ends =========================================>*/}
                   
                      
                    </Col>
                  </Row>
                </div>

                {/* search form ends ========================================>*/}

                {/* usermanagement Tabs part start ================================*/}

                <Tabs
                  defaultActiveKey="mydetails"
                  id="uncontrolled-tab-example"
                  className="myprofiletab"
                >
                  <Tab eventKey="mydetails" title="Users">
                    <div className="common-tab">
                      {/* first table start==================================================> */}
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Administrators</Accordion.Header>
                          <Accordion.Body>
                            <Container>
                              <Row>
                                <div className="Dhasu">
                                  <ReactHTMLTableToExcel
                                    id="test-table-xls-button"
                                    className="download-table-xls-button"
                                    table="table-to-xls"
                                    filename="tablexls"
                                    sheet="tablexls"
                                    buttonText="Export"
                                  />
                                </div>

                                <table
                                  className="table table-bordered border-primary table-responsive"
                                  id="table-to-xls"
                                >
                                  {
                                    !selectedItem ? (
                                      <thead>
                                        <tr>
                                          <th scope="col">
                                            <input
                                              type="checkbox"
                                              // onChange={(e) => {
                                              //   setSelectedAll((prev) => !prev);
                                              // }}
                                              // checked={selectAll}
                                            />
                                          </th>

                                          <th scope="col">ID</th>
                                          <th
                                            className="arrow-one"
                                            scope="col"
                                            onClick={() => sorting("title")}
                                          >
                                            Title
                                            <BsArrowDownUp />
                                          </th>
                                          <th
                                            className="arrow-one"
                                            scope="col"
                                            onClick={() => sorting("body")}
                                          >
                                            Body
                                            <BsArrowDownUp />
                                          </th>
                                        </tr>
                                      </thead>
                                    ) : (
                                      // edit row part start=========================>
                                      <thead>
                                        <th></th>
                                        <th>
                                          <div className="d-flex">
                                            <a
                                              type="button"
                                              className=" btn-pro-max mb-2"
                                              data-bs-toggle="modal"
                                              data-bs-target="#editModalForm"
                                              onClick={(e) =>
                                                handleEditPostForm(
                                                  e,
                                                  selectedItem
                                                )
                                              }
                                            >
                                              <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <span className="ed">Edit</span>
                                          </div>
                                        </th>
                                        <th>
                                          <div className="Reset">
                                             <GrPowerReset/> 
                                            <span className="ed">Reset</span>
                                          </div>
                                        </th>
                                        <th>
                                          <div className="Deactivate">
                                             <AiOutlineMinusCircle /> 
                                            <span className="ed">
                                              Deactivate
                                            </span>
                                          </div>
                                        </th>

                                        <th></th>
                                      </thead>
                                    )

                                    // edit row part ends===========================>
                                  }
                                  <tbody>
                                    {/* dynamic table part start========================> */}
                                    <ReadTable
                                      posts={currentPosts.slice(
                                        offset,
                                        offset + PER_PAGE
                                      )}
                                      setSelectedItem={setSelectedItem}
                                      handleEditPostForm={handleEditPostForm}
                                    />

                                    {/* dynamic table part ends========================> */}
                                  </tbody>
                                </table>

                                <div className="pag">
                                  <Col lg={4} md={4}>
                                    <ReactPaginate
                                      previousLabel={"<"}
                                      nextLabel={">"}
                                      pageCount={pageCount}
                                      onPageChange={handlePageClick}
                                      containerClassName={"pagination"}
                                      previousLinkClassName={"pagination_link"}
                                      nextLinkClassName={"pagination_link"}
                                      disabledClassName={
                                        "pagination_link--disabled"
                                      }
                                      activeClassName={
                                        "pagination_link--active"
                                      }
                                    />
                                  </Col>
                                </div>

                                {/*Add Modal start========================================= */}

                                <Modal show={show} onHide={handleClose}>
                                  <Modal.Header className="modal-header-one" closeButton>
                                    <Modal.Title>Add Contact</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    {/*  dropdown functionality start =========================*/}
                                    <div className="skr">
                                      <select
                                        className="form-select"
                                        value={forms}
                                        onChange={handleOnChange}
                                      >
                                        <option value="Forms">select</option>
                                        <option value="form one">
                                          Administrators
                                        </option>
                                        <option value="form two">
                                          SurveyCreators
                                        </option>
                                      </select>
                                    </div>
                                    {/*  dropdown functionality ends =========================*/}
                                    {/*  component render start =====================*/}
                                    {handleformonevisible && (
                                      <Handleformone
                                        handleAddPost={handleAddPost}
                                        handleChange={handleChange}
                                        handleClose={handleClose}
                                      />
                                    )}
                                    {/*  component render ends =====================*/}
                                  </Modal.Body>
                                 
                                </Modal>
                                {/*Add Modal ends=========================================*/}

                                {/*Edit Row Modal===================================*/}
                                <div
                                  className="modal fade"
                                  id="editModalForm"
                                  tabIndex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5
                                          className="modal-title"
                                          id="exampleModalLabel"
                                        >
                                          Edit Row
                                        </h5>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>

                                      <div className="modal-body">
                                        <form onSubmit={handleFormSave}>
                                          <div className="mb-3">
                                            <label className="form-label">
                                              Title
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="title"
                                              value={editFormData.title}
                                              required
                                              onChange={handleEditFormClick(
                                                "title"
                                              )}
                                            />
                                          </div>

                                          <div className="mb-3">
                                            <label className="form-label">
                                              Body
                                            </label>
                                            <textarea
                                              rows="4"
                                              cols="50"
                                              className="form-control"
                                              name="body"
                                              value={editFormData.body}
                                              required
                                              onChange={handleEditFormClick(
                                                "body"
                                              )}
                                            ></textarea>
                                          </div>

                                          <div className="modal-footer d-block">
                                            <button
                                              type="submit"
                                              data-bs-dismiss="modal"
                                              className="btn btn-success float-end"
                                            >
                                              Save Row
                                            </button>

                                            <button
                                              type="submit"
                                              data-bs-dismiss="modal"
                                              className="btn btn-danger float-start"
                                              onClick={handleDelete}
                                            >
                                              Delete Row
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*Edit Row Modal===================================> */}
                              </Row>
                            </Container>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      {/* first table  part ends================================================================> */}
                    </div>
                  </Tab>
                  <Tab eventKey="senderdetail" title="Roles"></Tab>
                  <Tab eventKey="senderdetailtwo" title="Deactivated"></Tab>
                </Tabs>

                {/* usermanagement Tabs part ends ================================*/}
              </ListGroup>
            </Col>
            {/* usermanagement HTML part ends ================================*/}
          </Row>
        </Container>
      </ListGroup>
    </>
  );
}

export default Usermanagement;
