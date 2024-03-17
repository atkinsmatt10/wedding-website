'use client';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Countdown from '@/components/countdown';
import { Meow_Script } from 'next/font/google';
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const meow = Meow_Script({ subsets: ['latin'], weight: '400' });

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <header
      className="relative w-full h-56 xl:h-[120vh] overflow-hidden"
      id="top"
    >
      <motion.img
        src="/main-hero.jpg"
        className="absolute -z-10 w-full h-auto left-0 top-32 lg:top-auto"
        style={{ y }}
      />
      <nav className="flex items-center justify-center gap-4 lg:gap-12 text-white text-xs lg:text-sm py-2 snap-x overflow-x-auto">
        <a href="#our-story">Our Story</a>
        <a href="#schedule">Schedule</a>
        <a href="#stay">Stay</a>
        <a href="#top">
          <Image
            src="/logo.svg"
            alt=""
            width={71}
            height={80}
            className="w-8 lg:w-auto"
          />
        </a>
        <a href="#faq">FAQ</a>
        <a href="#registry">Registry</a>
        <a href="#rsvp">RSVP</a>
      </nav>
      <div className="lg:mt-12">
        <h1
          className={cn(
            'text-center text-gold text-5xl xl:text-[180px] mb-5',
            meow.className
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
