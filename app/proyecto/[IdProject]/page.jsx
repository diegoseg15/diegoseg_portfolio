"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getRepoReadme } from "@/lib/api/github";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import { GithubLogo } from "@phosphor-icons/react";

export default function Project() {
    const { IdProject } = useParams();
    const [readme, setReadme] = useState(null);
    const [repo, setRepo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!IdProject) return;

        (async () => {
            const data = await getRepoReadme(IdProject);

            if (!data) {
                setLoading(false);
                return;
            }

            setReadme(data.readme);
            setRepo(data.repo);
            setLoading(false);
        })();
    }, [IdProject]);


    if (loading) {
        return <p className="p-10">Cargando README...</p>;
    }

    if (!readme) {
        return <p className="p-10 pt-32">Este proyecto no tiene README.</p>;
    }

    return (
        <article className="lg:mx-20 lg:px-6 mx-5 pt-32">
            {repo && (
                <section className="mb-12 border-b border-slate-200 dark:border-slate-700 pb-20">
                    <div className="flex flex-col gap-4">
                        {/* Título */}
                        <h1 className="text-4xl font-extrabold tracking-tight">
                            {repo.name}
                        </h1>

                        {/* Descripción */}
                        {repo.description && (
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                {repo.description}
                            </p>
                        )}

                        {/* Métricas */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                            {repo.language && (
                                <span className="flex items-center gap-1">
                                    🧠 <span>{repo.language}</span>
                                </span>
                            )}

                            {repo.stars && <span>⭐ {repo.stars}</span>}
                            {repo.forks && <span>🍴 {repo.forks}</span>}
                        </div>

                        {/* Topics */}
                        {repo.topics?.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {repo.topics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="
                                            text-xs font-semibold
                                            bg-sky-100 text-sky-700
                                            dark:bg-sky-900/40 dark:text-sky-300
                                            px-3 py-1 rounded-full
                                        "
                                    >
                                        #{topic}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex space-x-4">
                            {/* CTA */}
                            {repo.html_url && (
                                <div className="pt-4">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex items-center gap-2
                                            bg-sky-900 text-white
                                            dark:bg-white dark:text-sky-900
                                            px-6 py-3 rounded-lg
                                            font-semibold
                                            transition hover:bg-sky-800
                                            dark:hover:bg-slate-200 
                                        "
                                    >
                                        <GithubLogo size={22} className="relative" />
                                        Ver repositorio en GitHub
                                    </a>
                                </div>
                            )}
                            {repo.homepage && (
                                <div className="pt-4">
                                    <a
                                        href={repo.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex items-center gap-2
                                            bg-white text-sky-900
                                            dark:bg-sky-900 dark:text-white
                                            px-6 py-3 rounded-lg
                                            font-semibold
                                            transition hover:bg-slate-200
                                            dark:hover:bg-sky-800 
                                    "
                                    >
                                        Ver website
                                        <span aria-hidden>↗</span>
                                    </a>
                                </div>
                            )}
                        </div>

                    </div>
                </section>
            )}

            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkGemoji]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-4xl font-extrabold mt-10 mb-6">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-3xl font-bold mt-8 mb-4">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-2xl font-semibold mt-6 mb-3">
                            {children}
                        </h3>
                    ),

                    p: ({ children }) => {
                        // 🔑 Si el párrafo contiene un <pre>, NO renderizar <p>
                        if (
                            Array.isArray(children) &&
                            children.some(
                                (child) => child?.type === "pre"
                            )
                        ) {
                            return <>{children}</>;
                        }

                        return (
                            <p className="text-base leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                                {children}
                            </p>
                        );
                    },

                    code: ({ inline, children }) =>
                        inline ? (
                            <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded text-sky-600">
                                {children}
                            </code>
                        ) : (
                            <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto mb-6">
                                <code>{children}</code>
                            </pre>
                        ),

                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-sky-600 pl-4 italic my-6 text-gray-600 dark:text-gray-300">
                            {children}
                        </blockquote>
                    ),

                    ul: ({ children }) => (
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            {children}
                        </ul>
                    ),

                    ol: ({ children }) => (
                        <ol className="list-decimal pl-6 mb-4 space-y-2">
                            {children}
                        </ol>
                    ),

                    li: ({ children }) => (
                        <li className="leading-relaxed">{children}</li>
                    ),

                    a: ({ href, children }) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 hover:underline"
                        >
                            {children}
                        </a>
                    ),

                    img: ({ src, alt }) => (
                        <img
                            src={src}
                            alt={alt}
                            className="rounded-lg my-6 max-w-full"
                        />
                    ),
                }}
            >
                {readme}
            </ReactMarkdown>

        </article>


    );
}
