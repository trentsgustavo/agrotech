import { InputType } from '@nestjs/graphql';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateProductInput {
  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  name: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  value: number;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  size: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  brandId: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  productTypeId: number;
}
