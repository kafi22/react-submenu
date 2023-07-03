import React from 'react';
import sublinks from '../data';
import useCustomsContext from './useCustomsContext';
import Submenu from './Submenu';

const NavLinks = () => {

 const {allPropsValue} = useCustomsContext()

 const {setpageId} = allPropsValue


  const links = sublinks.map(link => {
    const {pageId, page} = link
    return <button className=' nav-links text-white font-normal text-lg leading-6 capitalize' key={pageId} onMouseEnter={() => setpageId(pageId)}>{page}</button>
  })



  return (
    <div className='hidden md:flex nav-links '>
      {links}
      <Submenu />
    </div>
  )
}

export default NavLinks