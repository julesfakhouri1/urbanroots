import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaSeedling, FaSun, FaLeaf, FaSnowflake } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../images/Jardin3.webp'; // Assurez-vous d'avoir cette image
import Calendrier from '../components/Calendrier'; // Import the Calendrier component

interface Saison {
  nom: string;
  mois: string;
  activites: string[];
  icon: React.ElementType;
}

const CalendrierPage: React.FC = () => {
  const saisons: Saison[] = [
    {
      nom: "Printemps",
      mois: "Mars - Mai",
      activites: [
        "Préparer les sols et les contenants",
        "Semer les légumes de saison (tomates, courgettes, salades)",
        "Planter les herbes aromatiques",
        "Tailler les plantes vivaces"
      ],
      icon: FaSeedling
    },
    {
      nom: "Été",
      mois: "Juin - Août",
      activites: [
        "Arroser régulièrement, de préférence le matin ou le soir",
        "Récolter les légumes d'été",
        "Pailler pour conserver l'humidité",
        "Surveiller et traiter les maladies et parasites"
      ],
      icon: FaSun
    },
    {
      nom: "Automne",
      mois: "Septembre - Novembre",
      activites: [
        "Récolter les derniers légumes d'été",
        "Planter les légumes d'hiver (choux, poireaux)",
        "Diviser les vivaces",
        "Préparer le compost pour l'année suivante"
      ],
      icon: FaLeaf
    },
    {
      nom: "Hiver",
      mois: "Décembre - Février",
      activites: [
        "Planifier le jardin pour l'année suivante",
        "Entretenir et réparer les outils",
        "Protéger les plantes sensibles au gel",
        "Commencer les semis d'intérieur pour le printemps"
      ],
      icon: FaSnowflake
    }
  ];

  return (
    <>
      <Head>
        <title>Calendrier du Jardinier Urbain | UrbanRoots</title>
        <meta name="description" content="Découvrez le calendrier des activités de jardinage urbain tout au long de l'année." />
      </Head>
      <Navbar />
      <div className="relative h-[40vh]">
        <Image
          src={heroImage}
          alt="Jardin urbain à travers les saisons"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight">
            Calendrier du <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Jardinier Urbain
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Calendrier des Événements</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Consultez et ajoutez des événements liés au jardinage urbain. Participez à des ateliers, des échanges de plantes, et d'autres activités communautaires tout au long de l'année.
        </p>
        <div className="mb-16">
          <Calendrier />
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-8">Guide Saisonnier du Jardinage Urbain</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Découvrez les activités de jardinage spécifiques à chaque saison pour optimiser votre jardin urbain tout au long de l'année.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {saisons.map((saison, index) => (
            <div key={index} className="group">
              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 relative overflow-hidden border-2 border-primary-100 hover:border-primary-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-200 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <saison.icon className="text-4xl sm:text-5xl text-primary-500 mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary-700 group-hover:text-primary-800">{saison.nom}</h3>
                  <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700">{saison.mois}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {saison.activites.map((activite, idx) => (
                      <li key={idx}>{activite}</li>
                    ))}
                  </ul>
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

export default CalendrierPage;