import { Module } from '@nestjs/common';
import { RestaurantesController } from './restaurantes.controller';
import { RestauranteService } from './services/restaurante.service';

import { MongooseModule } from '@nestjs/mongoose';
import { RestauranteSchema } from './schema/restaurante.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Restaurante',
        schema: RestauranteSchema,
      },
    ]),
  ],
  controllers: [RestaurantesController],
  providers: [RestauranteService],
})
export class RestaurantesModule {}
