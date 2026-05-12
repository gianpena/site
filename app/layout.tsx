import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import Header from './header';
import Footer from './footer';
import './styles.css';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: ":3",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSerif.className}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: '1' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
