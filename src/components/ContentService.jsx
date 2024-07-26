import React from 'react'
import imagen from "../assets/img/arquitectur.jpg";

export const ContentService = () => {
  return (
    <div className='flex flex-cols-2 pt-16'>
        <div className="flex flex-col pt-6 ">
            <img src={imagen} alt="Construccion paneles sip" className='w-[650px] h-[500px] m-auto' />
        </div>
        <div className='flex flex-col px-8'>
            <p className='w-[400px] h-auto pt-32 font-Space font-semibold text-lg'>
                Son paneles de alto rendimiento utilizados en la construcción de pisos, 
                paredes y techos de los edificios residenciales y comerciales. 
                Los paneles están hechos intercalando un núcleo de aislamiento de poliestireno expandido entre dos paramentos estructurales,
                 tales como tableros de fibras orientadas (OSB). Otros materiales de recubrimiento se pueden utilizar para fines específicos.
            </p>
        </div>

    </div>
  )
}
