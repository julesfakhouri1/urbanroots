import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaGraduationCap, FaUsers, FaChild, FaSeedling } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../images/Farming1.webp'; // Assurez-vous d'avoir cette image

interface Programme {
  titre: string;
  description: string;
  icon: React.ElementType;
}

const EducationPage: React.FC = () => {
  const programmes: Programme[] = [
    {
      titre: "Ateliers pour Adultes",
      description: "Nos ateliers pour adultes couvrent une variété de sujets, de la création de jardins en conteneurs à la permaculture urbaine. Apprenez des techniques avancées et échangez avec d'autres passionnés de jardinage urbain.",
      icon: FaGraduationCap
    },
    {
      titre: "Programmes Communautaires",
      description: "Participez à nos programmes communautaires pour transformer des espaces urbains en jardins productifs. Apprenez à travailler en équipe, partagez vos connaissances et contribuez à verdir votre quartier.",
      icon: FaUsers
    },
    {
      titre: "Activités pour Enfants",
      description: "Nos activités ludiques et éducatives initient les enfants au jardinage et à l'écologie. À travers des jeux et des expériences pratiques, ils découvrent le cycle de vie des plantes et l'importance de la biodiversité.",
      icon: FaChild
    },
    {
      titre: "Cours en Ligne",
      description: "Accédez à notre plateforme de cours en ligne pour apprendre à votre rythme. Des vidéos tutorielles, des guides interactifs et des forums de discussion vous aideront à développer vos compétences en jardinage urbain. Bientôt disponible.",
      icon: FaSeedling
    }
  ];

  return (
    <>
      <Head>
        <title>Éducation au Jardinage Urbain | UrbanRoots</title>
        <meta name="description" content="Découvrez nos programmes éducatifs sur le jardinage urbain pour tous les âges et niveaux." />
      </Head>
      <Navbar />
      <div className="relative h-[40vh]">
        <Image
          src={heroImage}
          alt="Éducation au jardinage urbain"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight">
            Éducation au <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Jardinage Urbain
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4">
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Explorez nos programmes éducatifs conçus pour tous les âges et niveaux d'expérience. Que vous soyez débutant ou jardinier chevronné, nos cours et ateliers vous aideront à développer vos compétences en jardinage urbain.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmes.map((programme, index) => (
            <div key={index} className="group">
              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 relative overflow-hidden border-2 border-primary-100 hover:border-primary-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-200 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <programme.icon className="text-4xl sm:text-5xl text-primary-500 mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary-700 group-hover:text-primary-800">{programme.titre}</h3>
                  <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700">{programme.description}</p>
                </div>
                {programme.titre === "Cours en Ligne" && (
                  <div className="mt-6 text-center text-sm font-semibold text-gray-700">
                    Bientôt disponible
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EducationPage;
