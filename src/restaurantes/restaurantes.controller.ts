import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @Get('categoria/:catRestaurante')
  async getRestauranteCat(@Param('catRestaurante') catRestaurante: string) {
    return this.restauranteService.getRestauranteCat(catRestaurante);
  }

  @Get('categorias') async getCategorias() {
    return this.restauranteService.getCategorias();
  }

  @Get('restaurantes/nombre/:nombreRest') async getNombreRestaurante(
    @Param('nombreRest') nombreRest: string,
  ) {
    return await this.restauranteService.getNombreRestaurante(nombreRest);
  }

  @Put('restaurantes/:idRest')
  async updateRestaurante(
    @Body() restDTO: RestauranteDto,
    @Param('idRest') idRest: string,
  ) {
    return await this.restauranteService.updateRestaurante(idRest, restDTO);
  }
}
