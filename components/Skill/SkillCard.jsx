import { SvgIcon } from "../Icons/SkillsIcons";

/* Card reutilizable */
export function SkillCard({ icon, title, description, stack }) {
    return (
        <div className="p-6 rounded-md bg-slate-100 dark:bg-slate-800 space-y-4">

            {/* Título + icono */}
            <div className="flex items-center gap-2">
                <span className="text-sky-600">{icon}</span>
                <h4 className="text-lg font-semibold">{title}</h4>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
                {description}
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                {stack.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                        {item !== "Responsive" ? <SvgIcon name={item} className="w-4 h-4" /> : <Devices className="w-5 h-5" weight="bold" />}
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}