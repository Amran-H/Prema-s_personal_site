import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FaReact, FaNodeJs, FaGit, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiNextdotjs, SiRedux, SiFirebase } from 'react-icons/si';

const Skills = () => {
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        fetch('/data/skillsData.json')
            // fetch('http://localhost:5000/skillsData')
            .then(res => res.json())
            .then(data => setSkillsData(data));
    }, []);

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
        return iconMap[iconName] || FaReact;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='skills' className='w-full px-[8%] md:px-[12%] py-10 mb-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>What I Know</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo mb-16'>My Development Skills</motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {skillsData.map((category, idx) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={category.category}
                        className='relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg shadow-gray-200 dark:shadow-gray-900
                        transition-all duration-300 ease-in-out
                        hover:shadow-xl hover:shadow-gray-200
                        group
                        dark:bg-gray-900/50 dark:border-gray-700 
                        dark:hover:shadow-gray-900'
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl
                            dark:from-blue-950/30 dark:to-indigo-950/30'></div>

                        <div className='relative z-10'>
                            <h3 className='text-xl font-semibold mb-6 text-gray-800 dark:text-white font-Ovo
                                group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                                {category.category}
                            </h3>
                            <div className='space-y-5'>
                                {category.skills.map((skill, index) => {
                                    const SkillIcon = getIcon(skill.iconName);
                                    return (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            key={skill.name}
                                            className='group/skill'
                                        >
                                            <div className='flex items-center gap-2 mb-2'>
                                                <SkillIcon
                                                    className="w-5 h-5 transition-transform duration-300 group-hover/skill:scale-110"
                                                    style={{ color: skill.color }}
                                                />
                                                <span className='text-gray-700 dark:text-gray-200 
                                                    group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 
                                                    transition-colors duration-300'>
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <div className='w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700/50 
                                                overflow-hidden transition-all duration-300 
                                                group-hover/skill:shadow-md group-hover/skill:h-3'>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: skill.level }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                    className='h-full rounded-full relative'
                                                    style={{
                                                        backgroundColor: skill.color,
                                                        width: skill.level
                                                    }}
                                                >
                                                    <div className='absolute inset-0 bg-white/20 dark:bg-black/20 
                                                        opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300'></div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Skills;