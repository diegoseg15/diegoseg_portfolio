import { motion } from "framer-motion";

export function Highlight({ icon, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        flex items-center gap-3 p-4 rounded-md
        bg-slate-100 dark:bg-slate-800
        hover:scale-[1.05] transition
      "
    >
      <div className="text-sky-600">{icon}</div>
      <span>{text}</span>
    </motion.div>
  );
}
