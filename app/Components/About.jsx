import { useEffect, useState } from 'react';
// Image removed from About section for a cleaner, text-focused layout
import React from 'react';
import { motion } from 'motion/react';
import { FaGraduationCap, FaProjectDiagram, FaCode } from 'react-icons/fa';

const About = ({ isDarkMode }) => {
    const [infoList, setInfoList] = useState([]);

    useEffect(() => {
        fetch('/data/infoList.json')
            // fetch('http://localhost:5000/personalInfo')
            .then(res => res.json())
            .then(data => setInfoList(data));
    }, []);

    const getIcon = (iconType) => {
        const iconClass = "w-6 h-6 text-blue-600 dark:text-blue-400";
        switch (iconType) {
            case 'code':
                return <FaCode className={iconClass} />;
            case 'education':
                return <FaGraduationCap className={iconClass} />;
            case 'projects':
                return <FaProjectDiagram className={iconClass} />;
            default:
                return null;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[8%] md:px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-center mb-2 text-lg font-ovo'>Get to know me</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center text-5xl font-Ovo'>About</motion.h2 >

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='w-full my-10'>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700'
                >
                    <div className='absolute inset-0 overflow-hidden rounded-3xl opacity-5 pointer-events-none'>
                        <div className='absolute -right-24 -top-24 w-96 h-96 bg-blue-500 rotate-45'></div>
                        <div className='absolute -left-24 -bottom-24 w-96 h-96 bg-indigo-500 rotate-45'></div>
                    </div>

                    <div className='relative z-10'>
                        <motion.span
                            initial={{ y: -10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                            className='inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300'
                        >
                            MBA Student • NSTU
                        </motion.span>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className='mt-4 max-w-3xl font-Ovo text-base md:text-lg text-justify'
                        >
                            I am Prema Rani Bhowmik, an MBA student at Noakhali Science and Technology University. My interests include business analytics, marketing strategy, and organizational behavior. I enjoy working on case studies, presentations, and research-based projects that combine data, consumer insight, and practical problem-solving. I focus on communication, leadership, and collaboration to drive meaningful outcomes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className='mt-6 flex flex-wrap gap-2'
                        >
                            <span className='px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'>Business Analytics</span>
                            <span className='px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'>Marketing Strategy</span>
                            <span className='px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'>Organizational Behavior</span>
                            <span className='px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'>Leadership</span>
                        </motion.div>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                            className='mt-8 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent'
                        ></motion.div>

                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6'>
                            {
                                infoList.map(({ iconType, title, description }, index) => (
                                    <motion.li
                                        whileHover={{ scale: 1.05 }}
                                        key={index}
                                        className='relative overflow-hidden bg-white/50 backdrop-blur-sm border-[0.5px] 
                                        border-gray-100 shadow-md rounded-2xl p-6 cursor-pointer 
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
                                                {getIcon(iconType)}
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
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;