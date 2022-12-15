import React from 'react'
import MultiMain from '../MultistepPage/MultiMain';
import Header from '../../header/Header';
const Scratch = ({components, setComponents, teams}) => {
 
  return (
    <>
   <Header/>
    <MultiMain components={components} setComponents={setComponents} teams={teams} />
   
    </>
   
  )
}

export default Scratch;