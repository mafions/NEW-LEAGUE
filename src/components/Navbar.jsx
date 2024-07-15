import React from 'react'
import logo from '/src/assets/laliga.svg'
import { Link } from 'react-router-dom'



export const Navbar = () => {
  return (
    <>
      <nav className='flex items-center justify-center p-4 bg-[#ffffff] gap-5'>

        {/* <a className=' text-black font-bold md:inline lg:text-base text-xs hover:scale-105' style={{transition: "all 0.3s cubic-bezier(0,0,0.5,1)"}} href="#directo">Yangi O'</a> */}
        <Link to={"/"}>
          <a className=' text-black font-bold   md:inline lg:text-base text-xs hover:scale-105' style={{ transition: "all 0.3s cubic-bezier(0,0,0.5,1)" }} href="#resultados">Jadval</a>
        </Link>
        <a className=' text-black font-bold   hidden md:inline lg:text-base hover:scale-105' style={{ transition: "all 0.3s cubic-bezier(0,0,0.5,1)" }} href="#tabla">O'yinlar</a>
        <img className='lg:h-12 h-8 lg:mx-16 mx-1 ' src={logo} alt="LaLiga logo" />
        <Link className=' text-black font-bold  lg:text-base hover:scale-105' to={"/topurarlar"}>To'purarlar</Link>
        {/* <a className=' text-black font-bold  hidden md:inline lg:text-base hover:scale-105' style={{ transition: "all 0.3s cubic-bezier(0,0,0.5,1)" }} href="#videos">To'purarlar</a> */}
      </nav>
    </>
  )
}
