import { CreateAddressInput } from './create-address.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { IsNumber, IsString, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @IsNumber()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  street?: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  number?: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  complement?: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  district?: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  city?: string;

  @IsString()
  @Length(2)
  @IsNotEmpty({ message: 'Field cannot be empty' })
  state: string;
}
