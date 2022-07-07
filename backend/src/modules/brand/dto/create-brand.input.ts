import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateBrandInput {
  @IsString()
  @IsNotEmpty({ message: 'Field cannot be empty' })
  name: string;
}
