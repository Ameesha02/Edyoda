import React from 'react'
import book from "../assests/book.png"
import icon2 from "../assests/icon2.png"
import live from "../assests/live.png"
import edu from "../assests/edu.png"
import ads from "../assests/ads.png"
const HeroLeft = () => {
  return (
    <div className='HeroLeft'>
       <div className='top'><h2>Access curated courses worth</h2> 
<h1><span className="span1">₹ 18,500</span><hr/>
     at just<span className="span2">₹ 99</span> per year!</h1></div>
     <div className="lower">
<ul><li> <img src={book} alt="" className='icons' /><span>100+ </span> Job relevant courses </li>
<li><img src={icon2} alt="" className='icons' /><span>20,000+ </span> Hours of content</li>
<li><img src={live} alt="" className='icons'/><span>Exclusive </span> webinar access</li>
<li><img src={edu} alt="" className='icons'/>Scholarship worth <span> ₹94,500</span></li>
<li><img src={ads} alt="" className='icons'/><span>Ad Free </span> learning experience</li>
</ul></div>
    </div>

  )
}

export default HeroLeft;
