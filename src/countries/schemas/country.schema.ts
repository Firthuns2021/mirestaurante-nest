import { Schema } from 'mongoose';

export const CountrySchema = new Schema({
  country: String,
  states: [String],
});
