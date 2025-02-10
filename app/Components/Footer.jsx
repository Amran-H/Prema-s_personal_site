import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <a href="#top">
                    <p className=' cursor-pointer font-bold text-xl font-Ovo'>Amran Hossain </p>
                </a>
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    amran.h.akash@gmail.com
                </div>
            </div>

            <div className='text-center md:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p >Copyright © {new Date().getFullYear()} - All right reserved by Amran Hossain</p>
                <ul className='flex items-center gap-10 justify-center mt-4 md:mt-0'>
                    <li><a href="https://github.com/Amran-H" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/amran-h/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://web.facebook.com/amran.h.akash00/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;