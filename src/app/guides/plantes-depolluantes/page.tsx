import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from '../../components/Navbar'; // Assurez-vous que le chemin est correct
import Footer from '../../components/Footer'; // Assurez-vous que le chemin est correct
import IndoorPlantsImage from '../../images/Farming4.webp'; // Assurez-vous que le chemin est correct

const PlantesDepolluantes: React.FC = () => {
  return (
    <>
      <Head>
        <title>Plantes Dépolluantes pour Purifier l'Air de votre Intérieur | UrbanRoots</title>
        <meta name="description" content="Découvrez des plantes dépolluantes qui purifient l'air de votre intérieur et améliorent votre qualité de vie." />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-24">
        <main className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8 text-center">Plantes Dépolluantes pour Purifier l'Air de votre Intérieur</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Les plantes d'intérieur ne sont pas seulement décoratives, elles jouent également un rôle crucial dans la purification de l'air. Découvrez quelles plantes peuvent améliorer la qualité de l'air de votre maison.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="relative w-[600px] h-[400px]">
              <Image 
                src={IndoorPlantsImage} 
                alt="Plantes dépolluantes" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">1. Le Palmier Areca</h2>
            <p className="text-lg text-gray-700 mb-4">
              Le palmier Areca est reconnu comme l'un des meilleurs purificateurs d'air. Il élimine de nombreux polluants et augmente l'humidité de l'air, ce qui est bénéfique pour la santé.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">2. L'Aloe Vera</h2>
            <p className="text-lg text-gray-700 mb-4">
              En plus de ses propriétés médicinales, l'Aloe Vera est efficace pour éliminer le formaldéhyde de l'air. Elle nécessite peu d'entretien et s'épanouit avec un ensoleillement modéré.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">3. Le Ficus Robusta</h2>
            <p className="text-lg text-gray-700 mb-4">
              Ce ficus est connu pour sa capacité à absorber le formaldéhyde et d'autres toxines courantes. Il est facile à entretenir et ajoute une belle touche verte à votre intérieur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">4. La Fougère de Boston</h2>
            <p className="text-lg text-gray-700 mb-4">
              Cette plante est un excellent humidificateur d'air et aide à éliminer le formaldéhyde. Elle nécessite un environnement humide et une lumière indirecte.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">5. Le Lierre Anglais</h2>
            <p className="text-lg text-gray-700 mb-4">
              Le lierre est très efficace pour absorber le benzène et le formaldéhyde. Il est idéal pour les espaces intérieurs et peut être cultivé en pot ou en suspension.
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

export default PlantesDepolluantes;