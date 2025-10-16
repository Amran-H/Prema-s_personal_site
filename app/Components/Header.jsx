import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FaDownload } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import user from '../../public/prema.jpg';

const HeaderSkeleton = () => (
    <div className='w-11/12 max-w-5xl mx-auto min-h-screen pt-10 sm:py-0 flex items-center'>
        <div className='grid lg:grid-cols-2 items-center gap-10 w-full'>
            {/* Left: Profile Image Skeleton */}
            <div className='flex justify-center lg:justify-start'>
                <div className='relative w-64 sm:w-72 lg:w-[320px]'>
                    <div className='absolute -inset-1 rounded-3xl bg-gray-200 dark:bg-gray-700 opacity-20 blur-2xl'></div>
                    <div className="w-full h-[400px] rounded-3xl bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                </div>
            </div>

            {/* Right: Content Skeleton */}
            <div className='text-center lg:text-left'>
                {/* Badge Skeleton */}
                <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mx-auto lg:mx-0"></div>

                {/* Name Skeleton */}
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-72 mx-auto lg:mx-0 mt-4 animate-pulse"></div>

                {/* Skills Skeleton */}
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto lg:mx-0 mt-2 animate-pulse"></div>

                {/* Description Skeleton */}
                <div className="space-y-2 mt-5">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                </div>

                {/* Buttons Skeleton */}
                <div className='mt-7 flex flex-col sm:flex-row items-center lg:items-start gap-4'>
                    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-full w-40 animate-pulse"></div>
                    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-full w-40 animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>
);

const Header = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            {/* Show skeleton until image is loaded */}
            {!imageLoaded && <HeaderSkeleton />}

            <div className={`w-11/12 max-w-5xl mx-auto min-h-screen pt-10 sm:py-0 flex items-center ${!imageLoaded ? 'hidden' : ''}`}>
                <div className='grid lg:grid-cols-2 items-center gap-10 w-full'>
                    {/* Left: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                        className='flex justify-center lg:justify-start'
                    >
                        <div className='relative w-64 mt-4 sm:w-72 lg:w-[320px]'>
                            <div className='absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-2xl'></div>
                            <Image
                                src={user}
                                alt='Profile Image'
                                width={320}
                                height={400}
                                className='relative w-full h-auto rounded-3xl object-cover shadow-xl'
                                priority
                                onLoad={() => setImageLoaded(true)}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className='text-center lg:text-left'>
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className='inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300'
                        >
                            MBA Student • NSTU
                        </motion.div>

                        <motion.h1
                            initial={{ y: -10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className='mt-4 text-3xl sm:text-5xl font-Ovo tracking-tight'
                        >
                            Prema Rani Bhowmik
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='mt-2 text-gray-600 dark:text-gray-300'
                        >
                            Business graduate majoring in Tourism and Hospitality Management.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className='mt-5 max-w-2xl font-Ovo text-base md:text-lg mx-auto lg:mx-0'
                        >
                            I am an MBA student at Noakhali Science and Technology University with a strong interest in business analytics, marketing strategy, and organizational leadership. I enjoy working on case studies, research projects, and data-driven decision making.
                        </motion.p>

                        <div className='mt-7 flex flex-col sm:flex-row items-center lg:items-start gap-4'>
                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                href="#contact"
                                className='group relative px-8 py-3 rounded-full bg-black text-white flex items-center gap-2 overflow-hidden dark:bg-transparent border border-white hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300'
                            >
                                <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                                <span className='relative z-10'>Contact me</span>
                                <BsArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.a>

                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group relative px-8 py-3 rounded-full border border-gray-500 bg-white text-black flex items-center gap-2 overflow-hidden hover:border-blue-500 transition-all duration-300 dark:bg-white dark:text-black dark:border-gray-400'
                            >
                                <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300'></span>
                                <span className='relative z-10 group-hover:text-white transition-colors duration-300'>My resume</span>
                                <FaDownload className="w-4 h-4 relative z-10 group-hover:text-white transition-all duration-300" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;