import { CreateProductInput } from './create-product.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  name?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  value?: number;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  size?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  brandId?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  productTypeId?: number;
}
