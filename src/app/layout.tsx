import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const robotoCondensed = Roboto_Condensed({ weight: '300', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Olive',
  description: 'Olive - Community Recipes and Cookbooks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
