import Footer from '@/components/Footer';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Luke256's Portfolio",
  description: "Luke256's Portfolio",
  
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className='bg-gray-900'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
