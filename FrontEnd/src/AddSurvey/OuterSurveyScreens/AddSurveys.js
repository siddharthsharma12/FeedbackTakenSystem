import React from "react";
import "./AddSurvey.css";
import { ListGroup, Container, Row, Nav } from "react-bootstrap";
// import { Navbar, Container, Nav, ListGroup, NavDropdown, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcReadingEbook, FcOnlineSupport } from "react-icons/fc";
import Header from "../../header/Header";

const AddSurveys = () => {
  return (
    <>
    <Header/>
      <Container fluid>
        <Row>
          <ListGroup bsPrefix="addsurvey-section">
            <ListGroup bsPrefix="add-section">
              <ListGroup bsPrefix="add-survey text-center">
                <h4>Select Survey Category screen</h4>
              </ListGroup>
              {/* two bracket part start======================================> */}
              <ListGroup bsPrefix="Two-Brackets">
                <ListGroup bsPrefix="customer">
                  <div className="icon-customer text-center">
                    <FcOnlineSupport />
                  </div>
                  <p>
                    <Nav.Link as={Link} to="/Customers">
                      Customers
                    </Nav.Link>
                  </p>
                  {/*<p>Customers</p>*/}
                </ListGroup>

                <ListGroup bsPrefix="internal">
                  <div className="icon-internal text-center">
                    <FcReadingEbook />
                  </div>
                  <p>
                    <Nav.Link as={Link} to="/Internal">
                      Internal
                    </Nav.Link>
                  </p>
                </ListGroup>
              </ListGroup>
              {/* two bracket part ======================================> */}
            </ListGroup>
          </ListGroup>
        </Row>
      </Container>
    </>
  );
};

export default AddSurveys;
