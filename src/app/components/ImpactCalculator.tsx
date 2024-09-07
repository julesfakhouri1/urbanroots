"use client";
import React, { useState } from 'react';

const EnvironmentalImpactCalculator: React.FC = () => {
  const [gardenSize, setGardenSize] = useState(0);
  const [plants, setPlants] = useState({ legumes: 0, fruits: 0, herbes: 0 });
  const [practices, setPractices] = useState({ composting: false, rainwaterHarvesting: false });

  const calculateImpact = () => {
    const co2Reduction = gardenSize * 1.8;
    const waterSaved = gardenSize * 0.6 * 365 + (practices.rainwaterHarvesting ? gardenSize * 15 : 0);
    const wasteReduced = (plants.legumes + plants.fruits) * 2 + (practices.composting ? 150 : 0);
    const foodProduction = (plants.legumes * 3 + plants.fruits * 2 + plants.herbes * 0.5) * (gardenSize / 10);

    return { co2Reduction, waterSaved, wasteReduced, foodProduction };
  };

  const impact = calculateImpact();

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-xl shadow-2xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-primary-700 mb-6 text-center">Calculateur d'Impact Environnemental</h2>
      
      <div className="mb-6">
        <label className="block text-primary-600 text-lg font-semibold mb-2">
          Taille du jardin (m²)
          <input
            type="number"
            value={gardenSize}
            onChange={(e) => setGardenSize(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-2"
          />
        </label>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-primary-600 mb-3">Types de plantes</h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(plants).map((plant) => (
            <label key={plant} className="block">
              <span className="text-primary-600">{plant.charAt(0).toUpperCase() + plant.slice(1)}</span>
              <input
                type="number"
                value={plants[plant as keyof typeof plants]}
                onChange={(e) => setPlants({...plants, [plant]: Number(e.target.value)})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-2"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-primary-600 mb-3">Pratiques de jardinage</h3>
        <div className="flex space-x-4">
          {Object.entries(practices).map(([practice, value]) => (
            <label key={practice} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setPractices({...practices, [practice]: e.target.checked})}
                className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-primary-600">{practice === 'composting' ? 'Compostage' : 'Récupération d\'eau de pluie'}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-inner">
        <h3 className="text-2xl font-bold text-primary-700 mb-4 text-center">Votre Impact Annuel</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-primary-600">Réduction de CO2 :</span>
              <span className="text-2xl font-bold text-green-600">{impact.co2Reduction.toFixed(1)} kg</span>
            </div>
            <p className="text-sm text-gray-600">Votre jardin absorbe du CO2 de l'atmosphère, contribuant ainsi à la lutte contre le changement climatique. (Source: Estimation moyenne basée sur des études environnementales)</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-primary-600">Eau économisée :</span>
              <span className="text-2xl font-bold text-blue-600">{impact.waterSaved.toFixed(0)} L</span>
            </div>
            <p className="text-sm text-gray-600">En cultivant vos propres plantes et en récupérant l'eau de pluie, vous réduisez votre consommation d'eau potable. (Source: Estimation moyenne basée sur des pratiques de jardinage durable)</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-primary-600">Déchets réduits :</span>
              <span className="text-2xl font-bold text-yellow-600">{impact.wasteReduced.toFixed(1)} kg</span>
            </div>
            <p className="text-sm text-gray-600">En produisant vos propres aliments et en compostant, vous réduisez les emballages et les déchets organiques envoyés en décharge. (Source: Estimation moyenne basée sur des pratiques de compostage et de réduction des déchets)</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-primary-600">Production alimentaire :</span>
              <span className="text-2xl font-bold text-orange-200">{impact.foodProduction.toFixed(1)} kg</span>
            </div>
            <p className="text-sm text-gray-600">Cette estimation représente la quantité de nourriture que vous pourriez produire, réduisant ainsi votre dépendance aux produits du commerce. (Source: Estimation moyenne basée sur des rendements agricoles)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalImpactCalculator;