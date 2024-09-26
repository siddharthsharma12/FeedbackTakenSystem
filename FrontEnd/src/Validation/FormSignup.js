// Essential section start===========================================================>
import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import MeterPass from "./MeterPass";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Container, Row } from "react-bootstrap";

const FormSignup = ({ submitForm }) => {

  const [stateONE, setStateONE] = useState();
  const [stateTWO, setStateTWO] = useState();
  const [stateTHREE, setStateTHREE] = useState();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const toggleBtnONE = () => {
    setStateONE((stateONE) => !stateONE);
  };

  const toggleBtnTWO = () => {
    setStateTWO((stateTWO) => !stateTWO);

  };

  const toggleBtnTHREE = () => {
    setStateTHREE((stateTHREE) => !stateTHREE);
  };

  return (
    <>
      <Container>
        <Row>

          <form onSubmit={handleSubmit} className="form" noValidate>

            {/* old password start===================================== */}
            <div className="form-inputs">
              <label className="form-label">Old Password</label>
              <div className="bala d-flex">
                <input
                  className="form-input"
                  type={stateONE ? "text" : "passwordold"}

                  name="passwordold"
                  placeholder="Enter old password"
                  value={values.passwordold}
                  onChange={handleChange}
                />
                <div className="out" onClick={toggleBtnONE}>
                  {stateONE ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>

              {errors.passwordold && (
                <p className="passworderror">{errors.passwordold}</p>
              )}
            </div>
            {/*  old password ends ================================================*/}

            {/*  NEW password  START ================================================*/}
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <div className="bala d-flex">
                <input
                  className="form-input"
                  type={stateTWO ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                />
                <div className="out" onClick={toggleBtnTWO}>
                  {stateTWO ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>

              {errors.password && (
                <p className="passworderror">{errors.password}</p>
              )}
            </div>
            {/* meter password section start================================== */}
            <div className="meter">
              <MeterPass password={values.password} />
            </div>
            {/* meter password section ends================================= */}

            {/*  NEW password  ENDS ======================================================*/}


            {/* CONFIRM   password  START ================================================*/}
            <div className="form-inputs">
              <label className="form-label">Confirm Password</label>
              <div className="bala d-flex">
                <input
                  className="form-input"
                  type="text"
                  name="password2"
                  placeholder="Confirm your password"
                  value={values.password2}
                  onChange={handleChange}
                />
                <div className="out" onClick={toggleBtnTHREE}>
                  {stateTHREE ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>
              {errors.password2 && (
                <p className="pass2error">{errors.password2}</p>
              )}
            </div>
            {/* CONFIRM   password  ENDS ================================================*/}
            <div className="pich">
              <button className="btn-two" type="submit">
                Update
              </button>
            </div>

            <span className="form-input-login">

            </span>
          </form>
          {/*   </div> */}
        </Row>
      </Container>
    </>
  );
};

export default FormSignup;

// Essential section ends===========================================================>
