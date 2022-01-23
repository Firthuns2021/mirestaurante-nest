import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './services/country/country.service';

@Controller('api/countries')
export class CountriesController {
  constructor(private countryService: CountryService) {}
  @Get('')
  async getCountries() {
    return await this.countryService.getCountries();
  }
  @Get('/country/:country')
  async getCountry(@Param('country') country: string) {
    return await this.countryService.getStates(country);
  }
}
