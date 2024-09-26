// import {useState} from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import "./ViewInsights.css";
import Header from "../header/Header";
import { useState } from "react";
import {Table} from "react-bootstrap";

const ViewInsights = ({heading4}) => {
  const [key, setKey] = useState("summary");

  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className="insights">
            <h4>Insights:SurveyName(Live: In Progress)</h4>
          </div>

          <Row>
            <Col md={4} lg={4}>
              <div className="one">
                <p>Survey category:</p>
              </div>
            </Col>

            <Col md={4} lg={4}>
              <div className="one">
                <p>Sends On:</p>
              </div>
            </Col>

            <Col md={4} lg={4}>
              <div className="one">
                <p>Ends On:</p>
              </div>
            </Col>
          </Row>

          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="View-Tab"
          >
            <Tab eventKey="summary" title="Summary">
              <Row>
                <Col md={2} lg={2}>
                  <div className="block">
                    <h4 className={`insights${heading4}`}>Total Questions</h4>
                  </div>
                  <div className="block">
                    <h4>Recepients</h4>
                  </div>
                  <div className="block">
                    <h4>Views</h4>
                  </div>
                  <div className="block">
                    <h4>Completed</h4>
                  </div>
                  <div className="block">
                    <h4>Complation Rate</h4>
                  </div>
                  <div className="block">
                    <h4>Average Duration</h4>
                  </div>
                </Col>

                <Col md={10} lg={10}>
                  {/* part one statrs =========================================>*/}
                  <div className="heading-responses">
                    <h4>Responses</h4>
                  </div>

                  <Row>
                    <Col md={6} lg={6}>
                      <div className="response-two">
                        <h4></h4>
                      </div>
                    </Col>

                    <Col md={6} lg={6}>
                      <div className="response-two">
                        <h4></h4>
                      </div>
                    </Col>
                  </Row>

                  <div className="res-location">location</div>
                  {/* part one ends =========================================>*/}

                  {/* part two statrs =========================================>*/}
                  <div className="heading-responses">
                    {" "}
                    <h4>Unsubscribtions</h4>
                  </div>

                  <Row>
                    <Col md={6} lg={6}>
                      <div className="response-two">
                        <h4></h4>
                      </div>
                    </Col>

                    <Col md={6} lg={6}>
                      <div className="response-two">
                        <h4></h4>
                      </div>
                    </Col>
                  </Row>

                  {/* part two ends =========================================>*/}

                  {/* part three statrs =========================================>*/}
                  <div className="heading-responses">
                    <h4>Results</h4>
                  </div>

                  <Row>
                    <Col md={4} lg={4}>
                      <div className="response-two">
                        <p>Highest Rated</p>
                      </div>
                    </Col>

                    <Col md={4} lg={4}>
                      <div className="response-two">
                        <p>Least Rated</p>
                      </div>
                    </Col>

                    <Col md={4} lg={4}>
                      <div className="response-two">
                        <p>View Team Ratings</p>
                      </div>
                    </Col>

                    <Col md={4} lg={4}>
                      <div className="response-two">
                        <p>Customied Individual Report</p>
                      </div>
                    </Col>

                    <Col md={4} lg={4}>
                      <div className="response-two">
                        <p>Customised Questions Report</p>
                      </div>
                    </Col>
                  </Row>

                  {/* part three ends =========================================>*/}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="response" title="Individual Response"></Tab>
            <Tab eventKey="questionwise" title="QuestionWise Response">
              {/* Calculation tables start ===========================>*/}
        <div className={`ques-table${heading4}`}>
        <h4>Question Wise Response Tab</h4>
        </div>
        <Table striped bordered hover variant="light" >
          <thead>
            <tr>
              <th>Number</th>
              <th>Question Text</th>
              <th>Response</th>
              <th>Format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td> </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td> </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td> </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td> </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td> </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td> </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            <td>4</td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </Table>
        {/*calculation table ends============================== */}
            </Tab>
          </Tabs>
        </Row>
      
      </Container>
    </>
  );
};

export default ViewInsights;
