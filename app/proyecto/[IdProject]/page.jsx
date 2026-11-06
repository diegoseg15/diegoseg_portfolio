import ProjectClient from "@/components/Projects/Project/ProjectClient";
import { publicProjects } from "@/lib/data/publicProject";
import { privateProjects } from "@/lib/data/privateProjects";
import Footer from "@/components/Footer/Footer";

export const generateStaticParams = async () => {

    const allProjects = [...publicProjects, ...privateProjects];

    return allProjects.map((project) => ({
        IdProject: project.slug.toString(),
    }));
};

export default async function Project({ params }) {
    const { IdProject } = await params;
    const project = [...publicProjects, ...privateProjects].find((item) => item.slug === IdProject);
    const initialRepo = project ? {
        name: project.name,
        description: project.description,
        topics: project.topics || [],
        homepage: project.homePage || null,
        html_url: project.private ? null : `https://github.com/diegoseg15/${project.slug}`,
        private: project.private === true,
        source: "local",
    } : null;
    return <>
        <ProjectClient key={IdProject} slug={IdProject} initialRepo={initialRepo} />
        <Footer />
    </>;
}
