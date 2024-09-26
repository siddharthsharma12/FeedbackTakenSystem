import { v4 as uuid } from "uuid";
import MultipleChoiceQuestions from "../optionSelect/MultipleChoiceQuestions";
import "./Logic.css";
import { AiOutlineDelete, AiFillControl } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import Rating from "../optionSelect/Rating";
import Yesno from "../optionSelect/Yesno";


export default function Logic({ id, question, setquestion }) {

  // onselection handle change start========================================================>
  const handleOnChange = (e) => {
    setquestion((prev) => {
      return prev.map((item) => {
        if (item.id === id) {

          // yesno part start=========================>
          if (e.target.value === "YesNo") {
            return { ...item, question: { title: "", type: "YesNo" } };
          }
          // yesno part ends===========================>

          // multiple choice start=========================>
          else if (e.target.value === "MultipleChoice") {
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
          // multiple choice ends=========================>

          // rating part start=========================>
          else if (e.target.value === "Rating") {
            return { ...item, question: { title: "", type: "Rating" } };
          }
          // rating part ends===========================>


        }
        return item;
      });
    });
  };


  // onselection handle change ends========================================================>

  const getQuestionType = () => {
    const foundComponent = question.find((component) => component.id === id);
    return foundComponent.question.type;
  };

  // delete functionality start====================================================>
  const removeComponent = () => {
    setquestion((prev) => {
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

                    <option value="MultipleChoice">
                      MultipleChoiceQuestions
                    </option>
                    <option value="Rating">Rating</option>
                    <option value="YesNo">Yes/No</option>

                  </select>
                </div>
              </div>
            </div>

            {/*   remove button part start=========================== */}
            <div className="mt-4 mb-4 col-md-6 col-lg-6 right-logic">
              <div className="removef">
                <div
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
                </div>

                {/* add logic start ==================================*/}
                <div className="addlogic">
                  <BiGitBranch />
                  <span className="span-logic">Add Logic</span>
                </div>

              </div>
            </div>
            {/*  remove button ends ============================ */}
            {/*  get question part start ===================*/}
            {(() => {
              if (getQuestionType() === "MultipleChoice") {
                return (
                  <div>
                    <MultipleChoiceQuestions
                      id={id}
                      question={question}
                      setquestion={setquestion}
                    />
                  </div>
                )
              }


              else if (getQuestionType() === "Rating") {
                return (
                  <div>
                    <Rating
                      id={id}
                      question={question}
                      setquestion={setquestion}
                    />
                  </div>
                )
              }

              else if (getQuestionType() === "YesNo") {
                return (
                  <div>
                    <Yesno
                      id={id}
                      question={question}
                      setquestion={setquestion}
                    />
                  </div>
                )
              }
            })()}
            {/*  get question part ends============================= */}
          </div>
        </div>
      </section>
    </>
  );
}

