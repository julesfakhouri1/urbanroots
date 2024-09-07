import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaSeedling, FaLeaf, FaHome, FaRecycle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../images/Jardin6.webp';

interface Guide {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

const GuidesPage: React.FC = () => {
  const guides: Guide[] = [
    {
      title: "Débuter en jardinage urbain",
      description: "Apprenez les bases pour créer votre premier jardin en ville.",
      icon: FaSeedling,
      link: "/guides/debuter-jardinage-urbain"
    },
    {
      title: "Techniques de compostage",
      description: "Apprenez à faire votre propre compost pour enrichir votre jardin.",
      icon: FaLeaf,
      link: "/guides/techniques-de-compostage"
    },
    {
      title: "Jardiner en intérieur",
      description: "Découvrez comment créer et entretenir un jardin à l'intérieur de votre maison.",
      icon: FaHome,
      link: "/guides/jardiner-en-interieur"
    },
    {
      title: "Techniques de Permaculture",
      description: "Explorez les principes de la permaculture adaptés aux jardins urbains.",
      icon: FaRecycle,
      link: "/guides/techniques-permaculture"
    },
    {
      title: "Plantes Dépolluantes pour Purifier l'Air de votre Intérieur",
      description: "Découvrez des plantes dépolluantes qui purifient l'air de votre intérieur et améliorent votre qualité de vie.",
      icon: FaLeaf,
      link: "/guides/plantes-depolluantes"
    },
  ];

  return (
    <>
      <Head>
        <title>Guides de Jardinage Urbain | UrbanRoots</title>
        <meta name="description" content="Découvrez nos guides pratiques pour le jardinage urbain." />
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight">
            Guides de <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Jardinage Urbain
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4">
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Explorez nos guides pratiques pour vous aider à créer et entretenir votre jardin urbain, que ce soit à l'extérieur ou à l'intérieur.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Link href={guide.link} key={index} className="group">
              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 relative overflow-hidden border-2 border-primary-100 hover:border-primary-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-200 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <guide.icon className="text-4xl sm:text-5xl text-primary-500 mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary-700 group-hover:text-primary-800">{guide.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700">{guide.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuidesPage;