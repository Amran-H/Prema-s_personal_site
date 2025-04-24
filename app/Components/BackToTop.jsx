'use client'

import { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Memoize the handler to avoid recreation on each render
    const handleScroll = useCallback(() => {
        setIsVisible(window.scrollY > 200);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Add initial check on mount
        handleScroll();

        // Add event listener with passive option for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Clean up event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-4 sm:right-8 z-50 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-white shadow-lg transition-all duration-300 ease-in-out transform sm:hover:scale-110 backdrop-blur-sm"
            aria-label="Back to Top"
        >
            <FaArrowUp className="w-5 h-5" />
        </button>
    );
};

export default BackToTop;