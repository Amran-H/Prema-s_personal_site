import React, { useEffect, useState } from 'react';
import { TfiEmail } from "react-icons/tfi";

const Footer = ({ isDarkMode }) => {
    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <a href="#top">
                    <p className=' cursor-pointer font-bold text-xl font-Ovo'>Prema Rani Bhowmik </p>
                </a>
                <div className='w-max group flex items-center gap-2 mx-auto'>
                    <TfiEmail className="w-6 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-[360deg]" />
                    pramabk442@gmail.com
                </div>
            </div>

            <div className='text-center md:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className='font-Ovo'>Copyright © {year ? year : 'Loading...'} - All right reserved by Prema Rani Bhowmik</p>
                <ul className='flex items-center gap-10 justify-center mt-4 md:mt-0 '>
                    {/* <li><a className='font-Ovo hover:text-blue-500' href="https://github.com/Amran-H" target="_blank" rel="noopener noreferrer">GitHub</a></li> */}
                    <li><a className='font-Ovo hover:text-blue-500' href="https://www.linkedin.com/in/prama-rani-bhowmik-45724633b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    {/* <li><a className='font-Ovo hover:text-blue-500' href="https://web.facebook.com/amran.h.akash00/" target="_blank" rel="noopener noreferrer">Facebook</a></li> */}
                </ul>
            </div>
        </div>
    );
};

export default Footer;