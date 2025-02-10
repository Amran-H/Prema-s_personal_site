import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import user from '../../public/user-1.png';
import React from 'react';
import { motion } from 'motion/react';
import { FaReact, FaNodeJs, FaGit, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';

const About = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>About me</motion.h2 >

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-72 lg:w-[320px] flex-shrink-0'>
                    <Image src={user} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>A certified MERN stack web developer with a year of experience. I specialize in dynamic web applications using MongoDB, Expressjs, Reactjs, and Nodejs. Expertise: HTML5, CSS3, JavaScript, Reactjs, Bootstrap, Tailwind CSS. Back-end: Nodejs, Expressjs, MongoDB, Mongoose, RESTful APIs. Tools: Git, GitHub, Netlify. I prioritize clean code, performance, and scalability.</p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                        {
                            infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    key={index}
                                    className='relative overflow-hidden bg-white/50 backdrop-blur-sm border-[0.5px] 
                                    border-gray-100 shadow-md  rounded-2xl p-6 cursor-pointer 
                                    hover:-translate-y-2 duration-300 
                                    hover:shadow-xl hover:shadow-gray-200
                                    group
                                    dark:bg-gray-900/50 dark:border-gray-900 
                                    dark:hover:shadow-gray-900 dark:shadow-gray-600'>
                                    <div className='absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300

                                    dark:from-blue-950/30 dark:to-indigo-950/30'></div>

                                    <div className='relative z-10'>
                                        <div className='bg-blue-50 rounded-xl w-12 h-12 flex items-center justify-center mb-4
                                        group-hover:bg-blue-100 dark:group-hover:bg-black transition-colors duration-300
                                        dark:bg-gray-800'>
                                            <Image
                                                src={isDarkMode ? iconDark : icon}
                                                alt={title}
                                                className='w-6 h-6'
                                            />
                                        </div>
                                        <h3 className='mb-3 py-3 text-lg font-semibold text-gray-800 
                                        group-hover:text-blue-600 transition-colors duration-300
                                        dark:text-white dark:group-hover:text-blue-400'>
                                            {title}
                                        </h3>
                                        <p className='text-gray-600 text-sm leading-relaxed
                                        dark:text-gray-300'>
                                            {description}
                                        </p>
                                    </div>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white'>
                        Tools I use
                    </motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className='flex flex-wrap items-center gap-3 sm:gap-4'>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaReact className="w-5 h-5 text-[#61DAFB] " />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaNodeJs className="w-5 h-5 text-[#339933]" />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <SiMongodb className="w-5 h-5 text-[#47A248]" />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <SiExpress className="w-5 h-5" />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaHtml5 className="w-5 h-5 text-[#E34F26]" />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaCss3Alt className="w-5 h-5 text-[#1572B6]" />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center border-[0.5px] border-gray-400 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGit className="w-5 h-5 text-[#F05032]" />
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;