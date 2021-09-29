import { Restaurante } from '../interfaces/restaurante.interface';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RestauranteDto } from '../dto/restaurante.dto';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectModel('Restaurante') private restauranteModel: Model<Restaurante>,
  ) {}

  async create(createRestauranteDTO: RestauranteDto): Promise<Restaurante> {
    const createdRestaurante = new this.restauranteModel(createRestauranteDTO);
    return await createdRestaurante.save();
  }

  async getRestaurantes(): Promise<Restaurante[]> {
    return this.restauranteModel.find();
  }

  async getRestaurante(idRestaurante: string): Promise<Restaurante> {
    return this.restauranteModel.findOne({
      _id: idRestaurante,
    });
  }
}
