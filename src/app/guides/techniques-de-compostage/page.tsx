import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from '../../components/Navbar'; // Assurez-vous que le chemin est correct
import Footer from '../../components/Footer'; // Assurez-vous que le chemin est correct
import CompostImage from '../../images/Jardin4.webp'; // Assurez-vous que le chemin est correct

const TechniquesDeCompostage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Techniques de Compostage | UrbanRoots</title>
        <meta name="description" content="Découvrez les techniques de compostage pour votre jardin urbain. Apprenez à créer un compost riche et naturel." />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12">
        <main className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8 text-center">Techniques de Compostage</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Apprenez à créer votre propre compost pour enrichir naturellement votre jardin urbain. Le compostage est une excellente façon de recycler vos déchets organiques et d'améliorer la qualité de votre sol.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="relative w-[600px] h-[400px]">
              <Image 
                src={CompostImage} 
                alt="Compost en cours de décomposition" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">1. Choisir le Bon Emplacement</h2>
            <p className="text-lg text-gray-700 mb-4">
              Placez votre composteur dans un endroit facilement accessible, partiellement ombragé et bien drainé. Si vous vivez en appartement, optez pour un composteur d'intérieur ou de balcon.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">2. Les Ingrédients du Compost</h2>
            <p className="text-lg text-gray-700 mb-4">
              Un bon compost nécessite un équilibre entre matières vertes (riches en azote) et matières brunes (riches en carbone). Les matières vertes incluent les épluchures de fruits et légumes, le marc de café, et les tontes de gazon. Les matières brunes comprennent les feuilles mortes, le carton, et les copeaux de bois.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">3. Le Processus de Compostage</h2>
            <p className="text-lg text-gray-700 mb-4">
              Alternez les couches de matières vertes et brunes. Assurez-vous que votre compost reste humide mais pas détrempé. Aérez régulièrement votre compost en le retournant pour favoriser la décomposition.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">4. Gestion et Entretien</h2>
            <p className="text-lg text-gray-700 mb-4">
              Surveillez la température de votre compost : un compost actif sera chaud au centre. Évitez d'ajouter des aliments cuits, de la viande, ou des produits laitiers qui peuvent attirer les nuisibles. Ajoutez régulièrement des matériaux secs si votre compost devient trop humide.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">5. Utilisation du Compost</h2>
            <p className="text-lg text-gray-700 mb-4">
              Votre compost est prêt lorsqu'il a une couleur foncée, une texture friable et une odeur de terre fraîche. Utilisez-le pour enrichir le sol de vos plantes en pot, de votre jardin, ou comme paillis pour retenir l'humidité.
            </p>
          </section>

          <div className="text-center">
            <Link href="/guides" className="inline-block bg-primary-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-500 transition-colors duration-300 ease-in-out cursor-pointer">
              Retour aux Guides
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TechniquesDeCompostage;
