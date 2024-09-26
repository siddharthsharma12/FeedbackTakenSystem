import React, { useState, useEffect } from "react";
import Logic from "../Logic/Logic";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Dragdrop.css";
import { useSearchParams } from "react-router-dom";

const Dragdrop = ({ question, setquestion, onDragEnd, addComponent }) => {

  return (

    <>
      {/*add component part  Mapping starts =======================================*/}
      <div className="mainfunc col-md-8 col-lg-8">
        {/*  Mapping start ======================================*/}
        <DragDropContext onDragEnd={onDragEnd}>

          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {question.map((component, index) => (
                  <Draggable
                    draggableId={component.id}
                    key={component.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="flex-flex"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Logic
                          id={component.id}
                          question={question}
                          setquestion={setquestion}
                          key={component.id}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}

                {/*  dropsection starts======================================================> */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/*add component part  Mapping ends =======================================*/}

        {/*  Add and Remove functionality start ==================================*/}

        <div className="dd-flex">
          <div className="combtn">
            {/*   <Button onClick={addComponent} text="+Add More Question" /> */}
            <span class="material-symbols-add">
              add_circle
            </span>
            <a className="btn" onClick={() => addComponent(question, setquestion)}>
              Add More Question
            </a>
          </div>
        </div>

        {/*  Add and Remove functionality ends ==========================*/}

      </div>


    </>
  )
}

export default Dragdrop;
