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

export default function Project() {
    return <>
        <ProjectClient />
        <Footer />
    </>;
}
