import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../images/Jardin6.webp'; // Assurez-vous d'avoir cette image
import environmentImage1 from '../images/Potager.webp'; // Assurez-vous d'avoir cette image
import environmentImage2 from '../images/Jardin1.webp'; // Assurez-vous d'avoir cette image
import EnvironmentalImpactCalculator from '../components/ImpactCalculator';

const EnvironnementPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bénéfices du Jardinage Urbain pour l'Environnement | UrbanRoots</title>
        <meta name="description" content="Découvrez les nombreux bénéfices du jardinage urbain pour l'environnement et comment vous pouvez contribuer à un avenir plus vert." />
      </Head>
      <Navbar />
      <div className="relative h-[40vh]">
        <Image
          src={heroImage}
          alt="Bénéfices du jardinage urbain pour l'environnement"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight">
            Bénéfices du <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Jardinage Urbain
            </span>
            <br />
            pour l'Environnement
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4">
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Le jardinage urbain ne se limite pas à embellir nos villes. Il joue un rôle crucial dans la protection de l'environnement et la promotion de la durabilité. Découvrez comment vous pouvez contribuer à un avenir plus vert en adoptant des pratiques de jardinage urbain.
        </p>

 {/* Ajout du CTA ici */}
 <div className="text-center mb-16">
          <Link href="#calculateur-impact" passHref>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01m6.938-4H18.5a1.5 1.5 0 00-1.5 1.5V17m-1.5-1.5V13a1.5 1.5 0 00-1.5-1.5H6.062a1.5 1.5 0 00-1.5 1.5v2.5m0 0V17m0 0H4.5a1.5 1.5 0 00-1.5 1.5v1.5m16.938-4H19.5a1.5 1.5 0 00-1.5 1.5v1.5m-1.5-1.5V17m0 0H6.062m0 0V17m0 0h.01"></path>
                </svg>
                Calculez l'Impact de Votre Jardin
              </span>
            </button>
          </Link>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Réduction de l'Empreinte Carbone</h2>
          <p className="text-lg text-gray-700 mb-4">
            Le jardinage urbain aide à réduire l'empreinte carbone des villes de plusieurs façons. Les plantes absorbent le dioxyde de carbone et libèrent de l'oxygène, améliorant ainsi la qualité de l'air. De plus, cultiver ses propres légumes réduit la dépendance aux produits transportés sur de longues distances, diminuant ainsi les émissions de gaz à effet de serre.
          </p>
          <div className="relative w-full h-64 mb-4">
            <Image
              src={environmentImage1}
              alt="Réduction de l'empreinte carbone"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-700">
            En intégrant des pratiques de compostage, les jardiniers urbains peuvent également réduire la quantité de déchets organiques envoyés aux décharges, où ils produisent du méthane, un puissant gaz à effet de serre. Le compostage transforme ces déchets en un amendement riche pour le sol, bouclant ainsi le cycle des nutriments.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Promotion de la Biodiversité</h2>
          <p className="text-lg text-gray-700 mb-4">
            Les jardins urbains créent des habitats pour une variété de plantes, d'insectes et d'animaux. En plantant une diversité de fleurs, d'herbes et de légumes, les jardiniers peuvent attirer des pollinisateurs comme les abeilles et les papillons, essentiels pour la pollinisation des cultures alimentaires.
          </p>
          <div className="relative w-full h-64 mb-4">
            <Image
              src={environmentImage2}
              alt="Promotion de la biodiversité"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-700">
            Les jardins urbains peuvent également servir de refuges pour les oiseaux et les petits mammifères, contribuant à la conservation de la faune en milieu urbain. En intégrant des plantes indigènes, les jardiniers peuvent soutenir les écosystèmes locaux et favoriser la résilience écologique.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Gestion Durable de l'Eau</h2>
          <p className="text-lg text-gray-700 mb-4">
            Le jardinage urbain encourage l'utilisation efficace de l'eau. Les techniques comme le paillage, l'arrosage goutte-à-goutte et la collecte des eaux de pluie permettent de conserver l'eau et de réduire le ruissellement. Ces pratiques aident à maintenir l'humidité du sol et à minimiser l'évaporation.
          </p>
          <p className="text-lg text-gray-700">
            En réduisant le besoin en eau potable pour l'irrigation, les jardiniers urbains contribuent à la conservation des ressources en eau. De plus, les plantes aident à filtrer les polluants de l'eau de pluie, améliorant ainsi la qualité de l'eau qui pénètre dans les systèmes de drainage urbains.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Réduction de la Chaleur Urbaine</h2>
          <p className="text-lg text-gray-700 mb-4">
            Les espaces verts urbains jouent un rôle crucial dans la réduction de l'effet d'îlot de chaleur urbain. Les plantes et les arbres fournissent de l'ombre et refroidissent l'air par évapotranspiration, réduisant ainsi les températures ambiantes. Cela peut diminuer la demande en climatisation et réduire la consommation d'énergie.
          </p>
          <p className="text-lg text-gray-700">
            En intégrant des toits et des murs verts, les bâtiments peuvent bénéficier d'une isolation supplémentaire, réduisant les coûts énergétiques et améliorant le confort intérieur. Ces techniques contribuent également à la réduction des émissions de gaz à effet de serre associées à la production d'énergie.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Éducation et Sensibilisation</h2>
          <p className="text-lg text-gray-700 mb-4">
            Le jardinage urbain offre une plateforme éducative pour sensibiliser les citadins à l'importance de l'environnement. Les jardins communautaires et les programmes éducatifs peuvent enseigner aux enfants et aux adultes les principes de la durabilité, de la biodiversité et de la gestion des ressources.
          </p>
          <p className="text-lg text-gray-700">
            En participant à des activités de jardinage, les individus développent une connexion plus profonde avec la nature et une compréhension des impacts environnementaux de leurs actions quotidiennes. Cette sensibilisation peut conduire à des comportements plus durables et à une plus grande implication dans la protection de l'environnement.
          </p>
        </section>

        <section id="calculateur-impact" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Calculez Votre Impact</h2>
          <p className="text-lg text-gray-700 mb-4">
            Utilisez notre calculateur pour estimer l'impact environnemental de votre jardin urbain.
          </p>
          <EnvironmentalImpactCalculator />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EnvironnementPage;