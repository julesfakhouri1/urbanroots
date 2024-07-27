"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

// Correction pour l'icône par défaut de Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

interface Garden {
  id: number;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

const GardensPage: React.FC = () => {
  const [gardens, setGardens] = useState<Garden[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([43.7323492, 7.4276832]); // Coordonnées par défaut de Monaco
  const [searchCity, setSearchCity] = useState('');
  const [error, setError] = useState('');
  const mapRef = useRef<L.Map | null>(null);

  const fetchGardens = async (city: string) => {
    try {
      setError('');
      const response = await axios.get(`http://localhost:3000/api/gardens?city=${encodeURIComponent(city)}`);
      console.log('API response:', response.data);
      
      if (Array.isArray(response.data) && response.data.length > 0) {
        setGardens(response.data);
        const { lat, lng } = response.data[0];
        console.log('Setting map center:', [lat, lng]);
        setMapCenter([lat, lng]);
      } else {
        setError('Aucun jardin trouvé pour cette ville');
      }
    } catch (error) {
      console.error('Erreur détaillée:', error.response?.data || error.message);
      setError(`Erreur lors de la récupération des jardins: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCity.trim() !== '') {
      fetchGardens(searchCity);
    } else {
      setError('Nom de la ville requis');
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(mapCenter, 13);
    }
  }, [mapCenter]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-primary-600 mb-2">Carte des Jardins</h1>
          <p className="text-lg text-gray-700 mb-6">Recherchez jusqu'à 50 jardins proches de chez vous!</p>
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Nom de la ville"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="border rounded px-4 py-2"
              />
              <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
                Rechercher
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <MapContainer 
            ref={mapRef}
            center={mapCenter} 
            zoom={13} 
            style={{ height: '600px', width: '100%' }}
            key={mapCenter.join(',')} // Force re-render on center change
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {gardens.map((garden) => (
              <Marker key={garden.id} position={[garden.lat, garden.lng]}>
                <Popup>
                  <h3 className="text-xl">{garden.name}</h3>
                  {garden.description !== 'Pas de description disponible' && <p>{garden.description}</p>}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Liste des Jardins</h2>
            <ul className="space-y-4">
              {gardens.map((garden) => (
                <li key={garden.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold">{garden.name}</h3>
                  {garden.description !== 'Pas de description disponible' && (
                    <p className="text-gray-700 mt-2">{garden.description}</p>
                  )}
                  <p className="text-gray-500 mt-2">
                    Latitude: {garden.lat.toFixed(6)}, Longitude: {garden.lng.toFixed(6)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GardensPage;
