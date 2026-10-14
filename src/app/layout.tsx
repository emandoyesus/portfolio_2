import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import BackgroundBeams from "@/components/ui/background-beams";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emandoyesus Tesfaye — Full Stack Developer",
  description:
    "Full-Stack Web & Mobile Developer and Software Engineering student at Mekelle University. Building practical, fast web applications with React, Next.js, TypeScript, Node.js and mobile apps for Android & iOS.",
  keywords: [
    "Emandoyesus Tesfaye",
    "software engineer",
    "full-stack developer",
    "web developer",
    "mobile developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Android",
    "iOS",
    "Mekelle University",
    "Mekelle Ethiopia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="relative flex min-h-full flex-col bg-ink text-chalk">
        {/* Aceternity Background Beams — animated page background */}
        <BackgroundBeams />

        {/* Grain texture overlay */}
        <div aria-hidden="true" className="texture-grain" />

        {/* Page Content */}
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
