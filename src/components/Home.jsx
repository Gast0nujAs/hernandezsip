import React from 'react'
import { CarouselHome } from './CarouselHome'
import { VideoHome } from './VideoHome'
import { Afavor } from './Afavor'
import svgWsp from '../assets/svg/icons8-whatsapp.svg'

export const Home = () => {
  return (
    <div>
      <a target='_blank' rel='noreferrer noopener' href="https://api.whatsapp.com/send?phone=543515590815" 
      className='flex fixed items-end justify-end bottom-28 md:bottom-10 md:right-10 right-6 z-50'>
        <img src={svgWsp} alt="icon wsp" className=" hover:scale-125 
            hover:cursor-pointer hover:duration-300" />
      </a>
      <div className='flex flex-col items-center lg:pt-10 lg:pb-16 sm:pt-6 sm:pb-6 md:animate-fade-in md:animate-duration-1000'>
        <h1 className="md:text-[50px] text-[25px]  font-bold uppercase pb-4 font-Bebas ">JC Hernández Paneles SIP Cordoba</h1>
        <p className="md:text-xl sm:text-md sm:px-6 md:mx-0 font-Space font-semibold">Somos una empresa de Córdoba dedicada a la construcción de viviendas con Paneles SIP.</p>
        <p className="md:text-xl sm:text-md sm:px-6 sm:mt-2 md:mx-0 font-Space font-semibold">Estamos comprometidos con la excelencia y la innovación, hacemos tu presupuesto y vivienda a medida.</p>
        <CarouselHome />
        <VideoHome />
        <Afavor />


      </div>
    </div>
  )
}
