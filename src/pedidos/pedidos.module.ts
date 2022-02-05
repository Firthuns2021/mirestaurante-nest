import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoSchema } from './schemas/pedido.schema';
import { PedidosController } from './pedidos.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Pedido',
        schema: PedidoSchema,
      },
    ]),
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
