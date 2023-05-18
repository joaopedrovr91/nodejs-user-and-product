import { ProductCharacteristicsEntity } from './productCharacteristics.entity';
import { ProductImageEntity } from './productImage.entity';

export class ProductEntity {
  name: string;
  value: number;
  quantityAvailable: number;
  description: string;
  characteristics: ProductCharacteristicsEntity[];
  images: ProductImageEntity[];
  category: string;
  dataCreation: string;
  dataUpdate: string;
  id: string;
  userId: string;
}
