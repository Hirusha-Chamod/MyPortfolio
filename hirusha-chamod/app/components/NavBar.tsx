"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="relative px-4 py-4 flex justify-between items-center  shadow-md">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold leading-none">
                {/* Your logo or text here */}
                Logo
            </Link>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
                <button
                    onClick={toggleNavbar}
                    className="navbar-burger flex items-center text-blue-600 p-3"
                >
                    <svg
                        className="block h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                <li><Link href="/" className="text-sm text-white hover:text-gray-500">Home</Link></li>
                <li><Link href="/about" className="text-sm text-white hover:text-gray-500 ">About</Link></li>
                <li><Link href="/services" className="text-sm text-white hover:text-gray-500">Services</Link></li>
                <li><Link href="/projects" className="text-sm text-white hover:text-gray-500">Projects</Link></li>
                <li><Link href="/contact" className="text-sm text-white hover:text-gray-500">Contact</Link></li>
            </ul>



            {/* Mobile Sidebar */}
            {isNavOpen && (
                <div className="fixed inset-0 z-50">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-gray-800 opacity-50"
                        onClick={toggleNavbar}
                    ></div>

                    {/* Sidebar */}
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6  border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <Link href="/" className="mr-auto text-3xl font-bold leading-none">Logo</Link>
                            <button onClick={toggleNavbar} className="navbar-close">
                                <svg
                                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <ul>
                            <li className="mb-1">
                                <Link
                                    href="/"
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link
                                    href="/about"
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link
                                    href="/services"
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link
                                    href="/projects"
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link
                                    href="/contact"
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-auto">

                        </div>
                    </nav>
                </div>
            )}
        </nav>
    );
};

export default Navbar;