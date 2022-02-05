import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pedido } from './interfaces/pedido.interface';
import { PedidoDto } from './dto/pedido.dto';

@Injectable()
export class PedidosService {
  constructor(@InjectModel('Pedido') private pedidoModel: Model<Pedido>) {}

  async createPedido(pedidoDTO: PedidoDto): Promise<Pedido> {
    const pedidoCreado = new this.pedidoModel(pedidoDTO);
    return await pedidoCreado.save();
  }
}
