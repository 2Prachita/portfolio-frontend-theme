import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from '@/components/main/StarBackground';
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prachita Kotangale | Personal Portfolio",
  description: "Prachita is a Software Engineer with 1.5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
