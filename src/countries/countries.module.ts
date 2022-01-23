import { Module } from '@nestjs/common';
import { CountryService } from './services/country/country.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CountrySchema } from './schemas/country.schema';
import { CountriesController } from './countries.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Country',
        schema: CountrySchema,
        collection: 'CountriesStates',
      },
    ]),
  ],
  controllers: [CountriesController],
  providers: [CountryService],
})
export class CountriesModule {}
