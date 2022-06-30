import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Request {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
