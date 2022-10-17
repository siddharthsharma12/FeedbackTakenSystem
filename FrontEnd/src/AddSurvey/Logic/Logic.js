import { v4 as uuid } from "uuid";
import Boolean from "../optionSelect/Boolean";
import MultipleChoiceQuestions from "../optionSelect/MultipleChoiceQuestions";
import "./Logic.css";
import { AiOutlineDelete, AiFillControl } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import Rating from "../optionSelect/Rating";
import Yesno from "../optionSelect/Yesno";


export default function App({ id, components, setComponents }) {
  // onselection handle change start========================================================>
  const handleOnChange = (e) => {
    setComponents((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
        // boolean part start=========================>
          if (e.target.value === "Boolean") {
            return { ...item, question: { title: "", type: "Boolean" } };
          } 
          // boolean part ends===========================>
         
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

         // rating part start=========================>
          else {
            return { ...item, question: { title: "", type: "Yesno" } };
          }
          // rating part ends===========================>
       
        }
        return item;
      });
    });
  };
  // else if (e.target.value === "Boolean") {
  //   return { ...item, question: { title: "", type: "Boolean" } };
  //   //  block of code to be executed if the condition1 is false and condition2 is true
  // } 
   
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
                    <option value="Rating">Rating</option>
                    <option value="Yesno">Yes/No</option>
                  
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
                  <BiGitBranch/>
                  <span className="span-logic">Add Logic</span>
                </a>
              </div>
            </div>
            {/*  remove button ends ============================ */}
                {/*  get question part start ===================*/}
                {(() => {
                  if (getQuestionType() === "Boolean") {
                  {/*oolean part start===================*/}
                    return (
                      <div>
                      <Boolean
                      id={id}
                      components={components}
                      setComponents={setComponents}
                    />
                      </div>
                    )} 
                    else if (getQuestionType() === "MultipleChoice") {
                    return (
                      <div>
                      <MultipleChoiceQuestions
                      id={id}
                      components={components}
                      setComponents={setComponents}
                    />
                      </div>
                    )
                  } 


                  else if (getQuestionType() === "Rating") {
                    return (
                      <div>
                      <Rating
                      id={id}
                      components={components}
                      setComponents={setComponents}
                    />
                      </div>
                    )
                  } 

                   else  {
                    return (
                      <div>
                      <Yesno
                      id={id}
                      components={components}
                      setComponents={setComponents}
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


{/* {getQuestionType() === "Boolean" ? (
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
) } */}
