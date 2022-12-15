import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import "./MutipleChoiceDemo.css";

function MultipleChoiceDemo({ question }) {
  // on questionchange question part starts=============================================>

  // add option part ends==========================================================>

  return (
    <div>
    
        <Row>
          <div
            className="Design"
            style={{
              padding: "0px 0px",
            }}
          >
            <Col md={8} lg={8}>
              <div className="flex">
                <div className="firstinputdivdemo">
                  <input
                    className="firstinputr"
                    type="text"
                    name="question"
                    value={question.title}
                    readOnly={true}
                  />
                </div>
              </div>

              {/* option input start================================= */}

              <Row>
                {question.options.map((option) => (
                  <Col md={3} lg={3} key={option.id}>
                    <div className="flexkrdoone">
                      <div className="firstindivm">
                        <input
                          className="firstinm"
                          type="text"
                          value={option.title}
                          readOnly={true}
                        />
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* option input start================================= */}
            </Col>
          </div>
        </Row>
  
    </div>
  );
}

export default MultipleChoiceDemo;
