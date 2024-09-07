"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroImage from '../images/bg3.webp';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
        }
    };

    return (
        <motion.div 
            className="relative h-screen bg-fixed bg-center bg-cover flex items-center"
            style={{ backgroundImage: `url(${HeroImage.src})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
            <motion.div 
                className="container mx-auto px-4 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1 
                        className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight"
                        variants={itemVariants}
                    >
                        Cultivons <span className="text-primary-300">l'Avenir Urbain</span> Ensemble
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
                        variants={itemVariants}
                    >
                        Transformez votre ville en un havre de verdure. Rejoignez UrbanRoots et participez à la création d'espaces verts urbains florissants.
                    </motion.p>
                    <motion.p 
                        className="text-lg md:text-xl mb-10 text-primary-200 font-semibold"
                        variants={itemVariants}
                    >
                        Découvrez les jardins urbains près de chez vous et contribuez à un avenir plus vert.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Link 
                            href="/jardins" 
                            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black shadow-lg"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.3 }}
                            >
                                Trouver un jardin près de chez moi
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            ></motion.div>
        </motion.div>
    );
};

export default Hero;