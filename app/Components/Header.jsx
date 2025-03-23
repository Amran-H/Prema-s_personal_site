import React from 'react';
import { motion } from 'motion/react';
import { FaDownload } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import user from '../../public/akash.png';



const Header = () => {
    return (
        <div className='w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '
        // style={{ backgroundImage: "url('/bg-header.png')" }}
        >
            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image
                    src={user}
                    alt='Profile Image'
                    width={128}
                    height={128}
                    className='rounded-full bg-gray-200 sm:mr-2'
                />
            </motion.div>

            {/* Greeting with Animated Hand */}
            <motion.h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Hello! Myself Amran
                <motion.img
                    src="/hand-icon.png"
                    alt='Hand Icon'
                    className='w-6 mx-2 mb-1'
                    style={{ transformOrigin: "bottom center" }}
                    animate={{ rotate: [0, 20, 0, -15, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 0 }}
                />
            </motion.h3>

            {/* Title */}
            <motion.h1 className='text-xl sm:text-6xl lg:text-[62px] font-Ovo  flex items-center justify-center'
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <Typewriter
                    options={{
                        strings: [
                            'I am a Fast Learner',
                            'I Aim to Innovate and Explore',
                            'And I am a Passionate Developer'
                        ],
                        autoStart: true,
                        loop: true,
                        typeSpeed: 20,
                        deleteSpeed: 20,
                        delaySpeed: 1000,
                    }}
                />
            </motion.h1>

            {/* Description */}
            <motion.p className='max-w-3xl mx-auto font-Ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                {/* I like to explore and challenge my expertise. My aim is to be comfortable with
                always-changing technologies by learning new tools that my work demands conveniently
                and efficiently. As a fast learner, I enjoy learning new things. */}
                I'm a BBA student and a web developer fond of learning and tackling new challenges. I try to stay up-to-date with the latest technology and tools, and always looking for ways to outgrow myself. With an attraction for academic research, I'm always curious and eager to solve issues that make a difference.
            </motion.p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    href="#contact"
                    className='group relative px-10 py-3 border border-white rounded-full 
                    bg-black flex items-center gap-2 text-white overflow-hidden
                    dark:bg-transparent hover:border-blue-500 dark:hover:border-blue-500
                    transition-all duration-300'
                >
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500
                    translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                    <span className='relative z-10'>Contact me</span>
                    <BsArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>

                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    href="https://drive.google.com/file/d/1EseGxweB-20X71fyKcCR5Bk8DmKQbfGF/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group relative px-10 py-3 border rounded-full border-gray-500 
                    flex items-center gap-2 bg-white overflow-hidden
                    hover:border-blue-500 transition-all duration-300
                    dark:bg-white dark:text-black dark:border-gray-400'
                >
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500
                    translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300'></span>
                    <span className='relative z-10 group-hover:text-white transition-colors duration-300'>My resume</span>
                    <FaDownload className="w-4 h-4 relative z-10 group-hover:text-white transition-all duration-300" />
                </motion.a>
            </div>
        </div>
    );
};

export default Header;
