"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import { motion, AnimatePresence } from 'framer-motion';
import LogoUrban from '../images/logo.webp';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { data: session } = useSession();
    const pathname = usePathname();
    const isIndexPage = pathname === "/";
    const navRef = useRef<HTMLDivElement>(null);

    const normalizeUrl = (text: string) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    };

    const menuItems = ['Jardins', 'Forum', 'Ressources', 'Éducation', 'Environnement'];

    const DefaultProfileIcon = () => (
        <svg className="w-10 h-10 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
    );

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <motion.nav
                ref={navRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed pt-3 top-0 w-full z-50 transition-all duration-300 ${scrolled || !isIndexPage ? 'bg-white shadow-md' : 'bg-transparent'}`}
            >
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.div 
                            className="flex items-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link href="/" className="flex items-center space-x-3">
                                <Image 
                                    src={LogoUrban}
                                    alt="Logo Urban Roots" 
                                    width={50} 
                                    height={50} 
                                    className="rounded-full border-2 border-primary-300" 
                                />
                                <span className={`text-2xl font-bold font-caveat transition-colors duration-300 ${scrolled || !isIndexPage ? 'text-primary-600' : 'text-white'}`}>Urban Roots</span>
                            </Link>
                        </motion.div>
                        <div className="hidden lg:flex items-center space-x-8">
                            <div className="flex items-baseline space-x-8">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link 
                                            href={`/${normalizeUrl(item)}`} 
                                            className={`transition-colors duration-300 ${scrolled || !isIndexPage ? 'text-primary-700 hover:bg-primary-100 hover:text-primary-900' : 'text-white hover:text-primary-300'} px-4 py-2 rounded-lg text-base font-medium`}
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div 
                                className="pl-8 flex items-center space-x-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                {session ? (
                                    <div className="flex items-center space-x-4">
                                        {session.user?.image ? (
                                            <Image 
                                                src={session.user.image} 
                                                alt="Profile Image" 
                                                width={40} 
                                                height={40} 
                                                className="rounded-full border-2 border-primary-300"
                                            />
                                        ) : (
                                            <DefaultProfileIcon />
                                        )}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => signOut()}
                                            className="bg-primary-300 text-primary-950 px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out hover:bg-primary-800"
                                        >
                                            Déconnexion
                                        </motion.button>
                                    </div>
                                ) : (
                                    <>
                                        <Link href="/login" passHref>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-primary-500 text-white px-5 py-2 rounded-full text-base font-medium transition duration-300 ease-in-out hover:bg-primary-600"
                                            >
                                                Connexion
                                            </motion.button>
                                        </Link>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link 
                                                href="/register"
                                                className="bg-primary-100 text-primary-950 px-5 py-2 rounded-full text-base font-medium transition duration-300 ease-in-out hover:bg-primary-200"
                                            >
                                                Inscription
                                            </Link>
                                        </motion.div>
                                    </>
                                )}
                            </motion.div>
                        </div>
                        <div className="lg:hidden">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-primary-500 hover:text-primary-600 focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Ouvrir le menu principal</span>
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                                    <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className="lg:hidden z-50" 
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white z-40">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link 
                                            href={`/${normalizeUrl(item)}`} 
                                            className="text-primary-700 hover:bg-primary-100 hover:text-primary-900 block px-4 py-2 rounded-lg text-base font-medium transition duration-300 ease-in-out"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                                {session ? (
                                    <div className="flex items-center space-x-4 mt-4 px-4 py-2 bg-primary-50 rounded-lg">
                                        {session.user?.image ? (
                                            <Image 
                                                src={session.user.image} 
                                                alt="Profile Image" 
                                                width={40} 
                                                height={40} 
                                                className="rounded-full border-2 border-primary-300"
                                            />
                                        ) : (
                                            <DefaultProfileIcon />
                                        )}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => signOut()}
                                            className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out hover:bg-primary-700"
                                        >
                                            Déconnexion
                                        </motion.button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col space-y-2 mt-4">
                                        <Link href="/login" passHref>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-primary-500 text-white text-center px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out hover:bg-primary-600 cursor-pointer"
                                            >
                                                Connexion
                                            </motion.div>
                                        </Link>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link 
                                                href="/register"
                                                className="bg-primary-200 text-primary-950 block text-center px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out hover:bg-primary-300"
                                            >
                                                Inscription
                                            </Link>
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;