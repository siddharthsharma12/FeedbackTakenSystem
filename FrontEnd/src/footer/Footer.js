import React from "react";
import { ListGroup, Container, Row } from "react-bootstrap";
import "./Footer.css";


function Footer() {

  return (
    <>

      <ListGroup bsPrefix className="ft_footer">
        <ListGroup bsPrefix as="span" className="text-black">copyright@feedbacktaken.com</ListGroup>
      </ListGroup>


    </>
  );
}

export default Footer;
