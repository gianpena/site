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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
