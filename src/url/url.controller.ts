// src/url/url.controller.ts

import { Controller, Post, Get, Param, Body, Query } from '@nestjs/common';
import { UrlService } from './url.service';
import { Url } from './url.entity';
import { CreateUrlDto } from './create-url.dto';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  // POST request to shorten a URL with optional expiry
  @Post('shorten')
  @UsePipes(new ValidationPipe({ transform: true }))
  async shortenUrl(
    @Body() createUrlDto: CreateUrlDto,
    @Query('expiresIn') expiresIn?: number, // Accept expiry time as a query parameter
  ): Promise<Url> {
    return this.urlService.shortenUrl(createUrlDto.originalUrl, expiresIn);
  }

  // GET request to retrieve the original URL using a short URL
  @Get(':shortUrl')
  async getOriginalUrl(@Param('shortUrl') shortUrl: string): Promise<Url> {
    return this.urlService.getOriginalUrl(shortUrl);
  }

  // GET request to retrieve analytics for a specific short URL
  @Get(':shortUrl/analytics')
  async getUrlAnalytics(
    @Param('shortUrl') shortUrl: string,
  ): Promise<{ accessCount: number }> {
    return this.urlService.getUrlAnalytics(shortUrl);
  }
}
