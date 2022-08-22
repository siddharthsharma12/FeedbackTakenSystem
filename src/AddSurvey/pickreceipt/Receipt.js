import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./Receipt.css";

function Receipt() {
  const [gender, setGender] = useState();
  const [questions, setQuestions] = useState();
  const [required, setRequired] = useState();
  const [comment, setComment] = useState();
  const [checked, setChecked] = useState(false);

  const handleData = (e) => {
    e.preventDefault();
    console.log(gender, checked, comment, required, questions);
  };

  //  console.log(gender)
  //  console.log(questions)
  //  console.log(required)
  //  console.log(comment)

  return (
    <>
      <Container>
        <Row>
          {/*pick your receipts start===============================================> */}

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
                      name="gender"
                      value="Normal"
                      onChange={(e) => setGender(e.target.value)}
                    />
                   Normal
                  </div>
                  <div className="input-two">
                    <input
                      className="second"
                      type="radio"
                      name="gender"
                      value="Quiz"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Quiz
                    </div>
                  </div>
                </Col>

                <Col md={6} lg={6}>
                  <div className="choose-format">
                    <p className="chooseformat">Questions</p>
                  </div>
                  <div className="flexo">
                  <div className="input-one">
                  <input
                  className="first"
                  type="radio"
                  name="questions"
                  value="Randomize"
                  onChange={(e) => setQuestions(e.target.value)}
                  />
                  Randomize
                  </div>
                  
                  <div className="input-two">
                    <input
                      className="second"
                      type="radio"
                      name="questions"
                      value="Add-Logic"
                      onChange={(e) => setQuestions(e.target.value)}
                    />
                    Add-Logic
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="secondrow">
                <Row>
                  <Col md={6} lg={6}>
                    <div className="choose-format">
                      <p className="chooseformat">Required Questions</p>
                    </div>
                    <div className="flexo">
                    <div className="input-one">
                      <input
                        className="first"
                        type="radio"
                        name="required"
                        value="All"
                        onChange={(e) => setRequired(e.target.value)}
                      />
                      All
                      </div>

                      <div className="input-two">
                      <input
                        className="second"
                        type="radio"
                        name="required"
                        value="Specify-later"
                        onChange={(e) => setRequired(e.target.value)}
                      />
                      Specify
                      </div>
                    </div>
                  </Col>

                  <Col md={6} lg={6}>
                    <div className="choose-format">
                      <p className="chooseformat">Comment Length</p>
                    </div>
                  </Col>
                </Row>
              </div>

              <Row>
                <input
                  type="checkbox"
                  className="next"
                  onChange={(e) => setChecked(e.target.checked)}
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

export default Receipt;
