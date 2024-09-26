import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Boolean.css";
import { BiAlignLeft } from "react-icons/bi";

function Boolean({ id, question, setquestion }) {

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

export default Boolean;
