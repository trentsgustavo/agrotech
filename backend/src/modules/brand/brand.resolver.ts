import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BrandService } from './brand.service';
import { Brand } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';

@Resolver(() => Brand)
export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}

  @Mutation(() => Brand)
  createBrand(@Args('createBrandInput') createBrandInput: CreateBrandInput) {
    return this.brandService.create(createBrandInput);
  }

  @Query(() => [Brand], { name: 'brand' })
  findAll() {
    return this.brandService.findAll();
  }

  @Query(() => Brand, { name: 'brand' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.brandService.findOne(id);
  }

  @Mutation(() => Brand)
  updateBrand(@Args('updateBrandInput') updateBrandInput: UpdateBrandInput) {
    return this.brandService.update(updateBrandInput.id, updateBrandInput);
  }

  @Mutation(() => Brand)
  removeBrand(@Args('id', { type: () => Int }) id: number) {
    return this.brandService.remove(id);
  }
}
