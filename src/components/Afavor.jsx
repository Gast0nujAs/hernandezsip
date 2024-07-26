import React from 'react'
import svgArg from '../assets/svg/argentina.svg'
import svgEco from '../assets/svg/eco-ecology.svg'
import svgManos from '../assets/svg/manos.svg'
import svgPremium from '../assets/svg/premium.svg'

export const Afavor = () => {
  return (
    <div className='flex flex-cols-4 items-center justify-center py-10 pt-20 pb-24'>
        <div className="flex flex-col px-10 w-1/5 text-center border-r-2">
            <img src={svgEco} alt="" />
            <h4 className='text-xl font-bold uppercase py-2 font-Space'>SISTEMA AMIGABLE</h4>
            <p className='font-Space font-semibold'>Nuestro Sistema reduce la emisión de CO2 y el impacto ambiental.</p>

        </div>
        <div className="flex flex-col px-10 w-1/5 text-center border-r-2">
            <img src={svgArg} alt="" />
            <h4 className='text-xl font-bold uppercase py-2 font-Space'>ALCANCE NACIONAL</h4>
            <p className='font-Space font-semibold'>Contamos con una amplia Red Comercial de representantes, que nos permite estar cerca de cada proyecto.</p>

        </div>
        <div className="flex flex-col px-10 w-1/5 text-center border-r-2">
            <img src={svgPremium} alt="" />
            <h4 className='text-xl font-bold uppercase py-2 font-Space'>CALIDAD PREMIUM</h4>
            <p className='font-Space font-semibold'>Trabajamos con marcas líderes del mercado, garantizando la correcta instalación del kit al mejor precio.</p>

        </div>
        <div className="flex flex-col px-10 w-1/5 text-center ">
            <img src={svgManos} alt="" />
            <h4 className='text-xl font-bold uppercase py-2 font-Space'>ATENCIÓN PERSONALIZADA</h4>
            <p className='font-Space font-semibold'>Cada proyecto cuenta con un seguimiento personalizado y respaldado por nuestro sistema digital.</p>

        </div>
        

    </div>
  )
}
