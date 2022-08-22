import { v4 as uuid } from "uuid";
import Boolean from "../optionSelect/Boolean";
// import Boolean from "../AddSurvey/optionSelect/Boolean";
import MultipleChoiceQuestions from "../optionSelect/MultipleChoiceQuestions";
// import MultipleChoiceQuestions from "../AddSurvey/optionSelect/MultipleChoiceQuestions";
import "./Logic.css";
import { AiOutlineDelete, AiFillControl } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";


export default function App({ id, components, setComponents }) {
  // onselection handle change start========================================================>
  const handleOnChange = (e) => {
    setComponents((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          if (e.target.value === "Boolean") {
            return { ...item, question: { title: "", type: "Boolean" } };
          } else {
            return {
              ...item,
              question: {
                title: "",
                type: "MultipleChoice",
                options: [
                  { id: uuid(), value: "" },
                  { id: uuid(), value: "" },
                ],
              },
            };
          }
        }
        return item;
      });
    });
  };

  // onselection handle change ends========================================================>

  const getQuestionType = () => {
    const foundComponent = components.find((component) => component.id === id);
    return foundComponent.question.type;
  };

  // delete functionality start====================================================>
  const removeComponent = () => {
    setComponents((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  // delete functionality ends=====================================================>

  return (
    <>
      <section className="logic">
        <div className="container">
          <div className="row ">
            <div className="mt-4 mb-4 col-md-6 col-lg-6">
              <div className="main d-flex">
              <span class="material-symbols-apps">
                    apps
                </span>
                <span class="material-symbols-outlined">done</span>
                <div className="dflexo">
                  <select
                    className="form-select-dropdown"
                    value={getQuestionType()}
                    onChange={handleOnChange}
                  >
                    <option value="selectQuestion">Select your Question</option>
                    <option value="Boolean">Boolean</option>
                    <option value="MultipleChoice">
                      MultipleChoiceQuestions
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/*   remove button part start=========================== */}
            <div className="mt-4 mb-4 col-md-6 col-lg-6 right-logic">
              <div className="removef">
                <a
                  className="mat"
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "Do you really want to delete this Question?"
                    );
                    if (confirmBox === true) {
                      removeComponent();
                    }
                  }}
                >
                  <AiOutlineDelete />
                </a>

                {/* add logic start ==================================*/}
                <a className="addlogic">
                  <BiGitBranch />
                  <span className="span-logic">Add Logic</span>
                </a>
              </div>
            </div>
            {/*  remove button ends ============================ */}

            {getQuestionType() === "Boolean" ? (
              <Boolean
                id={id}
                components={components}
                setComponents={setComponents}
              />
            ) : (
              <MultipleChoiceQuestions
                id={id}
                components={components}
                setComponents={setComponents}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
