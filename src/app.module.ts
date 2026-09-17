import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to re-import ConfigModule elsewhere
    }),
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
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
        useFactory: (config: ConfigService) => ({
        uri: config.get<string>("MONGO_URI"),
      }),
    }),
    UserModule,
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("user");
  }
}
