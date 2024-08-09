import type { Metadata } from "next";
import "./globals.css";
import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
  subsets: ["latin"],
  variable: "--font-palanquin",
  weight: ["100", "200", "300", "400", "500", "600"]
})
export const metadata: Metadata = {
  title: "Masonry UI App",
  description: "Next.js Deep Linking & Masonry Grid Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={palanquin.className}>        {children}
      </body>
    </html>
  );
}
