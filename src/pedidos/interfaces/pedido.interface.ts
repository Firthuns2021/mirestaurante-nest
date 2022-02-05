import { Document } from 'mongoose';
import { Cliente } from '../../common/cliente.interface';
import { Direccion } from '../../common/direccion.interface';
import { Restaurante } from '../../restaurantes/interfaces/restaurante.interface';
import { PlatoPedido } from '../../common/plato-pedido.interface';

export interface Pedido extends Document {
  estado: boolean;
  cliente: Cliente;
  direccionFactura: Direccion;
  direccionEntrega: Direccion;
  restaurante: Restaurante;
  costeTransporte: number;
  precioTotal: number;
  fecha: Date;
  cuponDescuento: string;
  platosPedido: PlatoPedido[];
}
