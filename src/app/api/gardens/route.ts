import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface Garden {
  id: number;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

const NOMINATIM_API = "https://nominatim.openstreetmap.org/search";
const OVERPASS_API = "https://overpass-api.de/api/interpreter";

async function geocodeCity(city: string): Promise<{ lat: number; lon: number }> {
  console.log(`Geocoding city: ${city}`);
  try {
    const response = await axios.get(NOMINATIM_API, {
      params: {
        q: city,
        format: "json",
        limit: 1,
      },
    });

    if (response.data.length === 0) {
      throw new Error("City not found");
    }

    const { lat, lon } = response.data[0];
    console.log(`Geocoded coordinates: lat=${lat}, lon=${lon}`);
    return { lat: parseFloat(lat), lon: parseFloat(lon) };
  } catch (error) {
    console.error("Error during geocoding:", error);
    throw new Error(`Geocoding failed: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}

export async function GET(request: NextRequest) {
  console.log("API route hit");
  
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  console.log("City:", city);

  if (!city) {
    return NextResponse.json({ error: "Ville requise" }, { status: 400, headers });
  }

  try {
    const { lat, lon } = await geocodeCity(city);
    
    const radius = searchParams.get("radius") || "5000";
    const limit = searchParams.get("limit") || "50";

    const query = `
      [out:json][timeout:25];
      (
        node["landuse"="allotments"](around:${radius},${lat},${lon});
        way["landuse"="allotments"](around:${radius},${lat},${lon});
        relation["landuse"="allotments"](around:${radius},${lat},${lon});
        node["leisure"="garden"]["garden:type"="community"](around:${radius},${lat},${lon});
        way["leisure"="garden"]["garden:type"="community"](around:${radius},${lat},${lon});
        relation["leisure"="garden"]["garden:type"="community"](around:${radius},${lat},${lon});
        node["landuse"="community_garden"](around:${radius},${lat},${lon});
        way["landuse"="community_garden"](around:${radius},${lat},${lon});
        relation["landuse"="community_garden"](around:${radius},${lat},${lon});
        node["leisure"="garden"]["garden:type"="urban_farming"](around:${radius},${lat},${lon});
        way["leisure"="garden"]["garden:type"="urban_farming"](around:${radius},${lat},${lon});
        relation["leisure"="garden"]["garden:type"="urban_farming"](around:${radius},${lat},${lon});
      );
      out center ${limit};
    `;

    console.log("Sending request to Overpass API");
    const response = await axios.get(OVERPASS_API, {
      params: { data: query },
      timeout: 30000, // 30 seconds timeout
    });

    console.log(`Received response from Overpass API: ${response.data.elements.length} elements`);

    if (response.data.elements.length === 0) {
      return NextResponse.json(
        { error: "Aucun jardin urbain trouvé" },
        { status: 404, headers }
      );
    }

    const gardens: Garden[] = response.data.elements.map(
      (element: any, index: number) => ({
        id: element.id,
        name: element.tags.name || `Jardin urbain ${index + 1}`,
        lat: element.lat || element.center.lat,
        lng: element.lon || element.center.lon,
        description:
          element.tags.description ||
          "Jardin urbain ou espace d'agriculture urbaine",
      })
    );

    console.log(`Processed ${gardens.length} gardens`);
    return NextResponse.json(gardens, { headers });
  } catch (error: unknown) {
    console.error("Detailed error:", error);

    let errorMessage = "Erreur inconnue lors de la récupération des jardins urbains";
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    if (axios.isAxiosError(error)) {
      if (error.response) {
        statusCode = error.response.status;
        errorMessage = `Erreur API: ${error.response.data.error || error.message}`;
      } else if (error.request) {
        errorMessage = "Pas de réponse reçue du serveur";
      }
    }

    return NextResponse.json(
      {
        error: "Erreur lors de la récupération des jardins urbains",
        details: errorMessage,
      },
      { status: statusCode, headers }
    );
  }
}