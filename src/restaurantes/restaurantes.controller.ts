import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RestauranteService } from './services/restaurante.service';
import { RestauranteDto } from './dto/restaurante.dto';

@Controller('api')
export class RestaurantesController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Post('restaurante/register')
  async register(@Body() createRestauranteDTO: RestauranteDto) {
    return this.restauranteService.create(createRestauranteDTO);
  }

  @Get('restaurantes') async getRestaurantes() {
    return this.restauranteService.getRestaurantes();
  }

  @Get('restaurantes/:idRestaurante')
  async getRestaurante(@Param('idRestaurante') idRestaurante: string) {
    return this.restauranteService.getRestaurante(idRestaurante);
  }
}
