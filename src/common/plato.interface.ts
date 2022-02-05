import { Comentario } from './comentario.interface';

export interface Plato {
  nombre: string;
  precioBase: number;
  descripcion: string;
  alergenos: string[];
  imgPlato: string;
  extras: { nombre: string; coste: number }[];
  comentarios: Comentario[];
}
