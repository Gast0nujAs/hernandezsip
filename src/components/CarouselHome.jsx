import { ContentHome } from "./ContentHome";

import React from 'react'
import { useNavigate } from "react-router-dom";


export const CarouselHome = () => {
    const navigate = useNavigate();
  return (
    <div className="lg:flex lg:pt-20 lg:pb-20 sm:pt-10 ">
        <div className="px-20">
            <ContentHome />
        </div>
        <div className="flex flex-col ">
            <h3 className="md:text-[45px] sm:text-[30px] sm:text-center font-bold pb-4 font-Bebas">PANELES SIP</h3>
            <p className="pb-2 sm:text-[14px] md:text-lg sm:mx-20 md:mx-0 font-Space md:font-semibold">El sistema de paneles S.I.P. (Structural Insulated Panel) es un sistema de construcción estructural 
                autoportante en seco de calidad premium,
                 que nos permite realizar todo tipo de proyectos.
            </p>
            <p className="font-Space sm:text-[14px] md:text-lg sm:mx-20 md:mx-0 md:font-semibold">Está conformado por paneles aislantes de diferentes espesores, 
                    16 insumos, 6 maderas de vinculación de primera calidad y un manual de instalación.
            </p>
            <div className="flex flex-col pt-6 font-Space font-semibold">
                <p className="pb-4 sm:text-[14px] md:text-lg sm:mx-20 md:mx-0">- Responde a las exigencias de zonas sísmicas.</p>
                <p className="pb-4 sm:text-[14px] md:text-lg sm:mx-20 md:mx-0">- Ailante Sonoro y Térmico. Bloquea la humedad.</p>
                <p className="pb-4 sm:text-[14px] md:text-lg sm:mx-20 md:mx-0">- No desperdicia material en forma de escombro.</p>
                <p className="pb-4 sm:text-[14px] md:text-lg sm:mx-20 md:mx-0">- No requiere estructura adicional.</p>
                <p className="pb-4 sm:text-[14px] md:text-lg sm:mx-20 md:mx-0">- Reducción en los tiempos de obra.</p>
                <p className="pb-4 sm:text-[14px] md:text-lg sm:mx-20 md:mx-0">- Terminación de techos: membrana, chapas, tejas, etc.</p>
                <p className="pb-4 sm:text-[14px] md:text-lg sm:mx-20 md:mx-0">- Terminación de paredes: revoque plástico, piedra, madera, etc..</p>
            </div>
            <button onClick={() => navigate("/contacto")} type={"button"} className="justify-self-center mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
            uppercase text-xl font-Lato sm:mx-4">pedí tu presupuesto a medida</button>
        </div>
        
        
    </div>
  )
}
