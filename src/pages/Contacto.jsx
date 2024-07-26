import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
export const Contacto = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form)
    const serviceID = "service_xsu6yum";
    const templateID = "template_7bbn4nu";
    const apiKey = "yBLYWZSsGn-5VB952";
    emailjs.sendForm(serviceID, templateID, form.current, apiKey)
      .then((result) => {
        console.log(result.text);
        alert("Enviado, Gracias por tu tiempo")
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div>
      <div className='flex justify-center'
        style={{
          background: 'radial-gradient(circle, rgb(0,107,166) 0%, rgb(0, 0, 0) 100%)',
          height: '250px',
        }}>

        <h1 className='text-5xl sm:text-7xl  font-Anton pt-12 text-white '>Contacto</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 gap-y-6 gap-x-4 w-1/2 mx-auto border-2  rounded p-10 mt-10 mb-10  '>
        <div className='grid grid-cols-1 gap-y-6 gap-x-4 font-Space'>
          <label name="name">Name:</label>
          <input
            className='h- 14 px-2 border-2'
            type="text"
            name='name'

          />
        </div>
        <div className='grid grid-cols-1 gap-y-6 gap-x-4 '>
          <label name="email">Email:</label>
          <input

            type="email"
            className='h-14 px-2 border-2 rounded'
            name='email'
          />
        </div>
        <div className='grid grid-cols-1 gap-y-6 gap-x-4 '>
          <label name="message">Message:</label>
          <textarea
            type="text"
            className='h-32 px-2 border-2 rounded'
            name='message'


          />
        </div>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
             rounded w-1/6 sm:w-1/4 w-full hover:cursor-pointer hover:opacity-90 hover:transition-120 inline-block'>
          Enviar
        </button>
      </form>

    </div>
  )
}
