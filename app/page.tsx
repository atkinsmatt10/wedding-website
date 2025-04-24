import HomePageClient from '@/components/home-page-client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FAQ from '@/components/faq';
import Heading from '@/components/heading';
import Carousel from '@/components/carousel';
import { RSVPForm } from '@/components/rsvp';
import Divider from '@/components/divider';
import AnimatedFlower from '@/components/flower';
import Hero from '@/components/hero';
import StayLink from '@/components/stay-link';
import ScheduleBox from '@/components/schedule-box';
import { config } from '@/config';
import SaveToCalendar from '@/components/save-to-calendar';
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import Confetti from '@/components/confetti';

// Define the type inline or move to a shared types file if used elsewhere
interface WeatherData {
  current: {
    temp: number;
    weather: {
      description: string;
      icon: string;
    }[];
  };
}

async function fetchWeatherData(): Promise<WeatherData | null> {
  // Construct the absolute URL for the API route
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'; // Fallback for local development
  const apiUrl = `${baseUrl}/api/weather`;
  
  try {
    // Use fetch with revalidation as before
    const res = await fetch(apiUrl, { next: { revalidate: 600 } }); // Revalidate every 10 minutes

    if (!res.ok) {
      // Log error based on response from the API route
      // Try to read as text first, as it might be an HTML error page
      const errorText = await res.text(); 
      console.error(`Failed to fetch weather data from API: ${res.status} ${res.statusText}`, errorText);
      // Try to parse as JSON only if it looks like JSON, otherwise log the text
      try {
        const errorBody = JSON.parse(errorText);
        console.error("Parsed error body:", errorBody);
      } catch (parseError) {
        // Ignore if it's not JSON, we already logged the text
      }
      return null;
    }
    const data: WeatherData = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data from API route:", error);
    return null;
  }
}

export default async function Home() {
  // Fetch weather data using the new function that calls the API route
  const weatherData = await fetchWeatherData();

  // Render the Client Component, passing the fetched data as props
  return <HomePageClient weatherData={weatherData} />;
}
