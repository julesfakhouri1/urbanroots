import type { Metadata } from "next";
import { Roboto, Caveat } from 'next/font/google';
import { Providers } from './Providers';
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: "Urban Roots",
  description: "Jardins Urbains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
         <body className={`${roboto.variable} ${caveat.variable}`}>
         <Providers>{children}</Providers>
         </body>
    </html>
  );
}
