import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  addressId: number;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn({ default: 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ default: 'now()' })
  updatedAt: Date;
}
