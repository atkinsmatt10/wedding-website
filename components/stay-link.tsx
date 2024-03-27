'use client';
import React, { useRef } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';

type StayLinkT = {
  title: string;
  href: string;
  label: string;
  align?: 'left' | 'middle' | 'right';
  children: React.ReactNode;
};
export default function StayLink({
  title,
  href,
  label,
  align = 'left',
  children,
}: StayLinkT) {
  const variants = {
    left: '',
    middle: 'xl:row-start-2 xl:col-start-2',
    right: 'xl:row-start-3 xl:col-start-3',
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className={cn(
        'xl:max-w-xs max-w-lg mx-auto w-full text-center',
        variants[align],
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ delay: 0.5 }}
      ref={ref}
    >
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-sm mb-4">{children}</p>
      <Button variant="default" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </Button>
    </motion.div>
  );
}
