// src/url/url.cleanup.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './url.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class UrlCleanupService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  // Cron job to delete expired URLs every hour
  @Cron('0 * * * *') // Runs at the start of every hour
  async cleanupExpiredUrls() {
    const now = new Date();
    await this.urlRepository.delete({ expiredAt: LessThan(now) }); // Deletes URLs that are expired
    console.log('Expired URLs cleaned up:', now);
  }
}
