import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FaCode, FaPaintBrush, FaLaptopCode, FaMobile, FaDesktop, FaPalette, FaFigma, FaSwatchbook } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('/data/servicesData.json')
            .then(res => res.json())
            .then(data => setServicesData(data));
    }, []);

    const getIcon = (iconName) => {
        const iconMap = {
            FaCode,
            FaPaintBrush,
            FaLaptopCode,
            FaDesktop,
            FaPalette,
            FaFigma,
            FaSwatchbook
        };
        return iconMap[iconName] || FaCode;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-20 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>What I Offer</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo mb-16'>My Services</motion.h2>

            <div className='grid md:grid-cols-2 gap-8'>
                {servicesData.map((service, idx) => {
                    const MainIcon = getIcon(service.mainIconName);

                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            key={idx}
                            className='relative bg-white/50 backdrop-blur-sm p-8 shadow-lg shadow-gray-200 dark:shadow-gray-900 rounded-2xl border border-gray-200
                            hover:shadow-xl hover:shadow-gray-200 group
                            dark:bg-gray-900/50 dark:border-gray-700 dark:hover:shadow-gray-900'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl
                                dark:from-blue-950/30 dark:to-indigo-950/30'></div>

                            <div className='relative z-10'>
                                <div className='bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                                    group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors duration-300'>
                                    <MainIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>

                                <h3 className='text-2xl font-semibold mb-4 font-Ovo text-gray-800 dark:text-white
                                    group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                                    {service.title}
                                </h3>

                                <p className='text-gray-600 dark:text-gray-300 mb-8'>
                                    {service.description}
                                </p>

                                <div className='space-y-4'>
                                    {service.features.map((feature, index) => {
                                        const FeatureIcon = getIcon(feature.iconName);
                                        return (
                                            <div key={index} className='flex items-center gap-3 group/feature'>
                                                <FeatureIcon className="w-5 h-5 text-blue-500 dark:text-blue-400 
                                                    group-hover/feature:scale-110 transition-transform duration-300" />
                                                <span className='text-gray-700 dark:text-gray-200
                                                    group-hover/feature:text-blue-600 dark:group-hover/feature:text-blue-400 
                                                    transition-colors duration-300'>
                                                    {feature.text}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* <button className='flex items-center gap-2 mt-8 text-blue-600 dark:text-blue-400 
                                    group-hover:gap-4 transition-all duration-300'>
                                    Learn More <BsArrowRight className="w-5 h-5" />
                                </button> */}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Services;