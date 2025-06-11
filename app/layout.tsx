import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/lib/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

// Conditionally import Inter font to prevent AbortError during build
let inter: { className: string } | null = null;

if (process.env.NEXT_PUBLIC_NO_FONT_OPTIMIZATION !== '1') {
  try {
    const { Inter } = require('next/font/google');
    inter = Inter({ subsets: ['latin'] });
  } catch (error) {
    console.warn('Failed to load Google Font, falling back to system fonts');
    inter = null;
  }
}

export const metadata: Metadata = {
  title: 'Union Enterier - Kompani Ndërtimi në Kosovë',
  description: 'Union Enterier – Kompani Ndërtimi në Kosovë me 20+ vite përvojë, 130+ punëtorë, ekspertizë në fasada, suvatim, gips karton dhe më shumë. Kontaktoni tani!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter?.className || ''}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}