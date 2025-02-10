import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiFirebase, SiTypescript, SiRedux, SiMaterialdesign, SiChakraui } from 'react-icons/si';
import Image from 'next/image';

// Enhanced icon mapping with colors
const getTechIcon = (techName) => {
    const iconMap = {
        'React': { icon: FaReact, color: '#61DAFB' },
        'Node.js': { icon: FaNode, color: '#339933' },
        'HTML': { icon: FaHtml5, color: '#E34F26' },
        'CSS': { icon: FaCss3Alt, color: '#1572B6' },
        'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
        'TypeScript': { icon: SiTypescript, color: '#3178C6' },
        'Bootstrap': { icon: FaBootstrap, color: '#7952B3' },
        'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
        'MongoDB': { icon: SiMongodb, color: '#47A248' },
        'Express.js': { icon: SiExpress, color: '#000000' },
        'Next.js': { icon: SiNextdotjs, color: '#000000' },
        'Firebase': { icon: SiFirebase, color: '#FFCA28' },
        'Redux': { icon: SiRedux, color: '#764ABC' },
        'Material-UI': { icon: SiMaterialdesign, color: '#007FFF' },
        'Chakra UI': { icon: SiChakraui, color: '#319795' }
    };

    return iconMap[techName] || { icon: FaReact, color: '#61DAFB' };
};

const Work = () => {
    const [workData, setWorkData] = useState([]);

    useEffect(() => {
        fetch('/data/workData.json')
            .then(res => res.json())
            .then(data => setWorkData(data));
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>My Portfolio</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>My Recent Works</motion.h2>

            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                As a certified MERN stack web developer with 3 years of experience these are some of my works.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-8'>
                {workData.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -12 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className='relative bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200
                        shadow-lg shadow-gray-200 overflow-hidden group
                        dark:bg-gray-900/50 dark:border-gray-700 dark:shadow-gray-900'
                    >
                        <div className='relative h-48 overflow-hidden'>
                            <Image
                                src={project.bgImage}
                                alt={project.title}
                                fill
                                className='object-cover object-center transform group-hover:scale-110 transition-transform duration-500'
                            />


                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                flex items-center justify-center gap-6 translate-y-full
                group-hover:translate-y-0 transition-all duration-300">

                                {/* GitHub Button */}
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="px-6 py-3 flex items-center gap-3 bg-gray-800 text-white rounded-lg
                   hover:bg-gray-700 transition-all duration-300 shadow-md hover:scale-105">
                                    <FaGithub className="w-6 h-6" />
                                    <span className="text-sm font-semibold">GitHub</span>
                                </a>

                                {/* Live Demo Button */}
                                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                    className="px-6 py-3 flex items-center gap-3 bg-blue-600 text-white rounded-lg
                   hover:bg-blue-500 transition-all duration-300 shadow-md hover:scale-105">
                                    <SiVercel className="w-6 h-6" />
                                    <span className="text-sm font-semibold">Live Demo</span>
                                </a>
                            </div>
                        </div>

                        <div className='p-6'>
                            <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white
                                group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                                {project.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-4'>
                                {project.description}
                            </p>

                            <div className='space-y-3'>
                                <p className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    Technologies Used:
                                </p>
                                <div className='flex flex-wrap items-center gap-3'>
                                    {project.technologies?.map((tech, idx) => {
                                        const { icon: TechIcon, color } = getTechIcon(tech);
                                        return (
                                            <div key={idx}
                                                className='w-8 h-8 rounded-full flex items-center justify-center
                                                bg-gray-100 dark:bg-gray-800 group/tech cursor-pointer
                                                hover:scale-110 transition-all duration-300'
                                                title={tech}
                                            >
                                                <TechIcon
                                                    className="w-5 h-5 transition-colors duration-300"
                                                    style={{ color }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>


            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                href="https://drive.google.com/file/d/1EseGxweB-20X71fyKcCR5Bk8DmKQbfGF/view"
                target="_blank"
                rel="noopener noreferrer"
                className='group relative w-max mx-auto px-10 py-3 border rounded-full border-gray-500 
                    flex items-center gap-2 bg-white overflow-hidden
                    hover:border-blue-500 transition-all duration-300
                    dark:bg-white dark:text-black dark:border-gray-400'
            >
                <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500
                    translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300'></span>
                <span className='relative z-10 group-hover:text-white transition-colors duration-300'> Show More</span>
                <FaExternalLinkAlt className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white " />
            </motion.a>



        </motion.div>
    );
};

export default Work;