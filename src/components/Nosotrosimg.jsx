import React from 'react'
import imgNosotros from "../assets/img/placassip.jpeg";
export const Nosotrosimg = () => {
  return (
    <div className='md:flex md:pb-20 sm:pb-10'>

        <div className=" md:pt-20 sm:pt-10 px-10 sm:w-[400px] md:w-[650px] " >
            <p className='font-Anton sm:text-lg md:text-xl  pb-2'>Contamos con un showroom y oficina técnica en Av. Santa Fe 888, Corral de Bustos, provincia de Córdoba.</p>
            <p className='font-Anton sm:text-lg md:text-xl  pb-8'>Una fábrica, con maquinaria de última generación, en el Parque Industrial de Corral de Bustos, provincia de Córdoba.</p>
            <ul >
                <li className='font-Space sm:text-[14px] md:text-lg pb-4 font-semibold'>Contamos con el <a className='font-bold'>KIT DE PANELES SIP</a> más completo, de mejor calidad y precio del mercado.</li>
                <li className='font-Space sm:text-[14px] md:text-lg pb-4 font-semibold'>Te brindamos un asesoramiento técnico profesional antes, durante y post venta.</li>
                <li className='font-Space sm:text-[14px] md:text-lg pb-4 font-semibold'>Trabajamos con las principales marcas del mercado, que nos garantizan una correcta instalación.</li>
                <li className='font-Space sm:text-[14px] md:text-lg font-semibold'>Al ser un sistema reciente en nuestro país, nos enfocamos principalmente en apoyar y capacitar a toda persona interesada en la construcción en seco de paneles SIP.</li>
            </ul>
        </div>

        <div className=" md:pt-16 sm:pt-10 sm:w-[250px]  sm:mx-auto md:mx-0 md:w-[400px] md:h-[200px] md:ml-10   " >
            <img src={imgNosotros} alt="img sipcor" />
        </div>
    </div>
  )
}
