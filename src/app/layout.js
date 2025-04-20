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

export const metadata = {
  title: "27by7 | Your Workforce, Our Priority.",
  description: "27by7 is a dynamic manpower outsourcing company dedicated to bridging the gap between skilled professionals and growing businesses. We provide flexible, reliable, and scalable workforce solutions across industries—empowering companies to stay agile and competitive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/27by7-logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
