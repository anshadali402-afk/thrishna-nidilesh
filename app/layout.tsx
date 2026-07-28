import './globals.css';
import type { Metadata } from 'next';
import { Great_Vibes, Cormorant_Garamond, Playfair_Display, Poppins } from 'next/font/google';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aarav & Meera · Wedding Invitation',
  description: 'With divine grace and the blessings of our elders, we invite you to celebrate the wedding of Aarav & Meera.',
  openGraph: {
    title: 'Aarav & Meera · Wedding Invitation',
    description: 'With divine grace and the blessings of our elders, we invite you to celebrate the wedding of Aarav & Meera.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-cream text-dark-brown antialiased">
        {children}
      </body>
    </html>
  );
}
