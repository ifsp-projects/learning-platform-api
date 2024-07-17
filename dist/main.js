"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = require("cors");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./module/app.module");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cors_1.default)());
    app.use((0, express_1.json)({ limit: '100mb' }));
    app.use((0, express_1.urlencoded)({ limit: '100mb', extended: true }));
    await app.listen(process.env.PORT || 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map