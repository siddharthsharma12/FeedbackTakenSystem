import React from "react";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FillRating.css";
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

function FillRating({ id, question }) {

  const [rating, setRating] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  // rating part start===========================>
  const handleClick = (value) => {
    console.log(value);
    setCurrentValue(value);
    if (rating === value) {
      setRating(null);
      return;
    }
    setRating(value);

  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
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
                      <h1>{getQuestion()}</h1>

                    </div>

                    {/*rating part start=============================*/}
                    <div >

                      <div style={styles.stars}>
                        {stars.map((_, index) => {
                          return (
                            <div className="star">
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
                                name="rating"
                                value="rate"
                                clicked={rating === "rate"}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/*rating part ends=============================*/}
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

export default FillRating;
