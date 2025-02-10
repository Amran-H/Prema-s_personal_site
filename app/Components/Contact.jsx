import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BsArrowRight } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        // Show loading toast
        const loadingToast = toast.loading('Sending message...');

        const formData = new FormData(event.target);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Success toast
                toast.success('Message sent successfully!', {
                    duration: 3000,
                    position: 'top-center',
                });
                event.target.reset();
            } else {
                // Error toast
                toast.error(data.message || 'Something went wrong!', {
                    duration: 3000,
                    position: 'top-center',
                });
            }
        } catch (error) {
            toast.error('Failed to send message', {
                duration: 3000,
                position: 'top-center',
            });
        } finally {
            toast.dismiss(loadingToast);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

            <Toaster />

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>Say Hello to Me</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>Let's Get in Touch</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I would love to hear your words. Leave me your comments, questions using the form below </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>

                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name' />

                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email' />
                </div>
                <motion.textarea
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-5 dark:bg-darkHover/30 dark:border-white/90' name='message' ></motion.textarea>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1 }}
                    type='submit'
                    className='group relative py-3 px-8 w-max flex items-center justify-center gap-2 
                    bg-black/80 text-white rounded-full mx-auto border-[0.5px] overflow-hidden
                    hover:border-blue-500 dark:border-white/50 dark:hover:border-blue-500
                    dark:bg-transparent transition-all duration-300'
                >
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500
                    translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                    <span className='relative z-10'>Submit Now</span>
                    <BsArrowRight className="w-4 h-4 text-white relative z-10 
                    group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

            </motion.form>
        </motion.div>
    );
};

export default Contact;