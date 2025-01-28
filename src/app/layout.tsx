import type { Metadata } from 'next';
import './globals.css';
import '../styles/global.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import RecoilContextProvider from '@/providers/recoil-provider';

const trap300 = localFont({
  src: './fonts/Trap/Trap-Light.otf',
  variable: '--font-trap-300',
  weight: '300',
});

const trap = localFont({
  src: './fonts/Trap/Trap-Regular.otf',
  variable: '--font-trap',
  weight: '400',
});

const trap500 = localFont({
  src: './fonts/Trap/Trap-Medium.otf',
  variable: '--font-trap-500',
  weight: '500',
});

const trap600 = localFont({
  src: './fonts/Trap/Trap-SemiBold.otf',
  variable: '--font-trap-600',
  weight: '600',
});

const trap700 = localFont({
  src: './fonts/Trap/Trap-Bold.otf',
  variable: '--font-trap-700',
  weight: '700',
});

const trap800 = localFont({
  src: './fonts/Trap/Trap-ExtraBold.otf',
  variable: '--font-trap-800',
  weight: '800',
});

const trap900 = localFont({
  src: './fonts/Trap/Trap-Black.otf',
  variable: '--font-trap-900',
  weight: '900',
});

export const metadata: Metadata = {
  title: 'Algorand Nigeria',
  description: 'Algorand Nigeria',
  keywords: ['Web3', 'Algorand', 'Blockchain', 'Nigeria'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="image" content="/favicon.ico" />
        <meta property="og:title" content="Algorand Nigeria" />
        <meta property="og:description" content="Algorand Nigeria" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://algorand.ng" />
        <meta property="og:type" content="website" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&family=Noto+Sans&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body
        className={`${trap.variable} ${trap300.variable} ${trap500.variable} ${trap600.variable} ${trap700.variable} ${trap800.variable} ${trap900.variable} antialiased`}
      >
        <Toaster />
        <RecoilContextProvider>{children}</RecoilContextProvider>
      </body>
    </html>
  );
}
