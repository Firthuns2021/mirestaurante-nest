import { Document } from 'mongoose';
import { Comentario } from "../dto/Comentario";

export interface Restaurante extends Document {

  _id: string;
  nombre: string;
  imgLogo: string;
  descripcion: string;
  rangoMaxReparto: number;
  destacado: boolean;
  activo: boolean;
  localizacion: string;
  categoria: string;
  horario: [
    {
      dia: number;
      apertura: number;
      cierre: number;
    },
  ];
  comentarios: [];
  platos: [
    {
      nombre: string;
      precioBase: number;
      descripcion: string;
      alergenos: string[];
      imgPlato: string;
      extras: [
        {
          nombre: string;
          coste: number;
        },
      ];
      comentarios: Comentario[];
    },
  ];
  dateCreated: Date;
  lastUpdated: Date;
}
