import { CreateOrderInput } from './create-order.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { IsNumber, IsNotEmpty, IsBoolean, IsDate } from 'class-validator';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  id: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  total?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  quota?: number;

  @IsBoolean()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  paid?: boolean;

  @IsDate()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  paymentDate?: Date;

  @IsDate()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  deliveryDate?: Date;
}
