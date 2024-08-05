import React from 'react'
import imagen from "../assets/img/arquitectur.jpg";
import { useNavigate } from 'react-router-dom';

export const ContentService = () => {
  const navigate = useNavigate();
  return (
    <div className='md:flex md:pt-16 sm:pt-10'>
      <div className=" md:pt-6 ">
        <img src={imagen} alt="Construccion paneles sip" className='md:w-[650px] md:h-[500px] sm:w-[400px] sm:h-[300px] m-auto' />
      </div>

      <div className=' px-8'>


        <p className='md:w-[400px] h-auto sm:w-[300px] sm:text-[14px] sm:pt-10 md:pt-16 font-Space font-semibold md:text-lg'>
          Son paneles de alto rendimiento utilizados en la construcción de pisos,
          paredes y techos de los edificios residenciales y comerciales.
          Los paneles están hechos intercalando un núcleo de aislamiento de poliestireno expandido entre dos paramentos estructurales,
          tales como tableros de fibras orientadas (OSB). Otros materiales de recubrimiento se pueden utilizar para fines específicos.
        </p>
        <div className='flex w-full pt-10'>
          <button onClick={() => navigate("/contacto")} type={"button"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
            uppercase text-xl font-Lato">hace tu presupuesto a medida</button>
        </div>
      </div>

    </div>
  )
}
