import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from '../../components/Navbar'; // Assurez-vous que le chemin est correct
import Footer from '../../components/Footer'; // Assurez-vous que le chemin est correct
import PermacultureImage from '../../images/Farming3.webp'; // Assurez-vous que le chemin est correct

const TechniquesDePermaculture: React.FC = () => {
  return (
    <>
      <Head>
        <title>Techniques de Permaculture pour Jardins Urbains | UrbanRoots</title>
        <meta name="description" content="Découvrez des techniques de permaculture adaptées aux jardins urbains pour cultiver de manière durable." />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-24">
        <main className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8 text-center">Techniques de Permaculture pour Jardins Urbains</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            La permaculture est une approche durable qui permet de cultiver des plantes en harmonie avec la nature. Dans cet article, nous vous présentons des techniques de permaculture adaptées aux jardins urbains, afin de maximiser l'espace et de minimiser l'impact environnemental.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="relative w-[600px] h-[400px]">
              <Image 
                src={PermacultureImage} 
                alt="Techniques de permaculture" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">1. Culture en Lasagne</h2>
            <p className="text-lg text-gray-700 mb-4">
              La culture en lasagne est une méthode de jardinage sans labour qui consiste à superposer des couches de matériaux organiques. En alternant des couches de carbone (comme le carton et les feuilles mortes) et de azote (comme les déchets de cuisine), vous créez un sol riche et fertile au fil du temps.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">2. Guildes de Plantes</h2>
            <p className="text-lg text-gray-700 mb-4">
              Les guildes de plantes consistent à associer différentes espèces qui s'entraident. Par exemple, cultiver des légumineuses à côté de plantes gourmandes en azote permet de fixer l'azote dans le sol, favorisant ainsi la croissance des autres plantes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">3. Récupération d'Eau de Pluie</h2>
            <p className="text-lg text-gray-700 mb-4">
              Installer un système de collecte d'eau de pluie est essentiel pour un jardin durable. Cette eau peut être utilisée pour arroser vos plantes, réduisant ainsi la consommation d'eau potable et les coûts associés.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">4. Compostage</h2>
            <p className="text-lg text-gray-700 mb-4">
              Le compostage transforme les déchets organiques en un amendement riche pour le sol. En compostant vos déchets de cuisine et de jardin, vous réduisez les déchets envoyés à la décharge tout en enrichissant votre sol.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">5. Culture Verticale</h2>
            <p className="text-lg text-gray-700 mb-4">
              La culture verticale permet de maximiser l'espace disponible, surtout dans les petits jardins urbains. Utilisez des treillis, des étagères ou des murs pour faire grimper vos plantes, ce qui améliore également la circulation de l'air.
            </p>
          </section>

          <div className="text-center">
            <Link href="/guides">
              <div className="inline-block bg-primary-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-500 transition-colors duration-300 ease-in-out cursor-pointer">
                Retour aux Guides
              </div>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TechniquesDePermaculture;