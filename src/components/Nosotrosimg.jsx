import React from 'react'
import imgNosotros from "../assets/img/nosotros.png";
export const Nosotrosimg = () => {
  return (
    <div className='flex flex-cols-2 pb-20'>

        <div className="flex flex-col pt-20 px-10 w-[650px] h-auto " >
            <p className='font-Anton text-xl  pb-2'>Contamos con un showroom y oficina técnica en Av. Santa Fe 888, Corral de Bustos, provincia de Córdoba.</p>
            <p className='font-Anton text-xl  pb-8'>Una fábrica, con maquinaria de última generación, en el Parque Industrial de Corral de Bustos, provincia de Córdoba.</p>
            <ul >
                <li className='font-Space text-lg pb-4 font-semibold'>Contamos con el <a className='font-bold'>KIT DE PANELES SIP</a> más completo, de mejor calidad y precio del mercado.</li>
                <li className='font-Space text-lg pb-4 font-semibold'>Te brindamos un asesoramiento técnico profesional antes, durante y post venta.</li>
                <li className='font-Space text-lg pb-4 font-semibold'>Trabajamos con las principales marcas del mercado, que nos garantizan una correcta instalación.</li>
                <li className='font-Space text-lg  font-semibold'>Al ser un sistema reciente en nuestro país, nos enfocamos principalmente en apoyar y capacitar a toda persona interesada en la construcción en seco de paneles SIP.</li>
            </ul>
        </div>

        <div className="flex flex-col pt-16  " >
            <img src={imgNosotros} alt="img sipcor" />
        </div>
    </div>
  )
}
