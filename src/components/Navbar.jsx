import { enlacesNav } from '@/data/enlaces'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center text-black bg-white h-16'>
        <div className='flex flex-row justify-start items-center w-[480px]'>
        <Image src='https://i.postimg.cc/d3kVVdST/logo-soluciones-integrales-lauren.png' width={40} height={40} alt='logo' className='mx-4' />
            <h2 className='font-extrabold text-2xl'>Soluciones Integrales Lauren</h2>
        </div>
        <div>
            <ul className='flex flex-row justify-center items-center'>
                {enlacesNav.map((enlace, index) => (
                    <li key={index} className='mx-2 text-gray-600 hover:text-gray-900 cursor-pointer'>
                        {enlace.nombre}
                    </li>
                ))}
            </ul>
        </div>
        <div className='w-[480px] flex flex-row justify-end items-center'>
            <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-black/80 text-sm'>
                Solicitar Presupuesto
            </button>
        </div>
    </div>
  )
}

export default Navbar