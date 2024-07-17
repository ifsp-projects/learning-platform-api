/* eslint-disable prettier/prettier */

import { PrismaClient } from '@prisma/client';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  getHello(): string {
    return 'Hello World!';
  }
  async onModuleInit() {
    await this.$connect();
    return 'teste né papiiiii';
  }
}
