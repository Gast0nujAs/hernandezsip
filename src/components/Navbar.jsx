import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hamburger from "hamburger-react";

export const Navbar = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  };

  const content = <>
    <ul className={`${open ? "flex" : "hidden"} 
     flex-col text-center block absolute transition mt-16 text-center text-xl pt-12 space-y-6 left-0 text-white w-full h-[250px]  
     bg-[#006BA6]  md:hidden`}>
      <li onClick={() => navigate("/")} className="mx-4 hover:cursor-pointer hover:scale-105">Home</li>
      <li onClick={() => navigate("/services")} className="mx-4 hover:cursor-pointer hover:scale-105" >Services</li>
      <li onClick={() => navigate("/contacto")} className="mx-4 hover:cursor-pointer hover:scale-105">Contact</li>
    </ul>
  </>

  return (
    <nav>


      <ul className="flex align-center  px-10 text-lg font-Space text-white sm:hidden md:flex">
        <li onClick={() => navigate("/")} className="mx-4 hover:cursor-pointer hover:scale-105">Home</li>
        <li onClick={() => navigate("/services")} className="mx-4 hover:cursor-pointer hover:scale-105" >Services</li>
        <li onClick={() => navigate("/contacto")} className="mx-4 hover:cursor-pointer hover:scale-105">Contact</li>
      </ul>
      <div>
        {open && content}
      </div>
      <button className="md:hidden block transition text-white  right-10 top-6 " onClick={handleClick} >
        {open ? <Hamburger color='white' /> : <Hamburger color='white' />}
      </button>

    </nav>
  )
}

