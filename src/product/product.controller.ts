import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { ProductRepository } from './product.repository';
import { randomUUID } from 'crypto';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ProductEntity } from './entity/product.entity';

@Controller('produto')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() dataProduct: CreateProductDTO) {
    const product = dataProduct as ProductEntity;

    const productRegistered = this.productRepository.save(product);
    return productRegistered;
  }

  @Get()
  async listAll() {
    return this.productRepository.listAll();
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() dataProduct: UpdateProductDTO) {
    const productChanged = await this.productRepository.update(id, dataProduct);
    return {
      message: 'produto atualizado com sucesso',
      product: productChanged,
    };
  }
  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const productRemoved = await this.productRepository.remove(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: productRemoved,
    };
  }
}
