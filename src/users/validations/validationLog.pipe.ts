import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //Apply transform for value
    /*if (!Number.isInteger(value)) {
      throw new HttpException('Not valid number', HttpStatus.FORBIDDEN);
      }*/
    console.log(value);
    return value;
  }
}
