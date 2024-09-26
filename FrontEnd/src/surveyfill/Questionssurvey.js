import { v4 as uuid } from "uuid";
import FillMultipleChoiceQuestions from "../1AFillQuestions/FillMultipleChoiceQuestions";
import FillRating from "../1AFillQuestions/FillRating";
import FillYesno from "../1AFillQuestions/FillYesno";

export default function Questionssurvey({ id, question, setquestion }) {
  const getQuestionType = () => {
    const foundComponent = question.find((component) => component.id === id);
    return foundComponent.question.type;
  };


  return (
    <>
      <section className="logic">
        <div className="container">
          <div className="row ">
             {/*  get question part start ===================*/}
             {(() => {
              if (getQuestionType() === "MultipleChoice") {
                  return (
                    <div>
                    <FillMultipleChoiceQuestions
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
                    <FillRating
                    id={id}
                    question={question}
                    setquestion={setquestion}
                  />
                    </div>
                  )
                } 

                 else  if (getQuestionType() === "YesNo"){
                  return (
                    <div>
                    <FillYesno
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
