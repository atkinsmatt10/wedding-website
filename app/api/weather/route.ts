import { NextResponse } from 'next/server';

interface WeatherData {
  current: {
    temp: number;
    weather: {
      description: string;
      icon: string;
    }[];
  };
}

export async function GET() {
  const lat = 39.9526;
  const lon = -75.1652;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!apiKey) {
    console.error("OpenWeatherMap API key is missing.");
    return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
  }

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=imperial&appid=${apiKey}`;

  try {
    // Fetch from OpenWeatherMap without internal caching, let the page component handle revalidation
    const res = await fetch(url, { cache: 'no-store' }); 
    
    if (!res.ok) {
      console.error("Failed to fetch weather data:", res.statusText);
      return NextResponse.json({ error: 'Failed to fetch weather data', details: res.statusText }, { status: res.status });
    }
    
    const data: WeatherData = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: 'Error fetching weather data', details: errorMessage }, { status: 500 });
  }
} 