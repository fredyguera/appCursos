/* Modelo para los cursos */
export interface Curso {
  id: number;
  nombre: string;
  nivel: string;
  descripcion: string;
  imagen: string;
  precio: string;
  contenidos?: string[]; // Opcional, si el curso tiene contenidos específicos
}
/*  CURSOS
    1. html -Estructura de los sitios web con lenguaje de etiquetas
    2. css - Aplica estilos a la estructura de los sitios
    3. javascript - Agrega funcionalidades dinamicas e interactivas al sitio web
 */