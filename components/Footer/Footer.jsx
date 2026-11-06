import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground">
              Diego Segovia
            </p>
            <p className="text-sm text-muted-foreground">
              Desarrollador Full Stack · Web & Mobile
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col md:flex-row gap-5 md:gap-8 text-sm text-muted-foreground">
            <Link
              href="/"
              className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Inicio
            </Link>
            <Link
              href="/proyecto"
              className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Proyectos
            </Link>
            <a
              href="https://github.com/diegoseg15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/diegoseg15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Diego Segovia. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
