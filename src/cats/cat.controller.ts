import { Controller, Get} from '@nestjs/common';
import { CatService } from './cat.service.js';

@Controller('cat')
export class CatController {
  constructor(private catService:CatService){}

  @Get()
  getHello(): string {
    return this.catService.getHello();
  }

}
