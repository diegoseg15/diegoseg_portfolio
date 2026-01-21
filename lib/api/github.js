import { normalizeGithubRepo } from "@/lib/utils/normalizeGithubRepo";
import { privateProjects } from "@/lib/data/privateProjects";


export async function publicRepos() {
    try {
        const res = await fetch(
            "https://api.github.com/users/diegoseg15/repos",
            {
                headers: {
                    Accept: "application/vnd.github.mercy-preview+json",
                },
            }
        );

        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }

        const repos = await res.json();

        // 🔹 Filtrar SOLO repos con topic "official"
        const officialRepos = repos.filter(
            (repo) => Array.isArray(repo.topics) && repo.topics.includes("official")
        );

        const reposWithImage = await Promise.all(
            officialRepos.map(async (repo) => {
                try {
                    const readmeRes = await fetch(
                        `https://api.github.com/repos/diegoseg15/${repo.name}/readme`
                    );

                    if (!readmeRes.ok) {
                        return { ...repo, readmeImage: null };
                    }

                    const readmeData = await readmeRes.json();
                    const decoded = atob(readmeData.content);

                    // Buscar primera imagen del README
                    const match = decoded.match(/!\[.*?\]\((.*?)\)/);
                    let imageUrl = match ? match[1] : null;

                    // 🔹 Normalizar imágenes relativas
                    if (imageUrl && imageUrl.startsWith(".")) {
                        imageUrl = `https://raw.githubusercontent.com/diegoseg15/${repo.name}/main/${imageUrl.replace(
                            /^.\//,
                            ""
                        )}`;
                    }

                    return {
                        ...repo,
                        readmeImage: imageUrl,
                    };
                } catch {
                    return { ...repo, readmeImage: null, readmeSource: "github" };
                }
            })
        );

        return reposWithImage;
    } catch (error) {
        console.error("Error al obtener repositorios:", error);
        return [];
    }
}

export async function getAllProjects() {
    try {
        const githubRepos = await publicRepos();
        const publicProjects = githubRepos.map(normalizeGithubRepo);

        const allProjects = [
            ...privateProjects,
            ...publicProjects,
        ];

        // 🔹 Ordenar alfabéticamente por nombre
        allProjects.sort((a, b) =>
            a.name.localeCompare(b.name, "es", { sensitivity: "base" })
        );

        return allProjects;
    } catch (error) {
        console.error("Error al obtener proyectos:", error);
        return privateProjects; // fallback elegante
    }
}


function decodeBase64Utf8(base64) {
    const clean = base64.replace(/\n/g, "");
    const binary = atob(clean);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
}

export async function getRepoReadme(slug) {
  try {
    const project = privateProjects.find((p) => p.slug === slug);

    // 🔒 PROYECTO PRIVADO → SOLO LOCAL
    if (project?.private === true) {
      let readme = null;

      if (project.readmeType === "local" && project.readmePath) {
        const res = await fetch(project.readmePath);
        readme = res.ok ? await res.text() : null;
      }

      return {
        readme,
        repo: {
          name: project.name,
          description: project.description || null,
          topics: project.topics || [],
          homepage: project.homePage || null,
          private: true,
          source: "local",
        },
      };
    }

    // 🌐 SOLO SI ES PÚBLICO → GITHUB
    if (!project?.githubRepo) {
      // No hay repo público asociado
      return null;
    }

    const repoName = project.githubRepo;

    // ⬇️ recién aquí se llama a GitHub
    const repoRes = await fetch(
      `https://api.github.com/repos/diegoseg15/${repoName}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!repoRes.ok) return null;

    const repoData = await repoRes.json();

    // README GitHub
    const readmeRes = await fetch(
      `https://api.github.com/repos/diegoseg15/${repoName}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    let readme = null;
    if (readmeRes.ok) {
      const readmeJson = await readmeRes.json();
      if (readmeJson?.content) {
        readme = decodeBase64Utf8(readmeJson.content);
      }
    }

    return {
      readme,
      repo: {
        name: repoData.name,
        description: repoData.description,
        topics: repoData.topics || [],
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        language: repoData.language,
        html_url: repoData.html_url,
        homepage: repoData.homepage,
        private: false,
        source: "github",
      },
    };
  } catch (error) {
    console.error("Error al obtener repo y README:", error);
    return null;
  }
}
