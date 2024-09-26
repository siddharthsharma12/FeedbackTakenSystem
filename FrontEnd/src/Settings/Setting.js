import { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { CloseCircleOutline, CheckmarkCircleOutline } from 'react-ionicons';
import Sidebartwo from "../SettingSideBar/Sidebartwo";
import Header from "../header/Header";
import "./Setting.css";



function Setting({ theme, setTheme, heading4, setHeading4 }) {

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');

    } else {
      setTheme('dark');

    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);



  return (
    <>
      <Header />
      <ListGroup bsPrefix="mysettings">
        <Container fluid>
          <Row>
            <Col className="leftside-content width-fix">
              <Sidebartwo />
            </Col>
            <Col>
              <ListGroup bsPrefix="rightside-content">


                <button onClick={toggleTheme} className="toggle">Change Color Mode</button>



              </ListGroup>
            </Col>
          </Row>
        </Container>
      </ListGroup>
    </>
  );
}

export default Setting;
