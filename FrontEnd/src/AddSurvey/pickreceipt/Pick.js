import React, { useEffect, useState } from "react";
import { Row, Container, Col,ListGroup } from "react-bootstrap";
import "./Pick.css";

function Pick({ setValidated,format, setFormat,questions, setQuestions ,required, setRequired}) {
  
 
  const [responseAnonymous, setResponseAnonymous] = useState(false);


  const handleData = (e) => {
    console.log((format && questions && required));
    e.preventDefault();
    console.log(format, responseAnonymous, required, questions);
  };

  const handleFormat = (value) => {
    console.log(format ,value);
      if(format === value) {
         setFormat(null);
         return;
      }
      setFormat(value);
      }

      const handlequestions = (value) => {
        console.log(questions ,value);
          if(questions === value) {
             setQuestions(null);
             return;
          }
          setQuestions(value);
          }

          const handlerequired = (value) => {
            console.log(required ,value);
              if(required === value) {
                 setRequired(null);
                 return;
              }
              setRequired(value);
              }


  // useEffect(() => {
  //    if(format && questions && required ) {
  //     setValidated(true);
  //    }else{
  //     setValidated(false);
  //    }
  // }, [format, questions, required])
  

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
                      name="format"
                      value="Normal"
                      checked={format === "Normal"}
                      onClick={(e) => handleFormat(e.target.value)}
                    />
                   Normal
                  </div>
                  <div className="input-two">
                    <input
                      className="second"
                      type="radio"
                      name="format"
                      value="Quiz"
                      checked={format === "Quiz"}
                      onClick={(e) => handleFormat(e.target.value)}
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
                   checked={questions === "Randomize"}
                      onClick={(e) => handlequestions(e.target.value)}
                  />
                  Randomize
                  </div>
                  
                  <div className="input-two">
                    <input
                      className="second"
                      type="radio"
                      name="questions"
                      value="Add-Logic"
                      checked={questions === "Add-Logic"}
                      onClick={(e) => handlequestions(e.target.value)}
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
                        checked={required === "All"}
                        onClick={(e) => handlerequired(e.target.value)}
                      />
                      All
                      </div>

                      <div className="input-two">
                      <input
                        className="second"
                        type="radio"
                        name="required"
                        value="specify"
                        checked={required === "specify"}
                      onClick={(e) => handlerequired(e.target.value)}
                      />
                      Specify
                      </div>
                    </div>
                  </Col>

                  <Col md={6} lg={6}>
               { /*    <div className="choose-format">
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
                  onChange={(e) => setResponseAnonymous(e.target.responseAnonymous)}
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
