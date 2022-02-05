import { Body, Controller, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidoDto } from './dto/pedido.dto';

@Controller('api')
export class PedidosController {
  constructor(private readonly pedidoService: PedidosService) {}

  @Post('pedidos/add')
  async addPedido(@Body() pedidoDTO: PedidoDto) {
    return await this.pedidoService.createPedido(pedidoDTO);
  }
}
