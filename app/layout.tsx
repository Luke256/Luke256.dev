import Footer from '@/components/Footer';
import './globals.css';

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
