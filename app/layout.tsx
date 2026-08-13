import './globals.css';
import type { Metadata } from 'next';
import { Great_Vibes, Cormorant_Garamond, Playfair_Display, Poppins, Cinzel } from 'next/font/google';

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

const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thrishna-nidilesh.vercel.app'),
  title: 'Thrishna & Nidilesh · Wedding Invitation',
  description: 'With divine grace and the blessings of our elders, we warmly invite you to celebrate the wedding of Thrishna & Nidilesh.',
  openGraph: {
    title: 'Thrishna & Nidilesh · Wedding Invitation',
    description: 'With divine grace and the blessings of our elders, we warmly invite you to celebrate the wedding of Thrishna & Nidilesh.',
    url: 'https://thrishna-nidilesh.vercel.app',
    siteName: 'Thrishna & Nidilesh Wedding',
    images: [
      {
        url: 'https://thrishna-nidilesh.vercel.app/images/couple.jpg',
        width: 1200,
        height: 630,
        alt: 'Thrishna & Nidilesh Wedding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thrishna & Nidilesh · Wedding Invitation',
    description: 'With divine grace and the blessings of our elders, we warmly invite you to celebrate the wedding of Thrishna & Nidilesh.',
    images: ['https://thrishna-nidilesh.vercel.app/images/couple.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable} ${playfair.variable} ${poppins.variable} ${cinzel.variable}`}>
      <body className="font-cormorant bg-cream text-dark-brown antialiased">
        {children}
      </body>
    </html>
  );
}
