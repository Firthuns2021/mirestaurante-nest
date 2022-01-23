import { Document } from 'mongoose';

export interface Country extends Document {
  country: string;
  states: string[];
}
