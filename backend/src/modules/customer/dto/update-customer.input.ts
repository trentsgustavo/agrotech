import { CreateCustomerInput } from './create-customer.input';
import { InputType, PartialType } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
  Length,
} from 'class-validator';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  name?: string;

  @IsString()
  @Length(11)
  @IsNotEmpty({ message: 'Field cannot be empty' })
  phone?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  addressId?: number;

  @IsBoolean()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  active?: boolean;
}
