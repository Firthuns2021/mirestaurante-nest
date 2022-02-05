import { Plato } from './plato.interface';

export interface PlatoPedido {
  plato: Plato;
  extras: { nombre: string; coste: number }[];
  pedidoId: string;
  cantidad: number;
  precioTotal: number;
}
