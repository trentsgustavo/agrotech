import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(data: CreateCustomerInput): Promise<Customer> {
    const customer = this.customerRepository.create(data);
    const customerSaved = await this.customerRepository.save(customer);

    if (!customerSaved) {
      throw new InternalServerErrorException('Erro ao criar usuário');
    }

    return customerSaved;
  }

  async findAll() {
    return await this.customerRepository.find({ where: { active: true } });
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOneBy({ id });
    if (!customer) throw new NotFoundException('Cliente não encontrado');
    return customer;
  }

  async update(id: number, data: UpdateCustomerInput) {
    await this.findOne(id);

    return this.customerRepository.save(data);
  }

  async remove(id: number) {
    await this.findOne(id);

    this.customerRepository.save({
      id: id,
      active: false,
    });

    return id;
  }
}
