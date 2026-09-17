var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { createObserveModule } from "@nestjs/observe";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { UserModule } from "./users/user.module.js";
import { LoggerMiddleware } from "./users/logger.middleware.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MongooseModule } from "@nestjs/mongoose";
import { CatModule } from "./cats/cat.module.js";
import { ConfigModule, ConfigService } from "@nestjs/config";
export const { ObserveModule, ObserveInstrument } = createObserveModule();
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(LoggerMiddleware).forRoutes("user");
    }
};
AppModule = __decorate([
    Module({
        imports: [
            ConfigModule.forRoot({
                isGlobal: true,
            }),
            ObserveModule.forRoot({
                appKey: "YOUR_APP_KEY",
                appSecret: "YOUR_APP_SECRET",
                serviceId: "nest-app",
            }),
            TypeOrmModule.forRoot({
                type: "mariadb",
                host: "127.0.0.1",
                port: 3306,
                username: "root",
                password: "password",
                database: "typeorm",
                entities: ["dist/**/*.entity.js"],
                synchronize: true,
            }),
            MongooseModule.forRootAsync({
                inject: [ConfigService],
                useFactory: (config) => ({
                    uri: config.get("MONGO_URI"),
                }),
            }),
            UserModule,
            CatModule,
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map