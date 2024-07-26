import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate();


  return (
    <ul className="flex align-center  px-10 text-lg font-Space text-white ">
      <li onClick={() => navigate("/")} className="mx-4 hover:cursor-pointer hover:scale-105">Home</li>
      <li onClick={() => navigate("/services")} className="mx-4 hover:cursor-pointer hover:scale-105" >Services</li>
      <li onClick={() => navigate("/contacto")} className="mx-4 hover:cursor-pointer hover:scale-105">Contact</li>
    </ul>
  )
}

