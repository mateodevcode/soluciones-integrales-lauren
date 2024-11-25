import { testimonios } from '@/data/testimonios'
import Image from 'next/image'
import React from 'react'

const Testimonios = () => {
  return (
    <div className='flex flex-col justify-start items-center h-[200px] w-full mb-20 mt-20' id='testimonios'>
        <h2 className='font-semibold text-3xl'>Lo que dicen nuestros clientes</h2>
        <div className='flex flex-row justify-center items-center mt-10 w-full pb-10'>
            {testimonios.map((testimonio, index) => (
                <div key={index} className='bg-[#F9FAFB] px-5 w-[600px] h-[150px] py-5 rounded-md mx-5 shadow-lg shadow-black/30 mb-10'>
                    <p className='text-gray-600 mt-2 text-base'>{testimonio.testimonio}</p>
                    <div className='flex flex-row justify-start items-center my-2'>
                    <Image src={testimonio.imagen} width={100} height={100} alt='imagen testimonio' className='rounded-full w-10 mx-2' />
                    <div className='flex flex-col justify-start items-start mx-2'>
                    <h3 className='font-semibold text-base'>{testimonio.nombre}</h3>
                    <p className='text-gray-700 text-sm'>{testimonio.cargo}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonios