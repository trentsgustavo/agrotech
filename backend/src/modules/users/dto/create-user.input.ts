import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  password: string;

  @IsString()
  @IsOptional()
  active: boolean;
}
