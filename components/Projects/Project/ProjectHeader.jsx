import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

export default function ProjectHeader({ project }) {
  return (
    <div className="mb-14">
      <h1 className="text-4xl font-extrabold mb-4">
        {project.name}
      </h1>

      {project.description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
          {project.description}
        </p>
      )}

      {/* Tech stack */}
      {project.topics?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {project.topics.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold rounded-full
                         bg-sky-100 text-sky-700
                         dark:bg-sky-900 dark:text-sky-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
                       px-5 py-2.5 rounded-md font-semibold
                       bg-slate-900 text-white
                       hover:bg-slate-800 transition"
          >
            <GithubLogo size={20} />
            Ver repositorio
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
                       px-5 py-2.5 rounded-md font-semibold
                       border border-slate-300
                       hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <ArrowSquareOut size={20} />
            Ver demo
          </a>
        )}
      </div>
    </div>
  );
}
