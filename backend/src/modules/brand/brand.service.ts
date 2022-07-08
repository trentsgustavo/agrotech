import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  async create(data: CreateBrandInput) {
    const brand = this.brandRepository.create(data);
    const brandSaved = await this.brandRepository.save(brand);

    if (!brandSaved) {
      throw new InternalServerErrorException('Erro ao criar marca');
    }

    return brandSaved;
  }

  async findAll() {
    return await this.brandRepository.find();
  }

  async findOne(id: number) {
    const brand = await this.brandRepository.findOneBy({ id });
    if (!brand) throw new NotFoundException('Marca não encontrado');
    return brand;
  }

  async update(id: number, data: UpdateBrandInput) {
    await this.findOne(id);

    return this.brandRepository.save(data);
  }

  async remove(id: number) {
    await this.findOne(id);

    this.brandRepository.save({
      id: id,
      active: false,
    });

    return id;
  }
}
