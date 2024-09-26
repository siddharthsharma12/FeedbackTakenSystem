import React, { useEffect, useState } from "react";
import { Row, Container, Col, ListGroup } from "react-bootstrap";
import "./Pick.css";

function Pick({
  setValidated,
  format,
  setFormat,
  selectquestion,
  setselectquestion,
  required,
  setRequired,
}) {
  const [responseAnonymous, setresponseAnonymous] = useState(false);


  const handleData = (e) => {
    console.log(format && selectquestion && required);
    e.preventDefault();
    console.log(format, responseAnonymous, required, selectquestion);
  };

  const handleFormat = (value) => {
    console.log(format, value);
    if (format === value) {
      setFormat(null);
      return;
    }
    setFormat(value);
  };

  const handleselectquestion = (value) => {
    console.log(selectquestion, value);
    if (selectquestion === value) {
      setselectquestion(null);
      return;
    }
    setselectquestion(value);
  };

  const handlerequired = (value) => {
    console.log(required, value);
    if (required === value) {
      setRequired(null);
      return;
    }
    setRequired(value);
  };

  return (
    <>
      <Container>
        <Row>
          {/*pick your receipts start===============================================> */}
          <ListGroup bsPrefix="pick">
            <Col md={12} lg={12} className="pick-head">
              <div className="lorem-heading">
                <h3>lorem ipsum dolor sit amet</h3>
              </div>
            </Col>
          </ListGroup>
          <div className="input">
            <form onSubmit={handleData}>
              <Row>
                <Col md={6} lg={6}>
                  <div className="choose-format">
                    <p className="chooseformat">Choose Format</p>
                  </div>
                  <div className="flexo">
                    <div className="input-one">
                      <input
                        className="first"
                        type="radio"
                        id="labone"
                        name="format"
                        value="Normal"
                        checked={format === "Normal"}
                        onClick={(e) => handleFormat(e.target.value)}
                      />
                      <label for="labone">Normal</label>
                    </div>
                    <div className="input-two">
                      <input
                        className="second"
                        type="radio"
                        name="format"
                        id="labtwo"
                        value="Quiz"
                        checked={format === "Quiz"}
                        onClick={(e) => handleFormat(e.target.value)}
                      />
                      <label for="labtwo">Quiz</label>
                    </div>
                  </div>
                </Col>

                <Col md={6} lg={6}>
                  <div className="choose-format">
                    <p className="chooseformat">selectquestion</p>
                  </div>
                  <div className="flexo">
                    <div className="input-one">
                      <input
                        className="first"
                        type="radio"
                        name="selectquestion"
                        value="Randomize"
                        id="labthree"
                        checked={selectquestion === "Randomize"}
                        onClick={(e) => handleselectquestion(e.target.value)}
                      />
                      <label for="labthree">Randomize</label>
                    </div>

                    <div className="input-two">
                      <input
                        className="second"
                        type="radio"
                        name="selectquestion"
                        value="Add-Logic"
                        id="labfour"
                        checked={selectquestion === "Add-Logic"}
                        onClick={(e) => handleselectquestion(e.target.value)}
                      />
                      <label for="labfour">Add-logic</label>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="secondrow">
                <Row>
                  <Col md={6} lg={6}>
                    <div className="choose-format">
                      <p className="chooseformat">Required selectquestion</p>
                    </div>
                    <div className="flexo">
                      <div className="input-one">
                        <input
                          className="first"
                          type="radio"
                          name="required"
                          value="All"
                          id="labfive"
                          checked={required === "All"}
                          onClick={(e) => handlerequired(e.target.value)}
                        />
                        <label for="labfive">All</label>
                      </div>

                      <div className="input-two">
                        <input
                          className="second"
                          type="radio"
                          name="required"
                          id="labsix"
                          value="specify"
                          checked={required === "specify"}
                          onClick={(e) => handlerequired(e.target.value)}
                        />
                        <label for="labsix">Specify</label>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} lg={6}>
                    {/*    <div className="choose-format">
                    <input type="text" placeholder="comment" />
                      <p className="chooseformat">Comment Length</p>
                </div> */}
                  </Col>
                </Row>
              </div>

              <Row>
                <input
                  type="checkbox"
                  className="next"
                  onChange={(e) =>
                    setresponseAnonymous(e.target.responseAnonymous)
                  }
                />
                Keep Survey Response Anonymous
              </Row>
            </form>
          </div>
          {/* Pick your receipts ends===============================================> */}
        </Row>
      </Container>
    </>
  );
}

export default Pick;
