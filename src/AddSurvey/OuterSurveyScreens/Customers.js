import React from "react";
import "./Customers.css";
import { ListGroup, Container, Row, Nav } from "react-bootstrap";
// import { Navbar, Container, Nav, ListGroup, NavDropdown, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcReadingEbook ,FcPositiveDynamic,FcUpLeft,FcDocument,FcPortraitMode,FcDepartment} from "react-icons/fc";

const Customers = () => {
  return (
    <>
    <Container fluid>
    <Row>
      <ListGroup bsPrefix="survey-screen">
        {/*  two square starts==================================> */}
        <ListGroup bsPrefix="screens">
          <ListGroup bsPrefix="add-screens text-center">
            <h4>Choose How to Build Survey Screen</h4>
          </ListGroup>

          <ListGroup bsPrefix="two-brackets d-flex ">
            <ListGroup bsPrefix="template">
              <div className="icon-customer text-center">
                <FcPositiveDynamic />
              </div>
              <p>
                <Nav.Link as={Link} to="/Template">
                Instant Survey Build<br/> From template
                </Nav.Link>
              </p>
              {/*<p>Customers</p>*/}
            </ListGroup>

            <ListGroup bsPrefix="scratch">
              <div className="icon-internal text-center">
                <FcUpLeft/>
              </div>
              <p>
                <Nav.Link as={Link} to="/Scratch">
                 Build From Scratch
                </Nav.Link>
              </p>
            </ListGroup>
          </ListGroup>
      {/*  two square ends==================================> */}
          <ListGroup bsPrefix="quick-build text-center">
          <h4>Quick Build</h4>
           </ListGroup>
        {/*  three square starts==================================> */}
        <ListGroup bsPrefix="three-brackets d-flex ">
        <ListGroup bsPrefix="excel">
          <div className="icon-customer text-center">
            <FcDocument />
          </div>
          <p>
            <Nav.Link as={Link} to="/Excel">
           From Excel
            </Nav.Link>
          </p>
          {/*<p>Customers</p>*/}
        </ListGroup>

        <ListGroup bsPrefix="copy">
          <div className="icon-internal text-center">
            <FcPortraitMode/>
          </div>
          <p>
            <Nav.Link as={Link} to="/Copy ">
            Copy and Build
            </Nav.Link>
          </p>
        </ListGroup>

        <ListGroup bsPrefix="format">
        <div className="icon-internal text-center">
          <FcDepartment/>
        </div>
        <p>
          <Nav.Link as={Link} to="/Format ">
          Easy Type And <br/> Format
          </Nav.Link>
        </p>
      </ListGroup>
      </ListGroup>
      {/*  three square ends===================================> */}
      </ListGroup>


      </ListGroup>
    </Row>
  </Container>
    </>
  );
};

export default Customers;
