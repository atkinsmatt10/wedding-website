'use client';
import { useEffect, useState } from 'react';

const end = 1717221600000; // June 1, 2024 00:00:00 GMT

function Counter({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-white">
      <strong className="text-lg font-bold lg:text-3xl xl:text-5xl">
        {value}
      </strong>
      <span className="text-xs lg:text-sm xl:text-base">{label}</span>
    </div>
  );
}

const startValues = { years: 0, months: 0, days: 0 };

export default function Countdown() {
  const [countdown, setCountdown] = useState(startValues);

  const getRemainingTime = () => {
    const today = new Date();
    const startDate = new Date(end); // Rename for clarity
    const diffTime = today.getTime() - startDate.getTime(); // Calculate time elapsed since end date

    // If the end date hasn't passed yet, show 0 (or handle differently if needed)
    if (diffTime <= 0) {
      setCountdown({ years: 0, months: 0, days: 0 });
      return;
    }

    // Calculate years, months, days elapsed since the startDate
    let currentDate = new Date();
    let pastDate = new Date(end); // Keep a reference to the fixed past date

    let years = currentDate.getFullYear() - pastDate.getFullYear();
    let months = currentDate.getMonth() - pastDate.getMonth();
    let days = currentDate.getDate() - pastDate.getDate();

    // Adjust months and days if necessary
    if (days < 0) {
        months--;
        // Get days in the month *before* the current month
        const daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += daysInPrevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Ensure no negative values (shouldn't happen with count-up logic if diffTime > 0)
    if (years < 0 || months < 0 || days < 0) {
       // This case indicates an issue or the date hasn't passed, handle as 0
       setCountdown({ years: 0, months: 0, days: 0 });
    } else {
       setCountdown({ years, months, days });
    }
  };

  useEffect(() => {
    getRemainingTime();
    const counter = setInterval(getRemainingTime, 1000);
    return () => clearInterval(counter);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 bg-white/30 backdrop-blur-md px-4 py-1 rounded-full text-xs text-white lg:text-sm">
        Married for:
      </div>
      <div className="flex items-center justify-center gap-4 lg:gap-10">
        <Counter label="Years" value={countdown.years} />
        <Counter label="Months" value={countdown.months} />
        <Counter label="Days" value={countdown.days} />
      </div>
    </div>
  );
}
