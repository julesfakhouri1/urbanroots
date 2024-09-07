"use client";
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLeaf } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialIconProps {
  Icon: IconType;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, label }) => (
  <a
    href="#"
    aria-label={`Lien vers ${label}`}
    className="text-primary-300 hover:text-white transition-colors duration-300 text-xl"
  >
    <Icon />
  </a>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const socialIcons: SocialIconProps[] = [
    { Icon: FaFacebook, label: 'Facebook' },
    { Icon: FaTwitter, label: 'Twitter' },
    { Icon: FaInstagram, label: 'Instagram' },
    { Icon: FaLinkedin, label: 'LinkedIn' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer l'email à votre backend
    console.log('Email soumis:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000); // Le message disparaît après 5 secondes
  };

  return (
    <footer className="bg-gradient-to-b from-primary-800 to-primary-900 text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FaLeaf />
              <span className="ml-2">Urban Roots</span>
            </h2>
            <p className="text-primary-200">Transformons ensemble nos espaces urbains.</p>
            <div className="flex space-x-4 mt-4">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} {...icon} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">Liens Utiles</h3>
            <ul className="space-y-2">
              {['Jardins', 'Forum', 'Ressources', 'Education', 'Environnement'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-primary-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">Newsletter</h3>
            <p className="text-primary-200 mb-4">Restez informé de nos dernières actualités !</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2" aria-labelledby="newsletter-heading">
              <div className="flex">
                <label htmlFor="email" className="sr-only">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="bg-primary-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-300 flex-grow"
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="bg-primary-300 text-primary-800 px-4 py-2 rounded-r-md hover:bg-primary-200 transition-colors duration-300"
                >
                  S'abonner
                </button>
              </div>
              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 text-sm"
                  >
                    Merci de votre inscription ! Vous recevrez bientôt nos actualités.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
        <div className="border-t border-primary-600 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-200">© {new Date().getFullYear()} Urban Roots. Tous droits réservés.</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary-300 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary-300 animate-pulse delay-1000"></div>
      </div>
    </footer>
  );
};

export default Footer;
