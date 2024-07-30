import React from 'react'
import svgArg from '../assets/svg/argentina.svg'
import svgEco from '../assets/svg/eco-ecology.svg'
import svgManos from '../assets/svg/manos.svg'
import svgPremium from '../assets/svg/premium.svg'

export const Afavor = () => {
  return (
    <div className='md:flex sm:grid sm:grid-cols-2 sm:justify-center md:space-x-10 lg:justify-center md:items-center py-10 pt-20 pb-24 sm:px-10 md:px-0'>
        <div className=" lg:px-10 lg:w-1/5 text-center md:border-r-2 sm:w-2/5 sm:space-y-2 sm:pb-6">
            <img src={svgEco} alt="" className='md:mx-auto'/>
            <h4 className='md:text-xl sm:text-lg font-bold uppercase py-2 font-Space'>SISTEMA AMIGABLE</h4>
            <p className='font-Space font-semibold sm:text-[14px] md:text-xl'>Nuestro Sistema reduce la emisión de CO2 y el impacto ambiental.</p>

        </div>
        <div className="lg:px-10 lg:w-1/5 text-center md:border-r-2 sm:w-2/5 sm:space-y-2 sm:pb-6">
            <img src={svgArg} alt="" className='md:mx-auto'/>
            <h4 className='md:text-xl sm:text-lg font-bold uppercase py-2 font-Space'>ALCANCE NACIONAL</h4>
            <p className='font-Space font-semibold sm:text-[14px] md:text-xl'>Contamos con una amplia Red Comercial de representantes, que nos permite estar cerca de cada proyecto.</p>

        </div>
        <div className="lg:px-10 lg:w-1/5 text-center md:border-r-2 sm:w-2/5 sm:space-y-2">
            <img src={svgPremium} alt="" className='md:mx-auto'/>
            <h4 className='md:text-xl sm:text-lg font-bold uppercase py-2 font-Space'>CALIDAD PREMIUM</h4>
            <p className='font-Space font-semibold sm:text-[14px] md:text-xl'>Trabajamos con marcas líderes del mercado, garantizando la correcta instalación del kit al mejor precio.</p>

        </div>
        <div className="lg:px-10 lg:w-1/5 text-center md:border-r-2 sm:w-2/5 sm:space-y-2">
            <img src={svgManos} alt="" className='md:mx-auto'/>
            <h4 className='md:text-xl sm:text-lg font-bold uppercase py-2 font-Space'>ATENCIÓN PERSONALIZADA</h4>
            <p className='font-Space font-semibold sm:text-[14px] md:text-xl'>Cada proyecto cuenta con un seguimiento personalizado y respaldado por nuestro sistema digital.</p>

        </div>
        

    </div>
  )
}
