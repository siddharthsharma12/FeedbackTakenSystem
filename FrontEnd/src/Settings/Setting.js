import React from "react";
import { ListGroup, Container, Row, Col} from "react-bootstrap";
import { CloseCircleOutline, CheckmarkCircleOutline } from 'react-ionicons';
import Sidebartwo from "../SettingSideBar/Sidebartwo";
import Header from "../header/Header";


function Setting() {
  return (
    <>
     <Header/>
      <ListGroup bsPrefix="mysettings">
        <Container fluid>
          <Row>
            <Col className="leftside-content width-fix">
              <Sidebartwo />
            </Col>
            <Col>
              <ListGroup bsPrefix="rightside-content">
              


              </ListGroup>
            </Col>
          </Row>
        </Container>
      </ListGroup>
    </>
  );
}

export default Setting;
