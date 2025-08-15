import type { Proyecto } from "../types/Proyecto";

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Portafolio React + TS",
    descripcion: "Despliegue profesional con navegación simbólica, componentes modulares y estilo motivacional.",
    tecnologias: ["React", "TypeScript", "Vite", "GitHub Pages"],
    imagen: "portafolio.png",
    enlace: "https://abnersaavedra.github.io/mi-portafolio2025",
    categoria: "Visualización Profesional",
  },
  {
    id: 2,
    titulo: "Ficha IA Educativa",
    descripcion: "Integración de IA generativa en recursos pedagógicos con enfoque ético y cultural.",
    tecnologias: ["OpenAI API", "React", "Markdown"],
    imagen: "ia-ficha.png",
    enlace: "https://github.com/abnersaavedra/ficha-ia-educativa",
    categoria: "Innovación Formativa",
  },
  // Puedes seguir agregando más proyectos aquí
];
