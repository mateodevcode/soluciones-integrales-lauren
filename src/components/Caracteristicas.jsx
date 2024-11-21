import { caracteristicas } from '@/data/caracteristicas'
import React from 'react'

const Caracteristicas = () => {
  return (
    <div className='flex flex-col justify-start items-center h-[200px] w-full mb-20'>
        <h2 className='font-semibold text-3xl'>Nuestras Características</h2>
        <div className='flex flex-row justify-center items-center mt-10 w-full pb-10'>
            {caracteristicas.map((caracteristica, index) => (
                <div key={index} className='bg-[#F9FAFB] px-5 w-[400px] h-[150px] py-5 rounded-md mx-5 shadow-lg shadow-black/30'>
                    <h3 className='font-semibold text-xl'>{caracteristica.titulo}</h3>
                    <p className='text-gray-600 mt-2 text-base'>{caracteristica.descripcion}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Caracteristicas