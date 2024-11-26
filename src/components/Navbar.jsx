"use client"
import { enlacesNav } from '@/data/enlaces'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import MenuHamburger from './MenuHamburger'

const Navbar = () => {
    const router = useRouter()
    const handleSolicitarPresupuesto = () => {
        router.push('https://wa.link/cbkqgt')
    }


  return (
    <div className='flex flex-row justify-around items-center text-black bg-white h-16'>
        <Link href={"/"} className='flex flex-row justify-start items-center w-[480px]'>
        <Image src='https://i.postimg.cc/d3kVVdST/logo-soluciones-integrales-lauren.png' width={40} height={40} alt='logo' className='lg:mx-4 sm:mx-6' />
            <h2 className='font-extrabold lg:text-2xl lg:flex sm:hidden'>Soluciones Integrales Lauren</h2>
        </Link>
        <div className='lg:flex sm:hidden'>
            <ul className='flex flex-row justify-center items-center'>
                {enlacesNav.map((enlace, index) => (
                    <li key={index} className='mx-2 text-gray-600 hover:text-gray-900 cursor-pointer select-none'>
                        <Link href={enlace.nombre === 'Inicio' ? '/' : `#${enlace.nombre.toLowerCase()}`}>{enlace.nombre}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className='w-[480px] lg:flex sm:hidden flex-row justify-end items-center'>
            <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-black/80 text-sm'
            onClick={handleSolicitarPresupuesto}>
                Solicitar Presupuesto
            </button>
        </div>
        <MenuHamburger />

    </div>
  )
}

export default Navbar