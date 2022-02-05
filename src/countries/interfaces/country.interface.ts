import { Document } from 'mongoose';

export interface CountriesStates extends Document {
  country: string;
  states: string[];
}
