import React from 'react'
import GlobalContext from './Components/GlobalContext'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Sidebar from './Components/Sidebar'


const App = () => {


  return (
    <GlobalContext>
    <div className=' bg-blue-300  h-[100vh]'>
     <Navbar />
     <Hero />
     <Sidebar />
    </div>
    </GlobalContext>
  )
}

export default App