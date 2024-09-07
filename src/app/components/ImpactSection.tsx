"use client";
import React from 'react';
import { FaSeedling, FaUsers, FaHandsHelping, FaLeaf } from 'react-icons/fa';
import Image from 'next/image';
import BasilicImage from '../images/Basilic.webp';
import { motion } from 'framer-motion';

const Icon: React.FC<{ icon: React.ElementType; className?: string }> = ({ icon: IconComponent, className }) => {
  return <IconComponent aria-hidden="true" className={className} />;
};

interface ImpactCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, title, description, index }) => (
  <motion.div 
    className="flex items-center p-4 bg-white bg-opacity-80 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-opacity-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 * index }}
  >
    <Icon icon={icon} className="text-3xl text-primary-500 mr-4 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const ImpactSection: React.FC = () => {
  const impactCards = [
    {
      icon: FaSeedling,
      title: "Jardins Urbains",
      description: "50 jardins créés la 1ère année"
    },
    {
      icon: FaUsers,
      title: "Communauté",
      description: "1000 membres actifs visés"
    },
    {
      icon: FaHandsHelping,
      title: "Partenariats",
      description: "10 organisations locales"
    },
    {
      icon: FaLeaf,
      title: "Impact Environnemental",
      description: "5000 m² d'espaces verts ajoutés"
    }
  ];

  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <motion.div 
        className="absolute left-0 top-0 w-full md:w-1/2 h-64 md:h-full"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image 
          src={BasilicImage} 
          alt="Basilic" 
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mt-64 md:mt-0 md:ml-auto w-full md:w-1/2 lg:w-3/5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-4 md:mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Notre Vision et Nos Objectifs
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Urban Roots transforme nos espaces urbains en oasis de verdure. Découvrez nos objectifs ambitieux pour un avenir plus vert :
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {impactCards.map((card, index) => (
                <ImpactCard key={index} {...card} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;