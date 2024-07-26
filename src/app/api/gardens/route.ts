import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface Garden {
  id: number;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

async function geocodeCity(city: string) {
  const response = await axios.get('https://nominatim.openstreetmap.org/search', {
    params: {
      q: city,
      format: 'json',
      limit: 1,
    },
  });

  if (response.data.length === 0) {
    throw new Error('City not found');
  }

  const { lat, lon } = response.data[0];
  return { lat: parseFloat(lat), lon: parseFloat(lon) };
}

export async function GET(request: NextRequest) {
  console.log('API route hit');
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  console.log('City:', city);

  if (!city) {
    return NextResponse.json({ error: 'Ville requise' }, { status: 400 });
  }

  try {
    console.log('Attempting to geocode city');
    const { lat, lon } = await geocodeCity(city);
    console.log('Geocoded coordinates:', { lat, lon });

    const radius = searchParams.get('radius') || '5000';
    const limit = searchParams.get('limit') || '50';

    const query = `
      [out:json][timeout:25];
      (
        node["leisure"="garden"](around:${radius},${lat},${lon});
        way["leisure"="garden"](around:${radius},${lat},${lon});
        relation["leisure"="garden"](around:${radius},${lat},${lon});
      );
      out center ${limit};
    `;

    console.log('Sending request to Overpass API');
    const response = await axios.get('https://overpass-api.de/api/interpreter', {
      params: { data: query }
    });

    console.log('Received response from Overpass API');

    if (response.data.elements.length === 0) {
      return NextResponse.json({ error: 'Aucun jardin trouvé' }, { status: 404 });
    }

    const gardens: Garden[] = response.data.elements.map((element: any, index: number) => ({
      id: element.id,
      name: element.tags.name || `Jardin ${index + 1}`,
      lat: element.lat || element.center.lat,
      lng: element.lon || element.center.lon,
      description: element.tags.description || 'Pas de description disponible'
    }));

    console.log('Gardens data:', gardens);
    return NextResponse.json(gardens);
    
  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des jardins', details: error.message }, { status: 500 });
  }
}
