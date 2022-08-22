import React, { useState } from "react";
import { SiNike } from "react-icons/si";
import Receipt from "../pickreceipt/Receipt";
import Review from "../Review/Review";
import StepTwo from "./StepTwo";

import StepThree from "./StepThree";

import Combine from "../combine/Combine";

import "./Multimain.css";
import { Container, Row,Col } from "react-bootstrap";


function MultiMain({ components, setComponents }) {
  // react js start==========>
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
        return <Receipt />;
      case 2:
        return (
          <Combine components={components} setComponents={setComponents} />
        );
      case 3:
        return <StepTwo/>;
      case 4:
        return <Review/>;
      default:
        return "plz Go Back";
    }
  }
  // react js ends===========>

  return (
    <>
      {/* multi step html start======================================>*/}
      <section className="step-wizard">
        <Container fluid>
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
                  <span className="progress-label">Add Questions</span>
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
              "The Steps"
            ) : (
              <>
                {getStepsContent(activestep)}
                <section className="btn-grp">
                  <Container>
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
