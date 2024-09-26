import React from "react";
import "./DashBoard.css";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import Header from "../header/Header";
import { Row, Col, Container } from "react-bootstrap"

const DashBoard = (heading4) => {

  const data = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];

  return (
    <>
      <Header />
      <Container>
        <Row>
          {/* calculation part start======================================> */}
          <Col md={2} lg={2}>
            <div className="block-dash">
              <h4>Total Survey</h4>
            </div>
            <div className="block-dash">
              <h4> Total Respondents</h4>
            </div>
            <div className="block-dash">
              <h4>Total Audience</h4>
            </div>
            <div className="block-dash">
              <h4>Average Response Rate</h4>
            </div>
            <div className="block-dash">
              <h4>Average Number Of Questions</h4>
            </div>

          </Col>
          {/* calculation part  ends======================================> */}
          <Col md={10} lg={10}>
            <div className="fee-result" style={{ textAlign: "center" }}>
              <h1>FeedBack Results</h1>
              <Row>
                <Col md={6} lg={6}>
                  <div className="chart-one">
                    <PieChart width={400} height={400}>
                      <Pie
                        dataKey="users"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                      <Tooltip />
                    </PieChart>
                  </div>
                </Col>

                <Col md={6} lg={6}>
                  <div className="chart-two">
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 80,
                        bottom: 5,
                      }}
                      barSize={20}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                      />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                  </div>
                </Col>

                {/* second chart part start ===========================================*/}
                <Col md={6} lg={6}>
                  <div className="chart-two">
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 80,
                        bottom: 5,
                      }}
                      barSize={20}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                      />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                  </div>
                </Col>


                <Col md={6} lg={6}>
                  <div className="chart-one">
                    <PieChart width={400} height={400}>
                      <Pie
                        dataKey="users"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                      <Tooltip />
                    </PieChart>
                  </div>
                </Col>


                {/* second chart part ends ============================================*/}
              </Row>
            </div>
          </Col>


        </Row>
      </Container>

    </>
  );

};

export default DashBoard;