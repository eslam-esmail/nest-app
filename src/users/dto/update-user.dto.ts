import { IsNumber, IsOptional, IsString } from "class-validator";

export class updateUser{

  @IsString()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsNumber()
  @IsOptional()
  age: number;

}
