import React from 'react'
import { ContentService } from '../components/ContentService';
import { Nosotros } from '../components/Nosotros';
import { Nosotrosimg } from '../components/Nosotrosimg';
export const Service = () => {
  return (
    <div className='flex flex-col items-center py-10 pt-10 animate-fade-in animate-duration-1000'>
        <h1 className="text-3xl font-Anton pb-6">Construccion en seco | PANELES SIP</h1>
        <p className="text-lg font-Space font-semibold px-10 pb-2">
            NUESTRO EQUIPO DE TRABAJO ESTÁ COMPUESTO POR PROFESIONALES DE LA CONSTRUCCIÓN CON PANELES SIP,
             DISEÑAMOS, PROYECTAMOS Y LO HACEMOS REALIDAD.
        </p>
        <p className="text-lg font-Space font-semibold">DE ESTA MANERA, GARANTIZAMOS UNA ATENCIÓN PERSONALIZADA, ESPECIALIZADA Y DIRECTA CON CADA CLIENTE.</p>
        <ContentService />
        <Nosotros />
        <Nosotrosimg />
    </div>
  )
}
