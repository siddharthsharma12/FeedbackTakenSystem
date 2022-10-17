import {useState} from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./MultipleChoiceQuestions.css";
import {ImCross} from "react-icons/im"

const uniqueID = () => {
  const chr4 = () => Math.random().toString(16).slice(-4);
  return `${
    chr4() + chr4()
  }-${chr4()}-${chr4()}-${chr4()}-${chr4()}${chr4()}${chr4()}`;
};

// {id:uniqueID()}
function MultipleChoiceQuestions({ id, components, setComponents }) {
  const [option,setOption] = useState("");
  const [error, setError] = useState("");
  // const [getOptions,setGetOptions] = useState("");
  // on questionchange question part starts=============================================>

  const onQuestionChange = (e) => {

    setComponents((prev) => {
      
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            question: { ...item.question, title: e.target.value },
          };
        }
        return item;
      });

    });

  };

   const getQuestion = () => {
    const foundComponent = components.find((component) => component.id === id);
    return foundComponent.question.title;
   };
  // on questionchange question part ends=============================================>

  // on optionchange part starts==================================================>
  const onOptionChange = (e, optId) => {
    setOption(e.target.value)
    // setComponents(e.target.value)
    // setGetOptions(e.target.value)
    setComponents((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            question: {
              ...item.question,
              options: item.question.options.map((opt) => {
                if (opt.id === optId) {
                  return { ...opt, title: e.target.value };
                }
                return opt;
              }),
            },
          };
        }
        return item;
      });
    });
  };

  const getOptionValue = (optId) => {
    const foundComponent = components.find((component) => component.id === id);
    return foundComponent.question.options.find((item) => item.id === optId)
      .title;
  };

  const getOptions = () => {
    const foundComponent = components.find((component) => component.id === id);
    return foundComponent.question.options;
  };
  // on optionchange part ends==================================================>

  //  delete option part starts==============================================>
  const deleteOption = (optId) => {
    setComponents((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            question: {
              ...item.question,
              options: item.question.options.filter((opt) => opt.id !== optId),
            },
          };
        }
        return item;
      });
    });
  };
  // delete option parts ends=================================================>

  // add option part start====================================================>
  const addOption = () => {
     // set components part start=====================>
        setComponents((prev) => {
         return prev.map((item) => {
          if (item.id === id) {
          return {
            ...item,
            question: {
              ...item.question,
              options: [
                ...item.question.options,
                { id: uniqueID(), title: "" },
              ],
            },
          };
        }
        return item;
      });
    });
    // set components part ends=====================>
      // extra part ends========================>
   };
  // add option part ends==========================================================>

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
                  <input
                    className="firstinput"
                    type="text"
                    name="question"
                    placeholder="Enter Your Question Here"
                    onChange={(e) => onQuestionChange(e)}
                    value={getQuestion()}
                  />
                </div>
              </div>

              {/* option input start================================= */}

              <Row>
                {getOptions().map((option) => (
                  <Col md={12} lg={12} key={option.id} >
                    <div className="flexkrdoone">
                      <div className="firstindiv">
                        <span class="material-symbols-outlined-two">
                        drag_indicator
                        </span>
                        <input
                          // name={option}
                          className="firstin"
                          type="text"
                          name={`option${option.id}`}
                          placeholder="fill option"
                          onChange={(e) => onOptionChange(e, option.id)}
                          value={getOptionValue(option.id) || ""}
                        />
                        <div className="deleteone">
                        <span
                          className="material-icons"
                          style={{ color: "green", cursor: "pointer" }}
                          onClick={() => deleteOption(option.id)}
                        >
                        <ImCross/>
                        </span>
                      </div>
                      </div>
                      <p>{error}</p>
                   </div>
                  </Col>
                ))}

                <div className="addopt">
                  <a className="tp" onClick={() => addOption()}>
                    +
                  </a>
                </div>
              </Row>

              {/* option input start================================= */}
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MultipleChoiceQuestions;