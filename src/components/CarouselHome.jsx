import { ContentHome } from "./ContentHome";

import React from 'react'

export const CarouselHome = () => {
  return (
    <div className="flex flex-cols-2 pt-16">
        <div className="flex flex-col  px-20">
            <ContentHome />
        </div>
        <div className="flex flex-col ">
            <h3 className="text-[45px] font-bold pb-4 font-Bebas">PANELES SIP</h3>
            <p className="pb-2 font-Space font-semibold">El sistema de paneles S.I.P. (Structural Insulated Panel) es un sistema de construcción estructural 
                autoportante en seco de calidad premium,
                 que nos permite realizar todo tipo de proyectos.
            </p>
            <p className="font-Space font-semibold">Está conformado por paneles aislantes de diferentes espesores, 
                    16 insumos, 6 maderas de vinculación de primera calidad y un manual de instalación.
            </p>
            <div className="flex flex-col pt-6 font-Space font-semibold">
                <p className="pb-4">- Responde a las exigencias de zonas sísmicas.</p>
                <p className="pb-4">- Ailante Sonoro y Térmico. Bloquea la humedad.</p>
                <p className="pb-4">- No desperdicia material en forma de escombro.</p>
                <p className="pb-4">- No requiere estructura adicional.</p>
                <p className="pb-4">- Reducción en los tiempos de obra.</p>
                <p className="pb-4">- Terminación de techos: membrana, chapas, tejas, etc.</p>
                <p className="pb-4">- Terminación de paredes: revoque plástico, piedra, madera, etc..</p>
            </div>
        </div>
        
        
    </div>
  )
}
