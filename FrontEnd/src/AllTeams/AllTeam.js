import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import { v4 as uuid } from "uuid";
import "./AllTeam.css";
import { ListGroup, Row, Container, Col } from "react-bootstrap";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";


const AllTeam = ({ teams, setTeams }) => {
  {
    /* add teams and employees state start======================================>*/
  }
  const [teamName, setTeamName] = useState();
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtitle, setJobTitle] = useState();

  {
    /*add teams and employees state start================================ */
  }

  {
    /* edit and select pop up functionality start ========================>*/
  }
  const [clicked, setClicked] = useState(null);
  {
    /* edit and select pop up functionality start ========================>*/
  }

  const [showAddTeam, setShowAddTeam] = useState(false);
  const [showEditList, setShowEditList] = useState(false);

  const [showAddContact, setShowAddContact] = useState(false);

  // teams pop-up start=====================>
  const [showteam, setShowTeam] = useState(null);
  const handleCloseteam = () => setShowTeam(null);

  const handleShowteam = (teamId) => {
    setShowTeam(teamId);
  };

  const getTeam = (teamId) => {
    const team = teams.find((team) => team.id === teamId);
    return team;
  };

  const handleCategory = (value) => {
    if (category === value) {
      setCategory(null);
      return;
    }
    setCategory(value);
  };

  const handleShowAddContact = () => {
    if (!teamName) {
      return;
    }
    setShowAddContact(true);
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    setTeams((prev) => [
      ...prev,
      {
        id: uuid(),
        name: teamName,
        employees: [
          { id: uuid(), name: name, email: email, jobtitle: jobtitle },
        ],
      },
    ]);
    setShowAddContact(false);
    setShowAddTeam(false);
  };

  const handleSaveTeam = () => {
    setTeams((prev) => [
      ...prev,
      { id: uuid(), name: teamName, employees: [] },
    ]);
    setShowAddTeam(false);
  };
  // teams pop-up ends=======================>
  return (
    <>

      {/* extra part start ============================>*/}
      <Header />
      <ListGroup bsPrefix="myprofile">
        <Container fluid>
          <Row>
            <Col className="leftside-content width-fix">
              <Sidebar />
            </Col>
            <Col>
              <ListGroup bsPrefix="rightside-content">
                {/*  contact list part start======================> */}



                <div className="all-btn">
                  <div>
                    <h5>Contact List</h5>
                  </div>
                  <Button
                    variant="primary"
                    className="add-new"
                    onClick={() => setShowAddTeam(true)}
                  >
                    Add New Team List
                  </Button>
                </div>

                <Modal show={showAddTeam} onHide={() => setShowAddTeam(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Teams With Employees</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <label for="exampleInputName1">Team Name (Required)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName1"
                      placeholder="Enter Team Name"
                      onChange={(e) => setTeamName(e.target.value)}
                      value={teamName}
                    />

                    {/* select category start =========================> */}
                    <label className="select-cat" for="exampleInputName1">
                      Select Category (Required)
                    </label>
                    {/* category tabs start===============================> */}
                    <div className="flexo">
                      <div className="input-one">
                        <input
                          className="first"
                          type="radio"
                          name="customer"
                          value="customer"
                          checked={category === "customer"}
                          onClick={(e) => handleCategory(e.target.value)}
                        />
                        Customer
                      </div>
                      <div className="input-two">
                        <input
                          className="second"
                          type="radio"
                          name="internal"
                          value="internal"
                          checked={category === "internal"}
                          onClick={(e) => handleCategory(e.target.value)}
                        />
                        Internal
                      </div>
                    </div>

                    {/*add contact pop-up start =======================>*/}
                    <div>
                      <Button
                        variant="primary"
                        disabled={!(teamName && category)}
                        onClick={handleShowAddContact}
                        className="add-c"
                      >
                        +Add Contact
                      </Button>
                    </div>

                    <div>
                      <Button type="submit" onClick={handleSaveTeam} className="saveit">
                        Save
                      </Button>
                    </div>

                    <Modal
                      show={showAddContact}
                      onHide={() => setShowAddContact(false)}
                      animation={false}
                      dialogClassName="modal-91w"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Add Contact Individually</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form onSubmit={handleAddContact}>
                          <label for="exampleInputName" className="unilabel">Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputName8"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />

                          <label for="exampleInputName" className="unilabel">Email Address</label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputName10"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label for="exampleInputName" className="unilabel">Job Title</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputName1"
                            placeholder="Job Title"
                            value={jobtitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                          />
                          <Button type="submit" className="unilabel">+ Add</Button>
                        </form>
                      </Modal.Body>
                      {/* save button start ==================================>*/}

                      {/* save button start ==================================>*/}
                    </Modal>
                    {/*  add contact pop-up ends =======================>*/}

                    {/* category tabs ends===============================> */}

                    {/* select category start =========================> */}
                  </Modal.Body>
                </Modal>
                {/*All Teams tabs start ===============================================>*/}
                <Tabs
                  defaultActiveKey="customer"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="customer" title="Customer">
                    <Table striped bordered hover variant="light">
                      {
                        !clicked ? (
                          <thead>
                            <tr>
                              <th></th>
                              <th>Id</th>
                              <th>Teams</th>
                              <th>View All Teams Separately</th>
                            </tr>
                          </thead>
                        ) : (
                          // edit row part start=========================>
                          <thead className="edit-css">
                            <th></th>
                            <th>
                              <a
                                variant="primary"
                                onClick={() => setShowEditList(true)}

                              >
                                <i class="fa-solid fa-pen-to-square"></i>
                              </a>
                            </th>
                          </thead>
                        )
                        // edit row part ends===========================>
                      }

                      <tbody>
                        {teams.map((team) => (
                          <tr key={team.id}>
                            <td>
                              <input
                                className="unique"
                                type="checkbox"
                                onChange={(e) => {
                                  if (clicked === team.id) {
                                    setClicked(null);
                                  } else {
                                    setClicked(team.id);
                                  }
                                }}
                                checked={clicked === team.id}
                              />
                            </td>
                            <td>{team.id}</td>
                            <td>
                              {team.name} ({team.employees.length})
                            </td>
                            <td>
                              {/* view pop-up start ======================>*/}
                              <Button
                                variant="primary"
                                onClick={() => handleShowteam(team.id)}
                              >
                                view
                              </Button>
                              {/* view pop-up ends ======================>*/}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Tab>

                  {/* internal tab start ==========================>*/}
                  <Tab eventKey="internal" title="Internal"></Tab>
                  {/* internal tab ends ==========================>*/}
                </Tabs>

                {/*All Teams tabs ends ================================================>*/}


                {/*Teams View pop up start =================================================*/}
                <Modal show={!!showteam} onHide={handleCloseteam} dialogClassName="modal-90w">
                  <Modal.Header closeButton>
                    <Modal.Title>{getTeam(showteam)?.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Table striped bordered hover variant="light">
                      <thead>
                        <tr>

                          <th> name</th>
                          <th>email</th>
                          <th>jobtitle</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getTeam(showteam)?.employees.map((employee) => {
                          return (
                            <tr key={employee.id}>

                              <td>{employee.name}</td>
                              <td>{employee.email}</td>
                              <td>{employee.jobtitle}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Modal.Body>
                </Modal>

                {/*Teams View pop up ends =================================================*/}

                {/* edit team pop-up start ==================================>*/}

                <Modal show={showEditList} onHide={() => setShowEditList(false)} dialogClassName="modal-90w">
                  <Modal.Header closeButton>
                    <Modal.Title>Edit {getTeam(clicked)?.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/*  teams edit body start =========================*/}

                    <Table striped bordered hover variant="light">
                      <thead>
                        <tr>
                          <th>
                            <input className="unique" type="checkbox" />
                          </th>
                          <th> name</th>
                          <th>email</th>
                          <th>jobtitle</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getTeam(clicked)?.employees.map((employee) => {
                          return (
                            <tr key={employee.id}>
                              <td>
                                <input className="unique" type="checkbox" />
                              </td>
                              <td>{employee.name}</td>
                              <td>{employee.email}</td>
                              <td>{employee.jobtitle}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>

                    {/* teams edit body ends =========================*/}
                  </Modal.Body>
                </Modal>

                {/* edit team pop-up ends==================================>*/}


                {/*  contact list part ends======================> */}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </ListGroup>
      {/* extra part ends ===============================*/}

    </>
  );
};

export default AllTeam;
