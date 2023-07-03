import React from 'react'

const Hero = () => {
  return (
    <div className=' flex justify-start items-center min-h-screen container mx-auto max-w-[1140px] p-2 lg:justify-center lg:items-center'>
        <div className="hero-center flex flex-col  space-y-3">
            <h1 className=' text-white font-semibold leading-6 text-2xl md:text-4xl lg:text-5xl tracking-wider w-full '>Manage any content <br /> Anywhere</h1>
            <p className=' text-white text-base leading-7 text-justify md:text-lg md:max-w-md lg:max-w-lg lg:leading-7'>Strapi is the leading open-source headless CMS. it's 100% javascript and fully customizable</p>
        </div>
    </div>
  )
}

export default Hero