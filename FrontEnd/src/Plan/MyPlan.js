import React from "react";
import { ListGroup, Container, Row, Col, Table} from "react-bootstrap";
import { CloseCircleOutline, CheckmarkCircleOutline } from 'react-ionicons';
import Sidebar from "../sidebar/Sidebar";
import "./MyPlan.css";
import Header from "../header/Header";

function MyPlan() {
  return (
    <>
      <Header/>
      <ListGroup bsPrefix="myprofile">
        <Container fluid>
          <Row>
            <Col className="leftside-content width-fix">
              <Sidebar/>
            </Col>
            <Col>
              <ListGroup bsPrefix="rightside-content">
                <ListGroup bsPrefix="my-plan">
                 <Row>
                    <Col>
                      <h2 className="text-skyblue heading-22 font-bold mt-10 mb-30 sm-heading">Current Plan</h2>
                    </Col>
                  </Row>
                  <div className="bg-gray pln-invoice">
                  <Row className="align-items-center">
                    <Col xl={6} lg={6} md={12} sm={6} xs={12}>
                      <p className=" font-14 lightblack description-16  mb-1 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus scelerisque diam, sit amet rhoncus ante. </p>
                     </Col>
                     <Col xl={6} lg={6} md={12} sm={6} xs={12} className="text-left text-xl-end text-lg-end text-md-end">
                      <a  className="text-skyblue description-16 text-decoration-underline">My Invoice </a>
                     </Col>
                  </Row>
                  </div>
                  <Row>
                    <Col>
                      <div className="text-most mb-3 mt-4">
                       <h2 className="text-blue heading-22 font-bold mt-10 mb-20 sm-heading">Subscription </h2>
                       <p className="description-16 text-lightblack">Start :   &nbsp; &nbsp;  <span className="text-light">01 / 08 / 2020</span></p>
                       <p className="description-16 text-lightblack mb-20">End Dates :  &nbsp; &nbsp;  <span className="text-light">26 / 07 / 2021</span></p>
                       <a  className="cta cta-grey">Renew</a>
                     </div>
                    </Col>
                  </Row>
                </ListGroup>
                <ListGroup className="pricing-table bg-light px-4">
                <Table className="" borderless>
                <thead valign="middle" className="mb-30 vartical-middle">
                  <tr>
                    <th scope="col" className="py-4">
                    <span className="d-block font-12 font-regular text-lightblack mb-30">Plan</span>
                    <span className="d-block font-14 font-regular text-lightblack">Lorem ipsum dolor sit amet, </span></th>
                    <th align="center" className="text-center py-4">
                    <span className="d-block font-12 font-regular text-lightblack mb-30">Basic</span>
                    <a  className="cta cta-yellow"> Upgrade </a>
                    </th>
                    <th align="center" className="text-center py-4">
                    <span className="d-block font-12 font-regular text-lightblack mb-30">Professional</span>
                    <a  className="cta cta-grey"> Upgrade </a>
                    </th>
                    <th align="center" className="text-center py-4">
                    <span className="d-block font-12 font-regular text-lightblack mb-30">Standard</span>
                    <a  className="cta cta-grey"> Upgrade </a>
                    </th>
                  </tr>
                </thead>
                  
                <tbody>
                  <tr>
                    <td data-label="Plan" className="text-left text-lightblack description-14 pt-4">Lorem ipsum dolor</td>
                    <td data-label="Basic"  className="text-center pt-4"><CloseCircleOutline color={'#CB0808'}  height="24px" width="24px" /></td> 
                    <td data-label="Professional" className="text-center pt-4"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                    <td data-label="Standard" className="text-center pt-4"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                  </tr>
                  <tr>
                    <td data-label="Plan" className="text-left text-lightblack description-14">Consectetur adipiscing</td>
                    <td data-label="Basic" className="text-center"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                    <td data-label="Professional" className="text-center"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                    <td data-label="Standard" className="text-center"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                  </tr>
                  <tr>
                    <td data-label="Plan" className="text-left text-lightblack description-14">Etiam ut sagittis sem</td>
                    <td data-label="Basic" className="text-center"><CloseCircleOutline color={'#CB0808'}  height="24px" width="24px" /></td> 
                    <td data-label="Professional" className="text-center"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                    <td data-label="Standard" className="text-center"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                  </tr>
                  <tr>
                    <td data-label="Plan" className="text-left text-lightblack description-14">Maecenas pulvinar auctor</td>
                    <td data-label="Basic" className="text-center"><CloseCircleOutline color={'#CB0808'}  height="24px" width="24px" /></td> 
                    <td data-label="Professional" className="text-center"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                    <td data-label="Standard" className="text-center"> <CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /></td>
                  </tr>
                  <tr>
                    <td data-label="Plan" className="text-left text-lightblack description-14">Fusce maximus turpis</td>
                    <td data-label="Basic" className="text-center"><CloseCircleOutline color={'#CB0808'}  height="24px" width="24px" /></td> 
                    <td data-label="Professional" className="text-center">{/*<CloseCircleOutline color={'#CB0808'}  height="24px" width="24px" />*/}</td> 
                     <td data-label="Standard" className="text-center"> {/*<CheckmarkCircleOutline color={'#4AAA0C'}  height="24px"width="24px" /> */}</td>
                  </tr>
                </tbody>
                </Table>
                </ListGroup>
                </ListGroup>
            </Col>
          </Row>
        </Container>
      </ListGroup>
    </>
  );
}

export default MyPlan;
