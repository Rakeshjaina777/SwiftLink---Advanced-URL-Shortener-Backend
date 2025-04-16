import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // change this according to your PostgreSQL settings
      password: 'password', // change this accordingly
      database: 'url_shortener', // name of your database
      entities: [],
      synchronize: true, // This is for development; set to false in production
    }),
    UrlModule, // Create a module for URL operations
  ],
})
export class AppModule {}
