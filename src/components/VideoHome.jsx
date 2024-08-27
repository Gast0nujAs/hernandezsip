import { Videoplay } from "./Videoplay";

import React from 'react'

export const VideoHome = () => {
  return (
    <div className="lg:flex  sm:pt-10 ">
        
        <div className=" md:pt-16 md:px-20" >
            <h4 className="lg:text-6xl sm:text-lg sm:text-center md:text-4xl font-bold uppercase items-center
            sm:pb-2  font-Space">¿por que construir con paneles sip?</h4>
        </div>
        <div className="md:mr-20 sm:pb-10">
            <Videoplay />
        </div>

    </div>
  )
}
