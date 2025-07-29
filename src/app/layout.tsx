import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = { 
  title: 'Madhav Kataria | AI Engineer & Software Developer',
  description: 'Advancing artificial intelligence and building innovative software solutions. Portfolio of Madhav Kataria featuring AI projects, machine learning research, and cutting-edge development work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans min-h-screen`}>
        {/* Glass container wrapper */}
        <div className="relative min-h-screen flex flex-col">
          <Header />
          
          {/* Main content with glass-aware spacing */}
          <main className="flex-grow relative z-10">
            {/* Content container with glass background */}
            <div className="container mx-auto px-6 pb-12 pt-24 relative">
              {/* Subtle glass overlay for content area */}
              <div className="absolute inset-0 glass rounded-3xl opacity-30 pointer-events-none" />
              
              {/* Actual content */}
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
        
        <Toaster />
      </body>
    </html>
  );
}
