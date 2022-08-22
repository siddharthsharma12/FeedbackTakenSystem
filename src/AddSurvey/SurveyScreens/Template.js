import React from "react";
import { ListGroup, Row, Container, Col, Nav } from "react-bootstrap";
import Sidebartwo from "../../SurveySideBar/Sidebartwo";
import "./Template.css";
import { Link } from "react-router-dom";
import { FcReadingEbook,FcReading,FcCollaboration,FcPortraitMode,FcInspection,FcBullish,FcIdea,FcFile,FcCollapse } from "react-icons/fc";

const Template = () => {
  return (
    <>
      <ListGroup bsPrefix="my-template">
        <Container fluid>
          <Row>
            <Col className="leftside-content width-fix">
              <Sidebartwo />
            </Col>

            <Col>
              <ListGroup bsPrefix="rightside-content-two">
                {/*  all templates part start =================================*/}

                <Row>
                  <ListGroup bsPrefix="survey-screen-two">
                    {/*  two square starts==================================> */}
                    <ListGroup bsPrefix="screens">
                      <ListGroup bsPrefix="favourate d-flex ">
                        <ListGroup bsPrefix="template">
                          <div className="icon-customer text-center">
                            <FcReading/>
                          </div>
                          <p>
                            <Nav.Link as={Link} to="/">
                             Nps Measure
                              <br /> Employee's Loyalty
                            </Nav.Link>
                          </p>
                          {/*<p>Customers</p>*/}
                        </ListGroup>

                        <ListGroup bsPrefix="scratch">
                          <div className="icon-internal text-center">
                            <FcCollaboration/>
                          </div>
                          <p>
                            <Nav.Link as={Link} to="/Scratch">
                             Promote Customer <br/> Engagement
                            </Nav.Link>
                          </p>
                        </ListGroup>
                      </ListGroup>
                      {/*  two square ends==================================> */}
                      <ListGroup bsPrefix="quick-build">
                        <h4>CSAT: Major Customer Satisfaction</h4>
                      </ListGroup>
                      {/*  three square starts==================================> */}
                      <ListGroup bsPrefix="csat d-flex">
                        <ListGroup bsPrefix="excel">
                          <div className="icon-customer text-center">
                            <FcPortraitMode/>
                          </div>
                          <p>
                            <Nav.Link as={Link} to="/Excel">
                             Recent Transaction <br/> Experience
                            </Nav.Link>
                          </p>
                          {/*<p>Customers</p>*/}
                        </ListGroup>

                        <ListGroup bsPrefix="copy">
                          <div className="icon-internal text-center">
                            <FcInspection/>
                          </div>
                          <p>
                            <Nav.Link as={Link} to="/Copy ">
                             Existing Product <br/>Feedback
                            </Nav.Link>
                          </p>
                        </ListGroup>

                        <ListGroup bsPrefix="format">
                          <div className="icon-internal text-center">
                            <FcBullish/>
                          </div>
                          <p>
                            <Nav.Link as={Link} to="/Format ">
                             Overall Experience <br/>General
                            </Nav.Link>
                          </p>
                        </ListGroup>

                        <ListGroup bsPrefix="format">
                        <div className="icon-internal text-center">
                          <FcReadingEbook />
                        </div>
                        <p>
                          <Nav.Link as={Link} to="/Format ">
                           Overall Experience <br/>General
                          </Nav.Link>
                        </p>
                      </ListGroup>
                      </ListGroup>
                      {/*  three square ends===================================> */}



                       {/*  last mid square ends==================================> */}
                       <ListGroup bsPrefix="quick-build-last">
                       <h4>Hear Your Teams</h4>
                     </ListGroup>
                     {/*  last square starts==================================> */}
                     <ListGroup bsPrefix="csat d-flex">
                       <ListGroup bsPrefix="excel">
                         <div className="icon-customer text-center">
                           <FcIdea/>
                         </div>
                         <p>
                           <Nav.Link as={Link} to="/Excel">
                           Get Ideas For <br/> Product/services
                           </Nav.Link>
                         </p>
                         {/*<p>Customers</p>*/}
                       </ListGroup>

                       <ListGroup bsPrefix="copy">
                         <div className="icon-internal text-center">
                           <FcFile/>
                         </div>
                         <p>
                           <Nav.Link as={Link} to="/Copy ">
                            Vote Your <br/> Survey
                           </Nav.Link>
                         </p>
                       </ListGroup>

                       <ListGroup bsPrefix="format">
                         <div className="icon-internal text-center">
                           <FcCollapse/>
                         </div>
                         <p>
                           <Nav.Link as={Link} to="/Format ">
                            Upvote Downvote<br /> Ideas
                           </Nav.Link>
                         </p>
                       </ListGroup>
                     </ListGroup>
                     {/*  last square ends===================================> */}




                    </ListGroup>
                  </ListGroup>
                </Row>

                {/*  all templates part start =================================*/}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </ListGroup>
    </>
  );
};

export default Template;
