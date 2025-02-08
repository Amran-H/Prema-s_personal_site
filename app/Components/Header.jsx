// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import React from 'react';

// const Header = () => {
//     return (
//         <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
//             <div>
//                 <Image src={assets.my_image} alt='' className='rounded-full w-32 bg-gray-200' />
//             </div>
//             <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
//                 Hi! I'm Amran Hossain <Image src={assets.hand_icon} alt='' className='rounded-full w-6 mx-2 mb-1' />

//             </h3>
//             <h1 className='text-3xl sm:text-6xl lg:tex-[66px] font-Ovo'>Passionate Web Developer</h1>
//             <p className='max-w-2xl mx-auto font-Ovo'>I Like to explore and challenge my expertise. My aim is to be comfortable with always-changing technologies by learning new technologies that my work demands conveniently and efficiently. And as a fast learner, I enjoy learning new things.</p>
//             <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//                 <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black flex items-center gap-2 text-white'> Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
//                 <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> My resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
//             </div>
//         </div>
//     );
// };

// export default Header;

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image
                    src={assets.my_image}
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
                Hi! I'm Amran Hossain
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
            <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                Passionate Web Developer
            </motion.h1>

            {/* Description */}
            <motion.p className='max-w-2xl mx-auto font-Ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                I like to explore and challenge my expertise. My aim is to be comfortable with
                always-changing technologies by learning new tools that my work demands conveniently
                and efficiently. As a fast learner, I enjoy learning new things.
            </motion.p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact" className='px-10 py-3 border border-white rounded-full bg-black flex items-center gap-2 text-white dark:bg-transparent'>
                    Contact me <Image src={assets.right_arrow_white} alt='Arrow' width={16} height={16} />
                </motion.a>

                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                    My resume <Image src={assets.download_icon} alt='Download Icon' width={16} height={16} />
                </motion.a>
            </div>
        </div>
    );
};

export default Header;
