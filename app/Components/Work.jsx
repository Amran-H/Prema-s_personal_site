import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import {
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiNextdotjs,
    SiFirebase,
    SiTypescript,
    SiRedux,
    SiMaterialdesign,
    SiChakraui
} from 'react-icons/si';
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
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(3);

    // Determine how many slides to show based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize(); // Initialize on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        fetch('/data/workData.json')
            .then(res => res.json())
            .then(data => setWorkData(data))
            .catch(err => console.error('Error fetching work data:', err));
    }, []);

    const totalSlides = Math.max(0, workData.length - (slidesToShow - 1));

    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(prevSlide => prevSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prevSlide => prevSlide - 1);
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[8%] md:px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'
            >
                My Portfolio
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className='text-center text-5xl font-Ovo'
            >
                My Recent Works
            </motion.h2>

            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            >
                As a certified MERN stack web developer with 3 years of experience these are some of my works.
            </motion.p>

            <div className="relative">
                {/* Slider Controls */}
                {workData.length > slidesToShow && (
                    <>
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className={`absolute -left-1 md:left-4 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 flex items-center justify-center shadow-md hover:scale-110 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            aria-label="Previous slide"
                        >
                            <FaChevronLeft className="text-gray-800 dark:text-white" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentSlide >= totalSlides - 1}
                            className={`absolute -right-1 md:right-4 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 flex items-center justify-center shadow-md hover:scale-110 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 ${currentSlide >= totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            aria-label="Next slide"
                        >
                            <FaChevronRight className="text-gray-800 dark:text-white" />
                        </button>
                    </>
                )}

                {/* Slider Container */}
                <div className="overflow-hidden py-4">
                    <motion.div
                        ref={sliderRef}
                        className="flex transition-all duration-500 ease-out"
                        animate={{ x: -currentSlide * (100 / slidesToShow) + '%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {workData.map((project, index) => (
                            <motion.div
                                key={index}
                                className={`flex-shrink-0 ${slidesToShow === 1 ? 'w-full' :
                                    slidesToShow === 2 ? 'w-1/2' :
                                        'w-1/3'
                                    } sm:px-3`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ y: -12 }}
                            >
                                <div className='relative bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200
                  shadow-lg shadow-gray-200 overflow-hidden group dark:bg-gray-900/50 dark:border-gray-700 dark:shadow-gray-900 h-full'
                                >
                                    {/* <div className='relative bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200
    shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] overflow-visible group
    dark:bg-gray-900/50 dark:border-gray-700 dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3)] h-full'
                                > */}
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
                                                <span className="text-sm font-semibold">Live</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className='p-6 border-t-2 h-full'>
                                        <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                                            {project.title}
                                        </h3>
                                        <p className='text-gray-800 dark:text-gray-300 mb-4 text-base text-justify font-Ovo'>
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
                                                            className='relative md:w-8 w-7 md:h-8 h-7 rounded-full flex items-center justify-center
                      bg-gray-100 dark:bg-gray-800 group/tech cursor-pointer
                      hover:scale-110 transition-all duration-300'
                                                        >
                                                            <TechIcon
                                                                className="w-4 h-4 transition-colors duration-300"
                                                                style={{ color }}
                                                            />

                                                            {/* Tailwind Tooltip */}
                                                            <div className="absolute invisible group-hover/tech:visible opacity-0 group-hover/tech:opacity-100 
                          bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white
                          bg-gray-800 dark:bg-gray-700 rounded transition-all duration-300 z-50
                          whitespace-nowrap">
                                                                {tech}
                                                                {/* Arrow */}
                                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 
                              border-l-transparent border-r-transparent border-b-transparent
                              border-t-gray-800 dark:border-t-gray-700"></div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                {workData.length > 0 && (
                    <div className="flex justify-center mt-6 gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                                    ? 'bg-blue-600 w-6'
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                href="https://github.com/Amran-H"
                target="_blank"
                rel="noopener noreferrer"
                className='group relative w-max mx-auto px-10 py-3 border rounded-full border-gray-500 
          flex items-center gap-2 bg-white overflow-hidden mt-12
          hover:border-blue-500 transition-all duration-300
          dark:bg-white dark:text-black dark:border-gray-400'
            >
                <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500
          translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300'></span>
                <span className='relative z-10 group-hover:text-white transition-colors duration-300'> Show More</span>
                <FaExternalLinkAlt className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
            </motion.a>
        </motion.div>
    );
};

export default Work;