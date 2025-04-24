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
    const startDate = new Date(end); // Wedding date
    const diffTime = today.getTime() - startDate.getTime(); // Calculate time elapsed since end date

    // Log the values for debugging
    console.log('Countdown Check:', {
      today: today.toString(),
      startDate: startDate.toString(),
      diffTime: diffTime,
    });

    // If the end date hasn't passed yet, show 0
    if (diffTime <= 0) {
      console.log('Wedding date has not passed yet, setting elapsed time to 0.');
      setCountdown({ years: 0, months: 0, days: 0 });
      return;
    }

    // Calculate years, months, days elapsed since the wedding date
    let currentDate = new Date();
    let pastDate = new Date(end); // The wedding date

    let yearsElapsed = currentDate.getFullYear() - pastDate.getFullYear();
    let monthsElapsed = currentDate.getMonth() - pastDate.getMonth();
    let daysElapsed = currentDate.getDate() - pastDate.getDate();

    // If the current date's day is less than the past date's day,
    // it means a full month hasn't passed yet in terms of days.
    // Borrow days from the previous month.
    if (daysElapsed < 0) {
      monthsElapsed--;
      // Get the last day of the month *before* the current month
      const daysInLastFullMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      daysElapsed += daysInLastFullMonth;
    }

    // If the current date's month is less than the past date's month (or became negative after borrowing days),
    // it means a full year hasn't passed yet in terms of months.
    // Borrow months from the previous year.
    if (monthsElapsed < 0) {
      yearsElapsed--;
      monthsElapsed += 12;
    }

    // Final check: If yearsElapsed is negative after adjustments, something is wrong or date hasn't passed
    if (yearsElapsed < 0) {
       console.log('Negative years calculated, resetting elapsed time to 0.');
       setCountdown({ years: 0, months: 0, days: 0 });
    } else {
       console.log('Calculated elapsed time:', { years: yearsElapsed, months: monthsElapsed, days: daysElapsed });
       setCountdown({ years: yearsElapsed, months: monthsElapsed, days: daysElapsed });
    }
  };

  useEffect(() => {
    getRemainingTime();
    const counter = setInterval(getRemainingTime, 1000 * 60); // Update every minute
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
