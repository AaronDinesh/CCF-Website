import type { Metadata } from "next";
import { Navigation } from "./components/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white text-black p-4 text-center">
          <Navigation/>
        </header>
      
        {children}

        <footer className="bg-white text-black p-4 text-center">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
