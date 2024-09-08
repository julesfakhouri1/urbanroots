import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaLeaf, FaWater, FaCut, FaSeedling, FaRuler, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../images/Rooftop.webp';

interface Outil {
  title: string;
  description: string;
  icon: React.ElementType;
}

const OutilsPage: React.FC = () => {
  const outils: Outil[] = [
    {
      title: "Pelle de Jardinage",
      description: "Idéale pour planter, transplanter et remuer la terre. Cette pelle compacte est parfaite pour les espaces restreints des jardins urbains. Sa poignée ergonomique offre une bonne prise en main pour un travail confortable.",
      icon: FaLeaf
    },
    {
      title: "Arrosoir",
      description: "Pour un arrosage précis et contrôlé de vos plantes. Choisissez un modèle de 2 à 5 litres pour faciliter la manipulation dans les petits espaces. Un bec verseur long permet d'atteindre les plantes en hauteur ou dans des coins difficiles d'accès.",
      icon: FaWater
    },
    {
      title: "Sécateur",
      description: "Parfait pour tailler et entretenir vos plantes. Un outil indispensable pour la taille des branches, des tiges et des fleurs fanées. Optez pour un modèle bypass pour des coupes nettes qui favorisent la santé de vos plantes.",
      icon: FaCut
    },
    {
      title: "Kit de Semis",
      description: "Tout ce dont vous avez besoin pour démarrer vos semis. Comprend généralement des plateaux, des godets biodégradables, des étiquettes et un substrat de semis. Idéal pour commencer votre jardin urbain dès les premiers jours du printemps.",
      icon: FaSeedling
    },
    {
      title: "Mètre Ruban",
      description: "Pour planifier et organiser votre espace de jardinage. Essentiel pour mesurer les zones de plantation, espacer correctement vos plantes et planifier l'aménagement de votre jardin urbain. Un outil simple mais crucial pour optimiser votre espace.",
      icon: FaRuler
    },
    {
      title: "Gants de Jardinage",
      description: "Protégez vos mains lors de vos travaux de jardinage. Choisissez des gants résistants mais flexibles pour manipuler facilement les outils et les plantes. Des gants imperméables sont idéaux pour les tâches humides comme l'arrosage ou le travail du compost.",
      icon: FaShieldAlt
    }
  ];

  return (
    <>
      <Head>
        <title>Outils de Jardinage Urbain | UrbanRoots</title>
        <meta name="description" content="Découvrez les outils essentiels pour votre jardin urbain." />
      </Head>
      <Navbar />
      <div className="relative h-[40vh]">
        <Image
          src={heroImage}
          alt="Outils de jardinage"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight">
            Outils Essentiels <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              pour Votre Jardin Urbain
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4">
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Équipez-vous des meilleurs outils pour créer et entretenir votre jardin urbain. Voici notre sélection d'outils indispensables pour tout jardinier en ville, adaptés aux espaces restreints et aux besoins spécifiques du jardinage urbain.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outils.map((outil, index) => (
            <div key={index} className="group">
              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 relative overflow-hidden border-2 border-primary-100 hover:border-primary-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-200 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <outil.icon className="text-4xl sm:text-5xl text-primary-500 mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary-700 group-hover:text-primary-800">{outil.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700">{outil.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OutilsPage;
