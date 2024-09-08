"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaTools, FaCalendarAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../images/Jardin5.webp';
import { motion } from 'framer-motion';

interface Resource {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

const ResourcesPage: React.FC = () => {
  const resources: Resource[] = [
    { title: "Guides de Jardinage", description: "Accédez à des guides pratiques pour vous aider à démarrer votre jardin urbain.", icon: FaBook, link: "/guides" },
    { title: "Outils et Équipements", description: "Découvrez les outils essentiels pour le jardinage urbain.", icon: FaTools, link: "/outils" },
    { title: "Calendrier du Jardinier", description: "Consultez notre calendrier pour voir les événements de la communauté et quand planter et entretenir vos plantes.", icon: FaCalendarAlt, link: "/calendrier" },
  ];

  return (
    <>
      <Head>
        <title>Ressources | UrbanRoots</title>
        <meta name="description" content="Découvrez nos ressources pour le jardinage urbain - guides, outils et conseils pour cultiver votre espace vert en ville." />
      </Head>
      <Navbar />
      <div className="relative h-[40vh]">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center leading-tight">
            Cultivez Votre <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Oasis Urbaine
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">Nos Ressources</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Explorez notre collection de guides, d'outils et de conseils pour transformer votre espace urbain en un jardin luxuriant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link href={resource.link} className="group block">
                <motion.div 
                  className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden border-2 border-primary-100 hover:border-primary-300 cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-200 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <resource.icon className="text-4xl sm:text-5xl text-primary-500 mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary-700 group-hover:text-primary-800">{resource.title}</h3>
                    <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700">{resource.description}</p>
                    <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                      <span className="mr-2">En savoir plus</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResourcesPage;
