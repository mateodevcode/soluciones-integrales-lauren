import React from 'react'
import { BsList } from "react-icons/bs";

const MenuHamburger = () => {
  return (
    <div className='lg:hidden sm:flex'>
        <BsList  className='text-3xl cursor-pointer mx-6' />
    </div>
  )
}

export default MenuHamburger