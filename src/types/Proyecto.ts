export interface Proyecto {
  id: number;                     // Identificador único
  titulo: string;                 // Nombre del proyecto
  descripcion: string;           // Breve narrativa motivacional
  tecnologias: string[];         // Tecnologías utilizadas
  imagen: string;                // Nombre del archivo en /assets
  enlace: string;                // URL de despliegue o repositorio
  categoria?: string;            // (Opcional) Clasificación simbólica
}
