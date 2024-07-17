import { PrismaService } from '../app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: PrismaService);
    getHello(): string;
}
