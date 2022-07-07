import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateAddressInput {
  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  street: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  number: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  complement: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  district: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  city: string;

  @IsString()
  @Length(2)
  @IsNotEmpty({ message: 'Field cannot be empty' })
  state: string;
}
