import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;
}
