// import React, { useState,useEffect } from "react";
// import {
//   ListGroup,
//   Container,
//   Row,
//   Col,
//   Nav,
//   Button,
//   Modal,
// } from "react-bootstrap";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Logic from "../AddSurvey/Logic/Logic";


// const Surveyfill = ({question, setquestion }) => {

 
//   // remove user starts========================>
//   const removeUser = (index) => {
//     const filtered = [...question];
//     filtered.splice(index, 1);
//     setquestion(filtered);
//   };
//   //   remove user ends=============================>

 

//   const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//     return result;
//   };

//   const onDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }

//     const reorderedItems = reorder(
//       question,
//       result.source.index,
//       result.destination.index
//     );

//     setquestion(reorderedItems);
//   };

 


//   return (
//     <>
//       <Container>
//         <ListGroup bsPrefix="review-head">
//         <Row>
//         <div className="col-md-12 col-lg-12">
//           {/*  Mapping start ======================================*/}
//           <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable droppableId="droppable">
//               {(provided) => (
//                 <div
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   {question.map((component, index) => (
//                     <Draggable
//                       draggableId={component.id}
//                       key={component.id}
//                       index={index}
//                     >
//                       {(provided) => (
//                         <div
//                           className="flex-flex"
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                         >
//                           <Logic
//                             removeUser={removeUser}
//                             id={component.id}
//                             question={question}
//                             setquestion={setquestion}
//                             key={component.id}
//                           />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}

//                   {/*  dropsection starts======================================================> */}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </DragDropContext>

//           {/*add component part  Mapping ends =======================================*/}
//         </div>
//       </Row>

//         </ListGroup>
//       </Container>
//       {/* confirm and send part start===========================> */}

//       {/*  confirm and send part ends ===============================> */}
//     </>
//   );
// };

// export default Surveyfill;
