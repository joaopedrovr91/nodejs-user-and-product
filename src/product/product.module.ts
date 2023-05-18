import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';

@Module({
  imports: [UsuarioModule],
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
