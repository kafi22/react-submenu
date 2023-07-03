import React, { useRef } from 'react'
import useCustomsContext from './useCustomsContext'
import sublinks from '../data'

const Submenu = () => {

 const {allPropsValue} = useCustomsContext()
 const {pageid, setpageId} = allPropsValue;
 const containRef = useRef(null)

 const currentPageId = sublinks.find(link => link.pageId === pageid)

 const handelMouseLeave = (event) => {
  const submenu = containRef.current
  const { left, right, bottom } = submenu.getBoundingClientRect();
  const { clientX, clientY } = event;

  if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
    setpageId(null);
  }
 }

  return (
    <div onMouseLeave={handelMouseLeave} ref={containRef} className={currentPageId ? 'submenu show-submenu' : 'submenu'   }>
      <div className="current-page">
        <h3 className=' mb-4 text-2xl tracking-wider leading-6 font-semibold text-slate-700'>{currentPageId?.page}</h3>
        <div className={currentPageId?.links?.length > 3 ?  'grid grid-cols-2 ' : 'grid-cols-1'}>
          {currentPageId?.links.map(link => {
            const {id, url, label, icon} = link

            return (
             <a href={url} key={id} className=' flex justify-start items-center gap-4'>
              <i>{icon}</i>
              {label}
             </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Submenu