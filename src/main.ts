/* eslint-disable prettier/prettier */
import cors  from 'cors';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { urlencoded, json } from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ limit: '100mb', extended: true }));
  await app.listen(process.env.PORT || 3001);
}
bootstrap();


/// teste né papiiiii