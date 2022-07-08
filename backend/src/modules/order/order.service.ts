import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(data: CreateOrderInput) {
    const order = this.orderRepository.create(data);
    const orderSaved = await this.orderRepository.save(order);

    if (!orderSaved) {
      throw new InternalServerErrorException('Erro ao criar pedido');
    }

    return orderSaved;
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) throw new NotFoundException('Pedido não encontrado');
    return order;
  }

  async update(id: number, data: UpdateOrderInput) {
    await this.findOne(id);

    return this.orderRepository.save(data);
  }

  async remove(id: number) {
    await this.findOne(id);

    this.orderRepository.save({
      id: id,
      active: false,
    });

    return id;
  }
}
