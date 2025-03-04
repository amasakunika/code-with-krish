import { IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class CreateDispatchDto {
  @IsNumber()
  id: number;

  @IsString()
  vehicle_number: string;

  @IsString()
  city: string;
}
