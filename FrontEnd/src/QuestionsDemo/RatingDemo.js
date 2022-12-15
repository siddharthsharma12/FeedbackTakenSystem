import React from "react";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RatingDemo.css";
import { BiAlignLeft } from "react-icons/bi";
// import { BiGitBranch } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

function RatingDemo({ question }) {
const stars = Array(5).fill(0);
  return (
    <>
      <ToastContainer />
      <div>
        {/* <Container> */}
        <Row>
          {/*  part starts======================================================> */}
          <div
            className="Design"
            style={{
              padding: "0px 0px",
            }}
          >
            {/*  dropsection starts======================================================> */}

            {/* mapping function starts======================================================>*/}
            <Row>
              <Col md={8} lg={8}>
                <div className="flex-flex">
                  <form>
                    <div className="firstinputedivdemo">
                    

                      <input
                        className="firstinputr"
                        id="validationDefaultUsername"
                        type="text"
                        name="question"
                        aria-describedby="inputGroupPrepend2"
                        value={question.title}
                        readOnly={true}
                      />
                    </div>

                    {/*rating part start=============================*/}
                    <div style={styles.container}>
                   
                      <div style={styles.stars}>
                        {stars.map((_, index) => {
                          return (
                            <FaStar
                              key={index}
                              size={24}
                              style={{
                                marginRight: 10,
                                cursor: "pointer",
                              }}
                            />
                          );
                        })}
                      </div>
                  
                    </div>

                    {/*rating part start=============================*/}
                  </form>
                </div>
              </Col>
            </Row>
            {/*mapping function ends======================================================> */}
          </div>
          {/*  part ends======================================================> */}
        </Row>
        {/* </Container> */}
      </div>
    </>
  );
}

export default RatingDemo;
