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
  async getRestauranteCat(categoria: string): Promise<Restaurante[]> {
    return this.restauranteModel.find({
      categoria: categoria,
    });
  }

  async getCategorias(): Promise<string[]> {
    return this.restauranteModel.find().distinct('categoria');
  }

  // Búsqueda por nombre. Utilizamos la expresión regular con parámetro
  // para que no distinga entre mayñuscula y minuscula
  async getNombreRestaurante(nombreRest: string): Promise<Restaurante[]> {
    // creamos 1º lugar la expresión regular
    const regex = new RegExp(nombreRest, 'i');

    return this.restauranteModel.find({ nombre: { $regex: regex } });
  }

  // Creo el actualizar restaurante para además de actualizar datos, añadir comentarios
  async updateRestaurante(
    idRestaurante: string,
    restauranteDTO: RestauranteDto,
  ): Promise<Restaurante> {
    return this.restauranteModel.findOneAndUpdate(
      { _id: idRestaurante },
      restauranteDTO,
    );
  }
}
