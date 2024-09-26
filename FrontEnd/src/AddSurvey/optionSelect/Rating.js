import React from "react";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Boolean.css";
import { BiAlignLeft } from "react-icons/bi";
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

function Rating({ id, question, setquestion }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  // rating part start===========================>
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  // rating part ends=============================>

  const onChange = (e) => {
    setquestion((prev) => {
      return prev.map((component) => {
        if (component.id === id) {
          return {
            ...component,
            question: { ...component.question, title: e.target.value },
          };
        }
        return component;
      });
    });
  };

  const getQuestion = () => {
    const foundComponent = question.find((component) => component.id === id);
    return foundComponent.question.title;
  };

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
              <Col md={12} lg={12}>
                <div className="flex-flex">
                  <form>
                    <div className="firstinputediv">
                      {/* <BiAlignLeft />*/}

                      <input
                        className="firstinput"
                        id="validationDefaultUsername"
                        type="text"
                        name="question"
                        aria-describedby="inputGroupPrepend2"
                        placeholder="Enter Your Question Here"
                        onChange={(e) => onChange(e)}
                        value={getQuestion()}
                        required
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
                              onClick={() => handleClick(index + 1)}
                              onMouseOver={() => handleMouseOver(index + 1)}
                              onMouseLeave={handleMouseLeave}
                              color={
                                (hoverValue || currentValue) > index
                                  ? colors.orange
                                  : colors.grey
                              }
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

export default Rating;
