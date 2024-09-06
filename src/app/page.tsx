import Image from "next/image";
// src/app/pages/index.tsx
import React from 'react';
import About from '../app/components/About';
import Navbar from '../app/components/Navbar';
import HeroSection from '../app/components/HeroSection';
import Testimonials from '../app/components/Testimonials';
import ImpactSection from "./components/ImpactSection";
import Footer from "./components/Footer";



const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Testimonials />
            <ImpactSection />
            <Footer />
        </div>
    );
};

export default Home;

