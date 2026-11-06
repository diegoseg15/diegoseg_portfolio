import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/Common/ThemeProvider";
import { getAllProjects } from "@/lib/api/github";
import SetProjectsCache from "@/components/CacheProjects/SetProjectsCache.client";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Diego Segovia",
  description: "Portafolio web de proyectos de Diego Segovia.",
};

export default async function RootLayout({ children }) {
  const projects = await getAllProjects();

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Prevención de flash: aplica el tema guardado o el del SO antes de que React hidrate */}
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var STORAGE_KEY = "diegoseg:theme";
                var stored = null;
                try { stored = window.localStorage.getItem(STORAGE_KEY); } catch(e){}
                var theme = (stored === "light" || stored === "dark") ? stored :
                  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                document.documentElement.dataset.theme = theme;
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SetProjectsCache projects={projects} />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
