import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nicolematt.com'),
  title: 'Nicole & Matt Wedding',
  description: 'Please RSVP to our wedding!',
  openGraph: {
    images: 'https://nicolematt.com/og-bg.png',
    title: 'Nicole & Matt Wedding Website',
    description: 'Please RSVP to our wedding!',
    url: 'https://nicolematt.com',
    siteName: 'Nicole & Matt Wedding',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Matt Atkins',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('text-gray', inter.className)}>
        <main role="main">{children}</main>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
