import React from 'react'
import { data } from '../assets/data.js';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather"

export const ContentHome = () => {
    const [current, setCurrent] = useState(0);
    const prev = () => {
        if (current === 0) {
            setCurrent(data.length - 1);
        } else {
            setCurrent(current - 1);
        }
    }

    const next = () => {
        if (current === data.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }


  return (
    <div className='sm:flex-1 md:flex md:w-[655px] md:h-[610px] sm:w-[350px] sm:h-[320px] overflow-hidden m-auto relative'>
            <div className='flex transition-transform  ease-in-out duration-500'
                style={{ transform: `translateX(-${current * 100}%)` }}>
                {data.map((s) => {
                    return (
                        <img src={s.img} alt="" />
                    )
                })}

            </div>
            <div className='absolute inset-0 flex  items-center p-2 justify-between'>
                <button onClick={prev} className=' rounded-full shadow bg-white hover:bg-gray-200'>
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className=' rounded-full shadow bg-white hover:bg-gray-200'>
                    <ChevronRight size={40} />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2 mx-auto py-[40px]">
                    {data.map((_, i) => (
                        <div
                            className={`
              transition-all w-3 h-3  bg-white rounded-full
              ${current === i ? "p-2" : "bg-opacity-50"}
            `}
                        />
                    ))}
                </div>
            </div>
            
        </div>

  )
}
