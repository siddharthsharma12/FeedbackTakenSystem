import React, { useState,useEffect } from "react";
import MultiMain from '../MultistepPage/MultiMain';
import Header from '../../header/Header';
import Ques from "../../zcomponents/components";
import axios from "axios";
import { useSearchParams } from "react-router-dom";



const Scratch = ({teams, question, 
  setquestion,
   selectedRecepients ,
   setSelectedRecepeients,
   selectedtemplate,
   setSelectedTemplate,
   format,
   setFormat,
   selectquestion,
   setselectquestion,
   required ,
    setRequired ,}) => {

 
 


  return (
    <>
   <Header  question={question} setquestion={setquestion} />

    <MultiMain 
    question={question} 
    setquestion={setquestion} 
    teams={teams} 
    selectedRecepients ={selectedRecepients }
    setSelectedRecepeients={setSelectedRecepeients}
    selectedtemplate={selectedtemplate}
    setSelectedTemplate={setSelectedTemplate}
    format={format} 
    setFormat={setFormat}
    selectquestion={ selectquestion}
    setselectquestion={setselectquestion}
    required ={ required}
     setRequired ={setRequired}
   />
   
    </>
   
  )
}

export default Scratch;



