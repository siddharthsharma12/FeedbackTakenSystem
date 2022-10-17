import React from 'react'
import MultiMain from '../MultistepPage/MultiMain';
import Header from '../../header/Header';
const Scratch = ({components, setComponents}) => {
 
  return (
    <>
   <Header/>
    <MultiMain components={components} setComponents={setComponents}/>
   
    </>
   
  )
}

export default Scratch;