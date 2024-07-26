import { Videoplay } from "./Videoplay";

import React from 'react'

export const VideoHome = () => {
  return (
    <div className="flex flex-cols-2 ">
        
        <div className="flex flex-col pt-16 px-20" >
            <h4 className="text-6xl font-bold uppercase items-center font-Space">¿por que construir con paneles sip?</h4>
        </div>
        <div className="flex flex-col  px-20">
            <Videoplay />
        </div>

    </div>
  )
}
