import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./FillMultipleChoiceQuestions.css";

const uniqueID = () => {
  const chr4 = () => Math.random().toString(16).slice(-4);
  return `${chr4() + chr4()
    }-${chr4()}-${chr4()}-${chr4()}-${chr4()}${chr4()}${chr4()}`;
};

function FillMultipleChoiceQuestions({ id, question, setquestion }) {
  const [clicked, setClicked] = useState(false);

  const getQuestion = () => {
    const foundComponent = question.find((component) => component.id === id);
    return foundComponent.question.title;
  };
  // on questionchange question part ends=============================================>

  const handleOptionClick = (value) => { };

  const getOptionValue = (optId) => {
    const foundComponent = question.find((component) => component.id === id);
    return foundComponent.question.options.find((item) => item.id === optId)
      .title;
  };

  const getOptions = () => {
    const foundComponent = question.find((component) => component.id === id);
    return foundComponent.question.options;
  };
  // on optionchange part ends==================================================>

  return (
    <div>
      <Container>
        <Row>
          <div
            className="Design"
            style={{
              padding: "0px 0px",
            }}
          >
            <Col md={12} lg={12}>
              <div className="flex">
                <div className="firstinputdiv">
                  <h1>{getQuestion()}</h1>
                </div>
              </div>

              {/* option input start================================= */}

              {getOptions().map((option) => (
                <Col md={4} lg={4} key={option.id}>
                  <Col className="block-option" key={option.id}>
                    <p>{getOptionValue(option.id) || ""}</p>
                  </Col>
                </Col>
              ))}

              {/* option input start================================= */}
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default FillMultipleChoiceQuestions;
