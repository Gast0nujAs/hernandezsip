import React from 'react'
import { CarouselHome } from './CarouselHome'
import { VideoHome } from './VideoHome'
import { Afavor } from './Afavor'

export const Home = () => {
  return (
    <div className='flex flex-col items-center lg:pt-10 lg:pb-16 sm:pt-6 sm:pb-6 sm:mx-4 md:animate-fade-in md:animate-duration-1000'>
      <h1 className="md:text-[50px] sm:text-[35px] font-bold uppercase pb-4 font-Bebas ">JC Hernandez SIP</h1>
      <p className="md:text-xl sm:text-md font-Space font-semibold">Somos una empresa dedicada a la construccion de viviendas con Paneles SIP</p>
      <p className="md:text-xl sm:text-md font-Space font-semibold">Estamos comprometidos con la excelencia y la innovacion, hacemos tu presupuesto y vivienda a medida y gusto</p>
      <CarouselHome />
      <VideoHome />
      <Afavor />

    </div>
  )
}
