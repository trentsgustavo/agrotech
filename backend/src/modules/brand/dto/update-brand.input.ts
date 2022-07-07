import { CreateBrandInput } from './create-brand.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateBrandInput extends PartialType(CreateBrandInput) {
  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  name?: string;
}
