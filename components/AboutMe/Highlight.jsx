
export function Highlight({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-md bg-slate-100 dark:bg-slate-800 hover:scale-[1.03] transition">
      <div className="text-sky-600">{icon}</div>
      <span>{text}</span>
    </div>
  );
}