import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => Customer)
  createCustomer(@Args('data') data: CreateCustomerInput) {
    return this.customerService.create(data);
  }

  @Query(() => [Customer], { name: 'customer' })
  findAll() {
    return this.customerService.findAll();
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.findOne(id);
  }

  @Mutation(() => Customer)
  updateCustomer(@Args('data') data: UpdateCustomerInput) {
    return this.customerService.update(data.id, data);
  }

  @Mutation(() => Int)
  removeCustomer(@Args('id') id: number) {
    return this.customerService.remove(id);
  }
}
