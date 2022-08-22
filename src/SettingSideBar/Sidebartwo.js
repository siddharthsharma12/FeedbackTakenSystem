import React from "react";
import { Myprofile, Myplan, Usermanagement, Activitylog } from "../assets/Usericon";
import { ListGroup, ListGroupItem , Nav} from "react-bootstrap";
import "./Sidebartwo.css";
import {Link} from "react-router-dom"

function Sidebartwo() {

  return (
      <>
          <ListGroup bsPrefix="left-sidebar">
            <h6 class="sidebar_heading">Settings</h6>
            <ListGroup bsPrefix="user-menu" as="ul">
                <ListGroup.Item bsPrefix as="li"><Nav.Link  as={Link} to="/Setting"  className="text-lightblack font-14 font-regular"><Myprofile />Theme</Nav.Link></ListGroup.Item>
              
              </ListGroup>
          </ListGroup>
      </>
  );
}

export default Sidebartwo;





