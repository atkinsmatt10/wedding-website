export interface WeatherData {
  current: {
    temp: number;
    weather: {
      description: string;
      icon: string;
    }[];
  };
}

// Function containing the core weather fetching logic
export async function getWeatherData(): Promise<WeatherData> {
  const lat = 39.9526;
  const lon = -75.1652;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!apiKey) {
    console.error("OpenWeatherMap API key is missing.");
    // Throw an error for internal handling
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