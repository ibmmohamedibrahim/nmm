import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex px-4 md:shadow-lg items-center relative">
    <div className="text-lg font-bold md:py-0 py-4">
        Developer
    </div>
    <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 ">
        <NavLink to={"/"}>
       <li>
                <a href="#" className="flex md:inline-flex p-4 items-center font-bold text-white">
                    <span>Login</span>
                </a>
            </li>
        </NavLink>
        <NavLink to={"/mobile"}>
        <li>
            <a href="#" className="flex md:inline-flex p-4 items-center text-white  font-bold">
                <span>Mobile</span>
            </a>
        </li>
        </NavLink>
   
      
    </ul>
 </nav>
  )
}

export default Navbar
