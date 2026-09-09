import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class createUser{

  @IsString()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsEmail()
  email: string;

}
