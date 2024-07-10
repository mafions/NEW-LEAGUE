import React from 'react'
import referee from '/src/assets/referee.webp'

export const ModalFirst = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center w-full h-full z-50 fixed p-20">
      <div className='relative bg-[#8b2622] rounded-md p-6 lg:pb-0 grid lg:grid-cols-2 max-w-[1000px]'>
        
      
        <button 
          onClick={onClose} 
          className='absolute top-0 right-0 mt-4 mr-4 bg-transparent text-white font-bold text-2xl leading-none hover:text-gray-400'
        >
          &times; 
        </button>

        <div className='flex justify-center items-center'> 
          <img src={referee} alt="Referee" className='lg:h-auto lg:w-full' /> 
        </div>
        
        <div className='flex flex-col justify-center items-center'>
          <p className='text-white text-xl lg:text-6xl font-bold lg:mb-12 my-4'>¡Diqqat! 😎</p>
          <p className='font-semibold  text-xs lg:text-xl text-white'>DIQQAT Ushbu veb-sayt ta'lim maqsadida ishlab chiqilgan va bepul API tufayli ishlaydi. So'rov chegarasidan oshib ketmaslik uchun sahifani keraksiz qayta yuklamaslikni so'raymiz. #Nodirbek</p>
          <button onClick={onClose} className='mt-4 bg-[#0b1121] text-white font-bold py-2 px-4 rounded transition-all hover:scale-105'>Tushundim</button>

        </div>
      </div>
    </div>
  )
}

    
   
  

