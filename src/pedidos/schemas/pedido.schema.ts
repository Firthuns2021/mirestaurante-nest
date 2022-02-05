import { Schema } from 'mongoose';

export const PedidoSchema = new Schema({
  estado: Boolean,
  cliente: {
    nombre: String,
    apellidos: String,
    dni: String,
    telefono: String,
    email: String,
    direccion: [
      {
        tipoVia: String,
        calle: String,
        numero: Number,
        ciudad: String,
        provincia: String,
        cp: Number,
        pais: String,
      },
    ],
    platosFav: [
      {
        nombre: String,
      },
    ],
    restaurantesFav: [
      {
        nombre: String,
      },
    ],
    restaurante: Boolean,
  },
  direccionFactura: {
    tipoVia: String,
    calle: String,
    numero: Number,
    ciudad: String,
    provincia: String,
    cp: Number,
    pais: String,
  },
  direccionEntrega: {
    tipoVia: String,
    calle: String,
    numero: Number,
    ciudad: String,
    provincia: String,
    cp: Number,
    pais: String,
  },
  restaurante: {
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
  costeTransporte: Number,
  precioTotal: Number,
  fecha: Date,
  cuponDescuento: String,
  platosPedido: [
    {
      plato: {
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
            comentario: String,
            puntuacion: Number,
          },
        ],
      },
      extras: [
        {
          nombre: String,
          coste: Number,
        },
      ],
      pedidoId: String,
      cantidad: Number,
      precioTotal: Number,
    },
  ],
});
