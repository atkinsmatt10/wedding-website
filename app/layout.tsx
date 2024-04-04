import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nicolematt.com'),
  title: 'Nicole & Matt Wedding',
  description: 'Nicole & Matt Wedding',
  openGraph: {
    title: 'Nicole & Matt Wedding',
    description: 'Nicole & Matt Wedding',
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
      </body>
    </html>
  );
}
