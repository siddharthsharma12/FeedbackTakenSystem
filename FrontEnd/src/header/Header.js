import React from "react";
import { Settings, PlusCircle, Edit  } from "react-feather";
import { Navbar, Container, Nav, ListGroup, NavDropdown, Accordion } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./Header.css";
// extra
import { NavLink, useNavigate } from "react-router-dom";
// import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../ReduxLogin/authSlice";
// import Setting from "../Settings/Setting";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };


  const htmlCode = () => {
    return (
      <span className="user-setting d-inline-block">
      <span className="username">Gautham</span>
      <span className="usericon">G</span>
      </span>
    )
  }
  return (
    
    <ListGroup bsPrefix className="ft_header">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container fluid>
        <Navbar.Brand> <img src="../images/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
                <ListGroup as="ul" bsPrefix className="me-auto navbar-nav">
                <ListGroup.Item bsPrefix as="li"><Nav.Link as={Link} to="/Dashboard">FaceBoard</Nav.Link></ListGroup.Item>
                <ListGroup.Item bsPrefix as="li"><Nav.Link as={Link} to="/AddSurveys"> Add Surveys</Nav.Link></ListGroup.Item>
                <ListGroup.Item bsPrefix as="li"><Nav.Link  as={Link} to="/IdeaBoards"> IdeaBoards</Nav.Link></ListGroup.Item>
                </ListGroup>
            </Navbar.Collapse>
            <ListGroup bsPrefix className="right_menu">
               <ListGroup as="ul" bsPrefix className="pl-0 mb-0">
              <ListGroup.Item bsPrefix as="li"><Nav.Link as={Link} to="/Dashboard" className="cta cta-blue cta-lg"> <PlusCircle /> Create New </Nav.Link></ListGroup.Item>
                <ListGroup.Item bsPrefix as="li"><Nav.Link as={Link} to="/Setting" className="top-settingicon"> <Settings /></Nav.Link></ListGroup.Item>
               <ListGroup.Item bsPrefix as="li">
                  <Nav>
                    <NavDropdown className="user-detail" title={htmlCode()}>
                     <ListGroup bsPrefix className="user-management">
                     <ListGroup bsPrefix className="user-name">
                        <ListGroup bsPrefix className="d-flex">
                          <span as="span" className="text-sea">G</span>
                          <h6 as="h6" className="mb-0">
                          <p as="p" className="d-block mb-1 text-black">Gautham</p>Ramachandra</h6>
                          </ListGroup>
                         <a className="text-black"> <Edit /></a>
                     </ListGroup>
                     <ListGroup bsPrefix className="bg-sea text-uppercase text-white py-3 px-4 description-14 text-center">Upgrade</ListGroup>
                      <ListGroup as="ul" bsPrefix className="profile-info">
                      <ListGroup.Item bsPrefix as="li" className="profile-item">
                         <Accordion bsPrefix className="">
                            <Accordion.Header bsPrefix className="mb-0">My Account</Accordion.Header>
                           <Accordion.Body className="p-0">
                             <ListGroup bsPrefix as="ul" className="my-account pl-20">
                             <ListGroup.Item bsPrefix as="li" className="myac-item"><Nav.Link  as={Link} to="/Profile">My Profile</Nav.Link></ListGroup.Item>
                             <ListGroup.Item bsPrefix as="li" className="myac-item"><Nav.Link  as={Link} to="/MyPlan">My Plan</Nav.Link></ListGroup.Item>
                              <ListGroup.Item bsPrefix as="li" className="myac-item"><Nav.Link as={Link} to="/Usermanagement">User Management</Nav.Link></ListGroup.Item>
                              <ListGroup.Item bsPrefix as="li" className="myac-item"><Nav.Link  as={Link} to ="/ActivityLog">Activity Log</Nav.Link></ListGroup.Item>
                              </ListGroup>
                            </Accordion.Body>
                        </Accordion>
                        </ListGroup.Item>   
                      <ListGroup.Item bsPrefix as="li" className="profile-item"><a >My Teams</a></ListGroup.Item>
                      <ListGroup.Item bsPrefix as="li" className="profile-item"><a >Help</a></ListGroup.Item>
                      <button onClick={logout} className="profile-item"> Logout</button>
                      
                     
                      {/* <ListGroup.Item bsPrefix as="li" className="profile-item" className="button is-white"><a >Logout</a></ListGroup.Item> */}
                      </ListGroup>
                      </ListGroup>
                    </NavDropdown>
                  </Nav>
                  </ListGroup.Item>
                </ListGroup>
            </ListGroup>
        </Container>
      </Navbar>
    </ListGroup>
  );
}

export default Header;
