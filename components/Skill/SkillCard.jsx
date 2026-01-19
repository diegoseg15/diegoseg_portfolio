import { Devices } from "@phosphor-icons/react";
import { SvgIcon } from "../Icons/SkillsIcons";
import { motion } from "framer-motion";

/* Card reutilizable */
export function SkillCard({ icon, title, description, stack }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
                p-6 rounded-md bg-slate-100 dark:bg-slate-800 space-y-4
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
            "
        >

            {/* Título + icono */}
            <div className="flex items-center gap-2">
                <span className="text-sky-600 transition-transform duration-300 group-hover:rotate-6">{icon}</span>
                <h4 className="text-lg font-semibold">{title}</h4>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
                {description}
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                {stack.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.22 }}
                        className="flex items-center gap-1"
                    >
                        {item !== "Responsive" ? <SvgIcon name={item} className="w-4 h-4" /> : <Devices className="w-5 h-5" weight="bold" />}
                        <span>{item}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}