var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { CatController } from './cat.controller.js';
import { CatService } from './cat.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema.js';
let CatModule = class CatModule {
};
CatModule = __decorate([
    Module({
        imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
        controllers: [CatController],
        providers: [
            CatService
        ],
    })
], CatModule);
export { CatModule };
//# sourceMappingURL=cat.module.js.map