import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountriesStates } from '../../interfaces/country.interface';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel('Country')
    private countryModel: Model<CountriesStates>,
  ) {}
  async getCountries(): Promise<CountriesStates[]> {
    return await this.countryModel.find();
  }
  async getStates(country: string): Promise<CountriesStates> {
    return await this.countryModel.findOne({ country: country});
  }
}
