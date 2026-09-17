import { CatService } from './cat.service.js';
export declare class CatController {
    private catService;
    constructor(catService: CatService);
    getHello(): string;
}
