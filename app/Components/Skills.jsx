import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaGit, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiNextdotjs, SiRedux, SiFirebase } from 'react-icons/si';

const Skills = () => {
    // State to hold the skills data from the API
    const [skillsData, setSkillsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(0);

    // Fetch skills data when component mounts
    useEffect(() => {
        fetch('/data/skillsData.json')
            // Commented alternative API endpoint for local development
            // fetch('http://localhost:5000/skillsData')
            .then(res => res.json())
            .then(data => {
                setSkillsData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error fetching skills data:', err);
                setIsLoading(false);
            });
    }, []);

    // Helper function to map icon name strings to their corresponding components
    const getIcon = (iconName) => {
        const iconMap = {
            FaReact,
            FaNodeJs,
            FaGit,
            FaHtml5,
            FaCss3Alt,
            FaBootstrap,
            FaDatabase,
            SiMongodb,
            SiExpress,
            SiTailwindcss,
            SiJavascript,
            SiNextdotjs,
            SiRedux,
            SiFirebase
        };
        return iconMap[iconName] || FaReact; // Default to React icon if not found
    };

    // Show loading state while fetching data
    if (isLoading) {
        return (
            <div id="skills" className="w-full min-h-[400px] flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="mt-4 text-gray-600 dark:text-gray-300">Loading skills...</span>
                </div>
            </div>
        );
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="skills"
            className="w-full py-24 relative overflow-hidden"
        >
            {/* Background design elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header with animation */}
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-center mb-2 text-lg font-ovo'>What I Know</motion.h4>

                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='text-center text-5xl font-Ovo mb-16'>My Development Skills</motion.h2>
                </div>

                {/* Category tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {skillsData.map((category, idx) => (
                        <motion.button
                            key={category.category}
                            onClick={() => setActiveCategory(idx)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === idx
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category.category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Animated skill container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                    {/* Hexagon background pattern */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-5">
                        <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-500 rotate-45"></div>
                        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-indigo-500 rotate-45"></div>
                    </div>

                    <div className="relative z-10">
                        {/* Active category title with animation */}
                        <AnimatePresence mode="wait">
                            <motion.h3
                                key={`title-${activeCategory}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="text-2xl font-bold text-gray-800 dark:text-white mb-8 font-Ovo flex items-center"
                            >
                                {skillsData[activeCategory]?.category}
                            </motion.h3>
                        </AnimatePresence>

                        {/* Skills mastery visualization with animated transitions */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`skills-${activeCategory}`}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
                            >
                                {skillsData[activeCategory]?.skills.map((skill, index) => {
                                    const SkillIcon = getIcon(skill.iconName);
                                    const percentage = parseInt(skill.level);

                                    return (
                                        <motion.div
                                            key={`${activeCategory}-${skill.name}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="flex items-start"
                                        >
                                            {/* Icon bubble */}
                                            <div className="mr-4 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 shadow-md">
                                                <SkillIcon
                                                    className="w-6 h-6"
                                                    style={{ color: skill.color }}
                                                />
                                            </div>

                                            {/* Skill details */}
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-medium text-gray-800 dark:text-gray-200">
                                                        {skill.name}
                                                    </h4>
                                                </div>

                                                {/* progress bar */}
                                                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: skill.level }}
                                                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                                        className="h-full rounded-full relative"
                                                        style={{ backgroundColor: skill.color }}
                                                    >
                                                        <motion.div
                                                            animate={{
                                                                x: ['-100%', '100%'],
                                                            }}
                                                            transition={{
                                                                repeat: Infinity,
                                                                duration: 1.5,
                                                                ease: "linear"
                                                            }}
                                                            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                        ></motion.div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills;