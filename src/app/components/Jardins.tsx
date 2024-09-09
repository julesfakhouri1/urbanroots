"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import dynamic from 'next/dynamic';
import { debounce } from 'lodash';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Header = dynamic(() => import('../components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
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
  const [mapCenter, setMapCenter] = useState<[number, number]>([48.8566, 2.3522]);
  const [searchCity, setSearchCity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  const fetchGardens = useCallback(async (city: string) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(`https://www.urban-root.site/api/gardens?city=${encodeURIComponent(city)}`);
      console.log("API response:", response.data);

      if (Array.isArray(response.data) && response.data.length > 0) {
        setGardens(response.data);
        const { lat, lng } = response.data[0];
        console.log("Setting map center:", [lat, lng]);
        setMapCenter([lat, lng]);
      } else {
        setError("Aucun jardin trouvé pour cette ville");
      }
    } catch (error: unknown) {
      console.error("Erreur détaillée:", error);
      if (axios.isAxiosError(error)) {
        setError(`Erreur lors de la récupération des jardins: ${error.response?.data?.error || error.message}`);
      } else {
        setError("Erreur inconnue lors de la récupération des jardins");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedFetchGardens = useCallback(
    debounce((city: string) => fetchGardens(city), 300),
    [fetchGardens]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCity.trim() !== "") {
      fetchGardens(searchCity);
    } else {
      setError("Nom de la ville requis");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(e.target.value);
    if (e.target.value.trim() !== "") {
      debouncedFetchGardens(e.target.value);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-3xl font-bold text-primary-600 mb-2">
            Carte des Jardins
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Recherchez jusqu'à 50 jardins proches de chez vous!
          </p>
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Nom de la ville"
                value={searchCity}
                onChange={handleInputChange}
                className="border rounded px-4 py-2 flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Recherche...' : 'Rechercher'}
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <MapContainer
            ref={mapRef}
            center={mapCenter}
            zoom={13}
            style={{ height: "600px", width: "100%", zIndex: 1 }}
            key={mapCenter.join(",")}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {gardens.map((garden) => (
              <Marker key={garden.id} position={[garden.lat, garden.lng]}>
                <Popup>
                  <h3 className="text-xl">{garden.name}</h3>
                  {garden.description !== "Pas de description disponible" && (
                    <p>{garden.description}</p>
                  )}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              Liste des Jardins
            </h2>
            {gardens.length > 0 ? (
              <ul className="space-y-4">
                {gardens.map((garden) => (
                  <li
                    key={garden.id}
                    className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold">{garden.name}</h3>
                    {garden.description !== "Pas de description disponible" && (
                      <p className="text-gray-700 mt-2">{garden.description}</p>
                    )}
                    <p className="text-gray-500 mt-2">
                      Latitude: {garden.lat.toFixed(6)}, Longitude: {garden.lng.toFixed(6)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Aucun jardin trouvé. Essayez de rechercher une ville.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GardensPage;