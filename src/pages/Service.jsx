import React from 'react'
import { ContentService } from '../components/ContentService';
import { Nosotros } from '../components/Nosotros';
import { Nosotrosimg } from '../components/Nosotrosimg';
export const Service = () => {
  return (
    <div className='flex flex-col items-center py-10 pt-10 md:animate-fade-in md:animate-duration-1000'>
        <h1 className="md:text-3xl sm:text-xl font-Anton pb-6">Construccion en seco | PANELES SIP</h1>
        <p className="md:text-lg sm:text-[14px] sm:text-center sm:mx-10 font-Space font-semibold md:px-10 pb-2">
            NUESTRO EQUIPO DE TRABAJO ESTÁ COMPUESTO POR PROFESIONALES DE LA CONSTRUCCIÓN CON PANELES SIP,
             DISEÑAMOS, PROYECTAMOS Y LO HACEMOS REALIDAD.
        </p>
        <p className="md:text-lg sm:text-[14px] sm:text-center sm:mx-10 font-Space font-semibold md:px-10 ">DE ESTA MANERA, GARANTIZAMOS UNA ATENCIÓN PERSONALIZADA, ESPECIALIZADA Y DIRECTA CON CADA CLIENTE.</p>
        <ContentService />
        <Nosotros />
        <Nosotrosimg />
    </div>
  )
}
