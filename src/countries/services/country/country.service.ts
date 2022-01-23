import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../../interfaces/country.interface';

@Injectable()
export class CountryService {
  constructor(@InjectModel('Country') private countryModel: Model<Country>) {}

  async getCountries(): Promise<Country[]> {
    return await this.countryModel.find();
  }

  async getStates(country: string): Promise<Country> {
    return this.countryModel.findOne({ country: country });
  }
}
