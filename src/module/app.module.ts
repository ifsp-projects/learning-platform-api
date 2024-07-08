/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from '../methods/app.controller';
import { PrismaService } from '../app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService ],
})
export class AppModule {}
