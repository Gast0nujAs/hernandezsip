import React from 'react'
import { ContentService } from '../components/ContentService';
import { Nosotros } from '../components/Nosotros';
import { Nosotrosimg } from '../components/Nosotrosimg';
import svgWsp from '../assets/svg/icons8-whatsapp.svg';
export const Service = () => {
  return (
    <div>
      <a target='_blank' rel='noreferrer noopener' href="https://api.whatsapp.com/send?phone=543515590815"
        className='flex fixed items-end justify-end bottom-28 md:bottom-10 md:right-10 right-6 z-50'>
        <img src={svgWsp} alt="icon wsp" className=" hover:scale-125 
            hover:cursor-pointer hover:duration-300" />
      </a>
      <div className='flex flex-col items-center py-10 pt-10 md:animate-fade-in md:animate-duration-1000'>
        <h1 className="md:text-3xl sm:text-xl font-Anton pb-6">Construccion en seco | PANELES SIP</h1>
        <p className="md:text-lg uppercase sm:text-[14px] sm:text-center sm:mx-10 font-Space font-semibold md:px-10 pb-2">
          NUESTRO EQUIPO DE TRABAJO ESTÁ COMPUESTO POR PROFESIONALES DE LA CONSTRUCCIÓN EN LA UTILIZACIÓN DE PANELES SIP,
          Diseñamos proyéctamos y hacemos realidad tu proyecto.
        </p>
        <p className="md:text-lg sm:text-[14px] sm:text-center sm:mx-10 font-Space font-semibold md:px-10 ">DE ESTA MANERA, GARANTIZAMOS UNA ATENCIÓN PERSONALIZADA, ESPECIALIZADA Y DIRECTA CON CADA CLIENTE.</p>
        <ContentService />
        <Nosotros />
        <Nosotrosimg />
      </div>
    </div>
  )
}
