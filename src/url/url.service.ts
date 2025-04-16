// src/url/url.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './url.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  // Method to shorten a URL with an optional expiry time
  async shortenUrl(originalUrl: string, expiresIn?: number): Promise<Url> {
    const shortUrl = nanoid(8); // Generate a random short URL

    let expiredAt: Date = null;
    if (expiresIn) {
      expiredAt = new Date();
      expiredAt.setSeconds(expiredAt.getSeconds() + expiresIn); // Set expiry time in seconds
    }

    const newUrl = this.urlRepository.create({
      originalUrl,
      shortUrl,
      expiredAt,
    });

    await this.urlRepository.save(newUrl);
    return newUrl;
  }

  // Method to get the original URL by short URL
  async getOriginalUrl(shortUrl: string): Promise<Url> {
    const url = await this.urlRepository.findOne({ where: { shortUrl } });
    if (!url) {
      throw new NotFoundException(`URL with short URL ${shortUrl} not found`);
    }

    // Check if the URL has expired
    if (url.expiredAt && new Date() > url.expiredAt) {
      throw new NotFoundException(`URL with short URL ${shortUrl} has expired`);
    }

    // Increment access count
    url.accessCount++;
    await this.urlRepository.save(url); // Save updated access count

    return url;
  }

  // Method to get analytics for a specific URL
  async getUrlAnalytics(shortUrl: string): Promise<{ accessCount: number }> {
    const url = await this.urlRepository.findOne({ where: { shortUrl } });
    if (!url) {
      throw new NotFoundException(`URL with short URL ${shortUrl} not found`);
    }
    return { accessCount: url.accessCount };
  }
}
