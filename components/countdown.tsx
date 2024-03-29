'use client';
import { useEffect, useState } from 'react';

const end = 1717221600000;

function Counter({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col text-white items-center justify-center gap-1">
      <strong className="text-lg lg:text-3xl xl:text-5xl font-bold">
        {('0' + value).slice(-2)}
      </strong>
      <span className="text-xs lg:text-sm xl:text-base">{label}</span>
    </div>
  );
}

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
    <div className="flex items-center justify-center gap-4 lg:gap-10 -mt-5 xl:-mt-12">
      <Counter label="Days" value={countdown.days} />
      <Counter label="Hours" value={countdown.hours} />
      <Counter label="Minutes" value={countdown.minutes} />
      <Counter label="Seconds" value={countdown.seconds} />
    </div>
  );
}
