import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantesModule } from './restaurantes/restaurantes.module';

import { CountriesModule } from './countries/countries.module';

// https://cloud.mongodb.com/v2/5fd7a50d368a6c076d72ea0f#clusters
@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb+srv://ferRoot:2ZC6nHhloTLORQvm@cluster0.cyira.mongodb.net/restauranteNestjs?retryWrites=true&w=majority',
      'mongodb+srv://ferRoot:kPaH1cwjSLq6rmBh@cluster0.cyira.mongodb.net/restauranteNestjs',
      // mongodb+srv://ferRoot:<password>@cluster0.cyira.mongodb.net/test
    ),
    RestaurantesModule,
    CountriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
