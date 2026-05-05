import type { Metadata } from "next";
import Header from './header';
import Footer from './footer';
import './styles.css';

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
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: '1' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
