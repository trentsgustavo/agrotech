import { InputType } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Length,
  IsBoolean,
} from 'class-validator';

@InputType()
export class CreateCustomerInput {
  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  name: string;

  @IsString()
  @Length(11)
  @IsNotEmpty({ message: 'Field cannot be empty' })
  phone: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  addressId: number;

  @IsBoolean()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  active?: boolean;
}
