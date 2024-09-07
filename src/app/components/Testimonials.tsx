// src/app/components/Testimonials.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const avatarSvgs = [
  <svg key="1" viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><title>Avatar 1</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#0ebeff"></rect><rect x="0" y="0" width="36" height="36" transform="translate(6 6) rotate(192 18 18) scale(1)" fill="#754cac" rx="6"></rect><g transform="translate(4 1) rotate(-2 18 18)"><path d="M13,19 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>,
  <svg key="2" viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><title>Avatar 2</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#f0c420"></rect><rect x="0" y="0" width="36" height="36" transform="translate(8 8) rotate(324 18 18) scale(1)" fill="#ff6d00" rx="6"></rect><g transform="translate(4 4) rotate(-4 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="#FFFFFF" fill="none" strokeLinecap="round"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>,
  <svg key="3" viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><title>Avatar 3</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#ff8c00"></rect><rect x="0" y="0" width="36" height="36" transform="translate(0 0) rotate(324 18 18) scale(1)" fill="#40c463" rx="36"></rect><g transform="translate(0 0) rotate(-4 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="#FFFFFF" fill="none" strokeLinecap="round"></path><rect x="13" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="21" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>,
];

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Grâce à UrbanRoots, notre quartier est devenu un véritable havre de paix. Les jardins communautaires ont renforcé les liens entre voisins.",
      name: "Alice D.",
    },
    {
      quote: "Participer aux projets de jardinage avec UrbanRoots a été une expérience incroyablement enrichissante. J'ai appris tant de choses et rencontré des gens formidables.",
      name: "Jean-Philippe L.",
    },
    {
      quote: "UrbanRoots m'a permis de découvrir une passion pour le jardinage que je ne soupçonnais pas. La communauté est accueillante et toujours prête à aider.",
      name: "Sophie F.",
    },
  ];

  return (
    <motion.section 
      className="bg-gradient-to-b from-primary-50 to-white py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-primary-700"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ce que disent nos membres
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="w-full md:w-1/3 max-w-md"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center h-full"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-24 h-24 mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {avatarSvgs[index]}
                </motion.div>
                <blockquote className="text-lg italic mb-6 text-gray-700 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="text-sm font-semibold text-primary-700">
                  - {testimonial.name}
                </footer>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;