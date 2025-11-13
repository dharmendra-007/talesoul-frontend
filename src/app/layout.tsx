import type { Metadata } from "next";
import { Geist, Geist_Mono , Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500" , "600"],
  variable: "--font-poppins",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Talesoul - coming soon",
  description: "TaleSoul is the world's first emotional currency platform where your feelings have value. Share emotions, earn SoulCoins, connect with guides, and join a kind, judgment-free community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
