'use client';
import { useEffect, useState } from 'react';

const end = 1717221600000;

export default function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getRemainingTime = () => {
    const today = new Date().getTime();
    const time = end - today;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    setCountdown({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const counter = setInterval(getRemainingTime, 1000);
    return () => clearInterval(counter);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 lg:gap-10 -mt-5 lg:-mt-12">
      <div className="flex flex-col text-white items-center justify-center gap-1">
        <strong className="text-lg xl:text-5xl font-bold">
          {('0' + countdown.days).slice(-2)}
        </strong>
        <span className="text-xs lg:text-sm">Days</span>
      </div>
      <div className="flex flex-col text-white items-center justify-center gap-1">
        <strong className="text-lg xl:text-5xl font-bold">
          {('0' + countdown.hours).slice(-2)}
        </strong>
        <span className="text-xs lg:text-sm">Hours</span>
      </div>
      <div className="flex flex-col text-white items-center justify-center gap-1">
        <strong className="text-lg xl:text-5xl font-bold">
          {('0' + countdown.minutes).slice(-2)}
        </strong>
        <span className="text-xs lg:text-sm">Minutes</span>
      </div>
      <div className="flex flex-col text-white items-center justify-center gap-1">
        <strong className="text-lg xl:text-5xl font-bold">
          {('0' + countdown.seconds).slice(-2)}
        </strong>
        <span className="text-xs lg:text-sm">Seconds</span>
      </div>
    </div>
  );
}
