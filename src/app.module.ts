import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, ProductModule],
})
export class AppModule {}
