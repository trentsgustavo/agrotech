import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('addresses')
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;
}
