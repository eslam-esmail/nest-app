import { Cat } from './schemas/cat.schema.js';
import { Model } from 'mongoose';
export declare class CatService {
    private catModel;
    constructor(catModel: Model<Cat>);
    getHello(): string;
}
