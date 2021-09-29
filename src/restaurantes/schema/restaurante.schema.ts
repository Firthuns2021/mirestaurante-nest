import { Schema } from 'mongoose';

export const RestauranteSchema = new Schema(
  {
    nombre: String,
    imgLogo: String,
    descripcion: String,
    rangoMaxReparto: Number,
    destacado: Boolean,
    activo: Boolean,
    localizacion: String,
    categoria: String,
    horario: [
      {
        dia: Number,
        apertura: Number,
        cierre: Number,
      },
    ],
    comentarios: [
      {
        email: String,
        comentario: String,
        puntuacion: Number,
      },
    ],
    platos: [
      {
        nombre: String,
        precioBase: Number,
        descripcion: String,
        alergenos: [String],
        imgPlato: String,
        extras: [
          {
            nombre: String,
            coste: Number,
          },
        ],
        comentarios: [
          {
            email: String,
            comentarios: String,
            puntuacion: Number,
          },
        ],
      },
    ],
  },
  { timestamps: { createdAt: 'dateCreated', updatedAt: 'lastUpdated' } },
);
