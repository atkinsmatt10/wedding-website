'use client';
import { cn } from '@/lib/utils';
import Countdown from '@/components/countdown';
import { Meow_Script } from 'next/font/google';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Navbar from './navbar';

const meow = Meow_Script({ subsets: ['latin'], weight: '400' });

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

export default function Hero() {
  const ref = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const { scrollYProgress, scrollY } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  scrollY.on('change', (position) => {
    if (position > window.innerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  return (
    <header
      className="relative w-full h-[65vh] sm:h-[110vh] lg:h-[75vh] xl:h-[85vh] 2xl:h-[120vh] overflow-hidden"
      id="top"
    >
      <motion.img
        src="/main-hero.jpg"
        className="absolute -z-10 w-full h-full object-cover object-bottom xl:h-auto sm:top-20 left-0 top-32 xl:top-auto"
        style={{ y }}
      />
      <Navbar isFixed={isFixed} />
      <div className="mt-8 sm:-mt-4 lg:mt-20 xl:mt-12">
        <h1
          className={cn(
            'text-center text-gold text-5xl lg:text-[100px] xl:text-[180px] mb-5',
            meow.className,
          )}
        >
          Nicole & Matt
        </h1>
        <Countdown />
      </div>
      <div ref={ref} />
    </header>
  );
}
