import Image from "next/image";
// src/app/pages/index.tsx
import React from 'react';
import About from '../app/components/About';
import Navbar from '../app/components/Navbar';
import HeroSection from '../app/components/HeroSection';
import Testimonials from '../app/components/Testimonials';




const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Testimonials />
        </div>
    );
};

export default Home;

