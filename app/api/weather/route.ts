import { NextResponse } from 'next/server';

export interface WeatherData { // Export interface for use in page.tsx
  current: {
    temp: number;
    weather: {
      description: string;
      icon: string;
    }[];
  };
}

// Exported function containing the core logic
export async function getWeatherData(): Promise<WeatherData> {
  const lat = 39.9526;
  const lon = -75.1652;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!apiKey) {
    console.error("OpenWeatherMap API key is missing.");
    // Throw an error instead of returning NextResponse, as this function is now internal
    throw new Error('API key is missing'); 
  }

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=imperial&appid=${apiKey}`;

  // Fetch from OpenWeatherMap without internal caching
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    const errorText = await res.text(); // Get error details
    console.error(`Failed to fetch weather data from OpenWeatherMap: ${res.status} ${res.statusText}`, errorText);
    // Throw an error with details
    throw new Error(`Failed to fetch weather data: ${res.status} ${res.statusText}`);
  }

  const data: WeatherData = await res.json();
  return data;
}

// The GET handler now calls the exported function
export async function GET() {
  try {
    const data = await getWeatherData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in weather API route:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    // Determine appropriate status code based on error type if possible
    const status = errorMessage === 'API key is missing' ? 500 : 502; // 500 for config error, 502 for upstream error
    return NextResponse.json({ error: 'Error fetching weather data', details: errorMessage }, { status });
  }
} 