import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from '../../components/Navbar'; // Assurez-vous que le chemin est correct
import Footer from '../../components/Footer'; // Assurez-vous que le chemin est correct
import IndoorGardenImage from '../../images/Jardin2.webp'; // Assurez-vous que le chemin est correct

const JardinerEnInterieur: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jardiner en Intérieur | UrbanRoots</title>
        <meta name="description" content="Apprenez à jardiner en intérieur avec nos conseils pratiques pour cultiver des plantes chez vous." />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12">
        <main className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8 text-center">Jardiner en Intérieur</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Découvrez comment créer un jardin intérieur florissant, même dans les plus petits espaces. Ce guide vous fournira des conseils pratiques pour cultiver des plantes d'intérieur.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="relative w-[600px] h-[400px]">
              <Image 
                src={IndoorGardenImage} 
                alt="Jardin intérieur" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">1. Choisir les Bonnes Plantes</h2>
            <p className="text-lg text-gray-700 mb-4">
              Optez pour des plantes adaptées à l'intérieur, comme les pothos, les succulentes, ou les herbes aromatiques. Assurez-vous de choisir des plantes qui s'épanouissent dans les conditions de lumière de votre maison.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">2. Éclairage</h2>
            <p className="text-lg text-gray-700 mb-4">
              La lumière est essentielle pour la croissance des plantes. Placez vos plantes près des fenêtres ou utilisez des lampes de croissance si la lumière naturelle est insuffisante. Les plantes ont besoin de différentes intensités lumineuses, alors renseignez-vous sur les besoins spécifiques de chaque espèce.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">3. Arrosage et Humidité</h2>
            <p className="text-lg text-gray-700 mb-4">
              Arrosez vos plantes en fonction de leurs besoins spécifiques. Un excès d'eau peut entraîner la pourriture des racines. Utilisez des pots avec des trous de drainage pour éviter l'accumulation d'eau. L'humidité est également importante, surtout pour les plantes tropicales. Vous pouvez utiliser un humidificateur ou vaporiser de l'eau sur les feuilles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">4. Fertilisation</h2>
            <p className="text-lg text-gray-700 mb-4">
              Utilisez un engrais liquide équilibré pour nourrir vos plantes toutes les quelques semaines pendant la saison de croissance. Suivez les instructions sur l'emballage pour éviter de sur-fertiliser.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">5. Entretien Régulier</h2>
            <p className="text-lg text-gray-700 mb-4">
              Inspectez régulièrement vos plantes pour détecter les signes de maladies ou de parasites. Enlevez les feuilles mortes et taillez les plantes au besoin pour favoriser une croissance saine.
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

export default JardinerEnInterieur;
