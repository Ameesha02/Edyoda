import React from 'react'
import "./Hero.css"

const Boxes = (props) => {
    // console.log(props.tag)
    const tagColors = ['#F77171', '#47BA68'];
  return (
   
    <div>
         <div className={`box ${props.tag}`}>
        {/* <input type='radio' id="btn" checked='true'/> */}
        <img src={props.img} alt="" className='input' />
        <span className="tag" style={{backgroundColor: `${tagColors[props.i]}`}}>
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
