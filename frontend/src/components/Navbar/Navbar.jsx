import React, { useState } from 'react' //jitne bhi hooks h wo sb use keyword se suru hote h
import './Navbar.css'

import { assets } from "../../assets/assets"
const Navbar = () => {

const [menu,setMenu] = useState("home")



  return (
    <div className='navbar'>
     <img src={assets.logo} alt="" className="logo" />
     <ul className="navbar-menu">
     <li>home</li>
     <li>menu</li>
     <li>mobile app</li>
     <li>contact us</li>
     </ul>
     <div className="navbar-right">
        <img src={ assets.search_icon} alt="" className="search" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" className="basket_icon" />
            <div className='dot'></div>
        </div>
        <button>sign in</button>
     </div>
    </div>
  )
}

export default Navbar