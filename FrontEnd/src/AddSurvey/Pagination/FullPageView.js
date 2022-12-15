import React from "react";
import Logic from "../Logic/Logic";
// import Logic from "../AddSurvey/Logic/Logic";
import {Container ,Row} from "react-bootstrap"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./FullPageView.css";
import Header from "../../header/Header";


const FullPageView = ({ components, setComponents }) => {

  const removeUser = (index) => {
    const filtered = [...components];
    filtered.splice(index, 1);
    setComponents(filtered);
  };

  /* drag and drop functionality start===========================> */

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      components,
      result.source.index,
      result.destination.index
    );

    setComponents(reorderedItems);
  };

  /* drag and drop functionality ends===========================> */

  return (
    <>
    <Header/>
    <Container>
    <Row>
      <div className="col-md-12 col-lg-12">
        {/*  Mapping start ======================================*/}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {components.map((component, index) => (
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
                          removeUser={removeUser}
                          id={component.id}
                          components={components}
                          setComponents={setComponents}
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
      </div>
      </Row>
    </Container>
    </>
  );
};

export default FullPageView;
