import React from 'react'
import useCustomsContext from './useCustomsContext'
import { FaTimes } from 'react-icons/fa'
import sublinks from '../data'


const Sidebar = () => {
   const {allPropsValue} = useCustomsContext()
   const {isSidebarOpen, closeSidebar} = allPropsValue
  return (
    <aside className={isSidebarOpen ? ' container mx-auto p-2 fixed top-0 left-0 h-full w-full bg-white  opacity-100 ease-in transition-opacity duration-700 z-10 ' : 'opacity-0  z-[-1]'}>
    <div className='sidebar-container flex flex-col justify-between items-start h-full'>
        <button className='  fixed top-4 right-8 cursor-pointer' onClick={closeSidebar}>
            <FaTimes  size={30}  className=' text-cyan-300' />
        </button>

        <div className="sidebar-links mt-20 space-y-8 w-full">
            {sublinks.map(sublink => {
                const {links, pageId, page} = sublink
                return (
                    <article key={pageId} className=' flex flex-col justify-start items-start space-y-4 '>
                        <h3 className=' font-semibold text-2xl shadow-sm leading-6'>{page}</h3>
                        <div className="side-sublinks  grid grid-cols-2 gap-2 w-full">
                        {links.map(link => {
                            const {id, icon, label, url} = link
                            return (
                              
                                    <a key={id} href={url} className=' flex gap-1 justify-start items-center text-[16px]'>
                                        <i className=' text-lg'>{icon}</i>
                                        {label}
                                    </a>
                               
                            )
                        })}
                        </div>
                    </article>
                )
               
            })}
        </div>
    </div>
    </aside>
  )
}

export default Sidebar