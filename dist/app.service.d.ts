import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from '@nestjs/common';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<string>;
}
