import React from 'react'
import { CarouselHome } from './CarouselHome'
import { VideoHome } from './VideoHome'
import { Afavor } from './Afavor'

export const Home = () => {
  return (
    <div className='flex flex-col items-center pt-10 pb-16 animate-fade-in animate-duration-1000'>
      <h1 className="text-[50px] font-bold uppercase pb-4 font-Bebas ">Hernandez SIP</h1>
      <p className="text-xl font-Space font-semibold">Somos una empresa dedicada a la construccion de viviendas con Paneles SIP</p>
      <p className="text-xl font-Space font-semibold">Estamos comprometidos con la excelencia y la innovacion, hacemos tu presupuesto y vivienda a medida y gusto</p>
      <CarouselHome />
      <VideoHome />
      <Afavor />

    </div>
  )
}
