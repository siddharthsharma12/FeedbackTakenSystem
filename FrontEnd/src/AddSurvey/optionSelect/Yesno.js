import React from "react";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Boolean.css";
import { BiAlignLeft } from "react-icons/bi";
import "./Yesno.css";
// import { BiGitBranch } from "react-icons/bi";

function Yesno({ id, components, setComponents }) {

     const [yes,setYes] = useState();
    //  const [no,setNo] = useState();

    //  const handleChange =(e) => {
         
    //  }
  
  const onChange = (e) => {
    setComponents((prev) => {
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
    const foundComponent = components.find((component) => component.id === id);
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
            {/*   yes no part start================================= */}
            <div className="input-extra">
            <form>
              <Row>
                <Col md={6} lg={6}>
               
                  <div className="flexo">
                  <div className="input-one">
                  <input
                      className="first"
                      type="radio"
                      name="Yes"
                      value="Yes"
                      onChange={(e) => setYes(e.target.value)}
                    />
                    Yes
                  </div>
                  <div className="input-two">
                    <input
                      className="second"
                      type="radio"
                      name="Yes"
                      value="No"
                      onChange={(e) => setYes(e.target.value)}
                    />
                      NO
                    </div>
                  </div>
                </Col>
                </Row>
                </form>
               </div>
            {/*  yes no part ends=====================================*/}


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

export default Yesno;
