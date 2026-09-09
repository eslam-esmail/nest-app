import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class CustomValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
