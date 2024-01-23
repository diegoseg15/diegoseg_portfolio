import React, { useState } from "react";

export function Xperience() {
  const [open, setOpen] = useState(1000000);
  const openAcordion = (event, id) => {
    event.preventDefault();
    open !== id ? setOpen(id) : setOpen(1000000);
  };

  const xperienceData = [
    {
      año: 2023,
      puesto: "Desarrollo y diseño de ERP Educativo",
      empresa: "Unidad Educativa A Distancia Republica de Argentina",
      descripcion: [
        "Desarrollo en Front-end y Back-end.",
        "Desarrollo de un ERP responsive(PC-Móvil) de varios modulos.",
        "Programación en JavaScript con los frameworks React Js y Tailwind CSS.",
        "Programación de contenidos web con HTML, CSS(Tailwind), Javascript(React) y MongoDB.",
      ],
    },
    {
      año: 2023,
      puesto: "Desarrollo y diseño de CRM",
      empresa: "Importadora Alvarado (IAM)",
      descripcion: [
        "Desarrollo en Front-end y Back-end.",
        "Desarrollo de un CRM responsive(PC-Móvil).",
        "Programación en JavaScript con los frameworks React Js y Tailwind CSS.",
        "Programación de contenidos web con HTML, CSS(Tailwind), Javascript(React) y MongoDB.",
      ],
    },
    {
      año: 2022,
      puesto: "Pasante en el departamento de sistemas",
      empresa: "Importadora Alvarado (IAM)",
      descripcion: [
        "Desarrolo de un webservise en PHP para el traslado de datos entre aplicaciones.",
        "Desarrollo de una aplicación de lectura de tablas en formato TXT del SRI en Java.",
        "Desarrollo de una aplicación de para la lectura de archivos XML en Visual Basic 6.",
      ],
    },
    {
      año: 2022,
      puesto: "Pasante en el departamento de sistemas",
      empresa: "IMPACTEX",
      descripcion: [
        "Evaluación de viabilidad de desarrollos en Front-end and Back-Office.",
        "Desarrollo de un ECommerce.",
        "Programación en JavaScript con el framework React Js y Tailwind CSS.",
        "Programación de contenidos web con HTML, CSS(Tailwind/AntDesign), Javascript(React), MySQL, MongoDB y SQL Server.",
        "Implementación y mantenimiento de soluciones de software.",
      ],
    },
    {
      año: "2021 - 2022",
      puesto: "Asistente de Marketing",
      empresa: "Unidad Educativa A Distancia Republica de Argentina",
      descripcion: [
        "Manejo de gestores de contenido como wordpress.",
        "Creación de sitios web fáciles de usar.",
        "Creación y edición de videos para su utilización en redes sociales y diferentes canales publicitarios digitales.",
        "Identificación de nuevas oportunidades y tendencias en redes sociales y plataformas de contenidos.",
      ],
    },
    {
      año: "2021",
      puesto: "Desarrollo de un Sitio Web de Campaña Publicitaria",
      empresa: "Para Estudiantes de Diseño de la Universidad Tecnica de Ambato",
      descripcion: [
        "Manejo de gestores de contenido como Joomla.",
        "Creación de sitios web fáciles de usar.",
      ],
    },
  ];

  return (
    <>
      <h3 className="lg:col-span-6 md:col-span-4 col-span-3 pb-20 text-4xl font-bold text-center">
        Experiencia
      </h3>
      <ol className="relative border-l  border-gray-400 dark:border-gray-700 mb-40">
        {xperienceData &&
          xperienceData.map((xp, index) => (
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
              <button
                className="text-left"
                onClick={(event) => {
                  openAcordion(event, index);
                }}
              >
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  {xp.año}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {xp.puesto}
                </h3>
                <h4 className="text-lg text-gray-700 dark:text-gray-500">
                  {xp.empresa}
                </h4>
                {open === index?<></>:<p className="text-base hover:font-medium hover:text-primary">Mostrar más información...</p>}
              </button>
              {open === index ? (
                <ul className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400 list-disc list-inside">
                  {xp.descripcion.length && xp.descripcion.map((desc) => (
                    <li>{desc}</li>
                  ))}
                 
                </ul>
              ) : (
                <></>
              )}
            </li>
          ))}
      </ol>
    </>
  );
}
