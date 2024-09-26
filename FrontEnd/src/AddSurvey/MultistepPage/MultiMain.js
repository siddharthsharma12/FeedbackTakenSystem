import React, { useState, useEffect } from "react";
import { SiNike } from "react-icons/si";
import Pick from "../pickreceipt/Pick";
import Review from "../Review/Review";
import Contacttable from "../TeamRecepients/ContactTable/Contacttable"
import Combine from "../combine/Combine";
import TeamRecipients from "../TeamRecepients/ContactTable/TeamRecipients";
import "./Multimain.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";


function MultiMain({
  question,
  setquestion,
  teams,
  selectedRecepients,
  setSelectedRecepeients,
  selectedtemplate,
  setSelectedTemplate,
  format,
  setFormat,
  selectquestion,
  setselectquestion,
  required,
  setRequired,
}) {


  const [activestep, setActiveStep] = useState(1);

  function getSteps() {

    return [
      "step-wizard-item",
      "step-wizard-item",
      "step-wizard-item",
      "step-wizard-item",
      "step-wizard-item",
      "step-wizard-item",
    ];

  }

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleprev = () => {
    setActiveStep((backActiveStep) => backActiveStep - 1);
  };




  const steps = getSteps();

  function getStepsContent(stepIndex) {

    switch (stepIndex) {
      case 1:

        return <Pick format={format} setFormat={setFormat} selectquestion={selectquestion} setselectquestion={setselectquestion} required={required} setRequired={setRequired} />
      case 2:
        return (
          <Combine question={question}
            setquestion={setquestion}
            selectedtemplate={selectedtemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        );
      case 3:
        return <TeamRecipients teams={teams} selectedRecepients={selectedRecepients} setSelectedRecepeients={setSelectedRecepeients} />;
      case 4:
        return <Review question={question} setquestion={setquestion} selectedRecepients={selectedRecepients} />;
      default:
        return "Done";

    }

  }
  // react js ends===========================================================>

  return (
    <>
      {/* multi step html start======================================>*/}
      <section className="step-wizard">
        <Container fluid>
          {/* 360 degree feedback================================ */}
          <ListGroup bsPrefix="survey-background">
            <Row>
              <Col md={3} lg={3}>
                <div className="survey-360">
                  <h4>360 Survey Category</h4>
                </div>
              </Col>
              <Col md={9} lg={9}>
                <div className="survey-display">
                  <div className="survey-common">
                    <p> Survey Sategory: xxx</p>
                  </div>
                  <div className="survey-common">
                    <p> Survey Type:yyyy</p>
                  </div>
                  <div className="survey-common">
                    <p>Survey Date: DD:MM:YYYY</p>
                  </div>
                </div>
              </Col>
            </Row>
          </ListGroup>
          {/* 360 degree feedback================================ */}
          <Row>
            <Col md={12} lg={12}>
              <div className="wizard">
                <ul className="step-wizard-list" activeStep={activestep}>
                  <li
                    className={
                      "step-wizard-item" + (activestep === 1 ? " blue" : "")
                    }
                  >
                    {/*  <span className="progress-count">1</span> */}

                    <span className="progress-label">
                      <SiNike />
                    </span>
                    <span className="pro">Take Your Pick</span>

                  </li>
                  <li
                    className={
                      "step-wizard-item" + (activestep === 2 ? " blue" : "")
                    }
                  >
                    {/*  <span className="progress-count">2</span> */}
                    <span className="progress-label">
                      <SiNike />
                    </span>
                    <span className="progress-label">Add selectquestion</span>
                  </li>
                  <li
                    className={
                      "step-wizard-item" + (activestep === 3 ? " blue" : "")
                    }
                  >
                    {/*  <span className="progress-count">3</span> */}
                    <span className="progress-label">
                      <SiNike />
                    </span>
                    <span className="progress-label">Pick Your recepients</span>
                  </li>

                  <li
                    className={
                      "step-wizard-item" + (activestep === 4 ? " blue" : "")
                    }
                  >
                    {/*  <span className="progress-count">4</span> */}
                    <span className="progress-label">
                      <SiNike />
                    </span>
                    <span className="progress-label">Review and Send</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        {/* button section start=====================================> */}


        <div className="wiz-button ">
          {activestep === steps.length ? (
            "the Steps"
          ) : (
            <>
              {getStepsContent(activestep)}
              <section className="btn-grp">
                <Container fluid>
                  <Row>
                    <div className="buttonprev col-md-6 col-lg-6">
                      <a className="bty" onClick={handleprev}>
                        {activestep === steps.length ? "Finish" : "Back-Page"}

                      </a>
                    </div>
                    <div className="buttonnext col-md-6 col-lg-6">
                      <a className="bto" onClick={handleNext}>
                        {activestep === steps.length ? "Finish" : "Next-Page"}

                      </a>
                    </div>
                  </Row>
                </Container>
              </section>
            </>
          )}
        </div>

        {/* button section ends =======================================>*/}
      </section>

      {/* multistep html ends========================================> */}
    </>
  );
}

export default MultiMain;
