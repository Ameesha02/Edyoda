import React from 'react'
import "./Hero.css"

const Boxes = (props) => {
    console.log(props.tag)
  return (
    
    <div>
         <div className="box">
        <input type='radio' id="btn" checked='true'/>
        <span className="tag">
          {props.tag}
        </span>
       <div className="content"> <h1>
        {props.h1}
        </h1>
        <div className='End'>
<h1>Total <span>{props.money}
     </span></h1>
<h1 className='down'>
{props.money2}/mo</h1>
        </div></div>
      </div>
    </div>
  )
}

export default Boxes
