import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '../components/providers.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '{{PROJECT_NAME}} - Web3 dApp',
  description: 'A modern Web3 dApp built with Next.js, RainbowKit, and wagmi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
