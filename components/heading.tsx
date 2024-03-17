import React from 'react';
import { cn } from '@/lib/utils';
import { Meow_Script } from 'next/font/google';

const meow = Meow_Script({ subsets: ['latin'], weight: '400' });

type Heading = {
  children: React.ReactNode;
};

export default function Heading({ children }: Heading) {
  return (
    <h2
      className={cn(
        'text-4xl xl:text-7xl mb-8 text-center leading-tight',
        meow.className
      )}
    >
      {children}
    </h2>
  );
}
