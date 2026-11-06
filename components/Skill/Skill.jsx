"use client";

import { Cloud, Code, Database, DeviceMobile, PaintBrush } from "@phosphor-icons/react";
import { SkillCard } from "./SkillCard";

export default function Skills() {
  return (
    <section
      className="max-w-7xl mx-auto lg:px-20 px-5 py-16 lg:py-24 min-h-dvh flex flex-col space-y-12"
      id="skills"
      tabIndex={-1}
    >
      <div className="flex items-baseline gap-3">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground">
          Áreas de experiencia
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          icon={<Code size={24} weight="bold" />}
          title="Desarrollo Frontend"
          description="Interfaces web modernas, accesibles y mantenibles."
          stack={["HTML", "CSS", "JavaScript", "React", "NextJS", "Angular"]}
        />

        <SkillCard
          icon={<Database size={24} weight="bold" />}
          title="Backend & Arquitectura"
          description="APIs, lógica de negocio y arquitecturas escalables."
          stack={["NodeJS", "PHP", "Python", "Java", "SpringBoot", "django", "MySQL", "MongoDB"]}
        />

        <SkillCard
          icon={<DeviceMobile size={24} weight="bold" />}
          title="Aplicaciones Móviles"
          description="Apps multiplataforma centradas en experiencia de usuario."
          stack={["React Native", "expo"]}
        />

        <SkillCard
          icon={<Cloud size={24} weight="bold" />}
          title="Cloud & DevOps"
          description="Despliegue, versionado y entornos productivos."
          stack={["Docker", "Git", "Firebase", "Linux", "Nginx"]}
        />

        <SkillCard
          icon={<PaintBrush size={24} weight="bold" />}
          title="UX / UI aplicado"
          description="Diseño funcional orientado a usabilidad y claridad visual."
          stack={["Figma", "Responsive"]}
        />
      </div>
    </section>
  );
}
