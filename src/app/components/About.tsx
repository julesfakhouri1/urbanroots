"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import VilleVegetale from "../images/bg2.webp";
import VilleVegetale2 from "../images/Farming5.webp";
import { FaLeaf, FaMapMarkedAlt, FaUsers, FaBook, FaChartLine } from 'react-icons/fa';

type Feature = {
  href: string;
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const features: Feature[] = [
  { href: "/jardins", title: "Carte interactive", description: "Localisez et créez des espaces de jardinage urbain.", icon: (props) => <FaMapMarkedAlt {...props} /> },
  { href: "/ressources", title: "Plateforme de partage", description: "Partagez des ressources et des conseils en jardinage.", icon: (props) => <FaLeaf {...props} /> },
  { href: "/forum", title: "Forums communautaires", description: "Participez à des discussions et organisez des événements.", icon: (props) => <FaUsers {...props} /> },
  { href: "/education", title: "Modules éducatifs", description: "Apprenez des techniques de jardinage urbain.", icon: (props) => <FaBook {...props} /> },
  { href: "/environnement", title: "Outils de suivi", description: "Mesurez l'impact de vos actions.", icon: (props) => <FaChartLine {...props} /> },
];

const FeatureComponent: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link href={feature.href} className="group block">
        <motion.div 
          className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden border-2 border-primary-100 hover:border-primary-300 cursor-pointer"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-200 transition-colors duration-300"></div>
          <div className="relative z-10">
            {feature.icon({ className: "text-4xl sm:text-5xl text-primary-500 mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300" })}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary-700 group-hover:text-primary-800">{feature.title}</h3>
            <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700">{feature.description}</p>
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
  );
};


const MissionSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <motion.section 
        className="relative py-20 overflow-hidden bg-[#42806C]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white tracking-tight text-center">
              Notre Mission : Cultivons l'Avenir Urbain
            </h2>
            <div className="bg-[#2A5346] rounded-lg p-8 shadow-xl">
              <p className="text-lg sm:text-xl mb-6 text-white leading-relaxed">
                UrbanRoots s'engage à révolutionner nos villes en les transformant en écosystèmes vibrants et durables. 
                Notre approche holistique vise à créer un impact positif sur l'environnement, la société et l'économie locale.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="bg-[#1F3D33] p-4 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-semibold text-[#A9F3D3] mb-2">Verdissement Urbain</h3>
                  <p className="text-white">Création de jardins communautaires, de murs végétaux et de mini-forêts urbaines pour améliorer la qualité de l'air et la biodiversité.</p>
                </motion.div>
                <motion.div 
                  className="bg-[#1F3D33] p-4 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-semibold text-[#A9F3D3] mb-2">Agriculture Urbaine</h3>
                  <p className="text-white">Promotion de l'autosuffisance alimentaire grâce à des potagers sur les toits, des serres verticales et des systèmes aquaponiques innovants.</p>
                </motion.div>
                <motion.div 
                  className="bg-[#1F3D33] p-4 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-semibold text-[#A9F3D3] mb-2">Éducation Écologique</h3>
                  <p className="text-white">Ateliers, programmes scolaires et événements communautaires pour sensibiliser à l'importance de la nature en ville.</p>
                </motion.div>
                <motion.div 
                  className="bg-[#1F3D33] p-4 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-semibold text-[#A9F3D3] mb-2">Innovation Verte</h3>
                  <p className="text-white">Développement de solutions technologiques pour optimiser l'utilisation des ressources et réduire l'empreinte carbone urbaine.</p>
                </motion.div>
              </div>
              <div className="text-center">
                <motion.a 
                  href="/register" 
                  className="inline-block bg-white text-[#2A5346] font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-[#E6F7F0] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2A5346]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rejoignez le Mouvement UrbanRoots
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <svg className="absolute top-0 left-0 transform -translate-y-1/2" width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="200" r="200" fill="white"/>
          </svg>
          <svg className="absolute bottom-0 right-0 transform translate-y-1/2" width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="200" r="200" fill="white"/>
          </svg>
        </div>
      </motion.section>
      <main className="p-4 sm:p-8 max-w-7xl mx-auto">
        <motion.section 
          className="mb-12 sm:mb-24 pt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="w-full md:w-1/2 p-6 sm:p-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary-700">Qui Nous Sommes</h2>
              <p className="text-base sm:text-lg mb-4 text-gray-700 leading-relaxed">
                UrbanRoots est une communauté passionnée de jardinage urbain. Nous croyons que chaque espace, aussi petit soit-il, peut devenir un oasis de verdure. Ensemble, nous créons des espaces verts qui enrichissent notre environnement et notre qualité de vie.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Notre mission est de promouvoir la biodiversité, d'améliorer la qualité de l'air, et de créer des espaces de détente et de bien-être pour tous.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-64 sm:h-96">
              <Image 
                src={VilleVegetale2} 
                alt="Ville végétale" 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </motion.section>
        <motion.section 
          className="mb-12 sm:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center mb-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src={VilleVegetale}
                alt="Ville végétale"
                width={500}
                height={400}
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Nos Fonctionnalités
              </h2>
              <p className="text-xl text-gray-600">
                UrbanRoots vous offre tout ce dont vous avez besoin pour réussir votre jardin urbain et contribuer à un environnement plus vert.
              </p>
            </div>
          </div>
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureComponent key={index} feature={feature} />
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default MissionSection;