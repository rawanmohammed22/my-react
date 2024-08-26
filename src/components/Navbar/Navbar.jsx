import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <> <div className="  mx-auto          ">
    <nav className='     mx-auto    bg-gray-700 flex  justify-between      py-9        '  ><div className="container flex  justify-between  mx-auto     ">
    <h1    className='    uppercase  text-white    text-4xl  font-bold    '>  Start Framework
    </h1> 
     <ul        className='   text-white  capitalize      flex      space-x-5    items-center   text-xl   font-semibold '>
<li><NavLink to ='about'   >ABOUT</NavLink></li>
<li><NavLink to='contact'>CONTACT</NavLink></li>
<li><NavLink to='portofilo'>PORTPOFILO</NavLink></li>



     </ul></div>





    </nav>
    
    </div>
    
    
    
    
    </>
  )
}
