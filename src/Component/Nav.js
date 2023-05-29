import React from 'react'
import logo from "../assests/logo.png"
import key from "../assests/key.png"
import search from "../assests/search.png"
import  "./Nav.css"
const Nav = () => {
  return (
    <div className="nav" >
       <div> <img src={logo} alt="" className='logo'/></div>
      <div className="left"><ul>
     
      <li>Courses <img src={key} alt="" className='icon'/></li>
      <li>Courses <img src={key} alt="" className='icon'/> </li>
        </ul>
        </div>
      <div className="right">
      <ul>
      <li><img src={search} alt="" className='icon'/></li>
      <li>Log in</li>
      <li><button className='button'>Join now</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
