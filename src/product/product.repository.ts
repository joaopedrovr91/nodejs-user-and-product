import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entity/product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  save(dataProduct: ProductEntity) {
    this.products.push(dataProduct);
    return dataProduct;
  }

  listAll() {
    return this.products;
  }

  private sourchForId(id: string) {
    const possibleProduct = this.products.find((product) => product.id === id);

    if (!possibleProduct) {
      throw new Error('Produto não existe');
    }

    return possibleProduct;
  }

  async update(id: string, dataProduct: Partial<ProductEntity>) {
    const dataNotUsable = ['id', 'usuarioId'];
    const product = this.sourchForId(id);
    Object.entries(dataProduct).forEach(([key, value]) => {
      if (dataNotUsable.includes(key)) {
        return;
      }
      product[key] = value;
    });

    return product;
  }

  async remove(id: string) {
    const productRemove = this.sourchForId(id);
    this.products = this.products.filter((product) => product.id !== id);
    return productRemove;
  }
}
