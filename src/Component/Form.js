import React from 'react'
import "./Hero.css"
import Boxes from "./Boxes.js"
import Content from "./Content.js"
const Form = () => {
  return (
    <div className='form'>
      <div className="top">
        <div className='btn'>1</div>
        <div className='btn'>2</div>
      </div>
      <div className="top">
        <div className='btn2'>Sign Up</div>
        <div className='btn2'>Subscribe</div>
      </div>
      <div className="heading">Select your subcription plan</div>
   
      {Content.map((val,ind)=>{
        return(
          <Boxes key={ind} h1={val.h1} money={val.money1}
          money2={val.money2} tag={val.tag}/>
          )
        })}
      </div>
        
     
    )
  }

export default Form;
