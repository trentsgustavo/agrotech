import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(data: CreateProductInput) {
    const product = this.productRepository.create(data);
    const productSaved = await this.productRepository.save(product);

    if (!productSaved) {
      throw new InternalServerErrorException('Erro ao criar produto');
    }

    return productSaved;
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) throw new NotFoundException('Produto não encontrado');
    return product;
  }

  async update(id: number, data: UpdateProductInput) {
    await this.findOne(id);

    return this.productRepository.save(data);
  }

  async remove(id: number) {
    await this.findOne(id);

    this.productRepository.save({
      id: id,
      active: false,
    });

    return id;
  }
}
