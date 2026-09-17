import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class CatService {

  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) { }

  getHello(): string {
    this.catModel.find();
    return 'Hello from cat';
  }

}
