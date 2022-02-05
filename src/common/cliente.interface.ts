import { Direccion } from './direccion.interface';
import { Restaurante } from '../restaurantes/interfaces/restaurante.interface';
import { Plato } from './plato.interface';

export interface Cliente {
  nombre: string;
  apellidos: string;
  dni: string;
  telefono: string;
  email: string;
  direccion: Direccion[];
  platosFav: Plato[];
  restaurantesFav: Restaurante[];
  restaurante: boolean;
}
