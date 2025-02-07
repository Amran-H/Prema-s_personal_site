import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.my_image} alt='' className='rounded-full w-32 bg-gray-200' />
            </div>
            <h3 className='flex items-end gap2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Amran Hossain <Image src={assets.hand_icon} alt='' className='rounded-full w-6 mx-2 mb-1' />

            </h3>
            <h1 className='text-3xl sm:text-6xl lg:tex-[66px] font-Ovo'>Passionate Web Developer</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>I Like to explore and challenge my expertise. My aim is to be comfortable with always-changing technologies by learning new technologies that my work demands conveniently and efficiently. And as a fast learner, I enjoy learning new things.</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black flex items-center gap-2 text-white'> Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> My resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
            </div>
        </div>
    );
};

export default Header;