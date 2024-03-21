import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { Ciudad } from './ciudad/entities/ciudad.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "escolar",
    "entities": [Ciudad],
    "synchronize": true,
   }), CiudadModule ,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
