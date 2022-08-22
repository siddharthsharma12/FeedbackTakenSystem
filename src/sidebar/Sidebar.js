import React from "react";
import { Myprofile, Myplan, Usermanagement, Activitylog } from "../assets/Usericon";
import { ListGroup, ListGroupItem , Nav} from "react-bootstrap";
import "./Sidebar.css";
import {Link} from "react-router-dom"

function Sidebar() {

  return (
      <>
          <ListGroup bsPrefix="left-sidebar">
            <h6 class="sidebar_heading">My Account</h6>
            <ListGroup bsPrefix="user-menu" as="ul">
                <ListGroup.Item bsPrefix as="li"><Nav.Link  as={Link} to="/Profile"  className="text-lightblack font-14 font-regular"><Myprofile />My Profile</Nav.Link></ListGroup.Item>
                <ListGroup.Item bsPrefix as="li"><Nav.Link  as={Link} to="/MyPlan"  className="text-lightblack font-14 font-regular"><Myplan />My Plan</Nav.Link></ListGroup.Item>
                <ListGroup.Item bsPrefix as="li"><Nav.Link  as={Link} to="/Usermanagement"  className="text-lightblack font-14 font-regular"><Usermanagement />User Management</Nav.Link></ListGroup.Item>
                <ListGroup.Item bsPrefix as="li"><Nav.Link  as={Link} to="/ActivityLog"  className="text-lightblack font-14 font-regular"><Activitylog />Activity Log</Nav.Link></ListGroup.Item>
               
            </ListGroup>
          </ListGroup>
      </>
  );
}

export default Sidebar;





