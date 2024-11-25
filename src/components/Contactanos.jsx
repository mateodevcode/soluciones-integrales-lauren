import React from 'react'

const Contactanos = () => {
  return (
    <div className='bg-[#F3F4F6] h-[600px] w-full flex flex-col justify-center items-center' id='contacto'>
        <h2 className='text-3xl font-semibold mt-20'>Contáctanos</h2>
        <form className='flex flex-col justify-start items-start mt-10 w-5/12 pb-20'>
            <p className='text-gray-700 font-semibold my-1'>Nombre</p>
            <input type='text' placeholder='Eduardo Santana' className='w-full h-[50px] rounded-md px-5 shadow-lg shadow-black/30 mb-5' />
            <p className='text-gray-700 font-semibold my-1'>Correo</p>
            <input type='email' placeholder='eduar24@gmail.com' className='w-full h-[50px] rounded-md px-5 shadow-lg shadow-black/30 mb-5' />
            <p className='text-gray-700 font-semibold my-1'>Mensaje</p>
            <textarea placeholder='Dejanos tu mensaje' className='w-full h-[150px] rounded-md px-5 shadow-lg shadow-black/30 mb-5 py-3'></textarea>
            <button className='w-full h-[50px] bg-black text-white rounded-md shadow-lg shadow-black/30'>Enviar</button>
        </form>
    </div>
  )
}

export default Contactanos