import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantesModule } from './restaurantes/restaurantes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ferRoot:AUsFh5UvSKmApSG@cluster0.cyira.mongodb.net/restauranteNestjs?retryWrites=true&w=majority'
    ),
    RestaurantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
