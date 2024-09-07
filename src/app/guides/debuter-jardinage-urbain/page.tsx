import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from '../../components/Navbar'; // Assurez-vous que le chemin est correct
import Footer from '../../components/Footer'; // Assurez-vous que le chemin est correct
import FraiseImage from '../../images/fraise.webp'; // Assurez-vous que le chemin est correct

const DebuterJardinageUrbain: React.FC = () => {
  return (
    <>
      <Head>
        <title>Débuter en Jardinage Urbain | UrbanRoots</title>
        <meta name="description" content="Guide pour débuter en jardinage urbain, avec des conseils pratiques et des ressources." />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12">
        <main className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8 text-center">Débuter en Jardinage Urbain</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Ce guide vous aidera à démarrer votre aventure dans le jardinage urbain, même si vous n'avez jamais jardiné auparavant. Découvrez les étapes essentielles pour créer un jardin florissant en milieu urbain.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="relative w-[600px] h-[400px]">
              <Image 
                src={FraiseImage} 
                alt="Fraises en pot" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">1. Choisir le Bon Emplacement</h2>
            <p className="text-lg text-gray-700 mb-4">
              L'emplacement est crucial pour le succès de votre jardin. Recherchez un endroit qui reçoit au moins 6 heures de soleil par jour. Évitez les zones ombragées par des bâtiments ou des arbres. Si vous avez un balcon ou une terrasse, ces espaces peuvent être idéaux pour le jardinage en conteneur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">2. Sélectionner les Plantes</h2>
            <p className="text-lg text-gray-700 mb-4">
              Commencez par des plantes faciles à cultiver, comme les herbes (basilic, menthe) et les légumes (radis, laitue). Renseignez-vous sur les plantes adaptées à votre climat et à votre espace. Les plantes aromatiques sont particulièrement adaptées aux petits espaces et peuvent être cultivées sur un rebord de fenêtre.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">3. Utiliser des Conteneurs</h2>
            <p className="text-lg text-gray-700 mb-4">
              Si vous manquez d'espace, envisagez d'utiliser des pots ou des jardinières. Assurez-vous qu'ils ont des trous de drainage pour éviter l'accumulation d'eau. Les pots en terre cuite sont idéaux car ils permettent une bonne circulation de l'air et de l'humidité.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">4. Arrosage et Entretien</h2>
            <p className="text-lg text-gray-700 mb-4">
              Arrosez régulièrement, surtout pendant les périodes sèches. Apprenez à reconnaître les signes de stress hydrique chez vos plantes, comme les feuilles flétries ou jaunies. Un bon entretien est essentiel pour un jardin sain. Pensez également à pailler vos plantes pour conserver l'humidité.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">5. Ressources Supplémentaires</h2>
            <p className="text-lg text-gray-700 mb-4">
              Consultez des livres, des blogs et des vidéos sur le jardinage urbain pour approfondir vos connaissances. N'hésitez pas à rejoindre des groupes de jardinage pour échanger des conseils et des expériences. Des applications mobiles peuvent également vous aider à suivre vos plantations et à planifier vos tâches.
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

export default DebuterJardinageUrbain;
