import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translate(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translate(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])


    return (
        <>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`} >
                <a href="#top">
                    <p className=' cursor-pointer font-bold text-2xl font-Ovo'>Amran Hossain <span className='text-red-700'>.</span></p>
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-gray-300 shadow-sm bg-opacity-10"}`}>
                    <li><a href="#top" className='font-Ovo'>Home</a></li>
                    <li><a href="#about" className='font-Ovo'>About me</a></li>
                    <li><a href="#services" className='font-Ovo'>Services</a></li>
                    <li><a href="#work" className='font-Ovo'>My work</a></li>
                    <li><a href="#contact" className='font-Ovo'>Contact me</a></li>
                </ul>

                <div className='flex flex-center gap-4'>
                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image alt='' src={assets.arrow_icon} className='w-3' /> </a>
                    <button className='block md:hidden' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* For mobile */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-400'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a href="#top" className='font-Ovo' onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className='font-Ovo' onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" className='font-Ovo' onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" className='font-Ovo' onClick={closeMenu}>My work</a></li>
                    <li><a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;