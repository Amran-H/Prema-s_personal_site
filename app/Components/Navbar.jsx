import { CgMenu, CgClose } from 'react-icons/cg';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import React, { useEffect, useRef, useState } from 'react';
import * as Icons from './Icons';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
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
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-opacity-50 dark:backdrop-blur-lg dark:shadow-white/20" : ""}`} >
                <a href="/">
                    <p className=' cursor-pointer font-bold text-2xl font-Ovo'>Prema Rani Bhowmik <span className='text-red-700'>.</span></p>
                </a>
                <ul className={`hidden md:flex items-center gap-4 lg:gap-8 rounded-full px-8 lg:px-12 py-3 ${isScroll ? "" : "bg-gray-300 shadow-sm bg-opacity-10 "}`}>
                    <li><a href="#top" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full text-[15px] lg:text-base'>Home</a></li>
                    <li><a href="#about" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full text-[15px] lg:text-base'>About me</a></li>
                    <li><a href="#skills" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full text-[15px] lg:text-base'>Skills</a></li>
                    {/* <li><a href="#services" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full text-[15px] lg:text-base'>Services</a></li> */}
                    {/* <li><a href="#work" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full text-[15px] lg:text-base'>My work</a></li> */}
                    <li><a href="#contact" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full text-[15px] lg:text-base'>Contact me</a></li>
                </ul>

                <div className='flex flex-center gap-3'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        {isDarkMode ? (
                            <Icons.MoonIcon className=" text-white" />
                        ) : (
                            <Icons.SunIcon className=" text-black" />
                        )}
                    </button>
                    <a href="#contact" className='hidden group lg:flex items-center gap-3 px-9 py-2 border border-gray-500 rounded-full ml-4 font-Ovo font-semibold dark:border-white/50'>
                        Contact <BsArrowUpRightCircleFill className="w-5 text-4xl relative z-10 transition-transform duration-300 group-hover:rotate-[133deg]" />
                    </a>
                    <button className='block md:hidden' onClick={openMenu}>
                        {isDarkMode ?
                            <CgMenu className="w-7 h-7 text-white" /> :
                            <CgMenu className="w-7 h-7" />
                        }
                    </button>
                </div>

                {/* For mobile */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen 
                    bg-rose-50 
                    dark:bg-darkTheme
                    transition duration-500'>

                    <div className='absolute right-5 top-5' onClick={closeMenu}>
                        {isDarkMode ?
                            <CgClose className="w-7 h-7 text-white cursor-pointer" /> :
                            <CgClose className="w-7 h-7 cursor-pointer" />
                        }
                    </div>

                    <li><a href="#top" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full' onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full' onClick={closeMenu}>About me</a></li>
                    <li><a href="#skills" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full' onClick={closeMenu}>Skills</a></li>
                    {/* <li><a href="#services" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full' onClick={closeMenu}>Services</a></li> */}
                    <li><a href="#work" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full' onClick={closeMenu}>My work</a></li>
                    <li><a href="#contact" className='font-Ovo relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:left-0 after:-bottom-1 after:duration-300 hover:after:w-full' onClick={closeMenu}>Contact me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;