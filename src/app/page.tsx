import Image from "next/image";
// src/app/pages/index.tsx
import React from 'react';
import LandingPage from '../app/components/LandingPage';
import Navbar from '../app/components/Navbar';
import HeroSection from '../app/components/HeroSection';



const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <LandingPage />
        </div>
    );
};

export default Home;

