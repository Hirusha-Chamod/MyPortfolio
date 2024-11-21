'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';

const HeroSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                delay: 0.4
            }
        },
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    return (
        <div className="relative h-screen text-white bg-primary">
            <Navbar />
            <div className="flex items-center justify-between h-full px-6 md:px-12 lg:px-24">
                {/* About Section */}
                <motion.div
                    className="flex flex-col items-start justify-center text-left w-full md:w-1/2 space-y-6"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold"
                        variants={textVariants}
                    >
                        Hi, I'm Hirusha Chamod
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl leading-relaxed max-w-lg"
                        variants={textVariants}
                        transition={{ delay: 0.2 }}
                    >
                        I'm a passionate web developer dedicated to building dynamic and user-friendly applications.
                    </motion.p>
                    <div className="flex gap-4">
                        <motion.a
                            href="#projects"
                            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            View My Projects
                        </motion.a>
                        <motion.a
                            href="/Hirusha_Resume.pdf"
                            download
                            className="border-2 border-white py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Download CV
                        </motion.a>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="hidden md:block w-full md:w-1/2"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.6
                    }}
                >
                    <img
                        src="/images/hero-bg.jpg"
                        alt="hero"
                        className="object-cover rounded-lg shadow-lg max-h-[70%] w-full"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;