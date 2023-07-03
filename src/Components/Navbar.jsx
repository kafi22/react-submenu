import React from 'react'
import useCustomsContext from './useCustomsContext'
import { FaBars } from 'react-icons/fa'
import NavLinks from './NavLinks'


const Navbar = () => {
   const {allPropsValue} = useCustomsContext()

   const {openSidebar, setpageId} = allPropsValue

   const handelSubmenu = (e) => {
    if(!e.target.classList.contains('nav-links')) {
      setpageId(null)
    }
   }
  
  return (
    <nav className='container mx-auto max-w-[1140px]' onMouseOver={handelSubmenu}>
        <div className="nav-center">
        <a href="" className=' logo '>
            <h3 className=' text-[2rem] text-white'>strapi</h3>
        </a>

        <button className=' hover:scale-105 transition-all cursor-pointer md:hidden'>
            <FaBars size={30} className=' text-white' onClick={openSidebar} />
        </button>
        <NavLinks />
        </div>

    </nav>
  )
}

export default Navbar