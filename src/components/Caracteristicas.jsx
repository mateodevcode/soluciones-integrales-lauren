import { caracteristicas } from '@/data/caracteristicas'
import React from 'react'

const Caracteristicas = () => {
  return (
    <div className='flex flex-col justify-start items-center lg:h-[200px] sm:h-[500px] w-full mb-20' id='caracteristicas'>
        <h2 className='font-semibold text-3xl'>Nuestras Características</h2>
        <div className='flex lg:flex-row sm:flex-col justify-center items-center lg:mt-10 sm:mt-5 w-full pb-10'>
            {caracteristicas.map((caracteristica, index) => (
                <div key={index} className='bg-[#F9FAFB] lg:px-5 sm:px-4 lg:w-[400px] sm:w-[340px] h-[150px] py-5 rounded-md lg:mx-5 sm:mx-0 shadow-lg shadow-black/30 lg:my-0 sm:my-2'>
                    <h3 className='font-semibold text-xl'>{caracteristica.titulo}</h3>
                    <p className='text-gray-600 mt-2 text-base'>{caracteristica.descripcion}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Caracteristicas