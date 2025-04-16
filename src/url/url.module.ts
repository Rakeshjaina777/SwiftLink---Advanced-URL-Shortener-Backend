// src/url/url.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { Url } from './url.entity';
import { UrlCleanupService } from './url.cleanup.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forFeature([Url]),
    ScheduleModule.forRoot(), // Initialize the schedule module
  ],
  controllers: [UrlController],
  providers: [UrlService, UrlCleanupService],
})
export class UrlModule {}
