import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantesModule } from './restaurantes/restaurantes.module';


// https://cloud.mongodb.com/v2/5fd7a50d368a6c076d72ea0f#clusters
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ferRoot:AUsFh5UvSKmApSG@cluster0.cyira.mongodb.net/restauranteNestjs?retryWrites=true&w=majority',
    ),
    RestaurantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
