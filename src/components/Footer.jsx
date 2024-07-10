import React from 'react'

import fb from '/src/assets/social/facebook.svg';
import x from '/src/assets/social/x.svg';
import insta from '/src/assets/social/instagram.svg';
import youtube from '/src/assets/social/youtube.svg';
import tiktok from '/src/assets/social/tiktok.svg';

export const Footer = () => {

    const socialNetworks = [
        { id: 1, name : 'facebook', src: fb, href: "https://www.facebook.com/LaLiga" },
        { id: 2, name : 'x', src: x, href: "https://www.instagram.com/laliga/" },
        { id: 3, name : 'insta', src: insta , href: "https://twitter.com/laliga"},
        { id: 4, name : 'youtube', src: youtube, href: "https://www.youtube.com/user/laliga" },
        { id: 5, name : 'tiktok', src: tiktok, href: "https://www.tiktok.com/@laliga" },
    ]

  return (
    
    <section className='px-4 lg:px-40 mt-12'>
     
   
    <footer className=' pb-12 flex justify-between md:flex-row flex-col gap-4 pt-12 border-t-2 border-[#eeeeee] '>
       
       <div>
         <svg width="135" height="32" viewBox="0 0 135 32" fill="none" xmlns="http://www.w3.org/2000/svg" alt="LALIGA logotipo"><path d="M0 24.81V.346h6.708V25.39h11.85v6.262H3.89l-2.638-3.264C.357 27.225 0 26.152 0 24.81zM22.182 26.553L29.427.348h7.692c1.432 0 2.324.672 2.728 2.102l6.663 24.103c.312 1.073.357 1.788.357 3.174v1.923H40.92l-2.371-9.525-9.615 4.918-1.162 4.607h-5.947v-1.923c0-1.386.044-2.101.357-3.174v.002zm16.054-5.634l-3.533-14.31h-.716l-3.533 14.31h7.782zM49.907 24.81V.346h6.708V25.39h11.852v6.262H53.8l-2.64-3.264c-.894-1.162-1.25-2.235-1.25-3.578h-.003zM72.266.35h6.708v31.303h-6.708V.349zM83.535 21.714V10.286C83.535 3.623 87.158 0 93.821 0h2.936c6.574 0 10.285 3.355 10.285 9.302h-6.707V8.05c0-1.162-.627-1.789-1.79-1.789h-6.513c-1.162 0-1.789.627-1.789 1.79v15.9c0 1.163.627 1.79 1.789 1.79h6.514c1.162 0 1.789-.627 1.789-1.79v-3.934h-4.651v-6.262h7.468l2.639 3.264c.894 1.117 1.251 2.146 1.251 3.578v1.117c0 6.663-3.622 10.286-10.285 10.286H93.82c-6.663 0-10.286-3.623-10.286-10.286zM109.423 26.553L116.668.348h7.692c1.432 0 2.324.672 2.728 2.102l6.663 24.103c.313 1.073.357 1.788.357 3.174v1.923h-5.947l-2.371-9.525-9.614 4.918-1.163 4.607h-5.947v-1.923c0-1.386.045-2.101.357-3.174v.002zm16.055-5.634l-3.534-14.31h-.716l-3.533 14.31h7.783z" fill="#FF4B44"></path></svg>
       </div>

       <div className='flex gap-4 items-center lg:flex'>
        {socialNetworks.map (socialNetwork => (
            <a key={socialNetwork.id} href={socialNetwork.href} className=' hover:scale-110'>
                <img src={socialNetwork.src} alt={socialNetwork.name} loading="lazy" />
            </a>
        ))

        }
            <a href="" className='px-6 py-3 bg-[#ff4b44] text-xs lg:text-base text-white font-semibold hover:scale-110'>WEB OFICIAL</a>
       </div>
    
    </footer>
    
    </section>
  )
}
