import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { getAllProjects } from "@/lib/api/github";
import SetProjectsCache from "@/components/CacheProjects/SetProjectsCache.client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diego Segovia",
  description: "Portafolio web de proyectos de Diego Segovia.",
};

export default async function RootLayout({ children }) {

  const projects = await getAllProjects();

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  childbarscroll`}
      >
        <SetProjectsCache projects={projects} />
        <Header />
        {children}
      </body>
    </html>
  );
}
