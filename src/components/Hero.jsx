import React from 'react'

import pedri from  '/src/assets/pedri.webp'
import vini from  '/src/assets/vini.webp'
import griez from  '/src/assets/griezman.webp'

export const Hero = () => {
  return (
    <section className=' bg-[#f0f0f0]  h-80  overflow-hidden grid  gap-3 grid-cols-1 xl:grid-cols-3 lg:px-40 '>
      <div className=' lg:flex hidden lg:justify-center lg:items-center'>
     
      </div>
     
      <div className=' flex justify-center lg:items-center lg:justify-center items-end'>
      <img src={vini} alt="" className='  h-60 lg:h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' style={{transition: "all 0.3s cubic-bezier(0,0,0.5,1)"}} loading="lazy" />

      <img src={pedri} alt="" className='  h-60 lg:h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' style={{transition: "all 0.3s cubic-bezier(0,0,0.5,1)"}} loading="lazy" />
        <img src={griez} alt="" className='  h-0  lg:h-96 grayscale-[50%] hover:grayscale-0 hover:scale-110' style={{transition: "all 0.3s cubic-bezier(0,0,0.5,1)"}} loading="lazy" />


      </div>
      <div className='lg:flex hidden lg:justify-center lg:items-center'>
      
      </div>
     
       
        
    </section>
    
  )
}
