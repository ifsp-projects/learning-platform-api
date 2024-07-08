/* eslint-disable prettier/prettier */


import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: PrismaService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
