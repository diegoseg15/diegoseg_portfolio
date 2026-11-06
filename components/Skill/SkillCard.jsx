import { Devices } from "@phosphor-icons/react";
import { SvgIcon } from "../Icons/SkillsIcons";
import { motion } from "framer-motion";

/* Tarjeta reutilizable de área de experiencia */
export function SkillCard({ icon, title, description, stack }) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: prefersReduced ? 0.01 : 0.4,
        ease: "easeOut",
      }}
      className="
        p-7 rounded-xl border border-border bg-card
        transition-colors duration-200 ease-out
        hover:border-primary hover:bg-muted/50 dark:hover:bg-muted/10
      "
    >
      {/* Título + icono */}
      <div className="flex items-center gap-3 mb-1">
        <span className="text-primary">{icon}</span>
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground mb-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        {stack.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: prefersReduced ? 0.01 : 0.3,
              ease: "easeOut",
            }}
            className="
              flex items-center gap-2
              px-3 py-1.5 rounded-md
              bg-muted/50 dark:bg-muted/30
              text-[11px] font-medium uppercase tracking-wider
              text-muted-foreground
              transition-colors duration-200
            "
          >
            {item !== "Responsive" ? (
              <SvgIcon name={item} className="w-4 h-4" />
            ) : (
              <Devices className="w-4 h-4" weight="bold" />
            )}
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
