import Image from "next/image";
// src/app/pages/index.tsx
import React from 'react';
import LandingPage from '../app/components/LandingPage';
import Navbar from '../app/components/Navbar';


const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <LandingPage />
        </div>
    );
};

export default Home;

