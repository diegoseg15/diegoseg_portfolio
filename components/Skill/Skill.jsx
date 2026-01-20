"use client";

import { Cloud, Code, Database, DeviceMobile, PaintBrush } from "@phosphor-icons/react";
import { SkillCard } from "./SkillCard";

export default function Skills() {
    return (
        <section className="lg:px-20 px-5 space-y-14" id="skills">
            <h3 className="text-4xl font-bold text-black dark:text-gray-50">
                Áreas de experiencia
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
                <SkillCard
                    icon={<Code size={22} weight="bold" />}
                    title="Desarrollo Frontend"
                    description="Construcción de interfaces web modernas, accesibles y mantenibles."
                    stack={["HTML", "CSS", "JavaScript", "React", "NextJS", "Angular"]}
                />

                <SkillCard
                    icon={<Database size={22} weight="bold" />}
                    title="Backend & Arquitectura"
                    description="Diseño de APIs, lógica de negocio y arquitecturas escalables."
                    stack={["NodeJS", "PHP", "Python", "Java", "SpringBoot", "django", "MySQL", "MongoDB"]}
                />

                <SkillCard
                    icon={<DeviceMobile size={22} weight="bold" />}
                    title="Aplicaciones Móviles"
                    description="Aplicaciones móviles multiplataforma centradas en experiencia de usuario."
                    stack={["React Native", "expo"]}
                />

                <SkillCard
                    icon={<Cloud size={22} weight="bold" />}
                    title="Cloud & DevOps"
                    description="Despliegue, versionado y entornos productivos."
                    stack={["Docker", "Git", "Firebase", "Linux", "Nginx"]}
                />

                <SkillCard
                    icon={<PaintBrush size={22} weight="bold" />}
                    title="UX / UI aplicado"
                    description="Diseño funcional orientado a usabilidad y claridad visual."
                    stack={["Figma", "Responsive"]}
                />
            </div>
        </section>
    );
}