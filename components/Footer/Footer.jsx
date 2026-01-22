export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Diego Segovia
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Desarrollador Full Stack · Web & Mobile
            </p>
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a
              href="/"
              className="hover:text-sky-600 transition"
            >
              Inicio
            </a>
            <a
              href="/proyecto"
              className="hover:text-sky-600 transition"
            >
              Proyectos
            </a>
            <a
              href="https://github.com/diegoseg15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/diegoseg15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Diego Segovia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
