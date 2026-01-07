import type { Metadata } from "next";
import { Inter, Anton, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const anton = Anton({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Dikshit - Front-End Developer Portfolio",
  description: "I construct digital experiences where aesthetics meet architecture. A front-end developer obsessed with the details that make the web feel alive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${anton.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}