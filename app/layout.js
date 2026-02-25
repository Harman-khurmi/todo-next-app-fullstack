import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ConnectDB } from "@/lib/config/db";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

ConnectDB().catch(error => console.error("DB connection error:", error));

export const metadata = {
  title: "To-do next-app",
  description: "A simple to-do app for your daily tasks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
