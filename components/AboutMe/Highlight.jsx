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
        bg-muted/50 dark:bg-muted/30
        border border-border/50
        hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors duration-200
      "
    >
      <div className="text-primary">{icon}</div>
      <span className="text-foreground">{text}</span>
    </motion.div>
  );
}
