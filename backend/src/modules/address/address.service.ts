import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async create(data: CreateAddressInput) {
    const address = this.addressRepository.create(data);
    const addressSaved = await this.addressRepository.save(address);

    if (!addressSaved) {
      throw new InternalServerErrorException('Erro ao criar endereço');
    }

    return addressSaved;
  }

  async findAll() {
    return await this.addressRepository.find();
  }

  async findOne(id: number) {
    const address = await this.addressRepository.findOneBy({ id });
    if (!address) throw new NotFoundException('Endereço não encontrado');
    return address;
  }

  async update(id: number, data: UpdateAddressInput) {
    await this.findOne(id);

    return this.addressRepository.save(data);
  }

  async remove(id: number) {
    await this.findOne(id);

    this.addressRepository.save({
      id: id,
      active: false,
    });

    return id;
  }
}
