import { InputType } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  Length,
  IsNumber,
  IsDate,
  IsBoolean,
} from 'class-validator';

@InputType()
export class CreateOrderInput {
  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  total: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  quota: number;

  @IsBoolean()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  paid: boolean;

  @IsDate()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  paymentDate: Date;

  @IsDate()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  deliveryDate: Date;
}
