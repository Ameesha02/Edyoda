import React from 'react'
import "./Hero.css"
import Boxes from "./Boxes.js"
import Content from "./Content.js"
import icon2 from "../assests/icon1.png"
import razor from "../assests/razor.png"
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
          money2={val.money2} tag={val.tag} i ={ind}/>
          )
        })}
       
{/* ------------------------------summary---------------------------- */}
        <div className="summary">
          <div className="top">
            <h1>Subscription Fee</h1>
            <h1>₹18,500</h1>
          </div>
          <div className="box">
         <div className="top"> <h1>Limited time offer</h1>
          <h2>- ₹18,401</h2></div>
          <div className="content"><img src={icon2} alt="" className='icon'/>
          <h3>Offer valid till 25th March 2023 </h3></div>
        </div>
        <div className="mid"> <h1><span>Total</span> (Incl. of 18% GST)</h1>
<h2>₹149</h2></div> </div>
{/*------------------------- buttons-------------------------------------------- */}
<div className="btnSection">
  <button className='Primary'>
Cancel
  </button>
  <button className='secondary'>
    Proceed to Pay
    </button>
</div>
<div className="logo">
<img src={razor} alt="" className='razo'/>
</div>
       
      
      </div>
        
     
    )
  }

export default Form;
